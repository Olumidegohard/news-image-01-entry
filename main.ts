// news-image-01 entry (Node 22, standard library only).
// The image beside this file sums up the world's news of Friday 13 November 2026:
// the FAA lifting its nationwide ground stop, Nvidia chief Jensen Huang
// resigning, and China's Pacific naval drills around Taiwan.
// The program copies that image to the output directory as entry.png.
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
