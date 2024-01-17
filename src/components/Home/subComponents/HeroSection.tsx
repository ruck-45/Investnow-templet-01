// Dependencies
import { RiCustomerServiceFill } from "react-icons/ri";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { FaArrowCircleRight } from "react-icons/fa";
import { TbCoins } from "react-icons/tb";
import { Button } from "@nextui-org/react";

// Local Files
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="HeroSection flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-[3rem] w-[100%] px-[3rem] py-[2rem] bg-[rgba(0,0,0,0.5)]">
        <div className="flex flex-col items-center text-center text-[3rem] lg:text-[3.5rem] font-['Kalnia'] font-bold leading-[3.4rem] lg:leading-[4rem]">
          <span className="text-[white]">
            Invest with <span className="text-[#F5A524]">Confidence</span>
          </span>

          <span className="text-[white]">
            & <span className="text-[#F5A524]">Secure</span> Your Future.
          </span>
        </div>

        <div className="flex gap-[2rem]">
          <div className="text-white flex flex-col items-center">
            <RiCustomerServiceFill className="text-[3rem]" />
            <p className="text-center max-w-[6rem]">25 million+ clients</p>
          </div>
          <div className="text-white flex flex-col items-center">
            <HiMiniBuildingOffice2 className="text-[3rem]" />
            <p className="text-center max-w-[5rem]">400+ branches</p>
          </div>
          <div className="text-white flex flex-col items-center">
            <TbCoins className="text-[3rem]" />
            <p className="text-center max-w-[5rem]">$7.6 trillion in assets</p>
          </div>
        </div>

        <Button
          color="warning"
          variant="ghost"
          radius="full"
          endContent={<FaArrowCircleRight className="mt-[0.2rem]" />}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
