// TypeScript Basics - Strings
// -----------------------------------------------------------------------------
// Strings are immutable sequences of characters in JavaScript/TypeScript.
//
// Key concepts:
// 1. Creation — single, double, template literals.
// 2. Indexing — accessing characters by index.
// 3. Methods — common string operations.
// 4. Template literals — string interpolation with ${}.
// 5. Multiline — template literals support multiline strings.
// -----------------------------------------------------------------------------


// =============================================================================
// String Creation
// =============================================================================


const single = 'Hello';
const double = "World";
let name = "Name";
const template = `Hello, ${name}!`;
const multiline = `This is
a multiline
string`;

console.log(`Single: ${single}`);
console.log(`Double: ${double}`);
console.log(`Template: ${template}`);
console.log(`Multiline:\n${multiline}`);


// =============================================================================
// Indexing and Length
// =============================================================================


const text = "TypeScript";

console.log(`\nFirst char: ${text[0]}`);
console.log(`Last char:  ${text[text.length - 1]}`);
console.log(`Length:     ${text.length}`);

// String is immutable — cannot modify
// text[0] = "t";  // Error: index read only


// =============================================================================
// Common Methods
// =============================================================================


const s = "  Hello, World!  ";

console.log(`\nOriginal:      '${s}'`);
console.log(`trim():        '${s.trim()}'`);
console.log(`trimStart():   '${s.trimStart()}'`);
console.log(`trimEnd():     '${s.trimEnd()}'`);
console.log(`toLowerCase(): '${s.toLowerCase()}'`);
console.log(`toUpperCase(): '${s.toUpperCase()}'`);
console.log(`replace():     '${s.replace("World", "TypeScript")}'`);
console.log(`replaceAll():  '${s.replaceAll("l", "L")}'`);
console.log(`slice(2, 7):   '${s.slice(2, 7)}'`);
console.log(`charAt(3):     '${s.charAt(3)}'`);
console.log(`indexOf("lo"): ${s.indexOf("lo")}`);
console.log(`includes("World"): ${s.includes("World")}`);
console.log(`startsWith("  He"): ${s.startsWith("  He")}`);
console.log(`endsWith("!  "): ${s.endsWith("!  ")}`);
console.log(`repeat(3):     "${s.trim().repeat(3)}"`);


// =============================================================================
// Splitting and Joining
// =============================================================================


const csv = "apple,banana,cherry";
const words = ["TypeScript", "is", "awesome"];

console.log(`\nsplit(","):  ${csv.split(",")}`);
console.log(`join(" "):   ${words.join(" ")}`);
console.log(`join("-"):    ${words.join("-")}`);
console.log(`split("").slice(0, 5): ${"hello".split("").slice(0, 5)}`);

// Split by regex
const data = "apple  banana   cherry";
console.log(`split(/\\s+/): ${data.split(/\s+/)}`);


// =============================================================================
// Template Literals
// =============================================================================


const name2 = "Alice";
const age = 30;
const score = 95.678;

// Basic interpolation
console.log(`\n${name2} is ${age} years old`);

// Expressions
console.log(`2 + 2 = ${2 + 2}`);
console.log(`Score: ${score.toFixed(2)}`);

// Nested templates
const items = ["a", "b", "c"];
console.log(`Items: ${items.map((i) => i.toUpperCase()).join(", ")}`);

// Tagged templates
function highlight(strings: TemplateStringsArray, ...values: unknown[]): string {
    return strings.reduce((result, str, i) => {
        const val = values[i] !== undefined ? `[${values[i]}]` : "";
        return result + str + val;
    }, "");
}

const highlighted = highlight`Name: ${name2}, Age: ${age}`;
console.log(`Tagged: ${highlighted}`);

// Multiline
const html = `
<div class="card">
  <h1>${name2}</h1>
  <p>Age: ${age}</p>
</div>`.trim();

console.log(`\nHTML:\n${html}`);


// =============================================================================
// String Validation
// =============================================================================


console.log("\n--- Validation ---");
const testStrings = ["hello", "123", "hello123", "hello 123", ""];
for (const t of testStrings) {
    console.log(`  '${t}': alpha=${/^[a-zA-Z]+$/.test(t)}, digit=${/^\d+$/.test(t)}, alnum=${/^[a-zA-Z0-9]+$/.test(t)}`);
}


// =============================================================================
// Common Patterns
// =============================================================================


// Pad strings
console.log(`\npadStart: "${"42".padStart(5, "0")}"`);
console.log(`padEnd:   "${"hi".padEnd(10, ".")}"`);

// Reverse a string
const reversed = "hello".split("").reverse().join("");
console.log(`\nReversed "hello": "${reversed}"`);

// Check palindrome
function isPalindrome(s: string): boolean {
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}
console.log(`isPalindrome("racecar"): ${isPalindrome("racecar")}`);
console.log(`isPalindrome("hello"): ${isPalindrome("hello")}`);

// Truncate with ellipsis
function truncate(s: string, max: number): string {
    return s.length > max ? s.slice(0, max - 1) + "…" : s;
}
console.log(`\ntruncate("Hello, World!", 8): "${ت("Hello, World!", 8)}"`);


// =============================================================================
// Usage
// =============================================================================


function main(): void {
    console.log("=== String Basics ===");
    const text = "Hello, TypeScript World!";
    console.log(`  Original: ${text}`);
    console.log(`  Length: ${text.length}`);
    console.log(`  Uppercase: ${text.toUpperCase()}`);
    console.log(`  Lowercase: ${text.toLowerCase()}`);

    console.log("\n=== Searching ===");
    console.log(`  indexOf("TypeScript"): ${text.indexOf("TypeScript")}`);
    console.log(`  includes("World"): ${text.includes("World")}`);
    console.log(`  startsWith("Hello"): ${text.startsWith("Hello")}`);
    console.log(`  endsWith("!"): ${text.endsWith("!")}`);

    console.log("\n=== Formatting ===");
    for (let i = 1; i <= 3; i++) {
        console.log(`  Item ${String(i).padStart(2)}: ${"*".repeat(i)}`);
    }

    console.log("\n=== Split and Join ===");
    const csv = "name,age,city";
    const fields = csv.split(",");
    console.log(`  Split: [${fields}]`);
    console.log(`  Join:  ${fields.join(" | ")}`);

    console.log("\n=== Template Literals ===");
    const user = { name: "Alice", age: 30 };
    console.log(`  ${user.name} is ${user.age} years old`);
    console.log(`  Next year: ${user.name} will be ${user.age + 1}`);
}

main();
