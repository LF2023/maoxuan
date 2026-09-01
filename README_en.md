# Mao Xuan · Strategy & Contradiction Analysis · `/mxs`

Repo **mxskill**, slash command **`/mxs`**.

Turns reusable methods from *Selected Works of Mao Zedong* into four output lines: facts to verify → principal contradiction → stop-doing list → done-when. Not slogans.

**Three paths (fastest first)**

1. WeChat search **问问教员**, or scan the code below  
2. Agent: `npx -y skills add LF2023/mxskill -g`, then `/mxs`  
3. [Chinese quick start](./新手入门.md)

## Quick start (Agent)

After install, paste a real situation:

```
/mxs I'm running private-domain, ads, and content at once and drowning. What do I prioritize?
```

You should get four lines: facts to verify → principal-contradiction hypothesis → stop-doing list → done-when. Not an even to-do list.

## Fastest path: WeChat mini program (no install)

Search **问问教员** in WeChat, or scan the code. Drop in a real problem — no Agent setup.

![问问教员 · WeChat mini program](./docs/maoxuan-miniprogram.jpg)

> Agent install is in the Install section below.

## What it solves

- When the goal is fuzzy: investigate first, then decompose — not prescribing from intuition.
- When many factors are tangled: identify which one is the principal contradiction that moves everything else.
- When you're at a resource disadvantage: concentrate superior force and destroy the enemy one by one.
- When the task is long-running: sequence phases and rhythm, and hold morale steady.

## The 10 methodology units

| Unit | Topic | One-liner |
|---|---|---|
| U1 | Investigation & Research | No investigation, no right to speak |
| U2 | Grasp the Principal Contradiction | Pin down the principal contradiction and everything else falls into place |
| U3 | Contradiction Analysis | Look at problems by splitting them into two |
| U4 | Seek Truth from Facts | Find the pattern starting from the real object |
| U5 | Despise Strategically / Take Seriously Tactically | Dare to think big for the long run, fight every battle for real |
| U6 | Concentrate Superior Force | Overwhelm locally, annihilate one by one |
| U7 | Protracted War & Stages | Break the big goal into stages, accept the lows |
| U8 | Mass Line | From the masses, to the masses |
| U9 | "Play the Piano" | Coordinate multiple fronts in balance |
| U10 | Concrete Analysis of Concrete Conditions | No move works everywhere |

Full content in [SKILL.md](./skills/mxs/SKILL.md); trigger-scenario index in [INDEX.md](./skills/mxs/INDEX.md); trigger / anti-misfire tests in [test-prompts.json](./test-prompts.json).

## Trigger words

> strategy, principal contradiction, investigation, analyze the situation, how to plan, how to play it, how to break through with limited resources

## Usage examples

A few real scenarios showing how the skill is triggered, which unit it applies, and what it produces.

**Scenario 1 · Too many fronts, can't prioritize (U2 Grasp the Principal Contradiction)**

> User: I'm pulling private traffic, running ads, and making content all at once — can't keep up. How do I prioritize?
>
> Skill: First identify which line is the root cause driving the others (e.g. "visitors come but don't convert"), instead of an evenly-spread to-do list. Lock the main target, park the rest.
>
> Expected shape: facts to verify → principal-contradiction hypothesis → drop list → exit condition. Full sample in [SKILL.md](./skills/mxs/SKILL.md).

**Scenario 2 · Team at a disadvantage, how to win (U6 Concentrate Superior Force)**

> User: Our team is only 3 people; the competitor has 30. How can we possibly win?
>
> Skill: Pick one local front you most need to win, pour resources past the tipping point to build an overwhelming advantage, and take them one at a time. Also give a "drop list" — wanting everything is the same as focusing on nothing.

**Scenario 3 · Plan from 0 to 1 (U7 Protracted War & Stages)**

> User: My boss wants me to build this new business from zero and show results in six months. How do I plan?
>
> Skill: Break it into defensive / stalemate / counteroffensive phases, each phase watching only one core metric. Don't panic at the stalemate phase — push per the plan; don't use stage theory as an excuse to delay.

**Scenario 4 · Afraid of building for yourself (U8 Mass Line)**

> User: I want to build a feature but I'm afraid it's just self-indulgence. How do I make sure it's what users actually want?
>
> Skill: Collect users' raw words and behavior on the front line → boil them into hypotheses → validate in a small release → loop the feedback back in. The plan comes from real users and returns to them for verification.

More trigger / anti-misfire cases in [test-prompts.json](./test-prompts.json).

## Install

Scanning the WeChat mini program above is still the fastest path. For an Agent Skill:

```bash
npx -y skills add LF2023/mxskill -g
```

The slash command is **`/mxs`**. Example: `/mxs growth stalled, which problem first?`

<details>
<summary>Or git clone into each platform's skills directory</summary>

| Platform | Command |
|---|---|
| WorkBuddy (user-level, all projects) | `git clone https://github.com/LF2023/mxskill.git ~/.workbuddy/skills/mxskill` |
| WorkBuddy (project-level, this project only) | `git clone https://github.com/LF2023/mxskill.git <your-project>/.workbuddy/skills/mxskill` |
| Claude Code | `git clone https://github.com/LF2023/mxskill.git ~/.claude/skills/mxskill` |
| Codex (OpenAI) | `git clone https://github.com/LF2023/mxskill.git ~/.codex/skills/mxskill` |
| Hermes Agent | `git clone https://github.com/LF2023/mxskill.git <HERMES_HOME>/skills/mxskill` |
| OpenClaw | `git clone https://github.com/LF2023/mxskill.git ~/.openclaw/skills/mxskill` |
| DeepSeek Harness (DSH) | `git clone https://github.com/LF2023/mxskill.git ~/.dsh/skills/mxskill` |

- **Hermes Agent**: `HERMES_HOME` defaults to `~/.hermes` (macOS / Linux) or `%LOCALAPPDATA%\hermes` (Windows); `~/.agents/skills/mxskill` also works. Restart Hermes to pick it up.
- **OpenClaw**: `~/.agents/skills/mxskill` also works (personal skills, higher priority than `~/.openclaw/skills`). Auto-discovered once the OpenClaw client is installed.
- **DeepSeek Harness (DSH)**: `~/.dsh` is the default `$DSH_HOME`; `<project-root>/.dsh/skills` and `~/.agents/skills` are also supported. New sessions pick it up automatically — no restart needed.

</details>

## License

[MIT](./LICENSE) — free to use, modify, and distribute.
