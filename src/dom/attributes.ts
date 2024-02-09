/**
 * Retrieves the value of a specified attribute from an element, throwing an error if the attribute does not exist.
 * @param source The Element from which to retrieve the attribute.
 * @param attributeName The name of the attribute to retrieve.
 * @returns The value of the attribute.
 * @throws Error if the attribute is not found.
 */
export const getAttributeOrThrow = (
  source: Element,
  attributeName: string,
): string => {
  const attribute = source.getAttribute(attributeName);
  if (!attribute) {
    throw new Error(`Required attribute "${attributeName}" was not found.`);
  }
  return attribute;
};

/**
 * Retrieves the value of a specified attribute from an element, or returns an alternative value if the attribute does not exist.
 * @param source The Element from which to retrieve the attribute.
 * @param attributeName The name of the attribute to retrieve.
 * @param alternative The alternative value to return if the attribute does not exist.
 * @returns The value of the attribute or the alternative value.
 */
export const getAttributeOrElse = (
  source: Element,
  attributeName: string,
  alternative: string,
): string => {
  const attribute = source.getAttribute(attributeName);
  const result = attribute ? attribute : alternative;
  return result;
};

/**
 * Removes a specified attribute from an element, throwing an error if the attribute does not exist.
 * @param source The Element from which to remove the attribute.
 * @param attributeName The name of the attribute to remove.
 * @throws Error if the attribute is not found on the element.
 */
export const removeAttributeOrThrow = (
  source: Element,
  attributeName: string,
): void => {
  if (!source.hasAttribute(attributeName)) {
    throw new Error(
      `Attribute "${attributeName}" not found and cannot be removed.`,
    );
  }
  source.removeAttribute(attributeName);
};

/**
 * Sets a data attribute on an element with the specified value.
 * @param source The Element on which to set the data attribute.
 * @param dataAttributeName The name of the data attribute to set (without the 'data-' prefix).
 * @param value The value to set for the data attribute.
 */
export const setDataAttribute = (
  source: Element,
  dataAttributeName: string,
  value: string,
): void => {
  const attributeName = `data-${dataAttributeName}`;
  source.setAttribute(attributeName, value);
};

/**
 * Retrieves the value of a specified data attribute from an element, throwing an error if the data attribute does not exist.
 * @param source The Element from which to retrieve the data attribute.
 * @param dataAttributeName The name of the data attribute to retrieve (without the 'data-' prefix).
 * @returns The value of the data attribute.
 * @throws Error if the data attribute is not found.
 */
export const getDataAttributeOrThrow = (
  source: Element,
  dataAttributeName: string,
): string => {
  const attributeName = `data-${dataAttributeName}`;
  const attribute = source.getAttribute(attributeName);
  if (attribute === null) {
    throw new Error(
      `Required data attribute "${attributeName}" was not found.`,
    );
  }
  return attribute;
};

/**
 * Retrieves the value of a specified data attribute from an element, or returns an alternative value if the data attribute does not exist.
 * @param source The Element from which to retrieve the data attribute.
 * @param dataAttributeName The name of the data attribute to retrieve (without the 'data-' prefix).
 * @param alternative The alternative value to return if the data attribute does not exist.
 * @returns The value of the data attribute or the alternative value.
 */
export const getDataAttributeOrElse = (
  source: Element,
  dataAttributeName: string,
  alternative: string,
): string => {
  const attributeName = `data-${dataAttributeName}`;
  const attribute = source.getAttribute(attributeName);
  return attribute !== null ? attribute : alternative;
};
