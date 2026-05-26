# CHANGELOG：变更记录

## 2026-05-26 / game-template v0.6-child-workspaces

### 新增

- 新增 `DESIGN_INBOX/SCHEME_NOTE_TEMPLATE.md`，用于记录子对话中的好方案、备选方案和设计思路。
- 新增 `DESIGN_INBOX/CHILD_WORKSPACE_README_TEMPLATE.md`，用于创建每个子对话自己的工作区说明。

### 修改

- 更新 `DESIGN_INBOX/README.md`，将 `DESIGN_INBOX/` 从平铺式投递箱调整为“每个子对话一个工作区”的结构。
- 明确每个子对话工作区推荐包含：
  - `README.md`
  - `schemes/`
  - `version_plans/`
- 明确 `schemes/` 用于保存好方案和备选方案，不自动进入总控审核。
- 明确 `version_plans/` 用于提交可评审版本方案，总控默认审核该目录。
- 更新 `AI_CONTRACT.md`、`README.md`、`WORKFLOW.md`、`TASK.md`，同步子对话工作区、`schemes/`、`version_plans/` 的权限和流程规则。

### 验证

- 已写入 GitHub。
- 未在本地执行 `cd WEB_DEMO && npm install && npm run check && npm run build`。

---

## 2026-05-26 / game-template v0.5-version-proposal-inbox

### 新增

- 明确 `DESIGN_INBOX/` 是“版本方案投递箱”，不是每次对话的自动记录区。
- 更新 `DESIGN_INBOX/SYSTEM_NOTE_TEMPLATE.md`，改为“系统子对话版本方案投递模板”。

### 修改

- 更新 `DESIGN_INBOX/README.md`，明确只有形成可命名、可评审、可被总控分配的版本方案包后，才写入 `DESIGN_INBOX/`。
- 更新 `AI_CONTRACT.md`，新增版本方案包写入条件，禁止普通问答、零散灵感、未整理头脑风暴进入 `DESIGN_INBOX/`。
- 更新 `README.md`，将“阶段性设计投递”改为“版本方案包投递”。
- 更新 `WORKFLOW.md`，将多子对话协作流程改为版本方案包投递流程。
- 更新 `TASK.md`，明确系统子对话只有形成版本方案包后才允许写入 `DESIGN_INBOX/`。

### 验证

- 已写入 GitHub。
- 未在本地执行 `cd WEB_DEMO && npm install && npm run check && npm run build`。

---

## 2026-05-26 / game-template v0.4-design-inbox

### 新增

- 新增 `DESIGN_INBOX/README.md`，作为系统子对话设计收件箱说明。
- 新增 `DESIGN_INBOX/SYSTEM_NOTE_TEMPLATE.md`，作为系统子对话设计投递模板。
- 新增 `CONTROL_REVIEW.md`，作为总控审核与晋升记录。

### 修改

- 更新 `AI_CONTRACT.md`，新增系统子对话投递规则：子对话默认只能写入 `DESIGN_INBOX/`。
- 更新 `WORKFLOW.md`，新增多子对话协作流程。
- 更新 `README.md`，新增多子对话协作规则与执行前检查。
- 更新 `TASK.md`，加入 `DESIGN_INBOX/` 与 `CONTROL_REVIEW.md` 的权限边界。

### 验证

- 已写入 GitHub。
- 未在本地执行 `cd WEB_DEMO && npm install && npm run check && npm run build`。

---

## 2026-05-26 / game-template v0.3-ownership-gate

### 新增

- 在 `AI_CONTRACT.md` 中新增 Codex 任务归属闸门。
- 在 `ROLES.md` 中新增 Codex 执行前任务归属判断规则。

### 修改

- 更新 `README.md`，加入 Codex 执行前必须判断任务归属并等待用户确认的规则。
- 明确 Codex 必须在以下三种归属中选择一种：
  - Codex 自己执行；
  - DeepSeek 执行，Codex 审核；
  - Codex + DeepSeek 协作。
- 明确用户确认前，Codex 不得修改任何文件、不得创建分支、不得提交代码、不得让 DeepSeek 执行子任务。

### 验证

- 已写入 GitHub。
- 未在本地执行 `cd WEB_DEMO && npm install && npm run check && npm run build`。

---

## 2026-05-26 / game-template v0.2-contract

### 新增

- 新增 `AI_CONTRACT.md`，明确 AI 执行契约。
- 明确三类核心约束文件职责：
  - `WORKFLOW.md` 定义流程；
  - `TASK.md` 定义本轮授权；
  - `AI_CONTRACT.md` 定义执行纪律。

### 修改

- 更新 `README.md`，加入 AI 默认读取范围、执行前检查和核心约束原则。
- 更新 `TASK.md`，加入 `AI_CONTRACT.md` 读取要求和阶段闸门检查。
- 更新 `WORKFLOW.md`，为每个阶段增加进入下一阶段前置条件。

### 验证

- 已写入 GitHub。
- 未在本地执行 `cd WEB_DEMO && npm install && npm run check && npm run build`。

---

## 2026-05-26 / game-template v0.1-lite

### 新增

- 初始化轻量 AI 游戏 Demo 开发模板。
- 新增 README.md。
- 新增 PROJECT.md。
- 新增 TASK.md。
- 新增 WORKFLOW.md。
- 新增 ROLES.md。
- 新增 GPT_DEMO、WEB_DEMO、UNITY_PROJECT 最小骨架。

### 修改

- 不从旧 template 仓库迁移冗长文档体系。
- 不保留多套任务卡和多套 AI 读取规则。

### 验证

- 待本地执行：`cd WEB_DEMO && npm install && npm run check && npm run build`。