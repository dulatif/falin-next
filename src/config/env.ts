export type TEnv = "app-url" | "api-url" | "mode";

export const env = (key: TEnv): string => {
  switch (key) {
    case "app-url":
      return process.env.NEXT_PUBLIC_APP_URL || "";
    case "api-url":
      return process.env.NEXT_PUBLIC_API_URL || "";
    case "mode":
      return process.env.NODE_ENV || "";
    default:
      return "";
  }
};
