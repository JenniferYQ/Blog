# 系统架构

本文档描述了整个monorepo的架构设计。

## 项目结构

blog-monorepo/
├── packages/                 # 包管理目录
│   ├── core/                # 核心功能模块
│   │   ├── shared/          # 共享工具和组件
│   │   ├── vue-lib/         # Vue 库
│   │   └── react-lib/       # React 库
│   ├── features/            # 业务功能模块
│   │   ├── auth/            # 认证相关
│   │   └── dashboard/       # 仪表盘相关
│   └── runtime/             # 运行时相关
├── docs/                    # 文档中心
│   ├── api/                 # API文档
│   ├── guides/             # 使用指南
│   └── architecture/       # 架构设计
└── pnpm-workspace.yaml     # 工作空间配置

## 技术栈

- Vue 3 (Composition API)
- React 18
- Vite 构建工具
- PNPM Workspace 管理