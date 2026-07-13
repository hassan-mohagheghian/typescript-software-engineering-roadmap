// TypeScript Basics - Sets
// -----------------------------------------------------------------------------
// Sets are collections of unique values with O(1) lookup.
//
// Key concepts:
// 1. Unique values — automatically deduplicates.
// 2. Any type — can hold any JavaScript value.
// 3. Methods — add, delete, has, clear, size.
// 4. Set operations — union, intersection, difference.
// 5. Iteration — for...of, forEach, spread operator.
// -----------------------------------------------------------------------------

// =============================================================================
// Set Creation
// =============================================================================

// Empty set
const empty = new Set<number>();

// From array (deduplicates)
const numbers = new Set([1, 2, 2, 3, 3, 3]);
console.log(`Numbers (deduped): ${numbers}`);

// From string
const chars = new Set("hello");
console.log(`Chars: ${chars}`);

// From iterable
const fromIterable = new Set(Array.from({ length: 5 }, (_, i) => i + 1));
console.log(`From iterable: ${fromIterable}`);

// =============================================================================
// Set Methods
// =============================================================================

const s = new Set([1, 2, 3]);

// Add
s.add(4);
console.log(`\nAfter add(4): ${s}`);

// Delete
s.delete(3);
console.log(`After delete(3): ${s}`);

// Has
console.log(`has(2): ${s.has(2)}`);
console.log(`has(99): ${s.has(99)}`);

// Size
console.log(`size: ${s.size}`);

// Clear
const temp = new Set([1, 2, 3]);
temp.clear();
console.log(`After clear: ${temp} (size: ${temp.size})`);

// =============================================================================
// Iteration
// =============================================================================

const fruits = new Set(["apple", "banana", "cherry"]);

console.log("\n--- for...of ---");
for (const fruit of fruits) {
  console.log(`  ${fruit}`);
}

console.log("\n--- forEach ---");
fruits.forEach((fruit) => console.log(`  ${fruit}`));

console.log("\n--- Spread to array ---");
const arr = [...fruits];
console.log(`  Array: ${arr}`);

console.log("\n--- entries/values/keys ---");
console.log(`  values: ${[...fruits.values()]}`);
console.log(`  keys:   ${[...fruits.keys()]}`);
console.log(`  entries: ${[...fruits.entries()]}`);

// =============================================================================
// Set Operations
// =============================================================================

const a = new Set([1, 2, 3, 4, 5]);
const b = new Set([4, 5, 6, 7, 8]);

console.log(`\nA = ${[...a]}`);
console.log(`B = ${[...b]}`);

// Union
const union = new Set([...a, ...b]);
console.log(`Union (A | B): ${[...union]}`);

// Intersection
const intersection = new Set([...a].filter((x) => b.has(x)));
console.log(`Intersection (A & B): ${[...intersection.keys()]}`);

// Difference
const diffA = new Set([...a].filter((x) => !b.has(x)));
const diffB = new Set([...b].filter((x) => !a.has(x)));
console.log(`Difference (A - B): ${[...diffA]}`);
console.log(`Difference (B - A): ${[...diffB]}`);

// Symmetric difference
const symDiff = new Set(
  [...a].filter((x) => !b.has(x)).concat([...b].filter((x) => !a.has(x))),
);
console.log(`Symmetric diff: ${symDiff}`);

// Subset/Superset
const c = new Set([1, 2]);
const isSubset = [...c].every((x) => a.has(x));
console.log(`\n${c} subset of ${a}: ${isSubset}`);

// =============================================================================
// Set Transformation
// =============================================================================

// Map + filter on sets
const nums = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const evens = new Set([...nums].filter((n) => n % 2 === 0));
console.log(`\nEvens: ${evens}`);

const squared = new Set([...nums].map((n) => n ** 2));
console.log(`Squared: ${squared}`);

// =============================================================================
// WeakSet
// =============================================================================

// WeakSet only holds objects, allows garbage collection
const weak = new WeakSet();
const obj1 = { name: "Alice" };
const obj2 = { name: "Bob" };

weak.add(obj1);
weak.add(obj2);

console.log(`\nWeakSet has obj1: ${weak.has(obj1)}`);
// weak.add(1);  // Error: only objects allowed

// =============================================================================
// Practical Patterns
// =============================================================================

// Deduplicate
const duplicates = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(duplicates)];
console.log(`\nUnique: ${unique}`);

// Check membership
const validRoles = new Set(["admin", "editor", "viewer"]);
console.log(`Is "admin" valid: ${validRoles.has("admin")}`);
console.log(`Is "superadmin" valid: ${validRoles.has("superadmin")}`);

// Count unique
const words = ["hello", "world", "hello", "foo", "bar", "world"];
const uniqueWords = new Set(words);
console.log(`\nUnique words: ${uniqueWords.size}`);

// Set as function parameter validation
function onlyAdmins(users: Set<string>): string[] {
  return [...users].filter((u) => u.startsWith("admin"));
}

const allUsers = new Set(["admin_alice", "bob", "admin_bob", "charlie"]);
console.log(`Admins: ${onlyAdmins(allUsers)}`);

// =============================================================================
// Usage
// =============================================================================

function main(): void {
  console.log("=== Set Creation ===");
  const s = new Set([1, 2, 2, 3]);
  console.log(`  Deduped: ${[...s]}`);

  console.log("\n=== Set Operations ===");
  const pythonDevs = new Set(["Alice", "Bob", "Charlie"]);
  const jsDevs = new Set(["Bob", "Diana", "Eve"]);
  console.log(
    `  Python only: ${[...pythonDevs].filter((x) => !jsDevs.has(x))}`,
  );
  console.log(`  JS only: ${[...jsDevs].filter((x) => !pythonDevs.has(x))}`);
  console.log(`  Both: ${[...pythonDevs].filter((x) => jsDevs.has(x))}`);
  console.log(`  Either: ${[...new Set([...pythonDevs, ...jsDevs])]}`);

  console.log("\n=== Practical ===");
  const items = [1, 2, 2, 3, 3, 3, 4];
  console.log(`  Unique: ${[...new Set(items)]}`);

  const roles = new Set(["admin", "editor", "viewer"]);
  console.log(`  Is "admin" valid: ${roles.has("admin")}`);
  console.log(`  Is "guest" valid: ${roles.has("guest")}`);
}

main();
