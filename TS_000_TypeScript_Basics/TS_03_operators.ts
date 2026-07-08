// TypeScript Basics - Operators
// -----------------------------------------------------------------------------
// Operators are special symbols that perform operations on values and variables.
//
// Key concepts:
// 1. Arithmetic — +, -, *, /, %, **
// 2. Comparison — ==, ===, !=, !==, <, >, <=, >=
// 3. Logical — &&, ||, !
// 4. Bitwise — &, |, ^, ~, <<, >>
// 5. Assignment — =, +=, -=, *=, etc.
// 6. Ternary — condition ? ifTrue : ifFalse
// 7. Nullish — ??, ?.
// -----------------------------------------------------------------------------

// =============================================================================
// Arithmetic Operators
// =============================================================================

const a: number = 17;
const b: number = 5;

console.log(`a = ${a}, b = ${b}`);
console.log(`a + b  = ${a + b}`); // Addition: 22
console.log(`a - b  = ${a - b}`); // Subtraction: 12
console.log(`a * b  = ${a * b}`); // Multiplication: 85
console.log(`a / b  = ${a / b}`); // Division: 3.4
console.log(`a % b  = ${a % b}`); // Modulus: 2
console.log(`a ** b = ${a ** b}`); // Exponentiation: 1419857

// =============================================================================
// Comparison Operators
// =============================================================================

const x: number = 10;
const y: number = 20;

console.log(`\nx = ${x}, y = ${y}`);

// Loose equality (type coercion)
console.log(`x == "10":  ${x == "10"}`); // true
console.log(`x == true:  ${x == true}`); // false

// Strict equality (no type coercion) — ALWAYS prefer this
console.log(`x === "10": ${x === "10"}`); // false
console.log(`x === 10:   ${x === 10}`); // true
console.log(`x !== "10": ${x !== "10"}`); // true

console.log(`x < y:  ${x < y}`);
console.log(`x > y:  ${x > y}`);
console.log(`x <= y: ${x <= y}`);
console.log(`x >= y: ${x >= y}`);

// No chained comparisons in JS/TS (unlike Python)
// 1 < 5 < 10 — this doesn't work as expected
console.log(`\n1 < 5: ${1 < 5}`); // true
console.log(`true < 10: ${true < 10}`); // true (true coerces to 1)

// =============================================================================
// Logical Operators
// =============================================================================

const t: boolean = true;
const f: boolean = false;

console.log(`\ntrue && false: ${t && f}`);
console.log(`true || false: ${t || f}`);
console.log(`!true:         ${!t}`);

// Short-circuit evaluation
// && returns first falsy value or last value
console.log(`\n5 && 3:   ${5 && 3}`); // 3
console.log(`0 && 5:   ${0 && 5}`); // 0
// || returns first truthy value or last value
console.log(`5 || 0:    ${5 || 0}`); // 5
console.log(`0 || 'hi': ${0 || "hi"}`); // hi

// =============================================================================
// Nullish Coalescing (??)
// =============================================================================

// ?? returns right side only for null/undefined (NOT for 0, "", false)
const input: string | null = null;
const value: string = input ?? "default";
console.log(`\nnull ?? "default": ${value}`);

const zero: number = 0;

console.log(`0 ?? "default": ${zero ?? "default"}`); // 0 (not "default")
console.log(`0 || "default": ${zero || "default"}`); // "default"

// =============================================================================
// Optional Chaining (?.)
// =============================================================================

interface User {
  name: string;
  address?: {
    city: string;
    zip?: string;
  };
}

const user: User = { name: "Alice", address: { city: "NYC" } };

console.log(`\nuser.address?.city: ${user.address?.city}`);
console.log(`user.address?.zip: ${user.address?.zip}`); // undefined
console.log(`user.phone?.number: ${(user as any).phone?.number}`); // undefined

// =============================================================================
// Bitwise Operators
// =============================================================================

const bitA: number = 0b1100; // 12
const bitB: number = 0b1010; // 10

console.log(`\na = ${bitA} (${bitA.toString(2)})`);
console.log(`b = ${bitB} (${bitB.toString(2)})`);
console.log(`a & b  = ${bitA & bitB}  (${(bitA & bitB).toString(2)})`); // AND: 8
console.log(`a | b  = ${bitA | bitB}  (${(bitA | bitB).toString(2)})`); // OR: 14
console.log(`a ^ b  = ${bitA ^ bitB}  (${(bitA ^ bitB).toString(2)})`); // XOR: 6
console.log(`~a     = ${~bitA}`); // NOT: -13
console.log(`a << 2 = ${bitA << 2} (${(bitA << 2).toString(2)})`); // Left shift: 48
console.log(`a >> 2 = ${bitA >> 2} (${(bitA >> 2).toString(2)})`); // Right shift: 3

// =============================================================================
// Assignment Operators
// =============================================================================

let assignVal: number = 10;
console.log(`\nInitial: ${assignVal}`);

assignVal += 5;
console.log(`After += 5:  ${assignVal}`);

assignVal -= 3;
console.log(`After -= 3:  ${assignVal}`);

assignVal *= 2;
console.log(`After *= 2:  ${assignVal}`);

assignVal **= 2;
console.log(`After **= 2: ${assignVal}`);

assignVal %= 5;
console.log(`After %= 5:  ${assignVal}`);

// =============================================================================
// Ternary Operator
// =============================================================================

const age: number = 20;
const status: string = age >= 18 ? "adult" : "minor";
console.log(`\nAge ${age}: ${status}`);

// =============================================================================
// Typeof and instanceof
// =============================================================================

console.log("\n--- typeof ---");
console.log(`typeof 42:       ${typeof 42}`);
console.log(`typeof "hello":  ${typeof "hello"}`);
console.log(`typeof true:     ${typeof true}`);
console.log(`typeof undefined: ${typeof undefined}`);
console.log(`typeof null:     ${typeof null}`); // "object" (historic bug)
console.log(`typeof []:       ${typeof []}`);
console.log(`typeof {}:       ${typeof {}}`);

console.log("\n--- instanceof ---");
console.log(`[] instanceof Array: ${[] instanceof Array}`);
console.log(`{} instanceof Object: ${{} instanceof Object}`);
console.log(`"hello" instanceof String: ${"hello" instanceof String}`);

// =============================================================================
// Operator Precedence (highest to lowest)
// =============================================================================

// 1. () grouping
// 2. . ?. [] ()  member access / call
// 3. **          exponentiation
// 4. +x  -x  !x  ~x  typeof  void  delete  await  (unary)
// 5. *  /  %     multiplicative
// 6. +  -        additive
// 7. <<  >>  >>>  bitwise shifts
// 8. &           bitwise AND
// 9. ^           bitwise XOR
// 10. |          bitwise OR
// 11. ==  ===  !=  !==  <  >  <=  >=  in  instanceof
// 12. ??         nullish coalescing
// 13. &&         logical AND
// 14. ||         logical OR
// 15. ?:         ternary
// 16. =  +=  -=  etc.  assignment

// =============================================================================
// Usage
// =============================================================================

function main(): void {
  console.log("=== Arithmetic ===");
  console.log(`  7 + 3 = ${7 + 3}`);
  console.log(`  7 - 3 = ${7 - 3}`);
  console.log(`  7 * 3 = ${7 * 3}`);
  console.log(`  7 / 3 = ${(7 / 3).toFixed(2)}`);
  console.log(`  7 % 3 = ${7 % 3}`);
  console.log(`  7 ** 3 = ${7 ** 3}`);

  console.log("\n=== Comparison ===");
  console.log(`  5 == 5: ${5 == 5}`);
  console.log(`  5 != 3: ${5 != 3}`);
  console.log(`  5 > 3:  ${5 > 3}`);
  console.log(`  5 === "5": ${5 === "5"}`);
  console.log(`  5 !== "5": ${5 !== "5"}`);

  console.log("\n=== Logical ===");
  console.log(`  true && false: ${true && false}`);
  console.log(`  true || false: ${true || false}`);
  console.log(`  !true:         ${!true}`);

  console.log("\n=== Nullish Coalescing ===");
  console.log(`  null ?? 'default': ${null ?? "default"}`);
  console.log(`  0 ?? 'default':    ${0 ?? "default"}`);
  console.log(`  '' ?? 'default':   ${"" ?? "default"}`);

  console.log("\n=== Optional Chaining ===");
  const user: User = { name: "Alice" };
  console.log(`  user.address?.city: ${user.address?.city ?? "N/A"}`);

  console.log("\n=== Ternary ===");
  const nums = [1, 2, 3, 4, 5];
  for (const n of nums) {
    console.log(`  ${n} is ${n % 2 === 0 ? "even" : "odd"}`);
  }
}

main();
