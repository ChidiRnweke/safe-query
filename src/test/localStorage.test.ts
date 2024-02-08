import { getLocalStorageOrThrow, getLocalStorageOrElse, getLocalStorageParsedOrElse, removeLocalStorageItemOrThrow } from "../storage/localStorage";
import { describe, expect, test } from '@jest/globals';

describe('localStorage utilities', () => {
    const testKey = 'testKey';
    const testValue = 'testValue';

    beforeEach(() => {
        localStorage.clear();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('getLocalStorageOrThrow', () => {
        test('throws if the key does not exist', () => {
            expect(() => {
                getLocalStorageOrThrow(testKey);
            }).toThrow();
        });

        test('returns the value for an existing key', () => {
            localStorage.setItem(testKey, testValue);
            expect(getLocalStorageOrThrow(testKey)).toBe(testValue);
        });
    });

    describe('getLocalStorageOrElse', () => {
        test('returns the value for an existing key', () => {
            localStorage.setItem(testKey, testValue);
            expect(getLocalStorageOrElse(testKey, 'default')).toBe(testValue);
        });

        test('returns alternative for a non-existing key', () => {
            expect(getLocalStorageOrElse('nonExistingKey', 'default')).toBe('default');
        });
    });

    describe('getLocalStorageParsedOrElse', () => {
        test('parses and returns the value for an existing key', () => {
            const obj = { a: 1 };
            localStorage.setItem(testKey, JSON.stringify(obj));
            expect(getLocalStorageParsedOrElse(testKey, {}, JSON.parse)).toEqual(obj);
        });

        test('returns alternative for a non-existing key', () => {
            expect(getLocalStorageParsedOrElse('nonExistingKey', 'default', JSON.parse)).toBe('default');
        });
    });

    describe('removeLocalStorageItemOrThrow', () => {
        test('throws if the key does not exist', () => {
            expect(() => {
                removeLocalStorageItemOrThrow(testKey);
            }).toThrow();
        });

        test('removes the item for an existing key', () => {
            localStorage.setItem(testKey, testValue);
            removeLocalStorageItemOrThrow(testKey);
            expect(localStorage.getItem(testKey)).toBeNull();
        });
    });
});
