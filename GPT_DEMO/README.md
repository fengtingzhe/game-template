# GPT_DEMO：快速可试玩草图

`GPT_DEMO/` 用于用户与 ChatGPT 在方案讨论阶段快速验证玩法方向。

---

## 目标

```text
快速看见
快速试玩
快速暴露偏差
快速修正方向
```

GPT_DEMO 追求方向验证，不追求工程质量。

---

## 允许

- 单文件 HTML
- 少量硬编码
- 简化美术
- 简化数值
- Canvas 快速绘制
- 快速覆盖式迭代

---

## 禁止

- 不要把 GPT_DEMO 当正式工程
- 不要长期堆功能
- 不要跳过用户确认直接进入 WEB_DEMO
- 不要不经整理就整文件复制到 WEB_DEMO

---

## 进入 WEB_DEMO 前必须完成

- 用户确认方向基本正确
- PROJECT.md 已更新项目方向
- TASK.md 已写明下一阶段任务
- Codex 已准备提取规则基线

---

## 推荐文件

```text
GPT_DEMO/index.html
GPT_DEMO/gpt_sketch_001.html
GPT_DEMO/assets/
```

`index.html` 始终指向当前推荐试玩版本。
