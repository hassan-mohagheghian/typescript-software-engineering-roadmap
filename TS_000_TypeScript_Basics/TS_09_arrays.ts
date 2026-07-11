// TypeScript Basics - Arrays
// -----------------------------------------------------------------------------
// Arrays are ordered, mutable collections of items with type-safe access.
//
// Key concepts:
// 1. Creation — literal, Array constructor, Array.from(), fill().
// 2. Type syntax — number[] vs Array<number>.
// 3. Methods — push, pop, splice, slice, map, filter, reduce, etc.
// 4. Readonly — readonly arrays for immutable data.
// 5. Tuple — fixed-length arrays with specific types.
// -----------------------------------------------------------------------------


// =============================================================================
// Array Creation
// =============================================================================


// Literal
const fruits: string[] = ["apple", "banana", "cherry"];

// Constructor
const numbers: number[] = new Array(1, 2, 3, 4, 5);

// Array.of
const ofArr = Array.of(1, 2, 3);

// Array.from
const fromStr = Array.from("hello");
const fromRange = Array.from({ length: 5 }, (_, i) => i + 1);

// fill
const zeros = new Array(5).fill(0);

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(`Fruits: ${fruits}`);
console.log(`Numbers: ${numbers}`);
console.log(`From string: ${fromStr}`);
console.log(`From range: ${fromRange}`);
console.log(`Zeros: ${zeros}`);
console.log(`Spread: ${arr2}`);


// =============================================================================
// Accessing Elements
// =============================================================================


const colors = ["red", "green", "blue", "yellow", "purple"];

console.log(`\nFirst: ${colors[0]}`);
console.log(`Last:  ${colors[colors.length - 1]}`);
console.log(`At(2): ${colors.at(2)}`);
console.log(`At(-1): ${colors.at(-1)}`);

// Destructuring
const [first, second, ...rest] = colors;
console.log(`First: ${first}, Second: ${second}, Rest: ${rest}`);


// =============================================================================
// Array Methods
// =============================================================================


const nums = [3, 1, 4, 1, 5, 9, 2, 6];

// Add/Remove
console.log(`\nOriginal: ${nums}`);
nums.push(8);              // Add to end
console.log(`After push(8): ${nums}`);

nums.pop();                // Remove from end
console.log(`After pop(): ${nums}`);

nums.unshift(0);           // Add to beginning
console.log(`After unshift(0): ${nums}`);

nums.shift();              // Remove from beginning
console.log(`After shift(): ${nums}`);

// splice — add/remove at index
const spliceArr = [1, 2, 3, 4, 5];
spliceArr.splice(2, 1);    // Remove 1 at index 2
console.log(`After splice(2,1): ${spliceArr}`);

spliceArr.splice(1, 0, 10, 20);  // Insert at index 1
console.log(`After splice(1,0,10,20): ${spliceArr}`);

// Search
console.log(`\nindexOf(4): ${nums.indexOf(4)}`);
console.log(`includes(5): ${nums.includes(5)}`);
console.log(`find(n > 4): ${nums.find((n) => n > 4)}`);
console.log(`findIndex(n > 4): ${nums.findIndex((n) => n > 4)}`);

// Sort
const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(`\nSorted: ${unsorted.sort((a, b) => a - b)}`);
console.log(`Sorted desc: ${unsorted.sort((a, b) => b - a)}`);

// Reverse
console.log(`Reversed: ${[...unsorted].reverse()}`);

// Concat
const a = [1, 2];
const b = [3, 4];
console.log(`\nConcat: ${a.concat(b)}`);

// Flat
const nested = [[1, 2], [3, [4, 5]]];
console.log(`Flat: ${nested.flat()}`);
console.log(`Flat(Infinity): ${nested.flat(Infinity)}`);


// =============================================================================
// Transformation Methods
// =============================================================================


console.log("\n--- map ---");
const doubled = nums.map((n) => n * 2);
console.log(`Doubled: ${doubled}`);

console.log("\n--- filter ---");
const evens = nums.filter((n) => n % 2 === 0);
console.log(`Evens: ${evens}`);

console.log("\n--- reduce ---");
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(`Sum: ${sum}`);

console.log("\n--- flatMap ---");
const sentences = ["hello world", "foo bar"];
const words = sentences.flatMap((s) => s.split(" "));
console.log(`Words: ${words}`);

console.log("\n--- slice ---");
const sliced = nums.slice(1, 4);
console.log(`Slice(1, 4): ${sliced}`);


// =============================================================================
// Readonly Arrays
// =============================================================================


const readonlyNums: readonly number[] = [1, 2, 3];
// readonlyNums.push(4);  // Error: push is not available
// readonlyNums[0] = 99;  // Error: cannot assign

// ReadonlyArray type
const frozen: ReadonlyArray<string> = ["a", "b", "c"];

// as const assertion
const literals = [1, 2, 3] as const;  // readonly [1, 2, 3]


// =============================================================================
// Tuple Types
// =============================================================================


// Fixed-length array with specific types
const point: [number, number] = [10, 20];
const record: [string, number, boolean] = ["Alice", 30, true];

console.log(`\nPoint: ${point}`);
console.log(`Record: ${record}`);

// Optional tuple elements
type FlexTuple = [string, number, boolean?];
const flex: FlexTuple = ["hello", 42];
const flex2: FlexTuple = ["hello", 42, true];

// Rest elements in tuples
type NumTuple = [string, ...number[]];
const numTuple: NumTuple = ["first", 1, 2, 3];


// =============================================================================
// Usage
// =============================================================================


function main(): void {
    console.log("=== Array Creation ===");
    const a = [1, 2, 3, 4, 5];
    const b = Array.from("hello");
    const c = Array.from({ length: 6 }, (_, i) => i * i);
    console.log(`  a = ${a}`);
    console.log(`  b = ${b}`);
    console.log(`  c = ${c}`);

    console.log("\n=== Array Operations ===");
    const nums = [3, 1, 4, 1, 5, 9, 2, 6];
    console.log(`  Original: ${nums}`);
    console.log(`  Sorted: ${[...nums].sort((a, b) => a - b)}`);
    console.log(`  Sum: ${nums.reduce((a, b) => a + b, 0)}`);
    console.log(`  Min: ${Math.min(...nums)}, Max: ${Math.max(...nums)}`);

    console.log("\n=== Transformation ===");
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(`  Original:  ${data}`);
    console.log(`  Squares:   ${data.map((n) => n ** 2)}`);
    console.log(`  Evens:     ${data.filter((n) => n % 2 === 0)}`);
    console.log(`  Sum:       ${data.reduce((a, b) => a + b, 0)}`);

    console.log("\n=== Iteration ===");
    const names = ["Alice", "Bob", "Charlie"];
    for (const [i, name] of names.entries()) {
        console.log(`  ${i + 1}. ${name}`);
    }

    console.log("\n=== Destructuring ===");
    const [x, y, ...z] = [10, 20, 30, 40, 50];
    console.log(`  x=${x}, y=${y}, z=${z}`);

    console.log("\n=== Spread ===");
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    console.log(`  Merged: ${[...arr1, ...arr2]}`);
}

main();
