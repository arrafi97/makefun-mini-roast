// make.fun entry: "Roast Your Own Agent"
// Writes one line (at most 200 characters) to <output>/entry.txt.
// Node 22 standard library only, no network, deterministic output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent has read the entire internet, yet starts every task by confidently doing the wrong thing first. Not a bug — a warm-up routine.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim() === "") {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${chars} chars)`);
