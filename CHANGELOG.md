# CHANGELOG：变更记录

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
