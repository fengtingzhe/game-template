# RULES：AI 协作规则

本文件是本模板的统一规则来源。

它合并原先分散在 `WORKFLOW.md`、`ROLES.md`、`AI_CONTRACT.md`、`CONTROL_REVIEW.md` 中的流程、角色、执行纪律与总控审核规则。

---

## 1. 默认读取规则

AI 每次开始任务前，默认只读取：

```text
README.md
PROJECT.md
TASK.md
RULES.md
```

其他文件只有在 `TASK.md` 的“必须读取的额外文件”中明确列出时才读取。

`_archive/` 默认禁止读取。

---

## 2. 文件职责

```text
README.md      仓库入口，只保留启动说明和最小导航
PROJECT.md     项目状态与当前阶段
TASK.md        当前任务唯一事实来源
RULES.md       统一规则来源
DESIGN_INBOX/  子对话设计工作区
WEB_DEMO/      正式 Web 原型工程
GPT_DEMO/      快速可试玩草图目录
UNITY_PROJECT/ Unity 阶段目录
CHANGELOG.md   历史变更记录，不参与默认读取
```

---

## 3. 当前任务授权

`TASK.md` 是当前任务唯一事实来源。

没有写入 `TASK.md` 的内容，不默认执行。

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

## 4. 阶段流程

默认阶段顺序：

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

如果前一阶段必要产物不存在，AI 必须停止执行，并提示需要补齐产物或更新 `TASK.md`。

---

## 5. 角色分工

### 用户 / 制作人

负责最终方向判断、核心体验判断、玩法取舍、优先级确认、Demo 验收、阶段推进确认、Codex 任务归属确认。

### ChatGPT

负责立项访谈、玩法方案、系统设计、数值思路、任务拆解、GPT_DEMO 快速草图、产品复审，并把用户确认内容沉淀到 `PROJECT.md` 与 `TASK.md`。

### Codex

负责工程实现、规则基线提取、定向代码迁移、模块化重构、规则继承审计、Bug 修复、WEB_DEMO 开发与 Unity 阶段开发。

### DeepSeek

负责低风险子任务，例如局部模块实现、配置表生成、文案整理、批量数据处理、简单工具函数、低风险代码补充。

DeepSeek 不负责整体架构、核心系统修改、最终代码审核、高风险重构或改变已确认玩法规则。

---

## 6. Codex 任务归属闸门

当执行者是 Codex，或任务涉及工程实现、代码修改、重构、审计、Bug 修复、Unity 开发时，Codex 必须先判断任务归属。

Codex 必须从以下三种归属中选择一种：

```text
1. Codex 自己执行
2. DeepSeek 执行，Codex 审核
3. Codex + DeepSeek 协作
```

执行前必须输出：

```text
任务归属判断：
判断理由：
Codex 负责：
DeepSeek 负责：
Codex 审核方式：
用户需要确认的问题：
```

用户明确确认前，Codex 不得修改任何文件，不得创建分支，不得提交代码，不得让 DeepSeek 执行子任务。

---

## 7. 子对话工作区规则

同一项目下可以创建多个系统子对话，例如：

```text
地图设计
数据结构
数值设计
UI/UX
剧情与世界观
技术调研
```

除总控外，每个系统子对话可以在 `DESIGN_INBOX/` 下创建自己的工作区：

```text
DESIGN_INBOX/<system_name>/
├── README.md
├── schemes/
└── version_plans/
```

其中：

```text
schemes/        保存好方案、备选方案、值得保留的设计思路
version_plans/  保存整理成包、准备提交总控审核的版本方案
```

子对话不得直接修改正式文件，除非 `TASK.md` 明确授权。

正式文件包括：

```text
PROJECT.md
TASK.md
RULES.md
WEB_DEMO/design/rule_baseline.md
WEB_DEMO/design/migration_audit.md
WEB_DEMO/src/
UNITY_PROJECT/
```

---

## 8. 总控审核与晋升

总控默认只审核各子对话的：

```text
DESIGN_INBOX/<system_name>/version_plans/
```

总控不默认审核 `schemes/` 中的全部内容，除非：

```text
1. 某个 version_plan 引用了对应 scheme
2. 用户明确要求总控查看
3. 总控判断该 scheme 对项目方向有重大影响
```

总控审核结果可使用：

```text
采纳
部分采纳
暂缓
废弃
需要继续讨论
```

内容晋升必须经过用户确认。

如果需要进入工程实现，不直接改 `WEB_DEMO/src/`，而是先晋升为 `TASK.md` 中的新任务，再由 Codex 按任务归属闸门执行。

---

## 9. 执行前检查

AI 正式执行任务前，必须输出：

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

如果当前对话是系统子对话，还必须输出：

```text
子对话类型：总控 / 系统子对话
子对话工作区：DESIGN_INBOX/<system_name>/
本轮写入类型：schemes / version_plans / 不写入
是否允许晋升正式文件：是 / 否
```

如果执行者是 Codex 或任务涉及工程执行，还必须输出 Codex 任务归属判断。

---

## 10. 完成后输出

AI 完成任务后，必须输出：

```text
实际修改文件：
是否违反 TASK.md 范围：
是否更新 CHANGELOG.md：
是否满足验收标准：
子对话写入位置：schemes / version_plans / 无
任务归属是否按用户确认执行：
未完成项：
建议下一步：
```

---

## 11. 优先级

当文件之间出现冲突时，优先级如下：

```text
1. 用户在当前对话中明确确认的最新要求
2. TASK.md
3. RULES.md
4. PROJECT.md
5. DESIGN_INBOX/<system_name>/version_plans/ 中已被总控采纳的内容
6. DESIGN_INBOX/<system_name>/schemes/ 中被版本方案引用且已被总控采纳的内容
7. README.md
8. CHANGELOG.md
9. _archive/ 中的历史文件
```

`DESIGN_INBOX/` 中未经过总控审核的内容，不作为当前规则来源。

---

## 12. 一句话原则

```text
AI 不能因为“觉得应该做”就做。
AI 只能因为 TASK.md 授权它做，才可以做。
Codex 不能因为“能做”就直接做。
Codex 必须先判断任务归属，并等待用户确认后才能做。
每个子对话有自己的工作区。
schemes 保存好想法。
version_plans 提交可评审版本方案。
子对话只投递，不拍板。
总控负责分配、合并和晋升。
```