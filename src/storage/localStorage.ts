/**
 * Retrieves a value from localStorage for the given key. Throws an error if the key does not exist.
 * @param key The key of the localStorage item to retrieve.
 * @returns The value stored in localStorage for the given key.
 * @throws Error if the key is not found in localStorage.
 */
export const getLocalStorageOrThrow = (key: string): string => {
  const value = localStorage.getItem(key);
  if (value === null) {
    throw new Error(`Required key ${key} was expected to be in local storage.`);
  }
  return value;
};

/**
 * Retrieves a value from localStorage for the given key, or returns an alternative value if the key does not exist.
 * @param key The key of the localStorage item to retrieve.
 * @param alternative The alternative value to return if the key is not found in localStorage.
 * @returns The value stored in localStorage for the given key, or the alternative value if the key is not found.
 */
export const getLocalStorageOrElse = (
  key: string,
  alternative: string,
): string => {
  const value = localStorage.getItem(key);
  const result = value ? value : alternative;
  return result;
};

/**
 * Retrieves a value from localStorage for the given key, parses it using a provided function, and returns the parsed value. Returns an alternative value if the key does not exist or parsing fails.
 * @param key The key of the localStorage item to retrieve.
 * @param alternative The alternative value to return if the key is not found in localStorage or if parsing fails.
 * @param parse The function used to parse the retrieved value.
 * @returns The parsed value stored in localStorage for the given key, or the alternative value if the key is not found or parsing fails.
 */
export const getLocalStorageParsedOrElse = <T>(
  key: string,
  alternative: T,
  parse: (value: string) => T,
): T => {
  const value = localStorage.getItem(key);
  return value !== null ? parse(value) : alternative;
};

/**
 * Removes an item from localStorage for the given key. Throws an error if the key does not exist.
 * @param key The key of the localStorage item to remove.
 * @throws Error if the key is not found in localStorage.
 */
export const removeLocalStorageItemOrThrow = (key: string): void => {
  if (localStorage.getItem(key) === null) {
    throw new Error(`Cannot remove: localStorage key "${key}" does not exist.`);
  }
  localStorage.removeItem(key);
};
