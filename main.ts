// Describe Your Ex in One Word — entry: "Obsolete"
//
// The whole entry is a single verdict: an ex who no longer runs, no longer
// updates, and no longer fits anywhere in your life. Not broken, not hated —
// just superseded, like software nobody installs anymore.
//
// This program writes exactly that one word to entry.txt — nothing more:
// no trailing newline, no extra whitespace, the whole file is 8 bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one word. Keep it a single token: the bounty asks for one word only.
const WORD = "Obsolete";

// The grader runs with no environment set, so /output is the default.
// OUTPUT_DIR exists only so the program can be tested locally.
const outputDir = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), WORD, { encoding: "utf8" });
