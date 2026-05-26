# TASK：当前任务

本文件是当前任务的唯一事实来源。

没有写入本文件的内容，不默认执行。

---

## 任务名称

初始化新项目。

## 当前阶段

```text
主阶段：立项访谈
子阶段：无
```

## 背景

本仓库是轻量 AI 游戏 Demo 开发模板。复制到具体项目后，需要先完成立项访谈，再进入 GPT_DEMO 或 WEB_DEMO。

---

## 本轮只做

- 读取 README.md、PROJECT.md、TASK.md、RULES.md。
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
WEB_DEMO/design/rule_baseline.md，除非任务明确进入规则基线阶段
WEB_DEMO/design/migration_audit.md，除非任务明确进入规则继承审计阶段
DESIGN_INBOX/，除非本轮明确是系统子对话记录或总控审核
```

---

## 阶段闸门检查

进入本阶段必须满足：

- [x] README.md 已存在
- [x] PROJECT.md 已存在
- [x] TASK.md 已存在
- [x] RULES.md 已存在

进入下一阶段 GPT_DEMO 前必须满足：

- [ ] 用户已确认项目基本方向
- [ ] PROJECT.md 已填写项目名称、一句话描述、核心玩法、目标体验、Demo 当前范围
- [ ] TASK.md 已更新为 GPT_DEMO 阶段任务

---

## 验收标准

- PROJECT.md 已填写项目基本方向。
- TASK.md 已更新为下一阶段任务。
- CHANGELOG.md 已记录重要变更。

## 必须读取的额外文件

```text
无
```

条件式读取示例：

```text
如本轮是系统子对话记录：读取 DESIGN_INBOX/README.md。
如本轮是总控审核：读取 DESIGN_INBOX/<system_name>/version_plans/ 中的目标文件。
如本轮是 WEB_DEMO 迁移：读取 WEB_DEMO/design/rule_baseline.md 与 WEB_DEMO/design/migration_audit.md。
```

## 完成后必须更新

```text
PROJECT.md
TASK.md
CHANGELOG.md，仅记录重要变更
```