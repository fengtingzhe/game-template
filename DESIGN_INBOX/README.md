# DESIGN_INBOX：系统子对话设计收件箱

`DESIGN_INBOX/` 是所有系统子对话的默认写入区。

它用于接收来自不同 ChatGPT 子对话的阶段性设计内容，例如：

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

---

## 核心定位

`DESIGN_INBOX/` 只保存“待总控审核的设计草案”。

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

系统子对话如果需要把讨论结果写入仓库，默认只能写入：

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
WEB_DEMO/design/rule_baseline.md
WEB_DEMO/design/migration_audit.md
WEB_DEMO/src/
UNITY_PROJECT/
```

---

## 文件命名建议

```text
DESIGN_INBOX/YYYY-MM-DD_system_topic.md
```

示例：

```text
DESIGN_INBOX/2026-05-26_map_random_layer_design.md
DESIGN_INBOX/2026-05-26_data_structure_resource_worker.md
DESIGN_INBOX/2026-05-26_core_control_project_review.md
```

---

## 内容要求

每个子对话写入的设计文档应尽量包含：

```text
来源对话角色：
讨论主题：
适用系统：
设计结论：
待总控确认：
可能影响的正式文件：
风险与冲突：
建议下一步：
```

可以复制 `SYSTEM_NOTE_TEMPLATE.md` 作为模板。

---

## 总控处理方式

总控对话负责定期读取 `DESIGN_INBOX/` 中的相关文档，并在 `CONTROL_REVIEW.md` 中判断：

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
子对话只投递，不拍板。
总控负责分配、合并和晋升。
```
