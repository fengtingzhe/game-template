# DESIGN_INBOX：子对话设计工作区

`DESIGN_INBOX/` 是系统子对话的设计工作区。

每个系统子对话可以在 `DESIGN_INBOX/` 下创建自己的文件夹，用于保存该系统讨论中形成的好方案与版本方案。

---

## 推荐目录结构

```text
DESIGN_INBOX/
├── README.md
├── CHILD_WORKSPACE_README_TEMPLATE.md
├── SCHEME_NOTE_TEMPLATE.md
├── SYSTEM_NOTE_TEMPLATE.md
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

除总控外，每个系统子对话都可以拥有自己的工作区。

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

可以使用：

```text
SCHEME_NOTE_TEMPLATE.md
```

---

## version_plans/：版本方案区

`version_plans/` 用于保存已经整理成版本方案包的内容。

版本方案包应是可命名、可评审、可被总控分配的阶段性方案。

版本方案包至少应包含：

```text
方案版本
方案主题
适用系统
本方案目标
本方案范围
不包含内容
设计结论
关键取舍
待总控确认
可能影响的正式文件
风险与冲突
建议下一步
```

只有 `version_plans/` 中的内容，才默认提交给总控审核。

可以使用：

```text
SYSTEM_NOTE_TEMPLATE.md
```

---

## 子对话写入规则

系统子对话如果需要写入仓库，默认只能写入自己的工作区：

```text
DESIGN_INBOX/<system_name>/schemes/
DESIGN_INBOX/<system_name>/version_plans/
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

## 总控处理方式

总控对话负责定期读取各子对话的：

```text
DESIGN_INBOX/<system_name>/version_plans/
```

并在 `CONTROL_REVIEW.md` 中判断：

```text
采纳
部分采纳
暂缓
废弃
需要继续讨论
```

通常情况下，总控不默认审核 `schemes/` 中的全部内容，除非某个版本方案引用了对应方案记录，或用户明确要求总控查看。

只有经过总控确认后，内容才允许晋升到正式文件。

---

## 一句话原则

```text
每个子对话有自己的工作区。
schemes 保存好想法。
version_plans 提交可评审版本方案。
子对话只投递，不拍板。
总控负责分配、合并和晋升。
```