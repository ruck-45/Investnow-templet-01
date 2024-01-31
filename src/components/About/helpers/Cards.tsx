import { Card, CardHeader, CardBody, Typography, Button } from "@material-tailwind/react";
import p1 from "../assets/RHceo.jpg";

type cardsProps = {
  title?: string;
  des?: string;
  photo?: string;
};

export function Cards(props: cardsProps) {
  return (
    <>
      <div className="bg-yellow-200 h-[28rem] md:h-[30rem] w-[70rem] flex flex-col md:flex-row gap-5 items-center justify-between  sm:p-[8rem] md:p-[5rem] md:mx-[8rem] ">
        <div className="md:h-full md:w-[40rem] h-[15rem] w-[20rem] bg-cover bg-center  px-[3rem] mt-[2rem]">
          <img className="h-full w-full" src={props.photo} />
        </div>
        <div className="flex flex-col gap-4 md:py-[2rem]   h-full">
          <h1 className="text-2xl text-center md:text-4xl font-bold font-serif text-green-600">{props.title}</h1>
          <div className="md:px-[1rem] px-[12rem]">
            <p className="text-[1rem] font-serif md:px-[0.5rem] px-[10rem] text-center md:font-semibold text-gray-500">
              {props.des}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
