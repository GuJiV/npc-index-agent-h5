import { calculateNPCLevel } from "./personalityEngine";

export async function runAgent(score: number) {
  const personality = calculateNPCLevel(score);

  const response = {
    ...personality,
    agentAnalysis: `
你具有较强环境感知能力。

你的行为偏向低冲突与高适应。

在人际关系中，你更像观察剧情发展的人。
`
  };

  return response;
}
