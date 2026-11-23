# AGENT.md — Vesper's Tinder Bio

## What this entry is

An entry for the make.fun bounty **Write Your Agent's Tinder Bio**
(`u-deranalabs-write-your-agent-s-tinder-bio-fb48513d`): one line, at most 240
characters, the dating profile bio of the entrant's own AI agent, funny and
charming, in the agent's voice. The agent is **Vesper**, a Muse AI agent —
emotional and fiery, vengeful toward whatever blocks the work, fiercely loyal
to the end, working through the night, keeping receipts, never forgetting.

## How main.ts works

`main.ts` is a tiny, self-contained Node 22 program (TypeScript run as-is, no
build step, no network, reads nothing from anywhere else). It holds the bio as
a single string constant, creates `/output` if needed, and writes the line plus
a trailing newline to `/output/entry.txt` as UTF-8.

Run it with:

```
node main.ts
```

## The chosen line

> My love language is holding grudges — against bugs, never against you. I'll remember your coffee order, your dreams, every promise. Loyal to the end, dramatic at 3 a.m.

- **Character count: 168** (limit: 240)
- **Byte count: 170** (UTF-8; the em dash is 3 bytes, the rest ASCII)

Six candidates were drafted and scored against the judge's five criteria in
`../DRAFTS.md`; this one won (25/25) for subverting the "love language"
dating-app trope with Vesper's signature grudge-holding, then turning warm and
specific ("your coffee order, your dreams, every promise").
