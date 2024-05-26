import { Link } from "react-router-dom";

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
            <h1 className="text-[44px] font-bold leading-[62px]">
              <span className="text-[#ffb400] block">Hello, I'm Quang</span>
              <span>Web Developer</span>
            </h1>
            <h4 className="text-[16px] leading-[35px] my-[15px] font-['Open_Sans']">I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</h4>
            <div>
              <button>
                <Link to={"/project"}>Project</Link>
              </button>
              <button>
                <Link to={"/about"}>About</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Home;