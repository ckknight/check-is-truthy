/**
 * A "falsy" value in JavaScript is a value that is considered false when
 * encountered in a Boolean context.
 *
 * `NaN` is not represented in the type system separately from `number`,
 * despite being falsy.
 *
 * Also, `-0` is not represented separately from `0`.
 *
 * In some browser contexts, `document.all` is also falsy.
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 */
export type FalsyValue =
  | false
  | 0
  | -0 // this is the same as `0` in the type system and will be converged into `0`
  | 0n
  // | NaN // `NaN` is not represented in the type system separately from `number`
  | ""
  | null
  | undefined;

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
 * This can be particularly useful when used withh `.filter` methods on arrays
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
export const isTruthy = <T,>(value: T): value is Exclude<T, FalsyValue> =>
  !!value;

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
export const isFalsy = <T,>(value: T): value is Extract<T, FalsyValue> => !value;

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
export const toggle: (value: boolean) => boolean = isFalsy;
