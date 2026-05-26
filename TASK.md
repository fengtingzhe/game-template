# TASK：当前任务

本文件是当前任务的唯一事实来源。

AI 执行任务时必须以本文件为准。

没有写入本文件的内容，不默认执行。

---

## 任务名称

初始化新项目。

## 当前阶段

立项访谈。

## 背景

本仓库是轻量 AI 游戏 Demo 开发模板。复制到具体项目后，需要先完成立项访谈，再进入 GPT_DEMO 或 WEB_DEMO。

本模板支持同一项目下的多子对话协作。系统子对话的阶段性设计默认只写入 `DESIGN_INBOX/`，由总控对话在 `CONTROL_REVIEW.md` 中审核后，再决定是否晋升到正式文件。

---

## 本轮只做

- 读取 README.md、PROJECT.md、TASK.md、WORKFLOW.md、ROLES.md、AI_CONTRACT.md。
- 协助用户完成立项访谈。
- 将确认后的项目方向写入 PROJECT.md。
- 根据用户确认结果更新 TASK.md。
- 如本轮来自系统子对话，只允许将设计草案写入 DESIGN_INBOX/。

## 本轮不做

- 不实现具体游戏玩法。
- 不进入 WEB_DEMO 正式开发。
- 不进入 Unity 开发。
- 不创建复杂配置表。
- 不读取 _archive/。
- 系统子对话不得直接晋升内容到正式文件。

---

## 允许修改

```text
PROJECT.md
TASK.md
CHANGELOG.md
GPT_DEMO/
DESIGN_INBOX/
CONTROL_REVIEW.md，仅限总控对话
```

## 禁止修改

```text
_archive/
UNITY_PROJECT/
WEB_DEMO/src/，除非任务明确进入 WEB_DEMO 阶段
WEB_DEMO/design/rule_baseline.md，除非任务明确进入规则基线阶段
WEB_DEMO/design/migration_audit.md，除非任务明确进入规则继承审计阶段
系统子对话不得直接修改 PROJECT.md、TASK.md、CONTROL_REVIEW.md 或正式工程目录，除非 TASK.md 明确授权
```

---

## 阶段闸门检查

当前阶段：立项访谈。

进入本阶段必须满足：

- [x] README.md 已存在
- [x] PROJECT.md 已存在
- [x] TASK.md 已存在
- [x] WORKFLOW.md 已存在
- [x] ROLES.md 已存在
- [x] AI_CONTRACT.md 已存在
- [x] DESIGN_INBOX/ 已存在
- [x] CONTROL_REVIEW.md 已存在

本阶段禁止：

- [x] 跳过立项访谈直接进入 WEB_DEMO
- [x] 在未确认项目方向前实现具体玩法
- [x] 修改禁止目录
- [x] 读取 _archive/
- [x] 系统子对话绕过总控直接修改正式文件

进入下一阶段 GPT_DEMO 前必须满足：

- [ ] 用户已确认项目基本方向
- [ ] PROJECT.md 已填写项目名称、一句话描述、核心玩法、目标体验、Demo 当前范围
- [ ] TASK.md 已更新为 GPT_DEMO 阶段任务

---

## 具体要求

- 先确认项目类型、目标体验、核心玩法、Demo 最小目标。
- 如用户希望先看效果，可以进入 GPT_DEMO 快速草图。
- 进入 WEB_DEMO 前，必须先形成规则基线。
- 多子对话并行讨论时，子对话先投递到 DESIGN_INBOX/，总控再审核晋升。

## 验收标准

- PROJECT.md 已填写项目基本方向。
- TASK.md 已更新为下一阶段任务。
- 如生成 GPT_DEMO，用户可以直观看到方向。
- 如来自系统子对话，设计内容已写入 DESIGN_INBOX/，未直接污染正式文件。
- 如来自总控对话，CONTROL_REVIEW.md 已记录审核结果。
- CHANGELOG.md 已记录本轮变更。

## 必须读取的额外文件

```text
无
```

## 完成后必须更新

```text
PROJECT.md
TASK.md
CHANGELOG.md
DESIGN_INBOX/，如来自系统子对话
CONTROL_REVIEW.md，仅限总控审核时
```
