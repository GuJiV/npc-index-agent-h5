# NPC Index Agent H5

基于 AI Agent 的人格指数测试小游戏。

## 核心功能

- 动态人格测试
- NPC人格计算模型
- Agent推理输出
- H5互动体验

## Agent逻辑

Question Agent → Score Agent → Personality Agent → Result Agent

## 技术栈

- Next.js
- React
- TypeScript
- AI Agent Workflow

## 项目结构
npc-index-agent-h5/
│
├── app/
│   ├── page.tsx
│   ├── result/page.tsx
│
├── components/
│   ├── QuestionCard.tsx
│   ├── ProgressBar.tsx
│
├── lib/
│   ├── agentController.ts
│   ├── personalityEngine.ts
│   ├── prompts.ts
│
├── data/
│   ├── questions.ts
│
├── pages/api/
│   ├── analyze.ts
│
├── styles/
│   ├── globals.css
│
├── package.json
├── tsconfig.json
└── README.md
