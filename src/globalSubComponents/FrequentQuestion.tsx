// Dependencies
import { Button } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// Local Files
import questions from "../components/Contact/assets/frequetQuestions.json";
import QuestionAccordion from "./QuestionAccordion";

const FrequentQuestion = () => {
  return (
    <div className="flex flex-col md:flex-row bg-yellow-200 px-[1rem] md:px-[2rem] lg:px-[3rem] py-[5rem] gap-[2rem] md:gap-[0rem] rounded-none">
      <div className="md:w-[50%] flex flex-col gap-[1rem] px-[1rem]">
        <h1 className="font-[Roboto] text-[2rem]">Frequently Asked Questions</h1>
        <p>
          Discover quick answers to common queries about our services in our FAQ section. For specific questions or
          further assistance, our dedicated support team is ready to help. We're committed to ensuring you have the
          information you need for a seamless experience with us.
        </p>

        <ul className="list-disc list-inside text-justify">
          <li>What are your fees for different trading platforms?</li>
          <li>What investment strategies do you recommend for beginners?</li>
          <li>How do I open a brokerage account?</li>
        </ul>

        <Link to="../FAQ">
          <Button
            variant="shadow"
            color="warning"
            radius="full"
            endContent={<FaArrowCircleRight className="mt-[0.1rem]" />}
            className="max-w-[8rem] mt-[1rem] rounded-none"
          >
            Learn More
          </Button>
        </Link>
      </div>

      <div className="md:w-[50%] md:ps-[2rem] rounded-none">
        <QuestionAccordion className="dark rounded-none" questions={questions} varient="splitted" />
      </div>
    </div>
  );
};

export default FrequentQuestion;
