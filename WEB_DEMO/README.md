# WEB_DEMO：正式 Web 原型工程

`WEB_DEMO/` 是在 GPT_DEMO 方向确认后的正式 Web 原型工程。

它不是从零重写，也不是整文件复制 GPT_DEMO。

---

## 核心方法

```text
规则基线锁定体验
定向代码迁移保证还原度
模块化重构保证可维护
迁移审计防止跑偏
```

---

## 推荐流程

```text
读取 GPT_DEMO
↓
提取规则基线到 WEB_DEMO/design/rule_baseline.md
↓
按系统切片迁移 GPT_DEMO 已验证逻辑
↓
重构到 WEB_DEMO/src/
↓
更新 WEB_DEMO/design/migration_audit.md
↓
持续开发正式 Web Demo
```

---

## 当前状态

当前只包含 Vite + Canvas 最小骨架，不包含具体游戏玩法。

---

## 启动方式

```bash
npm install
npm run check
npm run dev
```

或 Windows 下运行：

```text
run_web_demo.bat
```
