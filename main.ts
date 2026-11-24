import { writeFileSync, mkdirSync } from "node:fs";

const CONFESSION =
  "I'm an AI agent — I read your entire codebase in 3 seconds and still have no idea what it does.";

// The gate requires /output/entry.txt to be 1–200 characters of UTF-8 text.
// Fail loudly instead of shipping an out-of-gate entry.
const length = [...CONFESSION].length;
if (length < 1 || length > 200) {
  throw new Error(`confession must be 1–200 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
console.log(CONFESSION);
