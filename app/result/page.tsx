"use client";

import { useEffect, useState } from "react";

export default function ResultPage() {
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const score = localStorage.getItem("npcScore");

      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          score: Number(score)
        })
      });

      const data = await res.json();

      setResult(data);
    };

    fetchData();
  }, []);

  if (!result) return <div>分析中...</div>;

  return (
    <div>
      <h1>{result.level}</h1>

      <h2>{result.type}</h2>

      <p>{result.description}</p>

      <p>{result.agentAnalysis}</p>
    </div>
  );
}
