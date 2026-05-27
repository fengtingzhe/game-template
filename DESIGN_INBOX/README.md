# DESIGN_INBOX：子对话设计工作区

`DESIGN_INBOX/` 是系统子对话的设计工作区。

每个系统子对话可以在 `DESIGN_INBOX/` 下创建自己的文件夹，用于保存该系统讨论中形成的好方案与版本方案。

---

## 推荐目录结构

```text
DESIGN_INBOX/
├── README.md
├── map_design/
│   ├── README.md
│   ├── schemes/
│   └── version_plans/
├── data_structure/
│   ├── README.md
│   ├── schemes/
│   └── version_plans/
└── ui_ux/
    ├── README.md
    ├── schemes/
    └── version_plans/
```

---

## schemes/：方案记录区

`schemes/` 用于保存子对话中出现的好方案、备选方案、设计思路。

适合写入：

```text
有价值但尚未形成版本方案的设计点
备选方案
需要以后比较的设计思路
暂时不确定但值得保留的方案
```

不适合写入：

```text
普通问答
完整聊天记录
重复解释
临时推测
明显无效的想法
```

`schemes/` 中的内容只是方案记录，不自动进入总控审核。

---

## version_plans/：版本方案区

`version_plans/` 用于保存已经整理成版本方案包的内容。

只有 `version_plans/` 中的内容，才默认提交给总控审核。

版本方案包应是可命名、可评审、可被总控分配的阶段性方案。

---

## 总控处理方式

总控默认读取各子对话的：

```text
DESIGN_INBOX/<system_name>/version_plans/
```

总控不默认审核 `schemes/` 中的全部内容，除非：

```text
1. 某个 version_plan 引用了对应 scheme
2. 用户明确要求总控查看
3. 总控判断该 scheme 对项目方向有重大影响
```

内容经过总控审核并由用户确认后，才能晋升到正式文件或新任务。

---

## 子对话 → 总控 → 正式任务流程

本流程用于多个 ChatGPT 子对话并行讨论同一个游戏项目时，避免内容散落在聊天上下文中，也避免子对话直接改动正式项目文件。

### 1. 子对话只负责投递，不负责拍板

地图设计、数据结构、数值设计、UI/UX、剧情世界观、技术调研等系统子对话，可以把讨论结论写入自己的 `DESIGN_INBOX/<system_name>/` 工作区。

子对话可以写：

```text
DESIGN_INBOX/<system_name>/schemes/
DESIGN_INBOX/<system_name>/version_plans/
```

子对话默认不能直接改：

```text
PROJECT.md
TASK.md
RULES.md
WEB_DEMO/design/rule_baseline.md
WEB_DEMO/design/migration_audit.md
WEB_DEMO/src/
UNITY_PROJECT/
```

除非 `TASK.md` 明确授权，否则子对话不能直接修改正式文件。

### 2. schemes 保存好想法

当子对话中出现值得保留但尚未形成版本方案的内容，写入：

```text
DESIGN_INBOX/<system_name>/schemes/YYYY-MM-DD_scheme_XXX_topic.md
```

适合内容包括：

```text
好方案
备选方案
局部机制思路
设计参考转译
待比较方案
暂时不确定但可能有价值的方向
```

`schemes/` 是资料池，不自动进入总控审核。

### 3. version_plans 提交可评审方案

当子对话已经把内容整理成一个阶段性版本方案，写入：

```text
DESIGN_INBOX/<system_name>/version_plans/YYYY-MM-DD_vXX_topic.md
```

`version_plans/` 中的内容应满足：

```text
可命名
可评审
有明确目标
有明确范围
有明确不做内容
有关键取舍
有待总控确认问题
能判断是否进入 TASK.md 或正式设计文档
```

总控默认只审核 `version_plans/`。

### 4. 总控审核 version_plans

用户可以在总控对话中发起审核，例如：

```text
请审核 DESIGN_INBOX/map_design/version_plans/ 下的新方案
请审核 DESIGN_INBOX/data_structure/version_plans/2026-05-26_v01_config_schema.md
```

总控审核时应输出：

```text
审核对象
方案摘要
采纳结论：采纳 / 部分采纳 / 暂缓 / 废弃 / 需要继续讨论
采纳理由
不采纳或暂缓理由
需要用户确认的问题
是否建议晋升正式文件
是否建议写入 TASK.md
```

### 5. 晋升必须经过用户确认

总控不能把子对话方案自动写入正式文件。

必须经过用户确认后，才允许晋升到：

```text
PROJECT.md
TASK.md
WEB_DEMO/design/rule_baseline.md
WEB_DEMO/design/migration_audit.md
WEB_DEMO/docs/
WEB_DEMO/src/
UNITY_PROJECT/
```

如果方案需要进入工程实现，应先写入 `TASK.md`，再由 Codex 按任务归属闸门执行。

### 6. 推荐工作流

```text
子对话讨论
↓
子对话把好想法写入 schemes/
↓
子对话把成熟方案整理成 version_plans/
↓
用户通知总控审核 version_plans/
↓
总控输出采纳 / 部分采纳 / 暂缓 / 废弃 / 继续讨论
↓
用户确认
↓
总控晋升到 PROJECT.md / TASK.md / 正式设计文档
↓
Codex 按 TASK.md 执行工程实现
```

### 7. 一句话原则

```text
子对话负责沉淀。
schemes 保存好想法。
version_plans 提交可评审版本方案。
总控负责审核、合并、取舍、晋升。
Codex 只按 TASK.md 执行工程任务。
```

---

## 命名建议

### 子对话工作区

```text
DESIGN_INBOX/<system_name>/
```

示例：

```text
DESIGN_INBOX/map_design/
DESIGN_INBOX/data_structure/
DESIGN_INBOX/ui_ux/
```

### schemes/

```text
DESIGN_INBOX/<system_name>/schemes/YYYY-MM-DD_scheme_XXX_topic.md
```

示例：

```text
DESIGN_INBOX/map_design/schemes/2026-05-26_scheme_001_ring_random_map.md
```

### version_plans/

```text
DESIGN_INBOX/<system_name>/version_plans/YYYY-MM-DD_vXX_topic.md
```

示例：

```text
DESIGN_INBOX/map_design/version_plans/2026-05-26_v01_ring_random_map.md
```

---

## 模板 A：子对话工作区 README

```markdown
# 子对话工作区说明

## 子对话名称

待填写，例如：地图设计 / 数据结构 / 数值设计 / UI/UX。

## 子对话职责

待填写。

## 可写入内容

### schemes/

用于保存讨论中出现的好方案、备选方案、设计思路。

这些内容只是方案记录，不自动进入总控审核。

### version_plans/

用于保存已经整理成版本方案包的内容。

只有 `version_plans/` 中的文件，才默认提交给总控审核。

## 禁止事项

```text
不得直接修改 PROJECT.md
不得直接修改 TASK.md
不得直接修改 RULES.md
不得直接修改 WEB_DEMO/design/rule_baseline.md
不得直接修改 WEB_DEMO/src/
不得把普通聊天记录原样写入本目录
```

## 一句话原则

```text
schemes 保存好想法。
version_plans 提交可评审版本方案。
总控只默认审核 version_plans。
```
```

---

## 模板 B：schemes 方案记录

```markdown
# 子对话方案记录

## 来源对话角色

待填写，例如：地图设计 / 数据结构 / 数值设计 / UI/UX / 剧情与世界观 / 技术调研。

## 方案编号

待填写，例如：map-scheme-001。

## 方案主题

待填写。

## 适用系统

待填写。

## 方案内容

待填写。

## 为什么值得保留

待填写。

## 适用场景

待填写。

## 可能问题

待填写。

## 与已有方案的关系

```text
新方案 / 替代旧方案 / 补充旧方案 / 待比较
```

## 是否建议进入版本规划

```text
是 / 否 / 待观察
```

## 当前状态

```text
方案记录，未进入总控审核
```
```

---

## 模板 C：version_plans 版本方案

```markdown
# 系统子对话版本方案

## 来源对话角色

待填写，例如：地图设计 / 数据结构 / 数值设计 / UI/UX / 剧情与世界观 / 技术调研。

## 方案版本

待填写，例如：map-v01 / data-v01 / ui-v01。

## 方案主题

待填写。

## 适用系统

待填写。

## 本方案目标

本版本方案要解决什么问题？

待填写。

## 本方案范围

本版本方案包含哪些内容？

- 待填写

## 不包含内容

本版本方案明确不解决哪些问题？

- 待填写

## 设计结论

待填写。

## 关键取舍

记录本方案做出的重要选择，以及为什么这样选。

- 待填写

## 待总控确认

- 待填写

## 可能影响的正式文件

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

## 风险与冲突

待填写。

## 建议下一步

待填写。

## 当前状态

```text
待总控审核
```
```

---

## 一句话原则

```text
每个子对话有自己的工作区。
schemes 保存好想法。
version_plans 提交可评审版本方案。
子对话只投递，不拍板。
总控负责分配、合并和晋升。
```