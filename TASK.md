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

---

## 本轮只做

- 读取 README.md、PROJECT.md、TASK.md、WORKFLOW.md、ROLES.md、AI_CONTRACT.md。
- 协助用户完成立项访谈。
- 将确认后的项目方向写入 PROJECT.md。
- 根据用户确认结果更新 TASK.md。

## 本轮不做

- 不实现具体游戏玩法。
- 不进入 WEB_DEMO 正式开发。
- 不进入 Unity 开发。
- 不创建复杂配置表。
- 不读取 _archive/。

---

## 允许修改

```text
PROJECT.md
TASK.md
CHANGELOG.md
GPT_DEMO/
```

## 禁止修改

```text
_archive/
UNITY_PROJECT/
WEB_DEMO/src/，除非任务明确进入 WEB_DEMO 阶段
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

本阶段禁止：

- [x] 跳过立项访谈直接进入 WEB_DEMO
- [x] 在未确认项目方向前实现具体玩法
- [x] 修改禁止目录
- [x] 读取 _archive/

进入下一阶段 GPT_DEMO 前必须满足：

- [ ] 用户已确认项目基本方向
- [ ] PROJECT.md 已填写项目名称、一句话描述、核心玩法、目标体验、Demo 当前范围
- [ ] TASK.md 已更新为 GPT_DEMO 阶段任务

---

## 具体要求

- 先确认项目类型、目标体验、核心玩法、Demo 最小目标。
- 如用户希望先看效果，可以进入 GPT_DEMO 快速草图。
- 进入 WEB_DEMO 前，必须先形成规则基线。

## 验收标准

- PROJECT.md 已填写项目基本方向。
- TASK.md 已更新为下一阶段任务。
- 如生成 GPT_DEMO，用户可以直观看到方向。
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
```
