# SafeQuery

## Overview

SafeQuery is a small JavaScript library I've developed, pulling together utilities from my own work to simplify DOM manipulation and localStorage interactions. It's designed for use with both vanilla JavaScript and Web Components.

## Goals

- To provide straightforward utilities that reduce boilerplate in web projects.
- To improve code reliability with functions that handle common tasks and edge cases.
- To support projects using vanilla JavaScript and Web Components without heavy dependencies.

## Features

- **DOM Utilities**: Functions for safe element selection, attribute manipulation, and class handling.
- **localStorage Utilities**: Methods for accessing and modifying localStorage data, with safety checks.

## Usage

Import the utilities you need directly into your project:

```javascript
import { getElementOrThrow } from 'safe-query';

const element = getElementOrThrow(this.shadowRoot, '#my-element');
```

The example above is the workhorse of the library `getElementOrThrow`. The general idea is that errors are found and reported early so you don't need to start hunting where the `undefined` came from. This is quite an aggressive strategy so `safe-query` also offers an alternative, where possible which is `xOrElse` which allows you to give a fallback option:

```javascript
const fallbackElement = document.createElement('div');
const element = getElementOrElse(document, '.might-not-exist', fallbackElement);
```
Below you have an example of all the functions that are currently available:

### DOM Utilities

**querySelectorAllOrThrow**
```javascript
const elements = querySelectorAllOrThrow(document, '.list-item');
console.log(elements.length); // > 1 or an error
```

**getElementByIdOrThrow**
```javascript
const element = getElementByIdOrThrow(document, 'unique-element-id');
```

**getElementByIdOrElse**
```javascript
const fallbackElement = document.createElement('div');
const element = getElementByIdOrElse(document, 'might-not-exist-id', fallbackElement);
```

**getElementsByClassNameOrThrow**
```javascript
const elements = getElementsByClassNameOrThrow(document, 'list-items');
```

**getAttributeOrThrow**
```javascript
const element = getElementOrThrow(this.shadowRoot, '.user-profile');
const value = getAttributeOrThrow(element, 'data-user-id');
```

**getAttributeOrElse**
```javascript
const element = getElementOrThrow(document, '.user-profile');
const userId = getAttributeOrElse(element, 'data-user-id', 'defaultUserId');
console.log(userId);
```

**removeAttributeOrThrow**
```javascript
const element = getElementOrThrow(document, '.temporary-element');
removeAttributeOrThrow(element, 'data-temporary');

```

**setDataAttribute**
```javascript
const element = getElementOrThrow(document, '.user-profile');
setDataAttribute(element, 'user-id', '123456');
```

**getDataAttributeOrThrow**
```javascript
const element = getElementOrThrow(document, '.user-profile');
const userId = getDataAttributeOrThrow(element, 'user-id'); // data-user-id
```

**getDataAttributeOrElse**
```javascript
const element = document.querySelector('.user-profile');
const userId = getDataAttributeOrElse(element, 'user-id', 'defaultUserId');
```

### LocalStorage Utilities

**getLocalStorageOrThrow**
```javascript
const value = getLocalStorageOrThrow('key');
```

**getLocalStorageOrElse**
```javascript
const value = getLocalStorageOrElse('nonExistingKey', 'defaultValue');
console.log(value);
```

**getLocalStorageParsedOrElse**
```javascript
const defaultValue = { name: "Default User", age: 30 };
const user = getLocalStorageParsedOrElse('userData', defaultValue, JSON.parse);
console.log(user);
```

**removeLocalStorageItemOrThrow**
```javascript
removeLocalStorageItemOrThrow('temporaryData');
```

## Contributing

This is a work-in-progress library built from practical needs. If you have utilities or improvements that fit the tone and purpose of SafeQuery, contributions are welcome.

