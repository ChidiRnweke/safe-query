export type QuerySource = Document | ShadowRoot | HTMLElement
export type DOMSource = Document | ShadowRoot

/** 
 * Searches for an element within the given source using the provided selector. Throws an error if the element is not found.
 * @param source The document, shadow root, or HTMLElement within which to search for the element.
 * @param selector The CSS selector used to find the element.
 * @returns The found element.
 * @throws Error if the element is not found.
 */
export const getElementOrThrow = <T extends Element>(source: QuerySource, selector: string): T => {
    const element = source.querySelector<T>(selector);
    if (!element) {
        const querySource = source instanceof Document ? "light DOM" : "Shadow Root"
        throw new Error(`Required element with selector "${selector}" was not found in ${querySource}.`);
    }
    return element;
}

/** 
 * Attempts to find an element within the given source using a selector; returns the element if found, otherwise returns an alternative element.
 * @param source The document, shadow root, or HTMLElement within which to search.
 * @param selector The CSS selector of the element to find.
 * @param alternative The alternative element to return if the primary element is not found.
 * @returns The found element or the alternative.
 */
export const getElementOrElse = <T extends Element>(source: QuerySource, selector: string, alternative: T): T => {
    const element = source.querySelector<T>(selector);
    const result = element ? element : alternative
    return result;
}

/** 
 * Finds all elements within the given source matching the specified selector. Throws an error if no elements are found.
 * @param source The document, shadow root, or HTMLElement within which to search.
 * @param selector The CSS selector of the elements to find.
 * @returns A NodeListOf found elements.
 * @throws Error if no elements are found.
 */
export const querySelectorAllOrThrow = <T extends Element>(source: QuerySource, selector: string): NodeListOf<T> => {
    const elements = source.querySelectorAll<T>(selector);
    if (elements.length === 0) {
        const querySource = source instanceof Document ? "light DOM" : "Shadow Root";
        throw new Error(`Required elements with selector "${selector}" were not found in ${querySource}.`);
    }
    return elements;
};

/** 
 * Retrieves an element by its ID from the given source. Throws an error if the element is not found.
 * @param source The document or shadow root within which to search.
 * @param id The ID of the element to find.
 * @returns The found HTMLElement.
 * @throws Error if the element is not found.
 */
export const getElementByIdOrThrow = <T extends HTMLElement>(source: DOMSource, id: string): T => {
    const element = source.getElementById(id);
    if (!element) {
        const querySource = source instanceof Document ? "light DOM" : "Shadow Root"
        throw new Error(`Element with ID "${id}" not found in was not found in ${querySource}`);
    }
    return element as T;
};

/** 
 * Attempts to find an element by its ID within the given source; returns the element if found, otherwise returns an alternative element.
 * @param source The document or shadow root within which to search.
 * @param id The ID of the element to find.
 * @param alternative The alternative HTMLElement to return if the primary element is not found.
 * @returns The found element or the alternative.
 */
export const getElementByIdOrElse = <T extends HTMLElement>(source: DOMSource, id: string, alternative: T): T => {
    const element = source.getElementById(id);
    const res = element ? element : alternative
    return res as T
}

/** 
 * Finds all elements with the specified class name within the given source. Throws an error if no elements are found.
 * @param source The document or HTMLElement within which to search.
 * @param className The class name of the elements to find.
 * @returns An HTMLCollectionOf found elements.
 * @throws Error if no elements are found.
 */
export const getElementsByClassNameOrThrow = <T extends Element>(source: Document | Element, className: string): HTMLCollectionOf<T> => {
    const elements = source.getElementsByClassName(className) as HTMLCollectionOf<T>;
    if (elements.length === 0) {
        const querySource = source instanceof Document ? "Document" : elements
        throw new Error(`Elements with class name "${className}" not found in ${querySource}.`);
    }
    return elements;
};
