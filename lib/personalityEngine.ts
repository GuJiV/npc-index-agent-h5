export function calculateNPCLevel(totalScore: number) {
  if (totalScore <= 6) {
    return {
      level: "低NPC指数",
      type: "主动型人格",
      description: "你更倾向掌控节奏。"
    };
  }

  if (totalScore <= 10) {
    return {
      level: "中度NPC指数",
      type: "观察型人格",
      description: "你更偏向环境适应。"
    };
  }

  return {
    level: "高NPC指数",
    type: "沉浸型NPC人格",
    description: "你容易成为环境的陪衬角色。"
  };
}
