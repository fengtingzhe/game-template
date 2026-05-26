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