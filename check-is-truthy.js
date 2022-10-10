export const NaN = (0 / 0);
export const isNaN = (value) => value !== value;
export const isTruthy = (value) => !!value;
export const isFalsy = ((value) => !value);
export const toggle = isFalsy;
