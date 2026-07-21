// TypeScript Basics - Strict Equality
// -----------------------------------------------------------------------------
// JavaScript has two equality operators: == (loose) and === (strict).
// TypeScript encourages using === for predictable behavior.
//
// Key concepts:
// 1. === strict equality — same value AND same type.
// 2. == loose equality — type coercion before comparison.
// 3. Object.is — like === but handles NaN and -0.
// 4. SameValueZero — algorithm used by Map/Set.
// 5. When to use what — always prefer === unless you need coercion.
// -----------------------------------------------------------------------------

// =============================================================================
// Strict Equality (===)
// =============================================================================

console.log("=== Strict Equality ===");

// Same value and type
console.log(`5 === 5:     ${5 === 5}`);
console.log(`"5" === 5:   ${"5" === 5}`);
console.log(`null === undefined: ${null === undefined}`);
console.log(`NaN === NaN: ${NaN === NaN}`); // NaN is never equal to itself!

// Objects (reference comparison)
console.log(`\n[1,2] === [1,2]: ${[1, 2] === [1, 2]}`);
console.log(`{} === {}:       ${{} === {}}`);

const a = { x: 1 };
const b = a;
console.log(`a === b:         ${a === b}`); // true (same reference)

// =============================================================================
// Loose Equality (==)
// =============================================================================

console.log("\n=== Loose Equality ===");

// Type coercion
console.log(`5 == "5":     ${5 == "5"}`); // true
console.log(`0 == false:   ${0 == false}`); // true
console.log(`"" == false:  ${"" == false}`); // true
console.log(`null == undefined: ${null == undefined}`); // true
console.log(`" \\t\\n" == 0: ${" \t\n" == 0}`); // true (trimmed string)

// Confusing cases
console.log(`\n0 == "":     ${0 == ""}`); // true
console.log(`0 == "0":    ${0 == "0"}`); // true
console.log(`"" == "0":   ${"" == "0"}`); // false
console.log(`false == "false": ${false == "false"}`); // false

// =============================================================================
// Object.is
// =============================================================================

console.log("\n=== Object.is ===");

// Handles NaN correctly
console.log(`Object.is(NaN, NaN): ${Object.is(NaN, NaN)}`); // true
console.log(`NaN === NaN: ${NaN === NaN}`); // false

// Handles -0 correctly
console.log(`Object.is(0, -0): ${Object.is(0, -0)}`); // false
console.log(`0 === -0: ${0 === -0}`); // true

// Otherwise same as ===
console.log(`Object.is(5, 5): ${Object.is(5, 5)}`); // true
console.log(`Object.is("a", "a"): ${Object.is("a", "a")}`); // true

// =============================================================================
// When to Use Each
// =============================================================================

console.log("\n=== Guidelines ===");

// USE === for:
// - All value comparisons (most cases)
// - null/undefined checks
// - Number comparisons
// - String comparisons

const value: string | null = null;
if (value === null) {
  console.log("Value is null (=== check)");
}

// USE == only for:
// - Checking null or undefined simultaneously
const input: string | null | undefined = null;
if (input == null) {
  console.log("Value is null or undefined (== check)");
}

// USE Object.is for:
// - NaN checking
// - -0 checking
if (Object.is(NaN, NaN)) {
  console.log("NaN check with Object.is");
}

// =============================================================================
// Type Coercion Gotchas
// =============================================================================

console.log("\n--- Gotchas ---");

console.log(`"" + 1 = ${"" + 1}`); // "1"
console.log(`"1" + 1 = ${"1" + 1}`); // "11"
console.log(`"1" - 1 = ${"1" - 1}`); // 0
console.log(`true + 1 = ${true + 1}`); // 2
console.log(`false + 1 = ${false + 1}`); // 1
console.log(`null + 1 = ${null + 1}`); // 1
console.log(`undefined + 1 = ${undefined + 1}`); // NaN

console.log(`\n!!0: ${!!0}`); // false
console.log(`!!"": ${!!""}`); // false
console.log(`!!null: ${!!null}`); // false
console.log(`!!undefined: ${!!undefined}`); // false
console.log(`!!NaN: ${!!NaN}`); // false
console.log(`!!"0": ${!!"0"}`); // true (non-empty string)
console.log(`!![]: ${!![]}`); // true (non-empty array)

// =============================================================================
// Custom Equality
// =============================================================================

interface Point {
  x: number;
  y: number;
}

function pointsEqual(a: Point, b: Point): boolean {
  return a.x === b.x && a.y === b.y;
}

const p1: Point = { x: 3, y: 4 };
const p2: Point = { x: 3, y: 4 };
const p3 = p1;

console.log(`\nCustom equality:`);
console.log(`p1 == p2: ${pointsEqual(p1, p2)}`); // true (same values)
console.log(`p1 === p2: ${p1 === p2}`); // false (different objects)
console.log(`p1 === p3: ${p1 === p3}`); // true (same object)

// =============================================================================
// Usage
// =============================================================================

function main(): void {
  console.log("=== Strict Equality ===");
  console.log(`  5 === 5: ${5 === 5}`);
  console.log(`  5 === "5": ${5 === "5"}`);
  console.log(`  null === undefined: ${null === undefined}`);
  console.log(`  NaN === NaN: ${NaN === NaN}`);

  console.log("\n=== Object.is ===");
  console.log(`  Object.is(NaN, NaN): ${Object.is(NaN, NaN)}`);
  console.log(`  Object.is(0, -0): ${Object.is(0, -0)}`);

  console.log("\n=== Loose Equality ===");
  console.log(`  5 == "5": ${5 == "5"}`);
  console.log(`  0 == false: ${0 == false}`);
  console.log(`  null == undefined: ${null == undefined}`);

  console.log("\n=== Rule of Thumb ===");
  console.log("  Use '===' for all value comparisons");
  console.log("  Use '==' only for null/undefined checks");
  console.log("  Use 'Object.is' for NaN/-0 checks");
}

main();
