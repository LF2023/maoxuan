# 毛选·战略与矛盾分析 (mxskill)

把《毛泽东选集》的战略思维、矛盾分析法、调查研究转译为**可直接套用**的分析与执行框架，而非空泛口号。适用于战略分析、问题拆解、竞争研判、行动计划、调研方案，以及面对复杂不确定局面时需要"抓主要矛盾""实事求是""调查研究"等思维框架的场景。

## 最快用法：微信扫码（不用装）

微信搜一搜 **「问问教员」**，或扫码进入小程序。把真实卡点丢进去即可。

![问问教员 · 微信小程序](./docs/maoxuan-miniprogram.jpg)

> 这是一个可供 WorkBuddy / Claude Code / Codex 等 Agent 加载的 **Skill（技能）**。Agent 安装见下方「安装」。

> **新手？** 先看 [新手入门.md](./新手入门.md) —— 5 分钟搞懂它是什么、怎么用、第一次该看什么。

> **English?** See [README_en.md](./README_en.md)。

## 它解决什么

- 目标模糊时，先调研、再拆解，而不是凭直觉开药方
- 多因素纠缠时，识别哪个才是牵动全局的主要矛盾
- 资源劣势时，集中优势、各个击破
- 长期任务时，排阶段与节奏，稳住信心

## 包含的 10 个方法论单元

| 单元 | 主题 | 一句话 |
|---|---|---|
| U1 | 调查研究 | 没有调查就没有发言权 |
| U2 | 抓主要矛盾 | 捉住主要矛盾，一切迎刃而解 |
| U3 | 矛盾分析法 | 一分为二看问题 |
| U4 | 实事求是 | 从真实对象出发找规律 |
| U5 | 战略藐视 / 战术重视 | 长期敢想，每仗当真 |
| U6 | 集中优势兵力 | 局部压倒，各个歼灭 |
| U7 | 持久战与阶段论 | 大目标拆阶段，接受低谷 |
| U8 | 群众路线 | 从群众中来，到群众中去 |
| U9 | 弹钢琴 | 多线统筹兼顾 |
| U10 | 具体问题具体分析 | 没有放之四海皆准的招 |

完整内容见 [SKILL.md](./SKILL.md)，触发场景索引见 [INDEX.md](./INDEX.md)，触发 / 抗误触发测试见 [test-prompts.json](./test-prompts.json)。

## 触发词

> `/mxs` · 战略、主要矛盾、调研、分析一下局势、怎么做计划、怎么打法、资源不够怎么破局

## 使用示例

下面几个真实场景演示 skill 如何被触发、套用哪个单元、产出什么。

**场景 1 · 多线忙乱，排优先级（U2 抓主要矛盾）**

> 用户：我现在又要抓私域、又要做投放、又要搞内容，忙不过来，怎么排优先级？
>
> skill：先识别哪条线才是牵动其他的主因（例如「来了不转化」才是根），而不是给你一张平均用力的清单。锁定主攻点后，其余暂时放一放。
>
> 示例输出形态：待验证事实 → 主矛盾假设 → 放弃清单 → 结束条件。完整对照见 [SKILL.md 示例输出](./SKILL.md)。

**场景 2 · 团队劣势，怎么赢（U6 集中优势兵力）**

> 用户：我们团队只有 3 个人，对手有 30 人，怎么可能打得赢？
>
> skill：选一个最该赢的局部，把资源压到超过临界点形成压倒优势，一个个拿；同时给出"放弃清单"——什么都想要等于没有聚焦。

**场景 3 · 从 0 到 1 规划（U7 持久战与阶段论）**

> 用户：老板让我从 0 把这块新业务做起来，半年要出成绩，怎么规划？
>
> skill：拆成防御 / 相持 / 反攻类三阶段，每阶段只盯一个核心指标；到相持期不慌，按预案推进，别把阶段论当拖延借口。

**场景 4 · 怕自嗨做功能（U8 群众路线）**

> 用户：我想做个功能但怕自嗨，怎么确保真的是用户想要的？
>
> skill：去一线收集用户原话和行为 → 归纳成假设 → 小范围投放验证 → 反馈回流再改。方案从真实用户中来，再回到他们中去校验。

更多触发 / 抗误触发用例见 [test-prompts.json](./test-prompts.json)。

## 安装

最快仍是上面扫码。要用 Agent Skill，一条命令：

```bash
npx -y skills add LF2023/mxskill -g
```

装好后斜杠命令是 **`/mxs`**。把真实卡点丢进去，例如：`/mxs 增长停了，先解决哪个`。

<details>
<summary>或 git clone 到各平台 skills 目录</summary>

| 平台 | 安装命令 |
|---|---|
| WorkBuddy（用户级，所有项目可用） | `git clone https://github.com/LF2023/mxskill.git ~/.workbuddy/skills/mxskill` |
| WorkBuddy（项目级，仅该项目可用） | `git clone https://github.com/LF2023/mxskill.git <你的项目>/.workbuddy/skills/mxskill` |
| Claude Code | `git clone https://github.com/LF2023/mxskill.git ~/.claude/skills/mxskill` |
| Codex（OpenAI） | `git clone https://github.com/LF2023/mxskill.git ~/.codex/skills/mxskill` |
| Hermes Agent | `git clone https://github.com/LF2023/mxskill.git <HERMES_HOME>/skills/mxskill` |
| OpenClaw | `git clone https://github.com/LF2023/mxskill.git ~/.openclaw/skills/mxskill` |
| DeepSeek Harness（DSH） | `git clone https://github.com/LF2023/mxskill.git ~/.dsh/skills/mxskill` |

- **Hermes Agent**：`HERMES_HOME` 默认为 `~/.hermes`（macOS / Linux）或 `%LOCALAPPDATA%\hermes`（Windows）；也可放入 `~/.agents/skills/mxskill`。重启 Hermes 后生效。
- **OpenClaw**：也可放入 `~/.agents/skills/mxskill`（个人级 skills，优先级高于 `~/.openclaw/skills`）。装好 OpenClaw 客户端后自动发现。
- **DeepSeek Harness（DSH）**：`~/.dsh` 是默认 `$DSH_HOME`；另支持 `<项目根>/.dsh/skills` 与 `~/.agents/skills`。放入后新会话自动发现，无需重启。

</details>

## License

[MIT](./LICENSE) — 自由使用、修改、分发。
