"use client";

import { useState } from "react";
import { questions } from "../data/questions";
import QuestionCard from "../components/QuestionCard";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[step];

  const handleSelect = (value: number) => {
    const nextScore = score + value;

    setScore(nextScore);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      localStorage.setItem("npcScore", String(nextScore));
      router.push("/result");
    }
  };

  return (
    <main>
      <h1>NPC人格指数测试</h1>

      <QuestionCard
        question={currentQuestion}
        onSelect={handleSelect}
      />
    </main>
  );
}
