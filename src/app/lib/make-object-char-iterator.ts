import { deepClone } from "lib/deep-clone";

type Object = { [key: string]: any };

/**
 * makeObjectCharIterator is a generator function that iterates a start object to
 * match an end object state by iterating through each string character.
 *
 * Note: Start object and end object must have the same structure and same keys.
 *       And they must have string or array or object as values.
 *
 * @example
 * const start = {a : ""}
 * const end = {a : "abc"};
 * const iterator = makeObjectCharIterator(start, end);
 * iterator.next().value // {a : "a"}
 * iterator.next().value // {a : "ab"}
 * iterator.next().value // {a : "abc"}
 */
export function* makeObjectCharIterator<T extends Object>(
  start: T,
  end: T,
  level = 0
) {
  // Have to manually cast Object type and return T type due to https://github.com/microsoft/TypeScript/issues/47357
  const object: Object = level === 0 ? deepClone(start) : start;
  for (const [key, endValue] of Object.entries(end)) {
    if (typeof endValue === "object") {
      // Ensure the nested container exists on the working object before
      // recursing. The start and end objects may differ (e.g. end has an
      // empty array while start has an object), so initialize a compatible
      // empty container to avoid reading/setting properties on undefined.
      if (object[key] === undefined) {
        object[key] = Array.isArray(endValue) ? [] : {};
      }

      const recursiveIterator = makeObjectCharIterator(
        // Pass the nested object (now guaranteed to exist) as the start
        // value for the recursive iterator.
        object[key],
        endValue,
        level + 1
      );
      while (true) {
        const next = recursiveIterator.next();
        if (next.done) {
          break;
        }
        yield deepClone(object) as T;
      }
    } else {
      for (let i = 1; i <= endValue.length; i++) {
        object[key] = endValue.slice(0, i);
        yield deepClone(object) as T;
      }
    }
  }
}

export const countObjectChar = (object: Object) => {
  let count = 0;
  for (const value of Object.values(object)) {
    if (typeof value === "object") {
      count += countObjectChar(value);
    } else if (typeof value === "string") {
      count += value.length;
    }
  }
  return count;
};
