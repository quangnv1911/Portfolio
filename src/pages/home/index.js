import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
function Home() {


  return (
    <>
      <div className="bg-[#ffb400] fixed h-[200%] rotate-[-15deg] w-full 
      top-[-50%] left-[-83%] z-[20]"></div>
      <div className="flex justify-center items-center h-screen 
      mx-[60px]">
        <div className="grid grid-cols-12">
          <div className="col-span-4 z-[40]">

            <img src="/img/profile-img.cb7c6e765e293aa071ac.jpg" />
          </div>

          <div className="col-span-8 mx-[40px]">
            <h1 className="">
              <span className="text-[#ffb400] block text-[51px] font-bold leading-[62px]
              font-[Poppins,sans-serif]">Hello, I'm Quang</span>
              <span className="text-[51px] font-bold leading-[62px]">Web Developer</span>
            </h1>
            <p className="text-[16px] leading-[35px] my-[30px] mx-[40px]
            font-['Open_Sans'] font-medium text-left">I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
            <div className="flex ml-[30px]">
              <Link className="w-full" to={"/project"}>
                <button className="font-bold text-[16px] uppercase py-[16px] pl-[32px] pr-[32px]
              bg-[#ffb400] rounded-[35px] flex items-center">
                  Project
                  <FaArrowRight className="text-[19px] ml-[20px] font-bold"/>
                </button>
              </Link>

              <Link className="w-full" to={"/about"}>
                <button className="font-bold text-[16px] uppercase py-[16px] pl-[32px] pr-[32px]
              bg-[#ffb400] rounded-[35px] flex items-center">
                  About
                  <FaArrowRight className="text-[19px] ml-[20px] font-bold"/>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Home;