export type QuerySource = Document | ShadowRoot | HTMLElement
export type DOMSource = Document | ShadowRoot

export const getElementOrThrow = <T extends Element>(source: QuerySource, selector: string): T => {
    const element = source.querySelector<T>(selector);
    if (!element) {
        const querySource = source instanceof Document ? "light DOM" : "Shadow Root"
        throw new Error(`Required element with selector "${selector}" was not found in ${querySource}.`);
    }
    return element;
}

export const getElementOrElse = <T extends Element>(source: QuerySource, selector: string, alternative: T): T => {
    const element = source.querySelector<T>(selector);
    const result = element ? element : alternative
    return result;
}

export const querySelectorAllOrThrow = <T extends Element>(source: QuerySource, selector: string): NodeListOf<T> => {
    const elements = source.querySelectorAll<T>(selector);
    if (elements.length === 0) {
        const querySource = source instanceof Document ? "light DOM" : "Shadow Root";
        throw new Error(`Required elements with selector "${selector}" were not found in ${querySource}.`);
    }
    return elements;
};

export const getElementByIdOrThrow = <T extends HTMLElement>(source: DOMSource, id: string): T => {
    const element = source.getElementById(id);
    if (!element) {
        const querySource = source instanceof Document ? "light DOM" : "Shadow Root"
        throw new Error(`Element with ID "${id}" not found in was not found in ${querySource}`);
    }
    return element as T;
};

export const getElementByIdOrElse = <T extends HTMLElement>(source: DOMSource, id: string, alternative: T): T => {
    const element = source.getElementById(id);
    const res = element ? element : alternative
    return res as T
}

export const getElementsByClassNameOrThrow = <T extends Element>(source: Document | Element, className: string): HTMLCollectionOf<T> => {
    const elements = source.getElementsByClassName(className) as HTMLCollectionOf<T>;
    if (elements.length === 0) {
        const querySource = source instanceof Document ? "Document" : elements
        throw new Error(`Elements with class name "${className}" not found in ${querySource}.`);
    }
    return elements;
};
