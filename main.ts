import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, 186 characters, within the 1-220 character gate.
// Writes the entry bytes exactly, with no trailing newline.
const entry =
  "The Butler Curtain is a shower curtain with tiny suction-cup hands that holds itself politely aside and bows whenever you step in, ending its shameful habit of clinging to wet strangers.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
