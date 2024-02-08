export const getLocalStorageOrThrow = (key: string): string => {
    const value = localStorage.getItem(key);
    if (value === null) {
        throw new Error(`Required key ${key} was expected to be in local storage.`);
    }
    return value
}

export const getLocalStorageOrElse = (key: string, alternative: string): string => {
    const value = localStorage.getItem(key);
    const result = value ? value : alternative
    return result
}

export const getLocalStorageParsedOrElse = <T>(key: string, alternative: T, parse: (value: string) => T): T => {
    const value = localStorage.getItem(key);
    return value !== null ? parse(value) : alternative;
}

export const removeLocalStorageItemOrThrow = (key: string): void => {
    if (localStorage.getItem(key) === null) {
        throw new Error(`Cannot remove: localStorage key "${key}" does not exist.`);
    }
    localStorage.removeItem(key);
}