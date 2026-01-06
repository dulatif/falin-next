export type TEnv = "app-url" | "api-url" | "mode" | "authentication";

export const env = (key: TEnv): string => {
  switch (key) {
    case "app-url":
      return process.env.NEXT_PUBLIC_APP_URL || "";
    case "api-url":
      return process.env.NEXT_PUBLIC_API_URL || "";
    case "mode":
      return process.env.NODE_ENV || "";
    case "authentication":
      return process.env.NEXT_PUBLIC_AUTHENTICATION || "";
    default:
      return "";
  }
};
