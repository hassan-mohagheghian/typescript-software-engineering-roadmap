// TypeScript Basics - Spread and Rest
// -----------------------------------------------------------------------------
// Spread expands iterables into individual elements.
// Rest collects multiple elements into an array or object.
//
// Key concepts:
// 1. Spread (...) — expand arrays, objects, strings, iterables.
// 2. Rest parameters — collect function arguments into array.
// 3. Destructuring with rest — extract and collect remaining.
// 4. Merging — combine arrays and objects with spread.
// 5. Copying — shallow copy with spread.
// -----------------------------------------------------------------------------


// =============================================================================
// Spread with Arrays
// =============================================================================


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Concatenate
const merged = [...arr1, ...arr2];
console.log(`Merged: ${merged}`);

// Add elements
const withNew = [0, ...arr1, 4];
console.log(`With new: ${withNew}`);

// Copy
const copy = [...arr1];
console.log(`Copy: ${copy}`);

// Spread in function call
console.log(`\nMax: ${Math.max(...arr1, ...arr2)}`);
console.log(`Min: ${Math.min(...arr1, ...arr2)}`);


// =============================================================================
// Spread with Objects
// =============================================================================


const defaults = { theme: "dark", lang: "en", fontSize: 14 };
const userPrefs = { theme: "light", fontSize: 16 };

// Merge (later overrides earlier)
const config = { ...defaults, ...userPrefs };
console.log(`\nConfig: ${JSON.stringify(config)}`);

// Add properties
const extended = { ...config, debug: true };
console.log(`Extended: ${JSON.stringify(extended)}`);

// Override specific
const overridden = { ...defaults, theme: "blue", fontSize: 20 };
console.log(`Overridden: ${JSON.stringify(overridden)}`);


// =============================================================================
// Spread with Strings
// =============================================================================


const str = "hello";
const chars = [...str];
console.log(`\nSpread string: ${chars}`);
console.log(`Length: ${chars.length}`);

// Spread into Set for unique
const unique = [...new Set("mississippi")];
console.log(`Unique chars: ${unique}`);


// =============================================================================
// Rest Parameters
// =============================================================================


// Collect arguments into array
function sum(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
}

console.log(`\nsum(1,2,3): ${sum(1, 2, 3)}`);
console.log(`sum(1,2,3,4,5): ${sum(1, 2, 3, 4, 5)}`);

// Rest with other parameters
function log(level: string, ...messages: string[]): void {
    console.log(`[${level}] ${messages.join(" ")}`);
}

log("INFO", "Server", "started", "on", "port", "3000");

// Rest in arrow functions
const multiply = (...nums: number[]): number => nums.reduce((a, b) => a * b, 1);
console.log(`\nmultiply(2,3,4): ${multiply(2, 3, 4)}`);


// =============================================================================
// Destructuring with Rest
// =============================================================================


// Array rest
const [first2, second, ...rest2] = [1, 2, 3, 4, 5];
console.log(`\nfirst=${first2}, second=${second}, rest=${rest2}`);

// Object rest (collect remaining properties)
const { name, age, ...restProps } = { name: "Alice", age: 30, city: "NYC", role: "admin" };
console.log(`name=${name}, age=${age}, rest=${JSON.stringify(restProps)}`);

// Ignore with _
const [_, __, third] = [1, 2, 3];
console.log(`\nThird: ${third}`);

// Collect all but first and last
const [head, ...middle] = [1, 2, 3, 4, 5];
const last = middle.pop()!;
console.log(`\nhead=${head}, middle=${middle}, last=${last}`);


// =============================================================================
// Merging with Spread
// =============================================================================


// Merge arrays
const a1 = [1, 2];
const a2 = [3, 4];
const a3 = [5, 6];
console.log(`\nMerged arrays: ${[...a1, ...a2, ...a3]}`);

// Merge objects (with override)
const o1 = { a: 1, b: 2 };
const o2 = { b: 99, c: 3 };
console.log(`Merged objects: ${JSON.stringify({ ...o1, ...o2 })}`);

// Deep merge (spread only does shallow)
const deep1 = { a: { x: 1 }, b: 2 };
const deep2 = { a: { y: 2 }, c: 3 };
// Shallow merge — a is replaced entirely
console.log(`\nShallow merge: ${JSON.stringify({ ...deep1, ...deep2 })}`);
// Deep merge — a is merged
console.log(`Deep merge: ${JSON.stringify({ ...deep1, a: { ...deep1.a, ...deep2.a } })}`);


// =============================================================================
// Usage
// =============================================================================


function main(): void {
    console.log("=== Spread Arrays ===");
    const nums = [1, 2, 3];
    console.log(`  [...nums, 4, 5]: ${[...nums, 4, 5]}`);
    console.log(`  Math.max(...nums): ${Math.max(...nums)}`);

    console.log("\n=== Spread Objects ===");
    const defaults = { theme: "dark", lang: "en" };
    const custom = { theme: "light", debug: true };
    console.log(`  Merged: ${JSON.stringify({ ...defaults, ...custom })}`);

    console.log("\n=== Rest Parameters ===");
    function log(...args: (string | number)[]): void {
        console.log(`  ${args.join(", ")}`);
    }
    log("hello", 42, "world");

    console.log("\n=== Destructuring Rest ===");
    const { name, ...rest } = { name: "Alice", age: 30, city: "NYC" };
    console.log(`  name: ${name}, rest: ${JSON.stringify(rest)}`);

    console.log("\n=== Merge Patterns ===");
    console.log(`  Arrays: ${[...[1, 2], ...[3, 4]]}`);
    console.log(`  Objects: ${JSON.stringify({ ...{ a: 1 }, ...{ b: 2 } })}`);
}

main();
