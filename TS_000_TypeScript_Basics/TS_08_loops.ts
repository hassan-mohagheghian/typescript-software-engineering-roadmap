// TypeScript Basics - Loops
// -----------------------------------------------------------------------------
// Loops allow you to execute a block of code repeatedly.
//
// Key concepts:
// 1. for loop — iterate with index.
// 2. for...of — iterate over iterable values (arrays, strings, maps, sets).
// 3. for...in — iterate over object keys.
// 4. while — repeat while a condition is true.
// 5. do...while — repeat at least once, then check condition.
// 6. break / continue — control loop flow.
// -----------------------------------------------------------------------------


// =============================================================================
// For Loop
// =============================================================================


// Classic for loop
console.log("=== Classic For Loop ===");
for (let i = 0; i < 5; i++) {
    console.log(`  i = ${i}`);
}

// Counting down
console.log("\n=== Countdown ===");
for (let i = 5; i > 0; i--) {
    console.log(`  ${i}...`);
}
console.log("  Go!");

// With step
console.log("\n=== Step by 2 ===");
for (let i = 0; i < 10; i += 2) {
    console.log(`  ${i}`);
}


// =============================================================================
// For...of (Values)
// =============================================================================


console.log("\n=== For...of ===");

// Array
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log(`  ${fruit}`);
}

// String
console.log("\n--- String ---");
for (const char of "TypeScript") {
    process.stdout.write(`${char} `);
}
console.log();

// Map
console.log("\n--- Map ---");
const scores = new Map([
    ["Alice", 85],
    ["Bob", 92],
    ["Charlie", 78],
]);
for (const [name, score] of scores) {
    console.log(`  ${name}: ${score}`);
}

// Set
console.log("\n--- Set ---");
const uniqueNums = new Set([1, 2, 3, 2, 1]);
for (const n of uniqueNums) {
    console.log(`  ${n}`);
}


// =============================================================================
// For...in (Keys)
// =============================================================================


console.log("\n=== For...in ===");

const person = { name: "Alice", age: 30, city: "NYC" };
for (const key in person) {
    console.log(`  ${key}: ${person[key as keyof typeof person]}`);
}


// =============================================================================
// While Loop
// =============================================================================


console.log("\n=== While Loop ===");

let count = 0;
while (count < 5) {
    process.stdout.write(`${count} `);
    count++;
}
console.log();

// Simulated input validation
function getValidInput(): number | null {
    let attempts = 0;
    while (attempts < 3) {
        const value = attempts >= 2 ? 10 : -1;
        if (value > 0) {
            return value;
        }
        console.log(`  Invalid input, attempt ${attempts + 1}`);
        attempts++;
    }
    return null;
}

const result = getValidInput();
console.log(`  Got valid input: ${result}`);


// =============================================================================
// Do...While Loop
// =============================================================================


console.log("\n=== Do...While ===");

let n = 0;
do {
    console.log(`  n = ${n}`);
    n++;
} while (n < 3);


// =============================================================================
// Break and Continue
// =============================================================================


// break — exit the loop early
console.log("\n--- break example ---");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    process.stdout.write(`${i} `);
}
console.log();

// continue — skip to next iteration
console.log("\n--- continue example ---");
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    process.stdout.write(`${i} `);
}
console.log();

// Labeled break (break out of nested loops)
console.log("\n--- labeled break ---");
outer: for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i * j > 6) {
            console.log(`  Breaking at i=${i}, j=${j}`);
            break outer;
        }
    }
}


// =============================================================================
// Loop with Array Methods
// =============================================================================


console.log("\n=== Array Iteration Methods ===");

const nums = [1, 2, 3, 4, 5];

// forEach
console.log("\n--- forEach ---");
nums.forEach((n, i) => console.log(`  [${i}] = ${n}`));

// map
console.log("\n--- map ---");
const doubled = nums.map((n) => n * 2);
console.log(`  Doubled: ${doubled}`);

// filter
console.log("\n--- filter ---");
const evens = nums.filter((n) => n % 2 === 0);
console.log(`  Evens: ${evens}`);

// reduce
console.log("\n--- reduce ---");
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(`  Sum: ${sum}`);

// find
console.log("\n--- find ---");
const found = nums.find((n) => n > 3);
console.log(`  First > 3: ${found}`);

// some / every
console.log("\n--- some / every ---");
console.log(`  Some > 3: ${nums.some((n) => n > 3)}`);
console.log(`  Every > 0: ${nums.every((n) => n > 0)}`);


// =============================================================================
// Nested Loops
// =============================================================================


console.log("\n=== Multiplication Table (1-5) ===");
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        row += String(i * j).padStart(4);
    }
    console.log(row);
}

// Flatten a 2D array
console.log("\n--- Flatten ---");
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flat: number[] = [];
for (const row of matrix) {
    for (const val of row) {
        flat.push(val);
    }
}
console.log(`  Flattened: ${flat}`);


// =============================================================================
// Usage
// =============================================================================


function main(): void {
    console.log("=== For Loop with Range ===");
    for (let i = 1; i <= 5; i++) {
        console.log(`  ${i} squared = ${i ** 2}`);
    }

    console.log("\n=== While Loop ===");
    let factorial = 1;
    let i = 1;
    while (i <= 5) {
        factorial *= i;
        i++;
    }
    console.log(`  5! = ${factorial}`);

    console.log("\n=== Break Example ===");
    for (let j = 0; j < 100; j++) {
        if (j ** 2 > 50) {
            console.log(`  First i where i^2 > 50: ${j}`);
            break;
        }
    }

    console.log("\n=== Continue Example ===");
    let total = 0;
    for (let j = 1; j <= 10; j++) {
        if (j % 3 === 0) {
            continue;
        }
        total += j;
    }
    console.log(`  Sum of 1-10 excluding multiples of 3: ${total}`);

    console.log("\n=== For...of with Entries ===");
    const colors = ["red", "green", "blue"];
    for (const [idx, color] of colors.entries()) {
        console.log(`  ${idx + 1}. ${color}`);
    }
}

main();
