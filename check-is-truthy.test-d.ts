import { expectType, expectNever, expectError } from "tsd";
import { FalsyValue, NaN } from "./check-is-truthy";
import { isTruthy, isFalsy, toggle, isNaN } from "./check-is-truthy";

expectType<NaN>(NaN);
expectType<FalsyValue>({} as unknown as FalsyValue);
expectType<FalsyValue>(
  {} as unknown as false | 0 | "" | 0n | NaN | null | undefined
);

declare const literalTrue: true;
if (isTruthy(literalTrue)) {
  expectType<true>(literalTrue);
} else {
  expectNever(literalTrue);
}

if (isFalsy(literalTrue)) {
  expectNever(literalTrue);
} else {
  expectType<true>(literalTrue);
}

expectType<boolean>(toggle(literalTrue));

declare const literalFalse: false;
if (isTruthy(literalFalse)) {
  expectNever(literalFalse);
} else {
  expectType<false>(literalFalse);
}

if (isFalsy(literalFalse)) {
  expectType<false>(literalFalse);
} else {
  expectNever(literalFalse);
}

expectType<boolean>(toggle(literalFalse));

declare const literalNull: null;

if (isTruthy(literalNull)) {
  expectNever(literalNull);
} else {
  expectType<null>(literalNull);
}

if (isFalsy(literalNull)) {
  expectType<null>(literalNull);
} else {
  expectNever(literalNull);
}

expectError(toggle(literalNull));

declare const literalUndefined: undefined;

if (isTruthy(literalUndefined)) {
  expectNever(literalUndefined);
} else {
  expectType<undefined>(literalUndefined);
}

if (isFalsy(literalUndefined)) {
  expectType<undefined>(literalUndefined);
} else {
  expectNever(literalUndefined);
}

expectError(toggle(literalUndefined));

declare const broadString: string;

if (isTruthy(broadString)) {
  expectType<string>(broadString);
} else {
  // NOTE: I wish this could be "", but TypeScript can't properly narrow a string that way
  expectType<never>(broadString);
}

if (isFalsy(broadString)) {
  expectType<"">("");
} else {
  expectType<string>(broadString);
}

expectError(toggle(broadString));

declare const unionString: "alpha" | "bravo" | "charlie" | "";

if (isTruthy(unionString)) {
  expectType<"alpha" | "bravo" | "charlie">(unionString);
} else {
  expectType<"">(unionString);
}

if (isFalsy(unionString)) {
  expectType<"">(unionString);
} else {
  expectType<"alpha" | "bravo" | "charlie">(unionString);
}

expectError(toggle(unionString));

declare const unionStringOrNullish:
  | "alpha"
  | "bravo"
  | "charlie"
  | ""
  | null
  | undefined;

if (isTruthy(unionStringOrNullish)) {
  expectType<"alpha" | "bravo" | "charlie">(unionStringOrNullish);
} else {
  expectType<"" | null | undefined>(unionStringOrNullish);
}

if (isFalsy(unionStringOrNullish)) {
  expectType<"" | null | undefined>(unionStringOrNullish);
} else {
  expectType<"alpha" | "bravo" | "charlie">(unionStringOrNullish);
}

expectError(toggle(unionStringOrNullish));

declare enum StringEnum {
  Alpha = "alpha",
  Bravo = "bravo",
  Charlie = "charlie",
  None = "",
}

declare const enumString: StringEnum;

if (isTruthy(enumString)) {
  expectType<StringEnum.Alpha | StringEnum.Bravo | StringEnum.Charlie>(
    enumString
  );
} else {
  expectType<StringEnum.None>(enumString);
}

if (isFalsy(enumString)) {
  expectType<StringEnum.None>(enumString);
} else {
  expectType<StringEnum.Alpha | StringEnum.Bravo | StringEnum.Charlie>(
    enumString
  );
}

expectError(toggle(enumString));

declare const enumStringOrNullish: StringEnum | null | undefined;

if (isTruthy(enumStringOrNullish)) {
  expectType<StringEnum.Alpha | StringEnum.Bravo | StringEnum.Charlie>(
    enumStringOrNullish
  );
} else {
  expectType<StringEnum.None | null | undefined>(enumStringOrNullish);
}

if (isFalsy(enumStringOrNullish)) {
  expectType<StringEnum.None | null | undefined>(enumStringOrNullish);
} else {
  expectType<StringEnum.Alpha | StringEnum.Bravo | StringEnum.Charlie>(
    enumStringOrNullish
  );
}

expectError(toggle(enumStringOrNullish));

declare const broadNumber: number;

if (isTruthy(broadNumber)) {
  expectType<number>(broadNumber);
} else {
  // NOTE: `broadNumber` could be `0`, `-0`, or `NaN`, but TypeScript can't properly narrow a number that way
  expectType<never>(broadNumber);
}

if (isFalsy(broadNumber)) {
  expectType<0 | NaN>(broadNumber);
} else {
  expectType<number>(broadNumber);
}

expectError(toggle(broadNumber));

declare const broadNumberOrNullish: number | null | undefined;

if (isTruthy(broadNumberOrNullish)) {
  expectType<number>(broadNumberOrNullish);
} else {
  // NOTE: `broadNumber` could be `0`, `-0`, or `NaN`, but TypeScript can't properly narrow a number that way
  expectType<null | undefined>(broadNumberOrNullish);
}

if (isFalsy(broadNumberOrNullish)) {
  expectType<0 | NaN | null | undefined>(broadNumberOrNullish);
} else {
  expectType<number>(broadNumberOrNullish);
}

expectError(toggle(broadNumberOrNullish));

declare const unionNumber: 0 | 1 | 2 | 3;

if (isTruthy(unionNumber)) {
  expectType<1 | 2 | 3>(unionNumber);
} else {
  expectType<0>(unionNumber);
}

if (isFalsy(unionNumber)) {
  expectType<0>(unionNumber);
} else {
  expectType<1 | 2 | 3>(unionNumber);
}

expectError(toggle(unionNumber));

declare const unionNumberOrNullish: 0 | 1 | 2 | 3 | null | undefined;

if (isTruthy(unionNumberOrNullish)) {
  expectType<1 | 2 | 3>(unionNumberOrNullish);
} else {
  expectType<0 | null | undefined>(unionNumberOrNullish);
}

if (isFalsy(unionNumberOrNullish)) {
  expectType<0 | null | undefined>(unionNumberOrNullish);
} else {
  expectType<1 | 2 | 3>(unionNumberOrNullish);
}

expectError(toggle(unionNumberOrNullish));

declare enum NumberEnum {
  Alpha = 1,
  Bravo = 2,
  Charlie = 3,
  None = 0,
}

declare const enumNumber: NumberEnum;

if (isTruthy(enumNumber)) {
  expectType<NumberEnum.Alpha | NumberEnum.Bravo | NumberEnum.Charlie>(
    enumNumber
  );
} else {
  expectType<NumberEnum.None>(enumNumber);
}

if (isFalsy(enumNumber)) {
  expectType<NumberEnum.None>(enumNumber);
} else {
  expectType<NumberEnum.Alpha | NumberEnum.Bravo | NumberEnum.Charlie>(
    enumNumber
  );
}

expectError(toggle(enumNumber));

declare const enumNumberOrNullish: NumberEnum | null | undefined;

if (isTruthy(enumNumberOrNullish)) {
  expectType<NumberEnum.Alpha | NumberEnum.Bravo | NumberEnum.Charlie>(
    enumNumberOrNullish
  );
} else {
  expectType<NumberEnum.None | null | undefined>(enumNumberOrNullish);
}

if (isFalsy(enumNumberOrNullish)) {
  expectType<NumberEnum.None | null | undefined>(enumNumberOrNullish);
} else {
  expectType<NumberEnum.Alpha | NumberEnum.Bravo | NumberEnum.Charlie>(
    enumNumberOrNullish
  );
}

expectError(toggle(enumNumberOrNullish));

declare const someUnknown: unknown;
if (isNaN(someUnknown)) {
  expectType<NaN>(someUnknown);
} else {
  expectType<unknown>(someUnknown);
}

expectError(toggle(someUnknown));
