// TypeScript Basics - Tuples
// -----------------------------------------------------------------------------
// Tuples are fixed-length arrays with specific types at each position.
//
// Key concepts:
// 1. Fixed length — must have exact number of elements.
// 2. Typed positions — each index has a specific type.
// 3. Immutable variants — readonly tuples.
// 4. Optional elements — types may have optional members.
// 5. Use cases — function returns, key-value pairs, fixed records.
// -----------------------------------------------------------------------------

// =============================================================================
// Basic Tuples
// =============================================================================

// Typed tuple
const point: [number, number] = [3, 4];
const person: [string, number] = ["Alice", 30];

console.log(`Point: ${point}`);
console.log(`Person: ${person}`);

// Access by index
console.log(`x: ${point[0]}, y: ${point[1]}`);
console.log(`Name: ${person[0]}, Age: ${person[1]}`);

// Destructuring
const [x, y] = point;
console.log(`Unpacked: x=${x}, y=${y}`);

// Length is fixed
console.log(`Length: ${point.length}`);

// =============================================================================
// Tuple with Optional Elements
// =============================================================================

type FlexTuple = [string, number, boolean?];

const required: FlexTuple = ["hello", 42];
const withOptional: FlexTuple = ["hello", 42, true];

console.log(`\nRequired: ${required}`);
console.log(`With optional: ${withOptional}`);

// =============================================================================
// Tuple with Rest Elements
// =============================================================================

type NumTuple = [string, ...number[]];

const nums1: NumTuple = ["first", 1, 2, 3];
const nums2: NumTuple = ["just the string"];

console.log(`\nRest tuple: ${nums1}`);
console.log(`Minimal: ${nums2}`);

// =============================================================================
// Readonly Tuples
// =============================================================================

const readonlyPoint: readonly [number, number] = [10, 20];
// readonlyPoint[0] = 30;  // Error: readonly

// as const creates a readonly tuple of literals
const literalTuple = [1, "hello", true] as const;
type LiteralType = typeof literalTuple; // readonly [1, "hello", true]

// =============================================================================
// Named Tuple Elements
// =============================================================================

// Named elements are documentation only (not enforced at runtime)
type UserTuple = [name: string, age: number, active: boolean];

const user: UserTuple = ["Bob", 25, true];
console.log(`\nNamed tuple: ${user}`);

// =============================================================================
// Tuple as Function Return
// =============================================================================

// Return multiple values
function getMinMax(arr: number[]): [min: number, max: number] {
  const sorted = [...arr].sort((a, b) => a - b);
  return [sorted[0], sorted[sorted.length - 1]];
}

const [min, max] = getMinMax([3, 1, 4, 1, 5, 9, 2, 6]);
console.log(`\nMin: ${min}, Max: ${max}`);

// Return success/failure
type Result = [success: true, data: string] | [success: false, error: string];

function fetchData(id: number): Result {
  if (id > 0) {
    return [true, `Data for ${id}`];
  }
  return [false, "Invalid ID"];
}

const [ok, payload] = fetchData(1);
if (ok) {
  console.log(`Success: ${payload}`);
} else {
  console.log(`Error: ${payload}`);
}

// =============================================================================
// Tuple as Dictionary Key
// =============================================================================

// Tuples are comparable by value (like Python tuples)
const locations = new Map<[number, number], string>([
  [[40.7, -74.0], "NYC"],
  [[34.0, -118.2], "LA"],
]);

for (const [coords, city] of locations) {
  console.log(`\n${city}: [${coords}]`);
}

// =============================================================================
// Tuple vs Object
// =============================================================================

console.log("\n--- Tuple vs Object ---");

// Tuple: ordered, positional, compact
type UserTuple2 = [string, number];
const userTuple: UserTuple2 = ["Alice", 30];

// Object: named, self-documenting, flexible
type UserObj = { name: string; age: number };
const userObj: UserObj = { name: "Alice", age: 30 };

console.log(`Tuple: ${userTuple}`);
console.log(`Object: ${JSON.stringify(userObj)}`);

// =============================================================================
// Usage
// =============================================================================

function main(): void {
  console.log("=== Basic Tuples ===");
  const coords: [number, number] = [10, 20];
  console.log(`  Point: ${coords}`);
  console.log(`  x=${coords[0]}, y=${coords[1]}`);

  console.log("\n=== Destructuring ===");
  const name: string = "Alice";
  const age: number = 30;
  const role: string = "Engineer";
  const person: [string, number, string] = [name, age, role];
  const [pName, pAge, pRole] = person;
  console.log(`  ${pName}, ${pAge}, ${pRole}`);

  console.log("\n=== Tuple as Function Return ===");
  function divmod(a: number, b: number): [quotient: number, remainder: number] {
    return [Math.floor(a / b), a % b];
  }
  const [q, r] = divmod(17, 5);
  console.log(`  divmod(17, 5): quotient=${q}, remainder=${r}`);

  console.log("\n=== Readonly Tuples ===");
  const frozen: readonly [number, string] = [1, "hello"];
  console.log(`  ${frozen}`);
  // frozen[0] = 2;  // Error

  console.log("\n=== Named Tuples ===");
  type Entry = [key: string, value: number];
  const entries: Entry[] = [
    ["a", 1],
    ["b", 2],
  ];
  for (const [k, v] of entries) {
    console.log(`  ${k} = ${v}`);
  }
}

main();
