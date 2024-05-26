import { FaHome, FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
function RightNavbar() {

  return (
    <>
      <ul className="text-white">
        <li className="mt-[20px] cursor-pointer">

          <Link to={"/"} className="rounded-full
          hover:bg-[#ffb400] bg-[#2b2a2a] flex justify-center items-center w-[50px] h-[50px]" title="Home"><FaHome /></Link>




        </li>
        <li className="mt-[20px] cursor-pointer">

          <Link to={"/project"} className="rounded-full
          hover:bg-[#ffb400] bg-[#2b2a2a] flex justify-center items-center  w-[50px] h-[50px]" title="Project"><FaBriefcase /></Link>



        </li>
        <li className="mt-[20px]  cursor-pointer">

          <Link to={"/about"} className="rounded-full
          hover:bg-[#ffb400] bg-[#2b2a2a] flex justify-center items-center  w-[50px] h-[50px]" title="About"><FaUser /></Link>

        </li>
        <li className="mt-[20px] cursor-pointer">

          <Link to={"/contact"} className="rounded-full bg-[#2b2a2a] flex justify-center items-center  w-[50px] h-[50px]
          hover:bg-[#ffb400]" title="Contact"> <IoMdMail /></Link>

        </li>
      </ul>
    </>
  );
}

export default RightNavbar;