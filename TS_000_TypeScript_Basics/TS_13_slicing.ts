// TypeScript Basics - Slicing
// -----------------------------------------------------------------------------
// Slicing provides a concise way to access subsequences from arrays and strings.
//
// Key concepts:
// 1. slice() — extract portion without modifying original.
// 2. splice() — modify array by removing/replacing/adding elements.
// 3. Substring — string extraction with slice() or substring().
// 4. Step/range patterns — using filter or custom functions.
// 5. Common patterns — chunks, windows, rotations.
// -----------------------------------------------------------------------------


// =============================================================================
// Array Slicing with slice()
// =============================================================================


const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("=== Array slice() ===");
console.log(`Original:     ${nums}`);
console.log(`nums.slice():     ${nums.slice()}`);        // full copy
console.log(`nums.slice(3):    ${nums.slice(3)}`);       // from index 3 to end
console.log(`nums.slice(3, 7): ${nums.slice(3, 7)}`);    // from 3 to 7
console.log(`nums.slice(-3):   ${nums.slice(-3)}`);      // last 3
console.log(`nums.slice(-4,-1): ${nums.slice(-4, -1)}`); // from 4th-to-last

// Step (no built-in step, use filter)
console.log(`\nEvery 2nd: ${nums.filter((_, i) => i % 2 === 0)}`);
console.log(`Every 3rd: ${nums.filter((_, i) => i % 3 === 0)}`);

// Reverse
console.log(`Reversed: ${[...nums].reverse()}`);


// =============================================================================
// String Slicing
// =============================================================================


const text = "TypeScript";

console.log("\n=== String slice() ===");
console.log(`Original:       ${text}`);
console.log(`text.slice(0, 4):    ${text.slice(0, 4)}`);
console.log(`text.slice(4):       ${text.slice(4)}`);
console.log(`text.slice(-6):      ${text.slice(-6)}`);
console.log(`text.slice(0, -6):   ${text.slice(0, -6)}`);

// Reverse string
console.log(`Reversed: ${text.split("").reverse().join("")}`);

// substring (similar to slice but handles negatives differently)
console.log(`\nsubstring(4, 8): ${text.substring(4, 8)}`);
console.log(`substring(-3):   ${text.substring(-3)}`);  // treats -3 as 0


// =============================================================================
// Splice (Modify Array)
// =============================================================================


console.log("\n=== Array splice() ===");

// Replace elements
let spliceArr = [0, 1, 2, 3, 4, 5];
console.log(`Original: ${spliceArr}`);
spliceArr.splice(2, 3, 20, 30, 40);  // at index 2, remove 3, add 20,30,40
console.log(`After splice(2, 3, 20, 30, 40): ${spliceArr}`);

// Delete with splice
spliceArr = [0, 1, 2, 3, 4, 5];
spliceArr.splice(1, 3);  // at index 1, remove 3
console.log(`After splice(1, 3): ${spliceArr}`);

// Insert with splice
spliceArr = [0, 1, 2, 3, 4, 5];
spliceArr.splice(2, 0, 20, 30);  // at index 2, remove 0, add 20, 30
console.log(`After splice(2, 0, 20, 30): ${spliceArr}`);

// Return removed elements
spliceArr = [0, 1, 2, 3, 4, 5];
const removed = spliceArr.splice(1, 2);
console.log(`Removed: ${removed}`);
console.log(`Remaining: ${spliceArr}`);


// =============================================================================
// Common Slicing Patterns
// =============================================================================


console.log("\n=== Common Patterns ===");

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// First element
console.log(`First: ${data.slice(0, 1)}`);

// Last element
console.log(`Last: ${data.slice(-1)}`);

// Every Nth element
console.log(`Every 3rd: ${data.filter((_, i) => i % 3 === 0)}`);

// Middle half
const midStart = Math.floor(data.length / 4);
const midEnd = Math.floor((3 * data.length) / 4);
console.log(`Middle half: ${data.slice(midStart, midEnd)}`);

// Chunk an array
function chunks<T>(arr: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

console.log(`\nChunks of 3: ${JSON.stringify(chunks(data, 3))}`);
console.log(`Chunks of 4: ${JSON.stringify(chunks(data, 4))}`);

// Window (sliding window)
function window<T>(arr: T[], size: number): T[][] {
    return Array.from({ length: arr.length - size + 1 }, (_, i) => arr.slice(i, i + size));
}

console.log(`\nWindow(3): ${JSON.stringify(window([1, 2, 3, 4, 5], 3))}`);


// =============================================================================
// Usage
// =============================================================================


function main(): void {
    console.log("=== Basic Slicing ===");
    const d = Array.from({ length: 10 }, (_, i) => i);
    console.log(`  data:        ${d}`);
    console.log(`  data.slice(0, 3):  ${d.slice(0, 3)}`);
    console.log(`  data.slice(3):     ${d.slice(3)}`);
    console.log(`  data.slice(2, 7):  ${d.slice(2, 7)}`);
    console.log(`  data.slice(-3):    ${d.slice(-3)}`);

    console.log("\n=== Step ===");
    console.log(`  Every 2nd: ${d.filter((_, i) => i % 2 === 0)}`);
    console.log(`  Every 3rd: ${d.filter((_, i) => i % 3 === 0)}`);

    console.log("\n=== String Slicing ===");
    const word = "TypeScript";
    console.log(`  word.slice(0, 4):  ${word.slice(0, 4)}`);
    console.log(`  word.slice(4):     ${word.slice(4)}`);
    console.log(`  word.split("").reverse().join(""): ${word.split("").reverse().join("")}`);

    console.log("\n=== Splice ===");
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const copy = [...arr];
    copy.splice(2, 3, 20, 30, 40);
    console.log(`  After splice(2, 3, [20,30,40]): ${copy}`);

    console.log("\n=== Chunks ===");
    const items = Array.from({ length: 12 }, (_, i) => i);
    console.log(`  Chunks of 4: ${JSON.stringify(chunks(items, 4))}`);
}

main();
