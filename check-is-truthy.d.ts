declare const NAN: unique symbol;
/**
 * An opaque type representing `NaN` within the type system.
 *
 * This can be used to represent `NaN` in type contexts, but is not generated
 * automatically.
 */
export declare type NaN = number & {
    [NAN]: never;
};
/**
 * The reserved value `NaN`. This is equivalent to the global `NaN` value.
 */
export declare const NaN: NaN;
/**
 * Returns `true` if the provided `value` is the reserved value `NaN`, `false`
 * otherwise.
 *
 * Only values of the type `number` can be `NaN`, so this is equivalent to
 * [`Number.isNaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN).
 */
export declare const isNaN: (value: unknown) => value is NaN;
/**
 * A "falsy" value in JavaScript is a value that is considered false when
 * encountered in a Boolean context.
 *
 * `NaN` is not represented in the type system separately from `number`, despite
 * being falsy. It is added to this union via the opaque {@link NaN} type.
 *
 * Also, `-0` is not represented separately from `0`.
 *
 * In some browser contexts, `document.all` is also falsy.
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 */
export declare type FalsyValue = false | 0 | -0 | 0n | NaN | "" | null | undefined;
/**
 * Returns whether the provided `value` is considered "truthy" in boolean
 * contexts.
 *
 * This is equivalent to `!!value` or calling the `Boolean` constructor as a
 * function, which is {@link https://tc39.es/ecma262/#sec-toboolean ToBoolean}
 * when applied to `value`.
 *
 * This is the inverse of {@link isFalsy}.
 *
 * This can be particularly useful when used with `.filter` methods on arrays
 * or other collections.
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 * @param value The value to convert to a boolean.
 * @returns `true` if `value` is "truthy", `false` otherwise.
 * @example isTruthy(true) === true
 * @example isTruthy(false) === false
 * @example isTruthy(1) === true
 * @example isTruthy(0) === false
 * @example isTruthy(-0) === false
 * @example isTruthy(-1) === true
 * @example isTruthy(NaN) === false
 * @example isTruthy(0n) === false
 * @example isTruthy(1n) === true
 * @example isTruthy(-1n) === true
 * @example isTruthy('') === false
 * @example isTruthy('x') === true
 * @example isTruthy(' ') === true
 * @example isTruthy(null) === false
 * @example isTruthy(undefined) === false
 * @example isTruthy({}) === true
 * @example isTruthy([]) === true
 * @example isTruthy(new Map()) === true
 * @example [0, 1, 2].filter(isTruthy) //=> [1, 2]
 * @example [{}, null, {}].filter(isTruthy) //=> [{}, {}]
 * @example ['hello', '', 'world'].filter(isTruthy) //=> ['hello', 'world']
 */
export declare const isTruthy: <T>(value: T) => value is Exclude<T, FalsyValue>;
/**
 * Returns whether the provided `value` is considered "falsy" in boolean
 * contexts.
 *
 * This is equivalent to `!value`, which is {@link https://tc39.es/ecma262/#sec-logical-not-operator Logical NOT Operator ( ! )}
 * when applied to `value`.
 *
 * This is the inverse of {@link isTruthy}.
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 * @param value The value to convert to a boolean.
 * @returns `false` if `value` is "truthy", `true` otherwise.
 * @example isFalsy(true) === false
 * @example isFalsy(false) === true
 * @example isFalsy(1) === false
 * @example isFalsy(0) === true
 * @example isFalsy(-0) === true
 * @example isFalsy(-1) === false
 * @example isFalsy(NaN) === true
 * @example isFalsy(0n) === true
 * @example isFalsy(1n) === false
 * @example isFalsy(-1n) === false
 * @example isFalsy('') === true
 * @example isFalsy('x') === false
 * @example isFalsy(' ') === false
 * @example isFalsy(null) === true
 * @example isFalsy(undefined) === true
 * @example isFalsy({}) === false
 * @example isFalsy([]) === false
 * @example isFalsy(new Map()) === false
 */
export declare const isFalsy: {
    <T extends {
        readonly [key: PropertyKey]: string | number;
    }, K extends keyof T>(value: T[K]): value is T[K] & FalsyValue;
    <T extends {
        readonly [key: PropertyKey]: string | number;
    }, K extends keyof T, U>(value: T[K] | U): value is (T[K] | U) & FalsyValue;
    <V extends unknown>(value: V): value is V & FalsyValue;
};
/**
 * Returns the logical opposite of the provided `value`.
 *
 * This has the effect of cycling the value between `true` and `false`.
 *
 * This works equivalently to {@link isFalsy}.
 *
 * @example toggle(true) === false
 * @example toggle(false) === true
 * @example
 *   function MyComponent() {
 *     const [isOpen, setIsOpen] = useState(false)
 *     const toggleIsOpen = useCallback(() => setIsOpen(toggle), [])
 *     return <Modal isOpen={isOpen}>
 *       <button onClick={toggleIsOpen} />
 *     </Modal>
 *   }
 */
export declare const toggle: (value: boolean) => boolean;
export {};
