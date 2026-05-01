# AI Navigator 2026 — AI 行业全景导航器

AI 行业全景知识导航器，覆盖六大前沿赛道的深度解析、厂商图谱与技术演进时间线。

## 领域

| 领域 | 内容 |
|---|---|
| 文本与代码生成 | LLM / MoE / 推理引擎 |
| 视觉与多模态 | Diffusion / DiT / ControlNet |
| 视频与动态 | 时空物理模拟 / 运镜控制 |
| 声音与音频 | TTS / 音乐生成 / 语音克隆 |
| 具身智能与 Agent | VLA / 人形机器人 / 自主 Agent |
| 算力与硬件基石 | GPU / LPU / NPU / 芯片生态 |

## 技术栈

- **React 19** + **TypeScript**
- **Vite 8** (构建工具)
- **Tailwind CSS 4** (样式)
- **Lucide React** (图标)
- **Vitest + React Testing Library** (测试)
- **ESLint + Prettier** (代码规范)

## 快速开始

```bash
npm install
npm run dev       # 启动开发服务器 (http://127.0.0.1:5173)
npm run build     # 构建生产版本
npm run preview   # 预览构建产物
```

## 脚本

| 命令 | 说明 |
|---|---|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 类型检查 + 构建 |
| `npm run preview` | 预览构建 |
| `npm run lint` | ESLint 检查 |
| `npm run typecheck` | TypeScript 类型检查 |
| `npm test` | 运行测试 (watch) |
| `npm run test:run` | 运行测试 (单次) |
| `npm run format` | Prettier 格式化 |
| `npm run format:check` | 检查格式化 |

## 全局搜索

按 `Ctrl+K` 打开全局搜索，支持搜索厂商、模型名称、特性等。

## 项目结构

```
src/
  main.tsx              # 入口
  App.tsx               # 根组件
  i18n.tsx              # 国际化 (zh/en)
  types.ts              # 共享类型定义
  components/
    ErrorBoundary.tsx   # 错误边界
    Header.tsx          # 顶部导航
    DomainContent.tsx   # 领域概览
    TechDeepDive.tsx    # 技术深度解析
    VendorMatrix.tsx    # 厂商图谱
    VendorDetailPanel.tsx # 厂商详情
    TimelineSidebar.tsx # 时间线侧边栏
    FooterTimeline.tsx  # 全局历史时间线
    SearchModal.tsx     # 全局搜索
    Tooltip.tsx         # 术语提示
  data/
    data.ts             # 所有数据
  utils/
    styles.ts           # 颜色样式映射
    renderWithTooltips.tsx # 术语渲染
  test/
    data.test.ts
    utils.test.ts
```

## 许可

MIT
