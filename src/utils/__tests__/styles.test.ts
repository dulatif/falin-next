import { describe, expect, it } from "vitest";
import { appendStyle, combineClasses } from "../styles";

describe("appendStyle", () => {
  it("should convert single style object to array", () => {
    const style = { color: "red", fontSize: 16 };
    const result = appendStyle(style);

    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual([style]);
  });

  it("should return array as-is when style is already an array", () => {
    const styles = [{ color: "red" }, { fontSize: 16 }];
    const result = appendStyle(styles);

    expect(result).toEqual(styles);
  });

  it("should handle empty object", () => {
    const style = {};
    const result = appendStyle(style);

    expect(result).toEqual([{}]);
  });

  it("should handle complex MUI SxProps", () => {
    const style = {
      "&:hover": { backgroundColor: "primary.main" },
      padding: 2,
    };
    const result = appendStyle(style);

    expect(result).toEqual([style]);
  });
});

describe("combineClasses", () => {
  it("should combine multiple class names", () => {
    const classes = ["btn", "btn-primary", "btn-lg"];
    const result = combineClasses(classes);

    expect(result).toBe("btn btn-primary btn-lg");
  });

  it("should handle boolean values", () => {
    const isActive = true;
    const isDisabled = false;
    const classes = ["btn", isActive && "active", isDisabled && "disabled"];
    const result = combineClasses(classes);

    expect(result).toBe("btn active false");
  });

  it("should handle undefined values", () => {
    const classes = ["btn", undefined, "primary"];
    const result = combineClasses(classes);

    expect(result).toBe("btn  primary");
  });

  it("should handle empty array", () => {
    const classes: string[] = [];
    const result = combineClasses(classes);

    expect(result).toBe("");
  });

  it("should handle mixed types", () => {
    const isActive = true;
    const isDisabled = false;
    const classes = [
      "btn",
      isActive && "btn-active",
      isDisabled && "btn-disabled",
      "btn-default",
    ];
    const result = combineClasses(classes);

    expect(result).toContain("btn");
    expect(result).toContain("btn-active");
    expect(result).toContain("btn-default");
  });
});
