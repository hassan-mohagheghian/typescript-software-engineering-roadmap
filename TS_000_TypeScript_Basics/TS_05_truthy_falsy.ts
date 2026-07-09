// TypeScript Basics - Truthy and Falsy
// -----------------------------------------------------------------------------
// In JavaScript/TypeScript, every value has a boolean context. Truthy values
// evaluate to true and falsy values evaluate to false in conditional expressions.
//
// Key concepts:
// 1. Falsy values — false, 0, -0, 0n, "", null, undefined, NaN
// 2. Truthy values — everything else (including [], {}, "0")
// 3. Boolean() — explicit conversion to boolean
// 4. Short-circuit evaluation — &&, || behavior with truthy/falsy
// 5. Practical patterns — default values, guard clauses
// -----------------------------------------------------------------------------


// =============================================================================
// Falsy Values
// =============================================================================


console.log("--- Falsy Values ---");
const falsyValues: [unknown, string][] = [
    [false, "false"],
    [0, "number zero"],
    [-0, "negative zero"],
    [0n, "bigint zero"],
    ["", "empty string"],
    [null, "null"],
    [undefined, "undefined"],
    [NaN, "NaN"],
];

for (const [value, label] of falsyValues) {
    console.log(`  Boolean(${label.padStart(15)}) = ${Boolean(value)}`);
}


// =============================================================================
// Truthy Values
// =============================================================================


console.log("\n--- Truthy Values ---");
const truthyValues: [unknown, string][] = [
    [true, "true"],
    [1, "number one"],
    [-1, "negative number"],
    [3.14, "float"],
    ["hello", "non-empty string"],
    [" ", "space string"],
    ["0", "string '0'"],
    [[1], "non-empty array"],
    [{ a: 1 }, "non-empty object"],
    [() => {}, "function"],
    [Symbol("x"), "symbol"],
    [new Date(), "Date object"],
];

for (const [value, label] of truthyValues) {
    console.log(`  Boolean(${label.padStart(20)}) = ${Boolean(value)}`);
}


// =============================================================================
// Truthiness in Conditionals
// =============================================================================


// Direct use in if statements
const name = "Alice";
if (name) {
    console.log(`\nName is set: ${name}`);
}

const emptyArray: unknown[] = [];
if (!emptyArray.length) {
    console.log("Array is empty");
}

// Check for null/undefined
const value: string | null = null;
if (value !== null && value !== undefined) {
    console.log(`Value is set: ${value}`);
} else {
    console.log("Value is null/undefined");
}


// =============================================================================
// Common Patterns
// =============================================================================


// Pattern 1: Default values using || (falsy check)
function getGreeting(name: string | null): string {
    return name || "Anonymous";
}

console.log(`\ngetGreeting("Alice"): ${getGreeting("Alice")}`);
console.log(`getGreeting(""):      ${getGreeting("")}`);
console.log(`getGreeting(null):    ${getGreeting(null)}`);

// Pattern 2: Default values using ?? (null/undefined check only)
function getDisplayName(name: string | null): string {
    return name ?? "Anonymous";
}

console.log(`\ngetDisplayName("Alice"): ${getDisplayName("Alice")}`);
getDisplayName("");     // "" (not "Anonymous" — empty string is truthy for ??)
getDisplayName(null);   // "Anonymous"

// Pattern 3: Guard clauses
function processItems(items: unknown[]): string {
    if (!items || items.length === 0) {
        return "No items to process";
    }
    return `Processing ${items.length} items`;
}

console.log(`\nprocessItems([1,2,3]): ${processItems([1, 2, 3])}`);
console.log(`processItems([]):      ${processItems([])}`);

// Pattern 4: Counting with truthiness
const mixed: unknown[] = [0, 1, "", "hello", null, [1], [], true];
const truthyCount = mixed.filter(Boolean).length;
console.log(`\nTruthy items in mixed: ${truthyCount}`);


// =============================================================================
// Short-Circuit Evaluation
// =============================================================================


console.log("\n--- Short-Circuit ---");

// && returns first falsy or last value
console.log(`5 && 3:     ${5 && 3}`);     // 3
console.log(`0 && 5:     ${0 && 5}`);     // 0
console.log(`null && "hi": ${null && "hi"}`); // null

// || returns first truthy or last value
console.log(`5 || 0:      ${5 || 0}`);      // 5
console.log(`0 || "hi":   ${0 || "hi"}`);   // "hi"
console.log(`"" || 42:    ${"" || 42}`);    // 42

// ?? returns right side only for null/undefined
console.log(`\n0 ?? "default":  ${0 ?? "default"}`);    // 0
console.log(`"" ?? "default": ${"" ?? "default"}`);     // ""
console.log(`null ?? "default": ${null ?? "default"}`); // "default"


// =============================================================================
// Gotchas
// =============================================================================


console.log("\n--- Gotchas ---");

// "0" is truthy (non-empty string), but 0 is falsy
console.log(`Boolean("0"): ${Boolean("0")}   (non-empty string)`);
console.log(`Boolean(0):   ${Boolean(0)}    (number zero)`);

// Empty string is falsy, but " " is truthy
console.log(`Boolean(""):  ${Boolean("")}    (empty string)`);
console.log(`Boolean(" "): ${Boolean(" ")}   (space)`);

// [] is truthy in JS (unlike Python)
console.log(`Boolean([]):  ${Boolean([])}   (non-empty array)`);
console.log(`Boolean({}):  ${Boolean({})}   (non-empty object)`);

// [] == false is true (type coercion)
console.log(`\n[] == false:  ${[] == false}`);
console.log(`[] === false: ${[] === false}`);
console.log(`!![]:         ${!![]}`);


// =============================================================================
// Usage
// =============================================================================


function main(): void {
    console.log("=== Falsy Values ===");
    const testValues = [0, 0.0, NaN, "", false, null, undefined];
    for (const v of testValues) {
        console.log(`  Boolean(${String(v).padStart(12)}) = ${Boolean(v)}`);
    }

    console.log("\n=== Truthy Values ===");
    const truthyTests = [1, -1, "hi", [1], true, { a: 1 }];
    for (const v of truthyTests) {
        console.log(`  Boolean(${String(v).padStart(8)}) = ${Boolean(v)}`);
    }

    console.log("\n=== Default Values ===");
    function greet(name: string | null): string {
        return `Hello, ${name ?? "World"}!`;
    }
    console.log(`  ${greet("Alice")}`);
    console.log(`  ${greet(null)}`);

    console.log("\n=== Truthiness Filtering ===");
    const data = [0, 1, 2, "", "a", null, true];
    const truthy = data.filter(Boolean);
    const falsy = data.filter((x) => !x);
    console.log(`  Truthy: [${truthy}]`);
    console.log(`  Falsy:  [${falsy}]`);

    console.log("\n=== Practical: Skip Empty ===");
    function process(items: unknown[]): void {
        if (!items.length) {
            console.log("  Nothing to process");
            return;
        }
        console.log(`  Processing ${items.length} items`);
    }
    process([]);
    process([1, 2, 3]);
}

main();
