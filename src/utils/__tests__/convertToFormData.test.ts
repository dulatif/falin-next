import { describe, expect, it } from "vitest";
import { convertToFormData } from "../convertToFormData";

// # entity
interface SimplePayload {
  name: string;
  email: string;
  age: number;
}

interface FilePayload {
  title: string;
  file: File;
  description: string;
}

interface NestedPayload {
  name: string;
  profile: {
    bio: string;
    avatar: File;
  };
}

// # logic
describe("convertToFormData", () => {
  it("should convert simple object to FormData", () => {
    const payload: SimplePayload = {
      name: "John Doe",
      email: "john@example.com",
      age: 30,
    };

    const formData = convertToFormData(payload, []);

    expect(formData.get("name")).toBe("John Doe");
    expect(formData.get("email")).toBe("john@example.com");
    expect(formData.get("age")).toBe("30");
  });

  it("should handle File objects correctly", () => {
    const file = new File(["content"], "test.txt", { type: "text/plain" });
    const payload: FilePayload = {
      title: "Test Upload",
      file,
      description: "A test file",
    };

    const formData = convertToFormData(payload, ["file"]);

    expect(formData.get("title")).toBe("Test Upload");
    expect(formData.get("file")).toBeInstanceOf(File);
    expect((formData.get("file") as File).name).toBe("test.txt");
    expect(formData.get("description")).toBe("A test file");
  });

  it("should exclude undefined and null values", () => {
    const payload = {
      name: "John",
      email: undefined,
      phone: null,
      age: 25,
    };

    const formData = convertToFormData(payload, []);

    expect(formData.get("name")).toBe("John");
    expect(formData.get("email")).toBeNull();
    expect(formData.get("phone")).toBeNull();
    expect(formData.get("age")).toBe("25");
  });

  it("should include false values", () => {
    const payload = {
      name: "Test",
      isActive: false,
      isVerified: true,
    };

    const formData = convertToFormData(payload, []);

    expect(formData.get("name")).toBe("Test");
    expect(formData.get("isActive")).toBe("false");
    expect(formData.get("isVerified")).toBe("true");
  });

  it("should stringify non-file objects", () => {
    const payload = {
      name: "Test",
      metadata: {
        tags: ["tag1", "tag2"],
        count: 5,
      },
    };

    const formData = convertToFormData(payload, []);

    expect(formData.get("name")).toBe("Test");
    expect(formData.get("metadata")).toBe(JSON.stringify(payload.metadata));
  });

  it("should handle nested objects with file keys", () => {
    const avatarFile = new File(["avatar"], "avatar.jpg", {
      type: "image/jpeg",
    });
    const payload: NestedPayload = {
      name: "John Doe",
      profile: {
        bio: "Software Developer",
        avatar: avatarFile,
      },
    };

    const formData = convertToFormData(payload, ["profile.avatar"]);

    expect(formData.get("name")).toBe("John Doe");
    expect(formData.get("profile[bio]")).toBe("Software Developer");
    expect(formData.get("profile[avatar]")).toBeInstanceOf(File);
    expect((formData.get("profile[avatar]") as File).name).toBe("avatar.jpg");
  });

  it("should stringify nested non-file objects", () => {
    const payload = {
      name: "Test",
      profile: {
        settings: {
          theme: "dark",
          notifications: true,
        },
        bio: "Test bio",
      },
    };

    const formData = convertToFormData(payload, ["profile.avatar"]);

    expect(formData.get("name")).toBe("Test");
    expect(formData.get("profile[settings]")).toBe(
      JSON.stringify(payload.profile.settings),
    );
    expect(formData.get("profile[bio]")).toBe("Test bio");
  });

  it("should handle multiple file keys at root level", () => {
    const file1 = new File(["content1"], "file1.txt", { type: "text/plain" });
    const file2 = new File(["content2"], "file2.txt", { type: "text/plain" });
    const payload = {
      name: "Multi Upload",
      document: file1,
      thumbnail: file2,
    };

    const formData = convertToFormData(payload, ["document", "thumbnail"]);

    expect(formData.get("name")).toBe("Multi Upload");
    expect(formData.get("document")).toBeInstanceOf(File);
    expect(formData.get("thumbnail")).toBeInstanceOf(File);
  });

  it("should handle empty object", () => {
    const payload = {};
    const formData = convertToFormData(payload, []);

    // FormData should be empty (no entries)
    expect(Array.from(formData.entries()).length).toBe(0);
  });

  it("should handle array values by stringifying them", () => {
    const payload = {
      tags: ["tag1", "tag2", "tag3"],
      numbers: [1, 2, 3],
    };

    const formData = convertToFormData(payload, []);

    expect(formData.get("tags")).toBe(JSON.stringify(payload.tags));
    expect(formData.get("numbers")).toBe(JSON.stringify(payload.numbers));
  });
});
