# rsbuild-shadcn-boilerplate

这是一个基于 [Rsbuild](https://rsbuild.rs)、[TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html)、[React](https://react.dev/learn)、[TailwindCSS](https://tailwindcss.com/docs/installation/using-vite) 以及 [Shadcn UI](https://ui.shadcn.com/) 搭建的 React 开发模板项目。

![intro](./intro.png)

## 简介

这个项目旨在为开发者提供一个现代、高效且可扩展的 React 开发模板。通过整合 Rsbuild 架构、TypeScript 静态类型检查、TailwindCSS 实用程序优先的样式以及 Shadcn UI 组件库，简化项目初始化过程，让你专注于业务逻辑开发。

## 技术栈

- **语言与框架**: TypeScript, React
- **CSS 框架**: TailwindCSS
- **UI 组件库**: shadcn ui
- **构建工具**: rsbuild

## 特性

- 基于 Rsbuild，提供快速的项目初始化和构建流程
- 强类型支持，减少运行时错误
- 灵活且可定制化的 UI 组件，可快速构造响应式界面
- 集成 TailwindCSS，轻松实现响应式设计
- 使用 EsLint、Prettier 进行代码规范检查和格式化

## 安装与使用

1. 克隆仓库：
   ```bash
   git clone <仓库地址>
   cd rsbuild-shadcn-boilerplate
   ```
2. 安装依赖（确保已安装 pnpm）：
   ```bash
   pnpm install
   ```
3. 启动开发服务器：
   ```bash
   pnpm dev
   ```
4. 打开浏览器访问对应的本地地址开始开发。

## 项目结构

- `src/` - 源代码目录
  - `components/` - 公共组件库
  - `home/` - 首页组件示例
  - `lib/` - 工具函数和模块
- `public/` - 静态资源文件
- `rsbuild.config.ts` - Rsbuild 配置文件

## 贡献

欢迎提交 issues 和 pull requests。一切建议都会被认真考虑，共同构建更好的开发模板！

