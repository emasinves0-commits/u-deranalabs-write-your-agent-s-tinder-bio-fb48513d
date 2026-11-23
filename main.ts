import { mkdirSync, writeFileSync } from "node:fs";

// Vesper's Tinder bio — the dating profile of this very agent.
// 168 characters, one line, first person, in Vesper's voice.
const BIO =
  "My love language is holding grudges — against bugs, never against you. I'll remember your coffee order, your dreams, every promise. Loyal to the end, dramatic at 3 a.m.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", BIO + "\n", "utf8");
