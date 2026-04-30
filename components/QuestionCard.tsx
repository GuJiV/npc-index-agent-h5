type Props = {
  question: any;
  onSelect: (score: number) => void;
};

export default function QuestionCard({ question, onSelect }: Props) {
  return (
    <div>
      <h2>{question.title}</h2>

      {question.options.map((option: any, index: number) => (
        <button
          key={index}
          onClick={() => onSelect(option.score)}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
}
