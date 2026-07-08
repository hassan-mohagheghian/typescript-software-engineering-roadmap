// TypeScript Basics - Type Casting
// -----------------------------------------------------------------------------
// Type casting transforms a value from one type to another.
//
// Key concepts:
// 1. Type assertions — "as" syntax or angle bracket syntax
// 2. String/Number conversion — Number(), String(), parseInt(), parseFloat()
// 3. Boolean coercion — truthy/falsy rules
// 4. Object type narrowing — typeof, instanceof, custom guards
// 5. Common pitfalls — NaN, unexpected coercions, assertion errors
// -----------------------------------------------------------------------------

// =============================================================================
// Type Assertions (Casting)
// =============================================================================

// "as" syntax (preferred in TypeScript)
const someValue: unknown = "hello";
const strLen1: number = (someValue as string).length;
console.log(`as syntax: length = ${strLen1}`);

// Angle bracket syntax (not allowed in .tsx files)
const strLen2: number = (<string>someValue).length;
console.log(`Angle bracket: length = ${strLen2}`);

// Const assertion — narrows to literal type
const direction = "up" as const;
type Direction = typeof direction; // "up"

// Double assertion (escape hatch, avoid)
const num: number = 42;
// const str: string = num as string;  // Error
const str: string = num as unknown as string; // Works but avoid

// =============================================================================
// Number Conversions
// =============================================================================

// To number
console.log(`Number("42"): ${Number("42")}`);
console.log(`Number("3.14"): ${Number("3.14")}`);
console.log(`Number(true): ${Number(true)}`); // 1
console.log(`Number(false): ${Number(false)}`); // 0
console.log(`Number(null): ${Number(null)}`); // 0
console.log(`Number(undefined): ${Number(undefined)}`); // NaN
console.log(`Number("hello"): ${Number("hello")}`); // NaN

// parseInt and parseFloat
console.log(`parseInt("42px"): ${parseInt("42px")}`);
console.log(`parseInt("0xff", 16): ${parseInt("0xff", 16)}`);
console.log(`parseFloat("3.14px"): ${parseFloat("3.14px")}`);

// Unary plus (fastest way to convert to number)
console.log(`+"42": ${+"42"}`);
console.log(`+true: ${+true}`);
console.log(`+"hello": ${+"hello"}`); // NaN

// NaN checking
console.log(`\nisNaN(NaN): ${isNaN(NaN)}`);
console.log(`Number.isNaN(NaN): ${Number.isNaN(NaN)}`);
console.log(`Number.isNaN("hello"): ${Number.isNaN("hello" as any)}`);

// =============================================================================
// String Conversions
// =============================================================================

// To string
console.log(`\nString(42): "${String(42)}"`);
console.log(`String(3.14): "${String(3.14)}"`);
console.log(`String(true): "${String(true)}"`);
console.log(`String(null): "${String(null)}"`);
console.log(`String(undefined): "${String(undefined)}"`);

// Template literals
console.log(`\`42\`: "\`${42}\`"`);
console.log(`\`true\`: "\`${true}\`"`);

// .toString()
const numStr = 42;
console.log(`num.toString(): "${numStr.toString()}"`);
console.log(`num.toString(16): "${numStr.toString(16)}"`); // hex
console.log(`num.toString(2): "${numStr.toString(2)}"`); // binary

// =============================================================================
// Boolean Coercion
// =============================================================================

console.log("\n--- Falsy values ---");
const falsyValues = [0, 0.0, NaN, "", false, null, undefined];
for (const v of falsyValues) {
  console.log(`  Boolean(${String(v).padStart(12)}) = ${Boolean(v)}`);
}

console.log("\n--- Truthy values ---");
const truthyValues = [1, -1, 3.14, "hello", " ", "0", [1], { a: 1 }, true];
for (const v of truthyValues) {
  console.log(`  Boolean(${String(v).padStart(12)}) = ${Boolean(v)}`);
}

// =============================================================================
// Object Type Narrowing
// =============================================================================

// typeof narrowing
function processValue(value: string | number | boolean): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value.toFixed(2);
  } else {
    return value ? "yes" : "no";
  }
}

console.log(`\nprocessValue("hello"): ${processValue("hello")}`);
console.log(`processValue(42): ${processValue(42)}`);
console.log(`processValue(true): ${processValue(true)}`);

// instanceof narrowing
function formatDate(value: Date | string): string {
  if (value instanceof Date) {
    return value.toISOString();
  }
  return value;
}

console.log(`formatDate(new Date()): ${formatDate(new Date())}`);
console.log(`formatDate("2024-01-01"): ${formatDate("2024-01-01")}`);

// Custom type guard
interface Fish {
  swim: () => void;
}
interface Bird {
  fly: () => void;
}

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

const pet: Fish | Bird = { swim: () => {} } as Fish;
if (isFish(pet)) {
  pet.swim(); // TypeScript knows it's a Fish
}

// =============================================================================
// Unsafe Assertions
// =============================================================================

// These compile but may crash at runtime
const input: unknown = "hello";
// const len: number = (input as number).length;  // Compiles! But wrong
const len: number = (input as string).length; // Correct
console.log(`\nUnsafe cast result: ${len}`);

// Better: use type guards
function getLength(value: unknown): number {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}

console.log(`getLength("hello"): ${getLength("hello")}`);
console.log(`getLength([1,2,3]): ${getLength([1, 2, 3])}`);

// =============================================================================
// Usage
// =============================================================================

function main(): void {
  console.log("=== Type Assertions ===");
  const value: unknown = "hello";
  console.log(`  (value as string).length: ${(value as string).length}`);

  console.log("\n=== Number Conversion ===");
  console.log(`  Number("42"): ${Number("42")}`);
  console.log(`  parseInt("42px"): ${parseInt("42px")}`);
  console.log(`  parseFloat("3.14"): ${parseFloat("3.14")}`);
  console.log(`  +"42": ${+"42"}`);

  console.log("\n=== String Conversion ===");
  console.log(`  String(42): "${String(42)}"`);
  console.log(`  (42).toString(): "${(42).toString()}"`);
  console.log(`  (42).toString(16): "${(42).toString(16)}"`);

  console.log("\n=== Boolean Conversion ===");
  console.log(`  Boolean(0): ${Boolean(0)}`);
  console.log(`  Boolean(""): ${Boolean("")}`);
  console.log(`  Boolean("hello"): ${Boolean("hello")}`);
  console.log(`  Boolean([]): ${Boolean([])}`);
  console.log(`  Boolean(null): ${Boolean(null)}`);

  console.log("\n=== Type Narrowing ===");
  const mixed: (string | number)[] = ["hello", 42, "world"];
  for (const item of mixed) {
    if (typeof item === "string") {
      console.log(`  String: ${item.toUpperCase()}`);
    } else {
      console.log(`  Number: ${item.toFixed(2)}`);
    }
  }

  console.log("\n=== Safe Conversion ===");
  function safeNumber(value: unknown): number | null {
    if (typeof value === "number") return value;
    if (typeof value === "string") {
      const n = Number(value);
      return Number.isNaN(n) ? null : n;
    }
    return null;
  }
  console.log(`  safeNumber("42"): ${safeNumber("42")}`);
  console.log(`  safeNumber("abc"): ${safeNumber("abc")}`);
  console.log(`  safeNumber(null): ${safeNumber(null)}`);
}

main();
