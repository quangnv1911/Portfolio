import { FaMap } from "react-icons/fa";
import { Input, Textarea } from "@material-tailwind/react";
import { IoMdMail } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
function Contact() {


  return (
    <div className="w-4/5 m-auto">
      <header className="relative flex justify-center items-center pt-[75px]">
        <h1 className="uppercase font-title text-[56px] font-black">
          get in
          <span className="text-[#ffb400]"> touch</span>
        </h1>
        <span className="uppercase font-blur-title
         text-[hsla(0,0%,100%,.07)] text-[110px]
          font-extrabold tracking-wide
          absolute">contact</span>
      </header>
      <div className="body mt-[40px] grid grid-cols-3">
        <div className="col-span-1 text-left">
          <span className="uppercase block text-[26px] font-semibold my-[12px]">Don't be shy</span>
          <span className="block my-[12px]">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</span>

          <div>
            <div className="flex my-[24px]">
              <div className="text-[#ffb400] text-[33px]"><FaMap /></div>
              <div className="ml-[16px]">
                <span className="uppercase block opacity-80
                font-normal leading-6">Address Point</span>
                <span className="font-semibold leading-6">Co Nhue 2, Ha Noi, Viet Nam</span>
              </div>
            </div>

            <div className="flex my-[12px]">
              <div className="text-[rgb(255,180,0)] text-[33px]"><IoMdMail /></div>
              <div className="ml-[16px]">
                <span className="uppercase block opacity-80
                font-normal leading-6">Mail me</span>
                <span className="font-semibold leading-6">quangnv1911@gmail.com</span>
              </div>
            </div>

            <div className="flex my-[12px]">
              <div className="text-[#ffb400] text-[33px]"><FaSquarePhone /></div>
              <div className="ml-[16px]">
                <span className="uppercase block opacity-80
                font-normal leading-6">Call me</span>
                <span className="font-semibold leading-6">+84 334 745 645</span>
              </div>
            </div>

          </div>


        </div>

        <div className="col-span-2 ml-[28px]">
          <div className="mb-[30px] grid grid-cols-2">
            <div className="col-span-1 mr-[15px]">
              <Input label="Your Name" required
              className="border !border-solid !border-[#111]
              !bg-[#252525] text-[#fff] overflow-hidden focus:!border-x-amber-500 focus:!border-b-amber-500 focus:ring-0
              !h-[40px] " 
              color="amber"
              />
            </div>

            <div className="col-span-1 mr-[15px]">
              <Input label="Your Email" required
              className="border !border-solid !border-[#111]
              !bg-[#252525] text-[#fff] overflow-hidden focus:!border-x-amber-500 focus:!border-b-amber-500 focus:ring-0" 
              color="amber"
              />
            </div>
          </div>
          <div className="mb-[30px]">
            <Input label="Your subject" required 
            className="border !border-solid !border-[#111]
            !bg-[#252525] text-[#fff] overflow-hidden focus:!border-x-amber-500 focus:!border-b-amber-500 focus:ring-0" 
            color="amber"/>
          </div>
          <div className="mb-[30px]">
            <Textarea label="Your message" required 
            className="border !border-solid !border-[#111]
            !bg-[#252525] text-[#fff] overflow-hidden focus:!border-x-amber-500 focus:!border-b-amber-500 focus:ring-0
           !h-[180px] " 
            color="amber" size="lg"/>
          </div>
          <div className="flex">
            <button className="rounded-[35px] bg-[#ffb400]
            text-[#fff] leading-snug text-center text-[15px] font-semibold cursor-pointer
            py-[16px] px-[32px] uppercase hover:opacity-70">Send message
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;