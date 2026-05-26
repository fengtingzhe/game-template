# DESIGN_INBOX：版本方案投递箱

`DESIGN_INBOX/` 是系统子对话形成“版本方案包”后的默认投递区。

它不是每次对话、每个问题、每轮头脑风暴都要写入的地方。

只有当某个系统子对话形成了一个可命名、可评审、可被总控分配的版本方案时，才写入 `DESIGN_INBOX/`。

---

## 适用子对话

同一项目下可以创建多个系统任务相关聊天，例如：

```text
总控
地图设计
数据结构
数值设计
战斗系统
UI/UX
剧情与世界观
技术调研
```

这些子对话可以长期讨论，但只有形成版本方案后才投递。

---

## 什么是版本方案

版本方案不是零散想法，而是一组经过当前子对话整理后的阶段性方案包。

版本方案应至少具备：

```text
明确主题
明确版本号或方案编号
明确适用系统
明确本方案解决什么问题
明确本方案包含哪些设计结论
明确还需要总控确认什么
明确可能影响哪些正式文件或后续任务
```

---

## 不应写入的内容

以下内容不应写入 `DESIGN_INBOX/`：

```text
普通问答
零散灵感
尚未整理的头脑风暴
重复解释
临时推测
明显未成型的方案
```

这些内容应继续留在子对话中讨论，直到形成版本方案。

---

## 核心定位

`DESIGN_INBOX/` 只保存“待总控审核的版本方案包”。

它不是正式设计来源，也不是当前任务来源。

正式文件仍然是：

```text
PROJECT.md        项目状态与核心方向
TASK.md           当前任务唯一事实来源
WORKFLOW.md       通用流程
AI_CONTRACT.md    AI 执行纪律
WEB_DEMO/design/rule_baseline.md      Web Demo 规则基线
WEB_DEMO/design/migration_audit.md    迁移审计
```

---

## 子对话写入规则

系统子对话如果需要把版本方案写入仓库，默认只能写入：

```text
DESIGN_INBOX/
```

除非 `TASK.md` 明确授权，子对话不得直接修改：

```text
PROJECT.md
TASK.md
WORKFLOW.md
ROLES.md
AI_CONTRACT.md
CONTROL_REVIEW.md
WEB_DEMO/design/rule_baseline.md
WEB_DEMO/design/migration_audit.md
WEB_DEMO/src/
UNITY_PROJECT/
```

---

## 文件命名建议

```text
DESIGN_INBOX/YYYY-MM-DD_system_vXX_topic.md
```

示例：

```text
DESIGN_INBOX/2026-05-26_map_v01_ring_random_design.md
DESIGN_INBOX/2026-05-26_data_v01_resource_worker_structure.md
DESIGN_INBOX/2026-05-26_ui_v01_main_hud_layout.md
```

---

## 内容要求

每个版本方案文档应尽量包含：

```text
来源对话角色：
方案版本：
方案主题：
适用系统：
本方案目标：
本方案范围：
不包含内容：
设计结论：
关键取舍：
待总控确认：
可能影响的正式文件：
风险与冲突：
建议下一步：
```

可以复制 `SYSTEM_NOTE_TEMPLATE.md` 作为模板。

---

## 总控处理方式

总控对话负责定期读取 `DESIGN_INBOX/` 中的版本方案，并在 `CONTROL_REVIEW.md` 中判断：

```text
采纳
部分采纳
暂缓
废弃
需要继续讨论
```

只有经过总控确认后，内容才允许晋升到正式文件。

---

## 一句话原则

```text
子对话平时只讨论。
形成版本方案后才投递。
子对话只投递，不拍板。
总控负责分配、合并和晋升。
```
