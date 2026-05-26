# game-template

轻量 AI 游戏 Demo 开发模板。

本仓库用于支持一套固定但精简的 AI 协作开发流程：

```text
立项访谈
→ GPT_DEMO 快速草图
→ 规则基线
→ 定向代码迁移
→ 模块化重构
→ 规则继承审计
→ WEB_DEMO 正式原型开发
→ UNITY_PROJECT
```

---

## 模板定位

本仓库不是某一类游戏的完整模板，也不是商业项目源码。

它只提供：

```text
1. 项目状态文件
2. 当前任务文件
3. 统一 AI 协作规则
4. 多子对话设计工作区
5. GPT_DEMO / WEB_DEMO / UNITY_PROJECT 最小目录骨架
```

具体游戏类型、玩法系统、数值结构、配置表、资源规范，应由具体项目在立项后再生成。

---

## 默认读取文件

AI 每次开始工作前，默认只读取：

```text
README.md
PROJECT.md
TASK.md
RULES.md
```

其他文件只有在 `TASK.md` 的“必须读取的额外文件”中明确列出时才读取。

---

## 核心文件职责

```text
PROJECT.md     项目状态与当前阶段
TASK.md        当前任务唯一事实来源
RULES.md       统一规则来源
DESIGN_INBOX/  子对话设计工作区
WEB_DEMO/      正式 Web 原型工程
GPT_DEMO/      快速可试玩草图目录
UNITY_PROJECT/ Unity 阶段目录
```

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