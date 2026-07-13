// TypeScript Basics - Objects
// -----------------------------------------------------------------------------
// Objects are collections of key-value pairs with type-safe access.
//
// Key concepts:
// 1. Type annotations — inline or named types.
// 2. Optional properties — ? for optional fields.
// 3. Readonly properties — readonly modifier.
// 4. Index signatures — dynamic keys.
// 5. Intersection & Union — combining object types.
// -----------------------------------------------------------------------------

// =============================================================================
// Object Creation
// =============================================================================

// Inline type annotation
const person: { name: string; age: number; city: string } = {
  name: "Alice",
  age: 30,
  city: "NYC",
};

console.log(`Person: ${JSON.stringify(person)}`);

// Type alias
type User = {
  name: string;
  age: number;
  email?: string; // optional
};

const user: User = { name: "Bob", age: 25 };
const userWithEmail: User = { name: "Charlie", age: 35, email: "c@test.com" };

console.log(`User: ${JSON.stringify(user)}`);
console.log(`User with email: ${JSON.stringify(userWithEmail)}`);

// Interface
interface Product {
  id: number;
  name: string;
  price: number;
  readonly createdAt: Date; // readonly
}

const product: Product = {
  id: 1,
  name: "Laptop",
  price: 999,
  createdAt: new Date(),
};

console.log(`Product: ${JSON.stringify(product)}`);
// product.createdAt = new Date();  // Error: readonly

// =============================================================================
// Accessing Values
// =============================================================================

const config = { host: "localhost", port: 8080, debug: true };

// Bracket notation
console.log(`\nHost: ${config["host"]}`);

// Dot notation
console.log(`Port: ${config.port}`);

// Optional chaining
const user2: User = { name: "Test", age: 20 };
console.log(`Email: ${user2.email ?? "N/A"}`);

// =============================================================================
// Modifying Objects
// =============================================================================

const data: Record<string, number> = { a: 1, b: 2 };

// Add/Update
data["c"] = 3;
data["a"] = 10;
console.log(`\nAfter add/update: ${JSON.stringify(data)}`);

// Delete
delete data["c"];
console.log(`After delete: ${JSON.stringify(data)}`);

// Object.assign
const merged = Object.assign({}, { x: 1 }, { y: 2 }, { z: 3 });
console.log(`Merged: ${JSON.stringify(merged)}`);

// Spread operator
const spread = { ...{ a: 1 }, ...{ b: 2 }, ...{ c: 3 } };
console.log(`Spread: ${JSON.stringify(spread)}`);

// =============================================================================
// Object Methods
// =============================================================================

const user3 = { name: "Bob", age: 25, role: "admin" };

console.log(`\nKeys: ${Object.keys(user3)}`);
console.log(`Values: ${Object.values(user3)}`);
console.log(`Entries: ${JSON.stringify(Object.entries(user3))}`);

// Check existence
console.log(`\n"name" in user3: ${"name" in user3}`);
console.log(`"email" in user3: ${"email" in user3}`);

// hasOwnProperty
console.log(
  `hasOwnProperty("name"): ${Object.prototype.hasOwnProperty.call(user3, "name")}`,
);

// Length
console.log(`Length: ${Object.keys(user3).length}`);

// =============================================================================
// Iteration
// =============================================================================

const scores = { Alice: 85, Bob: 92, Charlie: 78 };

console.log("\n--- for...in ---");
for (const name in scores) {
  console.log(`  ${name}: ${scores[name as keyof typeof scores]}`);
}

console.log("\n--- Object.entries ---");
for (const [name, score] of Object.entries(scores)) {
  console.log(`  ${name}: ${score}`);
}

console.log("\n--- Object.keys ---");
for (const name of Object.keys(scores)) {
  console.log(`  ${name}`);
}

console.log("\n--- Object.values ---");
for (const score of Object.values(scores)) {
  console.log(`  ${score}`);
}

// =============================================================================
// Index Signatures
// =============================================================================

// Dynamic keys
type StringMap = Record<string, number>;
const wordLengths: StringMap = { hello: 5, world: 5, typescript: 10 };
console.log(`\nWord lengths: ${JSON.stringify(wordLengths)}`);

// With known + dynamic keys
interface FlexibleDict {
  [key: string]: number;
  known: number; // must be same type as index signature
}

const dict: FlexibleDict = { known: 1, dynamic: 2, another: 3 };

// =============================================================================
// Nested Objects
// =============================================================================

interface Company {
  name: string;
  departments: {
    [name: string]: {
      headcount: number;
      lead: string;
    };
  };
}

const company: Company = {
  name: "TechCorp",
  departments: {
    engineering: { headcount: 50, lead: "Alice" },
    marketing: { headcount: 30, lead: "Bob" },
  },
};

console.log(`\nCompany: ${company.name}`);
console.log(`Engineering lead: ${company.departments.engineering.lead}`);

// Optional chaining for nested access
const lead = company.departments?.engineering?.lead;
console.log(`Lead: ${lead}`);

// =============================================================================
// Type Narrowing with Objects
// =============================================================================

type Success = { ok: true; data: string };
type Failure = { ok: false; error: string };
type Result = Success | Failure;

function handleResult(result: Result): string {
  if (result.ok) {
    return `Data: ${result.data}`;
  }
  return `Error: ${result.error}`;
}

console.log(`\n${handleResult({ ok: true, data: "hello" })}`);
console.log(`${handleResult({ ok: false, error: "not found" })}`);

// =============================================================================
// Object.freeze and Object.seal
// =============================================================================

// Object.freeze — makes all properties readonly
const frozen = Object.freeze({ x: 1, y: 2 });
// frozen.x = 3;  // Error in strict mode (silently fails otherwise)
console.log(`\nFrozen: ${JSON.stringify(frozen)}`);

// Object.seal — prevents adding/removing properties
const sealed = Object.seal({ x: 1, y: 2 });
sealed.x = 3; // OK — can modify existing
// sealed.z = 4;  // Error — cannot add new

// =============================================================================
// Usage
// =============================================================================

function main(): void {
  console.log("=== Object Creation ===");
  const a = { x: 1, y: 2, z: 3 };
  const b = Object.fromEntries([
    ["a", 1],
    ["b", 2],
  ]);
  console.log(`  a = ${JSON.stringify(a)}`);
  console.log(`  b = ${JSON.stringify(b)}`);

  console.log("\n=== Accessing ===");
  console.log(`  a.x = ${a.x}`);
  console.log(`  a["y"] = ${a["y"]}`);

  console.log("\n=== Modifying ===");
  const obj = { a: 1, b: 2, c: 3 };
  obj["c"] = 3;
  console.log(`  After add: ${JSON.stringify(obj)}`);

  console.log("\n=== Iteration ===");
  for (const [key, value] of Object.entries(obj)) {
    console.log(`  ${key}: ${value}`);
  }

  console.log("\n=== Array Transformation ===");
  const names = ["alice", "bob", "charlie"];
  const nameMap = Object.fromEntries(names.map((n) => [n, n.toUpperCase()]));
  console.log(`  ${JSON.stringify(nameMap)}`);

  console.log("\n=== Nested ===");
  const users = {
    u1: { name: "Alice", age: 30 },
    u2: { name: "Bob", age: 25 },
  };
  for (const [uid, info] of Object.entries(users)) {
    console.log(`  ${uid}: ${info.name} (${info.age})`);
  }
}

main();
