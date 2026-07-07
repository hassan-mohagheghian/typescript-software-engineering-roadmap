// TypeScript Basics - Variables
// -----------------------------------------------------------------------------
// Variables are containers for storing data values. TypeScript extends
// JavaScript with static typing, so you can declare variable types explicitly.
//
// Key concepts:
// 1. Static typing: type is determined at compile time (with inference).
// 2. Naming: camelCase by convention, must start with letter/underscore/$.
// 3. Declarations: let, const, var (avoid var).
// 4. Type inference: TypeScript infers types when not explicitly annotated.
// 5. Constants: use const for values that should not be reassigned.
// -----------------------------------------------------------------------------


// =============================================================================
// Basic Variable Declaration
// =============================================================================


const name: string = "Alice";          // string
let age: number = 30;                  // number
const height: number = 5.7;            // number (no separate float type)
let isStudent: boolean = true;         // boolean

console.log(`Name: ${name}, Age: ${age}, Height: ${height}, Student: ${isStudent}`);


// =============================================================================
// Type Inference
// =============================================================================


// TypeScript infers the type from the assigned value
let x = 10;          // inferred as number
console.log(`x = ${x}, type: ${typeof x}`);

x = "hello" as any;  // type assertion to bypass check (not recommended)
console.log(`x = ${x}`);

// Proper way: declare the type upfront if you need flexibility
let flexible: string | number = 42;
console.log(`flexible = ${flexible}, type: ${typeof flexible}`);

flexible = "hello";
console.log(`flexible = ${flexible}, type: ${typeof flexible}`);


// =============================================================================
// let vs const vs var
// =============================================================================


// const — cannot be reassigned (prefer this)
const PI = 3.14159;
// PI = 3;  // Error: Assignment to constant variable

// let — block-scoped, can be reassigned
let counter = 0;
counter = 1;  // OK
counter += 1; // OK

// var — function-scoped (avoid, causes bugs)
var legacy = "avoid this";
legacy = "still works";


// =============================================================================
// Variable Scope (Block vs Function)
// =============================================================================


const globalVar = "I am global";

function demoScope(): void {
    const localVar = "I am local";
    console.log(`Inside function: ${globalVar}`);
    console.log(`Inside function: ${localVar}`);
}

demoScope();
console.log(`Outside function: ${globalVar}`);
// console.log(localVar);  // Error: localVar is not defined


// =============================================================================
// Destructuring Assignment
// =============================================================================


// Array destructuring
const coordinates: [number, number, number] = [10, 20, 30];
const [lat, lon, alt] = coordinates;
console.log(`Lat: ${lat}, Lon: ${lon}, Alt: ${alt}`);

// Object destructuring
const person = { name: "Bob", age: 25, city: "NYC" };
const { name: personName, age: personAge } = person;  // rename with :
console.log(`Person: ${personName}, ${personAge}`);

// Swap variables
let m = 5;
let n = 10;
[m, n] = [n, m];
console.log(`After swap: m=${m}, n=${n}`);


// =============================================================================
// Constants (Convention)
// =============================================================================


const MAX_RETRIES = 3;
const DEFAULT_TIMEOUT = 30;
const API_BASE_URL = "https://api.example.com";

console.log(`Max retries: ${MAX_RETRIES}, Timeout: ${DEFAULT_TIMEOUT}s`);


// =============================================================================
// Usage
// =============================================================================


function main(): void {
    console.log("=== Variable Declaration ===");
    const language = "TypeScript";
    const version = 5.4;
    console.log(`Language: ${language}, Version: ${version}`);

    console.log("\n=== Type Inference ===");
    let inferred = 42;
    console.log(`inferred = ${inferred} (${typeof inferred})`);
    inferred = 100;  // still number
    console.log(`inferred = ${inferred} (${typeof inferred})`);

    console.log("\n=== const vs let ===");
    const fixed = "cannot change";
    let mutable = "can change";
    console.log(`fixed: ${fixed}`);
    console.log(`mutable: ${mutable}`);
    mutable = "changed";
    console.log(`mutable after: ${mutable}`);

    console.log("\n=== Destructuring ===");
    const [r, g, b] = [255, 128, 0];
    console.log(`RGB: (${r}, ${g}, ${b})`);

    console.log("\n=== Swapping ===");
    let x = 1, y = 2;
    console.log(`Before: x=${x}, y=${y}`);
    [x, y] = [y, x];
    console.log(`After:  x=${x}, y=${y}`);
}

main();
