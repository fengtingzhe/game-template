# game-template

轻量 AI 游戏 Demo 开发模板。

本仓库用于支持一套固定但精简的 AI 协作开发流程：

```text
用户 + ChatGPT 立项访谈
↓
ChatGPT 将立项内容写入 PROJECT.md
↓
用户 + ChatGPT 开发 GPT_DEMO
↓
Codex 提取规则基线
↓
Codex 定向代码迁移
↓
Codex 模块化重构
↓
Codex 规则继承审计
↓
Codex 持续开发 WEB_DEMO
↓
规则稳定后进入 UNITY_PROJECT
```

---

## 模板定位

本仓库不是某一类游戏的完整模板，也不是商业项目源码。

它只提供：

```text
1. AI 协作开发流程
2. 项目状态文件
3. 当前任务文件
4. AI 执行契约
5. 角色分工文件
6. 多子对话设计工作区
7. GPT_DEMO / WEB_DEMO / UNITY_PROJECT 最小目录骨架
```

具体游戏类型、玩法系统、数值结构、配置表、资源规范，应由具体项目在立项后再生成。

---

## 三个核心约束文件

```text
WORKFLOW.md 定义流程。
TASK.md 定义本轮授权。
AI_CONTRACT.md 定义执行纪律。
```

AI 执行任务时必须先确认：

```text
当前处于哪个阶段；
TASK.md 是否授权本轮工作；
AI_CONTRACT.md 是否允许读取和修改对应文件；
是否满足 WORKFLOW.md 中的阶段闸门。
```

---

## 多子对话协作规则

同一个项目下可以创建多个系统任务相关聊天，例如：

```text
总控
地图设计
数据结构
数值设计
UI/UX
剧情与世界观
技术调研
```

每个系统子对话可以在 `DESIGN_INBOX/` 下创建自己的工作区：

```text
DESIGN_INBOX/<system_name>/
├── README.md
├── schemes/
└── version_plans/
```

其中：

```text
schemes/        保存好方案、备选方案、值得保留的设计思路。
version_plans/  保存整理成包、准备提交总控审核的版本方案。
```

总控对话默认审核各子对话的 `version_plans/`，并在 `CONTROL_REVIEW.md` 中判断是否采纳、暂缓、废弃或晋升到正式文件。

未经总控审核与用户确认，`DESIGN_INBOX/` 中的内容不自动成为正式设计。

---

## AI 默认读取文件

AI 每次开始工作前，只默认读取以下文件：

```text
README.md
PROJECT.md
TASK.md
WORKFLOW.md
ROLES.md
AI_CONTRACT.md
```

只有当 `TASK.md` 的“必须读取的额外文件”明确列出其他文件时，AI 才读取额外文件。

`_archive/` 是历史参考区，AI 默认禁止读取。

---

## 执行前检查

AI 正式执行任务前，必须先输出：

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

如果执行者是 Codex，或任务涉及工程执行，还必须输出：

```text
任务归属判断：Codex 自己执行 / DeepSeek 执行，Codex 审核 / Codex + DeepSeek 协作
判断理由：
Codex 负责：
DeepSeek 负责：
Codex 审核方式：
等待用户确认：是
```

用户明确确认前，Codex 不得修改任何文件，不得创建分支，不得提交代码，不得让 DeepSeek 执行子任务。

如果无法判断阶段、范围、权限、对话类型、写入类型或任务归属，AI 必须停止执行，不得自行猜测。

---

## 运行 WEB_DEMO

Windows 下可运行：

```text
WEB_DEMO/run_web_demo.bat
```

或手动运行：

```bash
cd WEB_DEMO
npm install
npm run check
npm run dev
```

---

## 核心原则

```text
流程保留，文档减半。
规则集中，任务唯一。
模板只管开发秩序，不预设具体游戏类型。
AI 不能因为“觉得应该做”就做；只能因为 TASK.md 授权它做，才可以做。
Codex 不能因为“能做”就直接做；必须先判断任务归属，并等待用户确认后才能做。
每个子对话有自己的工作区。
schemes 保存好想法。
version_plans 提交可评审版本方案。
子对话只投递，不拍板。
总控负责分配、合并和晋升。
```