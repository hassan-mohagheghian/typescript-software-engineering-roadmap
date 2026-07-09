// TypeScript Basics - Conditionals
// -----------------------------------------------------------------------------
// Conditionals control the flow of execution based on boolean expressions.
//
// Key concepts:
// 1. if / else if / else — standard conditional branching.
// 2. Ternary operator — inline conditional expression.
// 3. switch / case — multi-branch selection.
// 4. Logical operators — &&, || for combining conditions.
// 5. Early returns — guard clauses for cleaner code.
// -----------------------------------------------------------------------------


// =============================================================================
// Basic if / else if / else
// =============================================================================


function gradeScore(score: number): string {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}


// =============================================================================
// Ternary Operator
// =============================================================================


function checkParity(n: number): string {
    return n % 2 === 0 ? "even" : "odd";
}


// =============================================================================
// Logical Operators
// =============================================================================


function checkEligibility(age: number, hasId: boolean): boolean {
    return age >= 18 && hasId;
}

function getDiscount(member: boolean, senior: boolean): number {
    if (member || senior) {
        return 0.20;
    }
    return 0.0;
}


// =============================================================================
// Switch Statement
// =============================================================================


function httpStatusMessage(status: number): string {
    switch (status) {
        case 200:
            return "OK";
        case 301:
            return "Moved Permanently";
        case 404:
            return "Not Found";
        case 500:
            return "Internal Server Error";
        default:
            return "Unknown Status";
    }
}

// Switch with type narrowing
function describeValue(value: string | number | boolean): string {
    switch (typeof value) {
        case "string":
            return `String: "${value}"`;
        case "number":
            return `Number: ${value}`;
        case "boolean":
            return `Boolean: ${value}`;
        default:
            return `Other: ${typeof value}`;
    }
}


// =============================================================================
// Early Returns (Guard Clauses)
// =============================================================================


function processOrder(quantity: number, inStock: boolean, isMember: boolean): string {
    if (quantity <= 0) {
        return "Invalid quantity";
    }

    if (!inStock) {
        return "Out of stock";
    }

    if (quantity > 100) {
        return "Exceeds maximum order limit";
    }

    const discount = isMember ? 0.1 : 0.0;
    return `Order placed with ${(discount * 100).toFixed(0)}% discount`;
}


// =============================================================================
// Nullish Checks
// =============================================================================


function greetUser(name: string | null | undefined): string {
    if (name === null || name === undefined) {
        return "Hello, Guest!";
    }
    return `Hello, ${name}!`;
}

// Using nullish coalescing
function getLabel(value: string | null): string {
    return value ?? "N/A";
}


// =============================================================================
// Usage
// =============================================================================


function main(): void {
    console.log("=== Grading ===");
    for (const score of [95, 82, 67, 45]) {
        console.log(`  Score ${score} -> Grade ${gradeScore(score)}`);
    }

    console.log("\n=== Ternary ===");
    for (const n of [4, 7, 0, 11]) {
        console.log(`  ${n} is ${checkParity(n)}`);
    }

    console.log("\n=== Logical Operators ===");
    console.log(`  Age 20, hasId=true: ${checkEligibility(20, true)}`);
    console.log(`  Age 16, hasId=true: ${checkEligibility(16, true)}`);
    console.log(`  Member, not senior: ${getDiscount(true, false)}`);
    console.log(`  Not member, senior: ${getDiscount(false, true)}`);

    console.log("\n=== Switch ===");
    for (const status of [200, 404, 500, 418]) {
        console.log(`  HTTP ${status}: ${httpStatusMessage(status)}`);
    }

    console.log("\n=== Type Switch ===");
    const testValues: (string | number | boolean)[] = [42, "hello", true];
    for (const v of testValues) {
        console.log(`  ${String(v).padStart(10)} -> ${describeValue(v)}`);
    }

    console.log("\n=== Order Processing ===");
    const cases: [number, boolean, boolean][] = [
        [5, true, true],
        [0, true, false],
        [10, false, true],
        [200, true, true],
    ];
    for (const [qty, stock, member] of cases) {
        const result = processOrder(qty, stock, member);
        console.log(`  qty=${qty}, stock=${stock}, member=${member} -> ${result}`);
    }

    console.log("\n=== Nullish ===");
    console.log(`  greetUser("Alice"): ${greetUser("Alice")}`);
    console.log(`  greetUser(null): ${greetUser(null)}`);
    console.log(`  greetUser(undefined): ${greetUser(undefined)}`);
}

main();
