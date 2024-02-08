export const getAttributeOrThrow = (source: Element, attributeName: string): string => {
    const attribute = source.getAttribute(attributeName);
    if (!attribute) {
        throw new Error(`Required attribute "${attributeName}" was not found.`);
    }
    return attribute;
}

export const getAttributeOrElse = (source: Element, attributeName: string, alternative: string): string => {
    const attribute = source.getAttribute(attributeName);
    const result = attribute ? attribute : alternative
    return result
}

export const removeAttributeOrThrow = (source: Element, attributeName: string): void => {
    if (!source.hasAttribute(attributeName)) {
        throw new Error(`Attribute "${attributeName}" not found and cannot be removed.`);
    }
    source.removeAttribute(attributeName);
};

export const setDataAttribute = (source: Element, dataAttributeName: string, value: string): void => {
    const attributeName = `data-${dataAttributeName}`;
    source.setAttribute(attributeName, value);
};

export const getDataAttributeOrThrow = (source: Element, dataAttributeName: string): string => {
    const attributeName = `data-${dataAttributeName}`;
    const attribute = source.getAttribute(attributeName);
    if (attribute === null) {
        throw new Error(`Required data attribute "${attributeName}" was not found.`);
    }
    return attribute;
};

export const getDataAttributeOrElse = (source: Element, dataAttributeName: string, alternative: string): string => {
    const attributeName = `data-${dataAttributeName}`;
    const attribute = source.getAttribute(attributeName);
    return attribute !== null ? attribute : alternative;
};