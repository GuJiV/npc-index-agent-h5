import type { NextApiRequest, NextApiResponse } from "next";
import { runAgent } from "../../lib/agentController";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { score } = req.body;

  const result = await runAgent(score);

  res.status(200).json(result);
}
