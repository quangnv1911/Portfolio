import { IoHomeOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";
function RightNavbar() {

  return (
    <>
      <ul className="text-white">
        <li className="mt-[20px]">
          <div className="rounded-full bg-[#2b2a2a] flex justify-center items-center w-[50px] h-[50px]" title="Home">
            <Link to={"/"}><IoHomeOutline /></Link>


          </div>

        </li>
        <li className="mt-[20px]">
          <div className="rounded-full bg-[#2b2a2a] flex justify-center items-center  w-[50px] h-[50px]" title="Project">
            <Link to={"/project"}><FaBriefcase /></Link>

          </div>

        </li>
        <li className="mt-[20px]">
          <div className="rounded-full bg-[#2b2a2a] flex justify-center items-center  w-[50px] h-[50px]" title="About">
            <Link to={"/about"}><CiUser /></Link>
          </div>
        </li>
        <li className="mt-[20px]">
          <div className="rounded-full bg-[#2b2a2a] flex justify-center items-center  w-[50px] h-[50px]" title="Contact">
            <Link to={"/contact"}> <IoMdMail /></Link>
          </div>
        </li>
      </ul>
    </>
  );
}

export default RightNavbar;