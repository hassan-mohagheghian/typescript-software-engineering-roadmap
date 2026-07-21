// TypeScript Basics - Primitives vs References
// -----------------------------------------------------------------------------
// In JavaScript/TypeScript, values are either primitives (immutable) or
// references (mutable objects).
//
// Key concepts:
// 1. Primitives — number, string, boolean, null, undefined, symbol, bigint
// 2. References — objects, arrays, functions, maps, sets
// 3. Assignment behavior — primitives copy value, references copy reference
// 4. Function arguments — primitives pass by value, references pass by reference
// 5. Immutability — only primitives are truly immutable
// -----------------------------------------------------------------------------

// =============================================================================
// Primitive Types (Immutable)
// =============================================================================

// Numbers are immutable
let x = 10;
console.log(`x = ${x}`);
x = x + 1; // creates a NEW number object
console.log(`x = ${x} (new object)`);

// Strings are immutable
let s = "hello";
console.log(`\ns = ${s}`);
s = s + " world"; // creates a NEW string
console.log(`s = ${s} (new object)`);

// Booleans are immutable
const t = true;
// t = false;  // Error: const
console.log(`\nboolean: ${t}`);

// =============================================================================
// Reference Types (Mutable)
// =============================================================================

// Arrays are mutable
const arr = [1, 2, 3];
console.log(`\narr = ${arr}`);
arr.push(4); // modifies in place
console.log(`arr = ${arr} (same object)`);

// Objects are mutable
const obj = { a: 1, b: 2 };
console.log(`\nobj = ${JSON.stringify(obj)}`);
obj["a"] = 3; // modifies in place
console.log(`obj = ${JSON.stringify(obj)} (same object)`);

// =============================================================================
// Assignment Behavior
// =============================================================================

// Primitive: copies the value
let a = 10;
let b = a;
b = 20;
console.log(`\nPrimitive: a=${a}, b=${b} (a unchanged)`);

// Reference: copies the reference
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
console.log(`Reference: arr1=${arr1}, arr2=${arr2} (both modified)`);

// Object reference
const obj1 = { x: 1 };
const obj2 = obj1;
obj1.x = 99;
console.log(
  `\nObject: obj1=${JSON.stringify(obj1)}, obj2=${JSON.stringify(obj2)}`,
);

// =============================================================================
// Function Arguments
// =============================================================================

// Primitives: pass by value (original unchanged)
function modifyPrimitive(x: number): void {
  x = x + 1;
  console.log(`  Inside function: x = ${x}`);
}

// References: pass by reference (original may change)
function modifyArray(arr: number[]): void {
  arr.push(99);
  console.log(`  Inside function: arr = ${arr}`);
}

console.log("\n--- Primitives ---");
let num = 10;
modifyPrimitive(num);
console.log(`  After function: num = ${num}`);

console.log("\n--- References ---");
const nums = [1, 2, 3];
modifyArray(nums);
console.log(`  After function: nums = ${nums}`);

// =============================================================================
// Identity vs Equality
// =============================================================================

console.log("\n--- Identity vs Equality ---");

// Primitives: same value means same identity
const x1 = 100;
const x2 = 100;
console.log(`100 === 100: ${x1 === x2}`);
console.log(`100 == 100:  ${x1 == x2}`);

// References: same value doesn't mean same identity
const a1 = [1, 2, 3];
const a2 = [1, 2, 3];
const a3 = a1;

console.log(`\n[1,2,3] === [1,2,3]: ${a1 === a2}`); // false
console.log(`[1,2,3] == [1,2,3]:  ${a1 == a2}`); // false
console.log(`a1 === a3:           ${a1 === a3}`); // true (same object)

// =============================================================================
// Making Copies
// =============================================================================

console.log("\n--- Making Copies ---");

// Shallow copy: spread operator
const original = [1, 2, [3, 4]];
const shallow = [...original];
shallow[2][0] = 99; // modifies nested in both!
console.log(`\nShallow copy:`);
console.log(`  Original: ${JSON.stringify(original)}`);
console.log(`  Shallow:  ${JSON.stringify(shallow)}`);

// Deep copy: structuredClone (modern)
const original2 = [1, 2, [3, 4]];
const deep = structuredClone(original2);
deep[2][0] = 99; // only modifies deep
console.log(`\nDeep copy:`);
console.log(`  Original: ${JSON.stringify(original2)}`);
console.log(`  Deep:     ${JSON.stringify(deep)}`);

// Object shallow copy
const objA = { x: 1, y: { z: 2 } };
const objB = { ...objA };
objB.y.z = 99; // nested is shared!
console.log(`\nObject shallow:`);
console.log(`  objA: ${JSON.stringify(objA)}`);
console.log(`  objB: ${JSON.stringify(objB)}`);

// =============================================================================
// Immutability Patterns
// =============================================================================

console.log("\n--- Immutability ---");

// Object.freeze (shallow)
const frozen = Object.freeze({ x: 1, y: 2 });
// frozen.x = 3;  // Error in strict mode
console.log(`Frozen: ${JSON.stringify(frozen)}`);

// Spread + overwrite (functional update)
const state = { count: 0, name: "test" };
const newState = { ...state, count: state.count + 1 };
console.log(`\nOriginal: ${JSON.stringify(state)}`);
console.log(`Updated:  ${JSON.stringify(newState)}`);

// Array immutability
const items = [1, 2, 3];
const withoutFirst = items.slice(1); // remove first
const withNew = [...items, 4]; // add
const withoutThird = items.filter((_, i) => i !== 2); // remove by index
console.log(`\nOriginal: ${items}`);
console.log(`Without first: ${withoutFirst}`);
console.log(`With new: ${withNew}`);
console.log(`Without third: ${withoutThird}`);

// =============================================================================
// Usage
// =============================================================================

function main(): void {
  console.log("=== Primitives ===");
  let x = 10;
  let y = x;
  x += 1;
  console.log(`  x=${x}, y=${y} (y unchanged)`);

  const s = "hello";
  const t2 = s + " world";
  console.log(`  s='${s}', t='${t2}' (s unchanged)`);

  console.log("\n=== References ===");
  const a = [1, 2, 3];
  const b = a;
  a.push(4);
  console.log(`  a=${a}`);
  console.log(`  b=${b} (b is same object, also modified)`);

  console.log("\n=== Function Side Effects ===");
  function addItem(arr: number[], item: number): number[] {
    return [...arr, item]; // returns new array
  }
  const original = [1, 2, 3];
  const updated = addItem(original, 4);
  console.log(`  Original: ${original}`);
  console.log(`  Updated:  ${updated}`);

  console.log("\n=== Identity ===");
  console.log(`  [1,2] === [1,2]: ${[1, 2] === [1, 2]}`);
  console.log(`  "hello" === "hello": ${"hello" === "hello"}`);

  console.log("\n=== Immutable Patterns ===");
  const state = { count: 0, items: [1, 2, 3] };
  const next = { ...state, count: state.count + 1, items: [...state.items, 4] };
  console.log(`  State: ${JSON.stringify(state)}`);
  console.log(`  Next:  ${JSON.stringify(next)}`);
}

main();
