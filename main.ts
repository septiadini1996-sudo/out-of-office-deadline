// SPDX-License-Identifier: MIT
// Out of Office, Deadline — one-line office-life joke for make.fun.
// The program writes a single joke (under 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The printer jammed. IT opened a ticket, the ticket became a meeting, and the meeting got rescheduled to next week.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
