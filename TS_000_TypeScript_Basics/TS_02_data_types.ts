// TypeScript Basics - Data Types
// -----------------------------------------------------------------------------
// TypeScript has several built-in types with static type checking:
//
// 1. Primitive: number, string, boolean, null, undefined, symbol, bigint
// 2. Object: object, Array, Tuple, Enum, Class, Function
// 3. Special: any, unknown, never, void
// 4. Union: combining multiple types with |
// 5. Literal: exact values as types
// -----------------------------------------------------------------------------


// =============================================================================
// Primitive Types
// =============================================================================


// Number — all numbers are floating point (no int/float distinction)
const integer: number = 42;
const float: number = 3.14;
const hex: number = 0xff;
const binary: number = 0b1010;
const octal: number = 0o744;
const big: bigint = 999999999999999999999999999999n;

console.log(`Integer: ${integer}`);
console.log(`Float: ${float}`);
console.log(`BigInt: ${big}`);

// String
const single: string = 'hello';
const double: string = "world";
const backtick: string = `Hello, ${"TypeScript"}!`;

console.log(`Single: ${single}`);
console.log(`Backtick: ${backtick}`);

// Boolean
const isActive: boolean = true;
const isDeleted: boolean = false;
console.log(`Bool: ${isActive}, ${isDeleted}`);

// null and undefined
const nothing: null = null;
const notDefined: undefined = undefined;
console.log(`null: ${nothing}, undefined: ${notDefined}`);


// =============================================================================
// Object Type
// =============================================================================


// Object type — any non-primitive value
const obj: object = { key: "value" };
console.log(`Object: ${JSON.stringify(obj)}`);


// =============================================================================
// Array Types
// =============================================================================


// Two syntaxes for arrays
const numbers: number[] = [1, 2, 3];
const strings: Array<string> = ["a", "b", "c"];

console.log(`Numbers: ${numbers}`);
console.log(`Strings: ${strings}`);

// Readonly arrays
const readonlyArr: readonly number[] = [1, 2, 3];
// readonlyArr.push(4);  // Error: push is not allowed


// =============================================================================
// Tuple Type
// =============================================================================


// Fixed-length array with specific types at each position
const point: [number, number] = [10, 20];
const person: [string, number, boolean] = ["Alice", 30, true];

console.log(`Point: ${point}`);
console.log(`Person: ${person}`);

// Named tuple elements (documentation only)
type UserTuple = [name: string, age: number];
const user: UserTuple = ["Bob", 25];


// =============================================================================
// Enum Type
// =============================================================================


// Numeric enum (auto-incremented)
enum Direction {
    Up,
    Down,
    Left,
    Right,
}
console.log(`Direction.Up: ${Direction.Up}`);

// String enum
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
}
console.log(`Color.Red: ${Color.Red}`);

// Const enum (inlined at compile time, no runtime object)
const enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
}
console.log(`Status.Active: ${Status.Active}`);


// =============================================================================
// Special Types
// =============================================================================


// any — opt out of type checking (avoid)
let anything: any = 42;
anything = "hello";  // OK, no error
anything = true;     // OK, no error

// unknown — type-safe alternative to any
let value: unknown = 42;
// value.toString();  // Error: must narrow type first
if (typeof value === "number") {
    console.log(value.toFixed(2));  // OK after narrowing
}

// never — represents values that never occur
function throwError(message: string): never {
    throw new Error(message);
}

// void — no return value
function logMessage(msg: string): void {
    console.log(msg);
}


// =============================================================================
// Union Types
// =============================================================================


// A value can be one of several types
let id: string | number;
id = "ABC123";
id = 123;

// Narrowing union types
function formatId(id: string | number): string {
    if (typeof id === "string") {
        return id.toUpperCase();
    }
    return id.toString();
}

console.log(`formatId("abc"): ${formatId("abc")}`);
console.log(`formatId(123): ${formatId(123)}`);


// =============================================================================
// Literal Types
// =============================================================================


// Types can be specific values
type Direction2 = "up" | "down" | "left" | "right";
const move: Direction2 = "up";
// const bad: Direction2 = "forward";  // Error


// =============================================================================
// Type Checking and Type Guards
// =============================================================================


console.log("\n--- Type Checking ---");
console.log(`typeof 42: ${typeof 42}`);
console.log(`typeof "hello": ${typeof "hello"}`);
console.log(`typeof true: ${typeof true}`);
console.log(`typeof null: ${typeof null}`);  // "object" (historic bug)

// Type guard functions
function isString(value: unknown): value is string {
    return typeof value === "string";
}

function isNumber(value: unknown): value is number {
    return typeof value === "number";
}

const testValue: unknown = "hello";
if (isString(testValue)) {
    console.log(`It's a string: ${testValue.toUpperCase()}`);
}


// =============================================================================
// Usage
// =============================================================================


function main(): void {
    console.log("=== Primitive Types ===");
    const a: number = 42;
    const b: string = "hello";
    const c: boolean = true;
    const d: null = null;
    const e: undefined = undefined;
    console.log(`number: ${a}, string: ${b}, boolean: ${c}`);
    console.log(`null: ${d}, undefined: ${e}`);

    console.log("\n=== Type Checking ===");
    const values: unknown[] = [42, 3.14, "hello", true, null, [1, 2], { key: "val" }];
    for (const v of values) {
        console.log(`${String(v).padStart(15)} -> ${typeof v}`);
    }

    console.log("\n=== Type Narrowing ===");
    const mixed: (string | number)[] = ["hello", 42, "world", 100];
    for (const item of mixed) {
        if (typeof item === "string") {
            console.log(`String: ${item.toUpperCase()}`);
        } else {
            console.log(`Number: ${item.toFixed(2)}`);
        }
    }

    console.log("\n=== Literal Types ===");
    type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
    const method: HttpMethod = "GET";
    console.log(`Method: ${method}`);
}

main();
