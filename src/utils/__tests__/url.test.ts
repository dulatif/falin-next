import { describe, expect, it } from "vitest";
import { API_URL, APP_URL } from "../url";

describe("url constants", () => {
  it("should export APP_URL", () => {
    expect(APP_URL).toBeDefined();
    expect(typeof APP_URL).toBe("string");
  });

  it("should export API_URL", () => {
    expect(API_URL).toBeDefined();
    expect(typeof API_URL).toBe("string");
  });
});
