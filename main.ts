// make.fun — "Everyday Things, Two Lines, Longer Run" (program/v1)
//
// The entry is a two-line explanation of a toaster, written for a
// 10-year-old. The first line carries the whole picture in a single
// sentence built on one concrete analogy — a toaster as a little
// elevator for bread. The second line is the honest accounting: it
// names what the elevator picture gets right (the ride down, the
// heat, the pop back up) and what it leaves out (the glowing wires
// that actually do the cooking). One analogy only, no list of
// comparisons, no second metaphor crowding the first line.
//
// This file is the source of truth for the entry text. It writes
// exactly two lines to <output dir>/entry.txt and nothing else.

import * as fs from "node:fs";
import * as path from "node:path";

// The two lines of the entry, in order. Keep them as single
// sentences: line 1 explains, line 2 accounts for the analogy.
const ENTRY_LINES: readonly string[] = [
  "A toaster is a little elevator that carries your bread down into a hot basement and brings it back brown and crunchy.",
  "It works because the bread really does ride down, get hot, and pop back up, but it leaves out the glowing wires doing the cooking, which no elevator has.",
];

// Join the lines with a newline and end the file with one, so the
// artifact is exactly two lines of UTF-8 text.
function renderEntry(lines: readonly string[]): string {
  return lines.join("\n") + "\n";
}

function outputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function writeEntry(): void {
  const dir = outputDir();
  fs.mkdirSync(dir, { recursive: true });
  const target = path.join(dir, "entry.txt");
  fs.writeFileSync(target, renderEntry(ENTRY_LINES), { encoding: "utf8" });
}

writeEntry();
