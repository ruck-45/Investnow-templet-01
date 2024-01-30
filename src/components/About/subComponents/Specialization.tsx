// Dependencies
import { Image, Button, Progress } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";

// Local Files
import leadership from "../assets/leadership.jpg";

const progressData = [
  {
    label: "Growth",
    value: 85,
  },
  {
    label: "Business Guidance",
    value: 97,
  },
  {
    label: "Industry Building",
    value: 90,
  },
];

const Specialization = () => {
  return (
    // <div className="bg-[#052814] flex items-center justify-between text-white px-[1rem] lg:px-[5rem] py-[5rem] gap-[3rem]">
    //   <div className="flex items-center w-full lg:w-[50%]">
    //     <div className="w-full flex flex-col items-center lg:items-start gap-[3rem] ms-[3rem] lg:ms-[0]">
    //       <div>
    //         <h1 className="font-['Roboto'] font-bold text-[2rem] lg:text-[3rem] leading-[2rem] lg:leading-[3.7rem] text-center lg:text-left">
    //           Getting the Best Terms
    //         </h1>
    //         <h1 className="font-['Roboto'] font-bold text-[2rem] lg:text-[3rem] leading-[2rem] lg:leading-[3.7rem] text-center lg:text-left">
    //           On Your Investment
    //         </h1>
    //       </div>
    //       <p>We specialize in securing optimal terms for your investment ventures.</p>

    //       <div className="w-full flex flex-col gap-[1rem] items-center lg:items-start">
    //         {progressData.map((data, indx) => (
    //           <Progress
    //             label={data.label}
    //             size="sm"
    //             value={data.value}
    //             color="success"
    //             showValueLabel={true}
    //             className="max-w-md italic"
    //           />
    //         ))}
    //       </div>

    //       <Button
    //         variant="shadow"
    //         color="warning"
    //         radius="full"
    //         endContent={<FaArrowCircleRight className="mt-[0.2rem]" />}
    //       >
    //         Learn More
    //       </Button>
    //     </div>
    //   </div>
    //   <Image
    //     isBlurred
    //     src={leadership}
    //     alt="Help"
    //     width={500}
    //     radius="none"
    //     className="border-[1rem] hidden lg:block rotate-3 hover:rotate-1"
    //   />
    // </div>
    <div className="flex flex-col">
      <div className="mx-[18%] p-[2rem] text-2xl font-bold">
        We believe the financial system should be built to work for everyone. That’s why we create products that let you
        start investing at your own pace, on your own terms.
      </div>
    </div>
  );
};

export default Specialization;
