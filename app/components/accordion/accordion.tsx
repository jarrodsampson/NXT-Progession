import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div data-cy="accordion" className="mb-6">
      <div
        data-testid="question-div"
        className="flex justify-between cursor-pointer items-center"
        onClick={toggleAccordion}
      >
        <h2 className="text-xl font-semibold mb-2">{question}</h2>
        {isActive ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      <div
        data-cy="answer"
        className={`mt-2 overflow-hidden transition-max-height duration-300 ${
          isActive ? "max-h-96" : "max-h-0"
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
