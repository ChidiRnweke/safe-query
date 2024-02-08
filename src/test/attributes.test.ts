import { getAttributeOrThrow, getAttributeOrElse, removeAttributeOrThrow, setDataAttribute, getDataAttributeOrThrow, getDataAttributeOrElse } from "../dom/attributes";
import { describe, expect, test } from '@jest/globals';

describe('attributes.ts', () => {
    let testElement!: HTMLElement;

    beforeEach(() => {
        document.body.innerHTML = `<div id="test"></div>`;
        testElement = document.getElementById('test')!;
    });

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('getAttributeOrThrow should throw if attribute does not exist', () => {
        expect(() => {
            getAttributeOrThrow(testElement, 'non-existent');
        }).toThrow('Required attribute "non-existent" was not found.');
    });

    test('getAttributeOrThrow should return the attribute value if it exists', () => {
        testElement.setAttribute('data-test', 'value');
        expect(getAttributeOrThrow(testElement, 'data-test')).toBe('value');
    });

    test('getAttributeOrElse should return the attribute value if it exists', () => {
        testElement.setAttribute('data-test', 'value');
        expect(getAttributeOrElse(testElement, 'data-test', 'default')).toBe('value');
    });

    test('getAttributeOrElse should return the alternative if attribute does not exist', () => {
        expect(getAttributeOrElse(testElement, 'non-existent', 'default')).toBe('default');
    });

    test('removeAttributeOrThrow should throw if attribute does not exist', () => {
        expect(() => {
            removeAttributeOrThrow(testElement, 'non-existent');
        }).toThrow('Attribute "non-existent" not found and cannot be removed.');
    });

    test('removeAttributeOrThrow should remove the attribute if it exists', () => {
        testElement.setAttribute('removable', 'yes');
        removeAttributeOrThrow(testElement, 'removable');
        expect(testElement.hasAttribute('removable')).toBe(false);
    });

    test('setDataAttribute should set the data attribute correctly', () => {
        setDataAttribute(testElement, 'test', 'dataValue');
        expect(testElement.getAttribute('data-test')).toBe('dataValue');
    });

    test('getDataAttributeOrThrow should throw if data attribute does not exist', () => {
        expect(() => {
            getDataAttributeOrThrow(testElement, 'missing');
        }).toThrow('Required data attribute "data-missing" was not found.');
    });

    test('getDataAttributeOrThrow should return the data attribute value if it exists', () => {
        testElement.setAttribute('data-present', 'here');
        expect(getDataAttributeOrThrow(testElement, 'present')).toBe('here');
    });

    test('getDataAttributeOrElse should return the data attribute value if it exists', () => {
        testElement.setAttribute('data-present', 'here');
        expect(getDataAttributeOrElse(testElement, 'present', 'default')).toBe('here');
    });

    test('getDataAttributeOrElse should return the alternative if data attribute does not exist', () => {
        expect(getDataAttributeOrElse(testElement, 'missing', 'default')).toBe('default');
    });
});
