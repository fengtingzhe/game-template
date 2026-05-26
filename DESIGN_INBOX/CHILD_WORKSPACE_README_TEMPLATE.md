# 子对话工作区说明

本目录是某个系统子对话的专属工作区。

建议目录结构：

```text
DESIGN_INBOX/<system_name>/
├── README.md
├── schemes/
└── version_plans/
```

---

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

---

## 禁止事项

```text
不得直接修改 PROJECT.md
不得直接修改 TASK.md
不得直接修改 CONTROL_REVIEW.md
不得直接修改 WEB_DEMO/design/rule_baseline.md
不得直接修改 WEB_DEMO/src/
不得把普通聊天记录原样写入本目录
```

---

## 一句话原则

```text
schemes 保存好想法。
version_plans 提交可评审版本方案。
总控只默认审核 version_plans。
```
