import { AxiosRequestConfig } from "axios";
import api from "@/api";
import { convertToFormData } from "@/utils/convertToFormData";

/**
 * Class decorator to define the base path for the service.
 * @param path The base path (e.g., '/banner')
 */
export function ApiService(path: string) {
  return function (target: any) {
    // Store the path on the constructor
    (target as any)._basePath = path;
  };
}

/**
 * Helper to get the full path from the target class and method path.
 * For static methods, 'target' is the class constructor itself.
 * For instance methods, 'target' would be the instance, so we check constructor.
 */
function getFullPath(target: any, path: string): string {
  // For static methods, target IS the class constructor
  // For instance methods, we need target.constructor
  // Check for override (absolute path)
  if (path.startsWith("~")) {
    return path.substring(1);
  }

  const basePath = target._basePath || target.constructor?._basePath || "";
  // Ensure we don't have double slashes if both have/don't have them
  const cleanBase = basePath.replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : path ? `/${path}` : "";
  return `${cleanBase}${cleanPath}`;
}

/**
 * Helper to replace path parameters (e.g., :id, :shopId) with values from the data object.
 * Supports Plain Object, FormData, and primitive ID (for :id).
 */
function replacePathParams(path: string, data: any): string {
  if (data === undefined || data === null) return path;

  // Handle primitive case (assumes param is :id)
  if (
    (typeof data === "string" || typeof data === "number") &&
    path.includes(":id")
  ) {
    return path.replace(":id", String(data));
  }

  return path.replace(/:([a-zA-Z0-9_]+)/g, (match, key) => {
    // Handle FormData
    if (data instanceof FormData) {
      const val = data.get(key);
      return val !== null ? String(val) : match;
    }
    // Handle Plain Object
    return data[key] !== undefined ? String(data[key]) : match;
  });
}

/**
 * GET Decorator
 * Assumes the first argument is 'params' (query parameters).
 * Replaces dynamic path parameters like :id with matching fields from params or separate args?
 * For simplicity in this project:
 * - If path has :id, assumes the FIRST argument is the ID.
 * - If path has no params, assumes FIRST argument is params object.
 */
export function Get(path: string = "") {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    descriptor.value = async function (...args: any[]) {
      let url = getFullPath(target, path);
      const config: AxiosRequestConfig = {};

      // Simple handling for :id parameter in path
      if (url.includes(":id")) {
        // Assume first arg is the ID
        const id = args[0];
        url = url.replace(":id", String(id));
        // If there's a second arg, it might be query params
        if (args.length > 1) {
          config.params = args[1];
        }
      } else {
        // Assume first arg is query params
        config.params = args[0];
      }

      return await api.get(url, config);
    };
    return descriptor;
  };
}

/**
 * POST Decorator
 * Assumes first argument is the body.
 */
export function Post(path: string = "") {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    descriptor.value = async function (...args: any[]) {
      let url = getFullPath(target, path);
      const body = args[0];
      const config = args[1] || {};

      url = replacePathParams(url, body);

      return await api.post(url, body, config);
    };
    return descriptor;
  };
}

/**
 * PUT Decorator
 * Assumes first argument is body, and if body has 'id', handles it.
 * OR:
 * path = '/:id', first arg = object with id.
 */
export function Put(path: string = "") {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    descriptor.value = async function (...args: any[]) {
      let url = getFullPath(target, path);
      const data = args[0] || {};

      url = replacePathParams(url, data);

      return await api.put(url, data);
    };
    return descriptor;
  };
}

/**
 * DELETE Decorator
 * Assumes first arg is ID.
 */
export function Delete(path: string = "") {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    descriptor.value = async function (...args: any[]) {
      let url = getFullPath(target, path);
      if (url.includes(":id")) {
        url = url.replace(":id", String(args[0]));
      }
      return await api.delete(url);
    };
    return descriptor;
  };
}

/**
 * PATCH Decorator
 * Assumes first argument is body/data.
 */
export function Patch(path: string = "") {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    descriptor.value = async function (...args: any[]) {
      let url = getFullPath(target, path);
      const data = args[0] || {};

      url = replacePathParams(url, data);

      return await api.patch(url, data);
    };
    return descriptor;
  };
}

/**
 * Decorator to convert the first argument to FormData.
 * @param parsedKeys Optional list of keys to treat as files/special.
 */
export function Multipart(parsedKeys: string[] = []) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const body = args[0];

      // Handle the 'onProgress' callback separation if present in body
      const { onProgress, ...data } = body || {};

      const formData = convertToFormData(data, parsedKeys);

      // We need to inject the FormData back into the flow.
      // If this method is also decorated with @Post, we need @Multipart to run BEFORE @Post?
      // Decorators run usually bottom-up (composition).
      // So:
      // @Post('/upload')
      // @Multipart(['image'])
      // method(...)
      //
      // Multipart wraps first. It transforms args[0] to formData.
      // Then Post takes args[0] (now formData) and sends it.

      // We also need to handle the config for onProgress.
      // This is tricky with pure replacement decorators.

      // Strategy: Add a metadata flag or "config" object to the args?

      // Let's return the formData as the result of the method call if it was NOT decorated with HTTP verb yet?
      // OR explicitly do the axios call inside @Post handling FormData specially?

      // Simplest: This decorator just TRANSFORMS arguments.
      args[0] = formData;
      // We might need to pass the config map as a second arg for the HTTP decorator to pick up?

      if (onProgress) {
        const config = {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (progressEvent: any) => {
            if (progressEvent.total) {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total,
              );
              onProgress(percentCompleted);
            }
          },
        };
        // Push config to next argument slot?
        // Standard @Post implementation above doesn't look at args[1] for config properly yet.
        // Let's update @Post to check for config.
        args[1] = config;
      } else {
        args[1] = {
          headers: { "Content-Type": "multipart/form-data" },
          ...args[1], // preserve existing?
        };
      }

      // If there IS an original method body (not just empty), run it?
      // But typically we want to pass to @Post.
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
}
