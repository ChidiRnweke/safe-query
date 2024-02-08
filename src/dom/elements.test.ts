import { getElementOrThrow, getElementOrElse, querySelectorAllOrThrow, getElementByIdOrThrow, getElementByIdOrElse, getElementsByClassNameOrThrow } from "./elements";

describe('DOM utilities', () => {
    afterEach(() => {
        document.body.innerHTML = '';
    });
    describe('getElementOrThrow', () => {
        test('should return the element when found', () => {
            document.body.innerHTML = `<div id="test"></div>`;
            const element = getElementOrThrow<HTMLDivElement>(document, '#test');
            expect(element).not.toBeNull();
            expect(element.id).toBe('test');
        });

        test('throws an error when the element is not found', () => {
            expect(() => getElementOrThrow(document, '#nonexistent')).toThrow();
        });
    });

    describe('getElementOrElse', () => {
        test('should return the element when found', () => {
            document.body.innerHTML = `<div id="optional"></div>`;
            const alternative = document.createElement('div');
            const element = getElementOrElse<HTMLDivElement>(document, '#optional', alternative);
            expect(element.id).toBe('optional');
        });

        test('returns the alternative when the element is not found', () => {
            const alternative = document.createElement('div');
            alternative.id = 'alternative';
            const element = getElementOrElse<HTMLDivElement>(document, '#nonexistent', alternative);
            expect(element).toBe(alternative);
        });
    });

    describe('querySelectorAllOrThrow', () => {
        test('should return all matching elements', () => {
            document.body.innerHTML = `<div class="match"></div><div class="match"></div>`;
            const elements = querySelectorAllOrThrow<HTMLDivElement>(document, '.match');
            expect(elements.length).toBe(2);
        });

        test('throws an error when no elements match', () => {
            expect(() => querySelectorAllOrThrow(document, '.no-match')).toThrow();
        });
    });

    describe('getElementByIdOrThrow', () => {
        test('should return the element for a given ID', () => {
            document.body.innerHTML = `<div id="unique"></div>`;
            const element = getElementByIdOrThrow<HTMLDivElement>(document, 'unique');
            expect(element).not.toBeNull();
            expect(element.id).toBe('unique');
        });

        test('throws an error if the element with the given ID does not exist', () => {
            expect(() => getElementByIdOrThrow(document, 'missing')).toThrow();
        });
    });

    describe('getElementByIdOrElse', () => {
        test('should return the element if it exists', () => {
            document.body.innerHTML = `<div id="existent"></div>`;
            const alternative = document.createElement('div');
            const element = getElementByIdOrElse<HTMLDivElement>(document, 'existent', alternative);
            expect(element.id).toBe('existent');
        });

        test('should return the alternative if the element does not exist', () => {
            const alternative = document.createElement('div');
            alternative.id = 'alternative';
            const element = getElementByIdOrElse<HTMLDivElement>(document, 'nonexistent', alternative);
            expect(element).toBe(alternative);
        });
    });

    describe('getElementsByClassNameOrThrow', () => {
        test('should return elements for a given class name', () => {
            document.body.innerHTML = `<div class="match"></div><div class="match"></div>`;
            const elements = getElementsByClassNameOrThrow<HTMLDivElement>(document, 'match');
            expect(elements.length).toBe(2);
        });

        test('throws an error if no elements with the given class name exist', () => {
            expect(() => getElementsByClassNameOrThrow(document, 'notfound')).toThrow();
        });
    });
});
