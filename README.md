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
4. 角色分工文件
5. GPT_DEMO / WEB_DEMO / UNITY_PROJECT 最小目录骨架
```

具体游戏类型、玩法系统、数值结构、配置表、资源规范，应由具体项目在立项后再生成。

---

## AI 默认读取文件

AI 每次开始工作前，只默认读取以下文件：

```text
README.md
PROJECT.md
TASK.md
WORKFLOW.md
ROLES.md
```

只有当 `TASK.md` 的“必须读取的额外文件”明确列出其他文件时，AI 才读取额外文件。

`_archive/` 是历史参考区，AI 默认禁止读取。

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
```
