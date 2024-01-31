// Dependencies
import { Avatar } from "@nextui-org/react";

// Local Files
import Emilie from "../assets/RHceo.jpg";
import John from "../assets/RhCoFounder.jpg";

const Leaders = [
  {
    name: "Michael Anderson",
    designation: "Co-Founder & Managing Director",
    bio: "Michael Anderson, co-founder and MD of InvestNow, is a visionary leader with a rich background in financial innovation. With over a decade of experience in investment strategy, he has led transformative initiatives for investors worldwide. Michael's strategic foresight and dedication to financial excellence define InvestNow. His achievements include steering the company to industry recognition and a 25% growth in client portfolios within the first year.",
    thumbnail: John,
  },
];

const Leadership = () => {
  return (
    <div className="flex justify-center md:h-[60rem] h-auto items-center bg-[#e9ecef]   flex-col    ">
      <div>
        <h1 className="mt-[2rem] lg:py-[2rem] font-['Roboto'] text-[3rem] lg:text-[4rem] lg:max-w-[25rem] leading-[4rem] text-center">
          Meet Our <span className="text-[#F5A524]">Leadership</span>
        </h1>
      </div>
      <div className=" flex  flex-col justify-center items-center  md:mb-[8rem]">
        {Leaders.map((data, index) => (
          <div key={index} className="xl:w-[50%] xl:py-[5rem] flex flex-col gap-[1rem]">
            <div className="flex flex-col items-center text-center px-[2rem] py-[2rem]">
              <Avatar src={data.thumbnail} className="w-[10rem] h-[10rem]" />
              <h1 className="font-['DM_Serif_Display'] text-[2rem] font-semibold">{data.name}</h1>
              <p className="italic text-md text-default-800">{data.designation}</p>
            </div>
            <p className="text-justify text-default-500 text-[0.9rem] sm:text-md max-w-[35rem] lg:max-w-[100%]">
              {data.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
