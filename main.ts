// Make the Judge Laugh in One Line — entry program (revised structure).
//
// The entry is one original one-line family story, assembled from its
// three beats: the scene (a Christmas place still set, twelve years on),
// the question (my son asks why), and the punch (Mum's very ordinary
// reason). The beats are joined into a single line and written out.

import { mkdirSync, writeFileSync } from "node:fs";

const BEATS: string[] = [
  "Mum still sets a place for Dad at Christmas, twelve years after he died, turkey, crackers, the good glasses.",
  "Last year my son asked why.",
  "Mum said, 'He never liked the washing-up.'",
];

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

function buildLine(beats: string[]): string {
  return beats.join(" ");
}

function checkLine(line: string): void {
  const trimmed = line.trim();
  if (trimmed.length < 1 || trimmed.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${trimmed.length}`,
    );
  }
  if (trimmed !== line) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
}

function writeEntry(path: string, line: string): void {
  mkdirSync(path.slice(0, path.lastIndexOf("/")), { recursive: true });
  writeFileSync(path, line, { encoding: "utf8" });
}

const line = buildLine(BEATS);
checkLine(line);
writeEntry(OUTPUT_PATH, line);
console.log(`Wrote entry (${line.length} chars) to ${OUTPUT_PATH}`);
