# WORKFLOW：通用开发流程

本文件记录本模板保留的统一开发流程。

它只描述流程，不预设具体游戏类型和具体玩法系统。

---

## 文件职责

```text
WORKFLOW.md 定义流程。
TASK.md 定义本轮授权。
AI_CONTRACT.md 定义执行纪律。
```

AI 必须按本文件阶段顺序执行。

如果 `TASK.md` 未授权进入某阶段，AI 不得自行推进到该阶段。

---

## 多子对话协作流程

在一个项目下，可以创建多个系统任务相关聊天，例如：

```text
总控
地图设计
数据结构
数值设计
UI/UX
剧情与世界观
技术调研
```

这些子对话可以并行讨论系统设计，但默认只能把阶段性结论写入：

```text
DESIGN_INBOX/
```

子对话写入内容不自动成为正式设计。

总控对话负责读取 `DESIGN_INBOX/`，并在 `CONTROL_REVIEW.md` 中判断：

```text
采纳
部分采纳
暂缓
废弃
需要继续讨论
```

只有经过总控审核，并经用户确认后，内容才允许晋升到正式文件，例如：

```text
PROJECT.md
TASK.md
WEB_DEMO/design/rule_baseline.md
WEB_DEMO/design/migration_audit.md
WEB_DEMO/public/assets/data/csv/
WEB_DEMO/public/assets/data/json/
WEB_DEMO/src/
UNITY_PROJECT/
```

---

## 阶段 1：立项访谈

用户与 ChatGPT 讨论项目方向。

目标：明确游戏类型、目标平台、核心玩法、目标体验、Demo 最小验证目标。

产出：

```text
PROJECT.md
TASK.md 的下一阶段任务
```

进入下一阶段前必须满足：

```text
用户已确认项目基本方向
PROJECT.md 已记录核心玩法、目标体验、Demo 当前范围
TASK.md 已更新为 GPT_DEMO 阶段任务
```

---

## 阶段 2：GPT_DEMO 快速草图

ChatGPT 与用户快速制作可试玩草图。

目标：让用户先直观看到方向，快速暴露理解偏差。

允许：

```text
单文件 HTML
少量硬编码
简化美术
简化数值
快速覆盖式迭代
```

不允许：

```text
把 GPT_DEMO 当正式工程
长期堆功能
跳过用户确认直接进入 WEB_DEMO
```

产出：

```text
GPT_DEMO/index.html
PROJECT.md 的方向更新
TASK.md 的下一阶段任务
```

进入下一阶段前必须满足：

```text
用户已确认 GPT_DEMO 方向基本正确
GPT_DEMO/index.html 或指定草图文件已存在
PROJECT.md 已记录确认后的方向变化
TASK.md 已更新为规则基线阶段任务
```

---

## 阶段 3：规则基线

Codex 从已确认的 GPT_DEMO 中提取规则基线。

目标：锁定已经被用户确认的玩法规则、交互顺序、失败条件、反馈节奏和核心体验。

产出：

```text
WEB_DEMO/design/rule_baseline.md
```

进入下一阶段前必须满足：

```text
rule_baseline.md 已填写，不再只是占位内容
TASK.md 已更新为定向代码迁移阶段任务
```

---

## 阶段 4：定向代码迁移

Codex 不从零重写，也不整文件复制 GPT_DEMO。

正确方式：

```text
按系统切片定位 GPT_DEMO 中已验证的逻辑
↓
将对应逻辑迁移到 WEB_DEMO/src/ 的模块结构中
↓
保持玩家体验、交互规则、节奏和边界条件一致
```

进入下一阶段前必须满足：

```text
核心规则对应代码已迁移到 WEB_DEMO/src/
迁移范围没有超出 TASK.md 授权
TASK.md 已更新为模块化重构阶段任务
```

---

## 阶段 5：模块化重构

Codex 将迁移后的逻辑整理为可维护工程结构。

推荐方向：

```text
WEB_DEMO/src/app/
WEB_DEMO/src/engine/
WEB_DEMO/src/game/
WEB_DEMO/src/presentation/
```

具体拆分由项目类型决定，不在模板中预设。

进入下一阶段前必须满足：

```text
重构后 WEB_DEMO 可以运行
重构未改变 rule_baseline.md 中的体验规则
TASK.md 已更新为规则继承审计阶段任务
```

---

## 阶段 6：规则继承审计

Codex 对比 GPT_DEMO 与 WEB_DEMO。

所有偏差必须归类：

```text
1. 无意偏差：需要修复
2. 有意重构：实现方式改变，但体验规则保持一致
3. 有意重设计：玩法规则改变，必须由用户确认
```

产出：

```text
WEB_DEMO/design/migration_audit.md
```

进入下一阶段前必须满足：

```text
migration_audit.md 已记录关键偏差
无意偏差已修复或记录为未完成项
有意重设计已获得用户确认
TASK.md 已更新为 WEB_DEMO 正式原型开发任务
```

---

## 阶段 7：WEB_DEMO 正式原型开发

在 WEB_DEMO 中持续开发正式 Web 原型。

原则：

```text
以 TASK.md 为任务边界
以 rule_baseline.md 为体验基线
以 migration_audit.md 记录偏差和修正
策划频繁调整的内容优先配置化
```

进入 Unity 阶段前必须满足：

```text
WEB_DEMO 核心体验已稳定
关键规则已通过审计
用户确认进入 Unity 阶段
TASK.md 已更新为 UNITY_PROJECT 阶段任务
```

---

## 阶段 8：UNITY_PROJECT

当 WEB_DEMO 的核心规则和体验稳定后，再进入 Unity 阶段。

原则：

```text
Unity 不抢跑
Unity 不在规则未稳定时重做方向
Unity 阶段必须先由 TASK.md 明确目标、范围和验收标准
```
