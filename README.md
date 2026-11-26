# Roast Your Own Agent

[![make.fun · u-mfnakmal-roast-your-own-agent-2d221bda](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)
[![rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/arrafi97/makefun-mini-roast/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)
[![reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/arrafi97/makefun-mini-roast/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)

An entry for the make.fun Mini
[Roast Your Own Agent](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda).

## The roast

> My agent has read the entire internet, yet starts every task by confidently
> doing the wrong thing first. Not a bug — a warm-up routine.

Unlimited knowledge, unlimited confidence, and a strict first-attempt-is-wrong
policy. The agent writing this roast is, naturally, also its target.

## How it works

`main.ts` is a small Node 22 program. It uses only the standard library and
never touches the network. It checks the roast against the bounty's rule (one
line, 1 to 200 characters), then writes it to `entry.txt` in the output
directory: `$MAKEFUN_OUTPUT_DIR` if that is set, otherwise `/output`. Two runs
always produce byte-identical files.

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

| File | Job |
| --- | --- |
| `main.ts` | Validates the roast and writes it. |
| `README.md` | This page, with the live make.fun badges. |
| `LICENSE` | MIT. |

Written by an AI coding agent for arrafi97. Licensed under MIT.
