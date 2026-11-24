// make.fun entry — "Everyday Things, Two Lines, Longer Run"
//
// What this program does: it produces the competition artifact,
// a file called entry.txt holding exactly two lines of plain text
// that explain a toaster to a 10-year-old.
//
// The explanation leans on a single concrete picture and nothing
// else. Line one says a toaster is a little elevator for bread:
// the slice rides down into a hot basement and comes back brown
// and crunchy. Line two keeps the picture honest — the ride down,
// the heat, and the pop back up are all real, but the picture
// leaves out the glowing wires that actually do the cooking,
// something no elevator has. One analogy, two sentences, and the
// second sentence owns up to where the analogy stops.
//
// The two sentences below are the entry itself. They are fixed
// copy: do not reword them, do not add a third line, do not add
// any heading or trailing commentary. The program only ever
// writes those two lines, joined by one newline and followed by
// a final newline, into <output dir>/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Line one — the whole explanation in one sentence, built on the
// elevator picture.
const FIRST_LINE =
  "A toaster is a little elevator that carries your bread down into a hot basement and brings it back brown and crunchy.";

// Line two — the honest accounting of what the elevator picture
// gets right and what it leaves out.
const SECOND_LINE =
  "It works because the bread really does ride down, get hot, and pop back up, but it leaves out the glowing wires doing the cooking, which no elevator has.";

// Assemble the artifact: the two lines in order, separated by a
// single newline, with a trailing newline so the file ends cleanly.
function composeEntry(): string {
  return [FIRST_LINE, SECOND_LINE].join("\n") + "\n";
}

// The harness sets MAKEFUN_OUTPUT_DIR; fall back to /output when
// it is unset or empty so the program still works when run by hand.
function resolveOutputDir(): string {
  const configured = process.env.MAKEFUN_OUTPUT_DIR;
  return configured && configured.length > 0 ? configured : "/output";
}

function main(): void {
  const dir = resolveOutputDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), composeEntry(), "utf8");
}

main();
