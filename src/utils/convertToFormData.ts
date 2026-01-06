export const convertToFormData = (
  payload: object,
  keys: string[],
): FormData => {
  const fd = new FormData();
  const nestedKeysIncludesFiles: string[] = [];
  const fileKeys: string[] = ["file"];
  const fileKeyObjects: { [key: string]: string[] } = {};

  // check, if there's an object value on one of property
  for (const key of keys) {
    if (key.includes(".")) continue;
    fileKeys.push(key);
  }
  for (const key of keys) {
    if (key.includes(".")) {
      const [key1, fileKeys] = key.split(".");
      if (fileKeyObjects[key1] !== undefined) {
        fileKeyObjects[key1] = [...fileKeyObjects[key1], fileKeys];
        continue;
      }
      fileKeyObjects[key1] = [fileKeys];
      if (!nestedKeysIncludesFiles.includes(key1))
        nestedKeysIncludesFiles.push(key1);
    } else {
      fileKeyObjects[key] = [];
    }
  }

  // ------- main process ------
  for (const key of Object.keys(payload)) {
    // @ts-expect-error: value can be undefined or null
    const value = payload[key];
    if (value === undefined || value === null) continue; // Exclude undefined and null values
    // Include false values
    if (value === false) {
      fd.append(key, value.toString());
      continue;
    }

    if (nestedKeysIncludesFiles.length === 0) {
      // ------- one level -------
      if (typeof value === "object" && !fileKeys.includes(key)) {
        fd.append(key, JSON.stringify(value));
      } else {
        fd.append(key, value);
      }
    } else {
      // ------- two level -------
      if (nestedKeysIncludesFiles.includes(key)) {
        for (const keyLvl2 of Object.keys(value)) {
          // @ts-expect-error: value can be undefined or null
          const valueLvl2 = payload[key][keyLvl2];
          if (
            typeof valueLvl2 === "object" &&
            !fileKeyObjects[key].includes(keyLvl2)
          ) {
            fd.append(`${key}[${keyLvl2}]`, JSON.stringify(valueLvl2));
          } else {
            fd.append(`${key}[${keyLvl2}]`, valueLvl2);
          }
        }
      } else {
        fd.append(
          key,
          typeof value === "string" ? value : JSON.stringify(value),
        );
      }
    }
  }

  return fd;
};
