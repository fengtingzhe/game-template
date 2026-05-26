# AI_CONTRACT：AI 执行契约

本文件定义 AI 在本仓库中执行任务时必须遵守的硬约束。

它不替代 `WORKFLOW.md` 和 `TASK.md`：

```text
WORKFLOW.md 定义流程。
TASK.md 定义本轮授权。
AI_CONTRACT.md 定义执行纪律。
```

---

## 1. 默认读取范围

每次任务开始前，AI 只允许默认读取以下文件：

```text
README.md
PROJECT.md
TASK.md
WORKFLOW.md
ROLES.md
AI_CONTRACT.md
```

只有当 `TASK.md` 的“必须读取的额外文件”明确列出其他文件时，AI 才能读取额外文件。

`_archive/` 是历史参考区，AI 默认禁止读取。

---

## 2. 任务唯一来源

`TASK.md` 是当前任务唯一事实来源。

没有写入 `TASK.md` 的内容，不得默认执行。

如果用户提出的新需求会改变以下任一内容，必须先更新 `TASK.md`，再执行：

```text
当前阶段
本轮只做
本轮不做
允许修改
禁止修改
验收标准
必须读取的额外文件
```

---

## 3. 阶段闸门

AI 必须按 `WORKFLOW.md` 的阶段顺序执行。

默认阶段顺序为：

```text
立项访谈
↓
GPT_DEMO 快速草图
↓
规则基线
↓
定向代码迁移
↓
模块化重构
↓
规则继承审计
↓
WEB_DEMO 正式原型开发
↓
UNITY_PROJECT
```

不得跳过前置阶段。

如果前一阶段的必要产物不存在，AI 必须停止执行，并提示需要先补齐对应产物或更新 `TASK.md`。

---

## 4. 修改权限

AI 只能修改 `TASK.md` 中“允许修改”列出的文件或目录。

AI 不得修改 `TASK.md` 中“禁止修改”列出的文件或目录。

如果必须修改禁止目录，必须先由用户确认，并先更新 `TASK.md`。

---

## 5. 系统子对话投递规则

当用户在同一项目下创建多个系统子对话时，例如：

```text
总控
地图设计
数据结构
数值设计
UI/UX
剧情与世界观
技术调研
```

系统子对话平时只讨论，不默认写入仓库。

只有当系统子对话形成一个可命名、可评审、可被总控分配的版本方案包时，才允许写入：

```text
DESIGN_INBOX/
```

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

系统子对话不得把以下内容写入 `DESIGN_INBOX/`：

```text
普通问答
零散灵感
尚未整理的头脑风暴
重复解释
临时推测
明显未成型的方案
```

系统子对话不得直接修改以下正式文件或目录，除非 `TASK.md` 明确授权：

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

子对话写入 `DESIGN_INBOX/` 的版本方案默认状态为：

```text
待总控审核
```

只有总控对话可以读取 `DESIGN_INBOX/` 后，将内容记录到：

```text
CONTROL_REVIEW.md
```

并在用户确认后，将内容晋升到正式文件。

---

## 6. Codex 任务归属闸门

当执行者是 Codex，或任务进入工程实现、代码修改、重构、审计、Bug 修复、Unity 开发等工程阶段时，Codex 必须在执行前先输出任务归属判断。

Codex 必须从以下三种归属中选择一种：

```text
1. Codex 自己执行
2. DeepSeek 执行，Codex 审核
3. Codex + DeepSeek 协作
```

Codex 必须说明：

```text
任务归属判断：
判断理由：
Codex 负责：
DeepSeek 负责：
Codex 审核方式：
用户需要确认的问题：
```

在用户明确确认前，Codex 不得修改任何文件，不得创建分支，不得提交代码，不得让 DeepSeek 执行子任务。

用户确认可以使用以下任一明确表达：

```text
确认执行
同意执行
按这个分工执行
```

如果用户没有确认，Codex 必须停止在任务归属判断阶段。

---

## 7. 开始任务前必须输出

AI 正式执行任务前，必须先输出执行前检查：

```text
已读取文件：
当前阶段：
当前任务：
本轮只做：
本轮不做：
允许修改：
禁止修改：
阶段闸门是否满足：
是否需要先更新 TASK.md：
```

如果当前对话是系统子对话，还必须追加输出：

```text
子对话类型：总控 / 系统子对话
是否已形成版本方案包：是 / 否
是否只能写入 DESIGN_INBOX：是 / 否
是否允许晋升正式文件：是 / 否
```

如果执行者是 Codex，或任务涉及工程执行，还必须追加输出：

```text
任务归属判断：Codex 自己执行 / DeepSeek 执行，Codex 审核 / Codex + DeepSeek 协作
判断理由：
Codex 负责：
DeepSeek 负责：
Codex 审核方式：
等待用户确认：是
```

如果无法判断阶段、范围、权限、对话类型、是否已形成版本方案包或任务归属，必须停止执行，不得自行猜测。

---

## 8. 完成任务后必须输出

AI 完成任务后，必须输出执行结果：

```text
实际修改文件：
是否违反 TASK.md 范围：
是否更新 CHANGELOG.md：
是否满足验收标准：
是否为子对话版本方案投递：
是否进入 CONTROL_REVIEW.md：
任务归属是否按用户确认执行：
未完成项：
建议下一步：
```

---

## 9. 优先级

当文件之间出现冲突时，优先级如下：

```text
1. 用户在当前对话中明确确认的最新要求
2. TASK.md
3. AI_CONTRACT.md
4. WORKFLOW.md
5. PROJECT.md
6. CONTROL_REVIEW.md
7. ROLES.md
8. README.md
9. DESIGN_INBOX/ 中已被总控采纳的内容
10. 其他文件
11. _archive/ 中的历史文件
```

`DESIGN_INBOX/` 中未经过总控审核的内容，不作为当前规则来源。

`_archive/` 中的内容永远不作为当前规则来源，除非 `TASK.md` 明确指定。

---

## 10. 一句话原则

```text
AI 不能因为“觉得应该做”就做。
AI 只能因为 TASK.md 授权它做，才可以做。
Codex 不能因为“能做”就直接做。
Codex 必须先判断任务归属，并等待用户确认后才能做。
子对话平时只讨论。
形成版本方案后才投递。
子对话只投递，不拍板。
总控负责分配、合并和晋升。
```
