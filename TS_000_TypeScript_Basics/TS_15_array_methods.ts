// TypeScript Basics - Array Methods
// -----------------------------------------------------------------------------
// Array methods provide functional programming patterns for data transformation.
//
// Key concepts:
// 1. map — transform each element.
// 2. filter — select elements matching a condition.
// 3. reduce — accumulate values into a single result.
// 4. find / some / every — search and test elements.
// 5. sort / flat / flatMap — restructure arrays.
// -----------------------------------------------------------------------------


// =============================================================================
// map — Transform
// =============================================================================


const nums = [1, 2, 3, 4, 5];

const squared = nums.map((n) => n ** 2);
console.log(`Squares: ${squared}`);

const doubled = nums.map((n) => n * 2);
console.log(`Doubled: ${doubled}`);

// With index
const indexed = nums.map((n, i) => `${i}: ${n}`);
console.log(`Indexed: ${indexed}`);

// Transform objects
const names = ["alice", "bob", "charlie"];
const capitalized = names.map((n) => n.charAt(0).toUpperCase() + n.slice(1));
console.log(`Capitalized: ${capitalized}`);


// =============================================================================
// filter — Select
// =============================================================================


console.log(`\nOriginal: ${nums}`);

const evens = nums.filter((n) => n % 2 === 0);
console.log(`Evens: ${evens}`);

const odds = nums.filter((n) => n % 2 !== 0);
console.log(`Odds: ${odds}`);

const big = nums.filter((n) => n > 3);
console.log(`Big: ${big}`);

// Filter objects
const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "Diana", age: 28 },
];
const adults = users.filter((u) => u.age >= 30);
console.log(`Adults: ${adults.map((u) => u.name)}`);


// =============================================================================
// reduce — Accumulate
// =============================================================================


const numbers = [1, 2, 3, 4, 5];

// Sum
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(`\nSum: ${sum}`);

// Product
const product = numbers.reduce((acc, n) => acc * n, 1);
console.log(`Product: ${product}`);

// Max
const max = numbers.reduce((a, b) => Math.max(a, b));
console.log(`Max: ${max}`);

// Flatten
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), [] as number[]);
console.log(`Flattened: ${flat}`);

// Group by
const items = [
    { type: "fruit", name: "apple" },
    { type: "veggie", name: "carrot" },
    { type: "fruit", name: "banana" },
    { type: "veggie", name: "spinach" },
];
const grouped = items.reduce(
    (acc, item) => {
        (acc[item.type] ??= []).push(item.name);
        return acc;
    },
    {} as Record<string, string[]>
);
console.log(`Grouped: ${JSON.stringify(grouped)}`);


// =============================================================================
// find / findIndex / indexOf
// =============================================================================


const arr = [10, 20, 30, 40, 50];

console.log(`\nfind > 25: ${arr.find((n) => n > 25)}`);
console.log(`findIndex > 25: ${arr.findIndex((n) => n > 25)}`);
console.log(`indexOf(30): ${arr.indexOf(30)}`);

// find returns undefined if not found
const notFound = arr.find((n) => n > 100);
console.log(`find > 100: ${notFound}`);


// =============================================================================
// some / every
// =============================================================================


console.log(`\nsome > 30: ${arr.some((n) => n > 30)}`);
console.log(`every > 0: ${arr.every((n) => n > 0)}`);
console.log(`every > 10: ${arr.every((n) => n > 10)}`);


// =============================================================================
// sort
// =============================================================================


const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];

// Default sort (lexicographic!)
console.log(`\nDefault sort: ${[...unsorted].sort()}`);

// Numeric sort
console.log(`Numeric sort: ${[...unsorted].sort((a, b) => a - b)}`);
console.log(`Numeric desc: ${[...unsorted].sort((a, b) => b - a)}`);

// Sort strings
const words = ["banana", "apple", "cherry"];
console.log(`Alpha sort: ${[...words].sort()}`);
console.log(`Length sort: ${[...words].sort((a, b) => a.length - b.length)}`);


// =============================================================================
// flat / flatMap
// =============================================================================


const matrix = [[1, 2], [3, [4, 5]], [6]];
console.log(`\nflat(): ${matrix.flat()}`);
console.log(`flat(2): ${matrix.flat(2)}`);
console.log(`flat(Infinity): ${matrix.flat(Infinity)}`);

// flatMap — map + flat(1)
const sentences = ["hello world", "foo bar baz"];
const words2 = sentences.flatMap((s) => s.split(" "));
console.log(`flatMap words: ${words2}`);

// flatMap for one-to-many
const pairs = [1, 2, 3];
const expanded = pairs.flatMap((n) => [n, n * 10]);
console.log(`flatMap expand: ${expanded}`);


// =============================================================================
// chaining
// =============================================================================


console.log("\n=== Chaining ===");

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = data
    .filter((n) => n % 2 === 0)     // [2, 4, 6, 8, 10]
    .map((n) => n ** 2)             // [4, 16, 36, 64, 100]
    .filter((n) => n > 20)          // [36, 64, 100]
    .reduce((a, b) => a + b, 0);    // 200

console.log(`Chained result: ${result}`);


// =============================================================================
// Usage
// =============================================================================


function main(): void {
    console.log("=== map ===");
    const nums = [1, 2, 3, 4, 5];
    console.log(`  Squares: ${nums.map((n) => n ** 2)}`);
    console.log(`  Doubled: ${nums.map((n) => n * 2)}`);

    console.log("\n=== filter ===");
    console.log(`  Evens: ${nums.filter((n) => n % 2 === 0)}`);
    console.log(`  Big: ${nums.filter((n) => n > 3)}`);

    console.log("\n=== reduce ===");
    console.log(`  Sum: ${nums.reduce((a, b) => a + b, 0)}`);
    console.log(`  Product: ${nums.reduce((a, b) => a * b, 1)}`);

    console.log("\n=== find / some / every ===");
    console.log(`  find > 3: ${nums.find((n) => n > 3)}`);
    console.log(`  some > 4: ${nums.some((n) => n > 4)}`);
    console.log(`  every > 0: ${nums.every((n) => n > 0)}`);

    console.log("\n=== sort ===");
    const unsorted = [3, 1, 4, 1, 5];
    console.log(`  Sorted: ${[...unsorted].sort((a, b) => a - b)}`);

    console.log("\n=== flatMap ===");
    const nested = [[1, 2], [3, 4]];
    console.log(`  Flat: ${nested.flatMap((a) => a)}`);

    console.log("\n=== Chaining ===");
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = data.filter((n) => n % 2 === 0).map((n) => n ** 2);
    console.log(`  Even squares: ${result}`);
}

main();
