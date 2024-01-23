// Dependencies
import { Button } from "@nextui-org/react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col px-[3rem] md:px-[5rem] py-[5rem] text-white md:w-[50%]">
        <h1 className="font-[Roboto] text-[2rem]">Call Us</h1>
        <div className="flex gap-[0.5rem] items-center">
          <Button isIconOnly variant="flat" radius="full" size="sm">
            <FaPhone />
          </Button>
          <p>+1 (888) 891-7176</p>
        </div>
        <p>Call us today for expert investment guidance and personalized assistance!</p>
      </div>
      <div className="flex flex-col px-[3rem] md:px-[5rem] py-[5rem]  text-white md:w-[50%]">
        <h1 className="font-[Roboto] text-[2rem]">Email Us</h1>
        <div className="flex gap-[0.5rem] items-center">
          <Button isIconOnly variant="solid" radius="full" size="sm">
            <MdEmail />
          </Button>
          <p>support@investnow.com</p>
        </div>

        <p>Drop us an email to explore your investment opportunities with our expert team!</p>
      </div>
    </div>
  );
};

export default ContactInfo;
