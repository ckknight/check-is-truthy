# check-is-truthy

Utilities and types to help with simple Boolean checks

This is intended to be used with TypeScript, but it should work with JavaScript
as well.

## `isTruthy`

`isTruthy` is a function that takes a value and returns a boolean indicating
whether it is
["truthy"](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) within
JavaScript.

It is particularly useful for filtering collections, and can be used in most cases
where predicates are used, such as
[`Array.prototype.filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

```ts
import { isTruthy } from "check-is-truthy";

doSomethingComplex(["foo", "bar", doSomething && expensive()].filter(isTruthy));
```

## `isFalsy`

`isFalsy` is a function that takes a value and returns a boolean indicating
whether it is ["falsy"](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
within JavaScript.

## `toggle`

`toggle` is a function that takes a value and returns its logical opposite. This has the effect of cycling between `true` and `false`.

```tsx
function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = useCallback(() => setIsOpen(toggle), []);
  return (
    <Modal isOpen={isOpen}>
      <button onClick={toggleIsOpen} />
    </Modal>
  );
}
```

## type `FalsyValue`

`FalsyValue` is a type that represents all values that are falsy in JavaScript.

One can use TypeScript's built-in
[`Extract`](https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union)
or
[`Exclude`](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers)
types to extract values from a type that are falsy (or truthy).

```ts
import type { FalsyValue } from "check-is-truthy";

function doSomething<T>(
  value: T,
  whenTruthy: (value: Exclude<T, FalsyValue>) => void,
  whenFalsy: (value: Extract<T, FalsyValue>) => void
) {
  if (value) {
    // in this branch, we know `value` is truthy
    whenTruthy(value);
  } else {
    // in this branch, we know `value` is falsy
    whenFalsy(value);
  }
}
```

## `NaN`

The reserved value `NaN`. This is equivalent to the global `NaN` value.

This has a special type of `NaN`, which is an opaque value that can represent
`NaN`.

It is not fully safe to use, as `NaN` values can be easily created through other
means that are not typed as `NaN`.

## `isNaN`

Equivalent to
[`Number.isNaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN).

This is provided as a convenience as a check for the `NaN` value as the `NaN`
type.
