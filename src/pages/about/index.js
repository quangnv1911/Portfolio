import { Link } from "react-router-dom";

function About() {


  return (
    <div className="w-4/5 m-auto">
      <header className="relative flex justify-center items-center pt-[75px]">
        <h1 className="uppercase font-title text-[56px] font-black">
          about
          <span className="text-[#ffb400]"> me</span>
        </h1>
        <span className="uppercase font-blur-title
         text-[hsla(0,0%,100%,.07)] text-[110px]
          font-extrabold tracking-wide
          absolute">about me</span>
      </header>
      <div className="body">
        <div>
          <div className="flex ">
            <h3 className="text-[26px] font-bold uppercase mb-[24px] mt-[48px]">
              PERSONAL INFOS
            </h3>

          </div>
          <div className="flex justify-around">
            <div className="flex-wrap flex flex-1">
              <div className="flex-wrap flex w-1/2 pb-[20px]">
                Full Name: Nguyen Vinh Quang
              </div>
              <div className="flex-wrap flex w-1/2 pb-[20px]">Sex: Male</div>
              <div className="flex-wrap flex w-1/2 pb-[20px]">
                Date of birth: 19/11/2003
              </div>
              <div className="flex-wrap flex w-1/2 pb-[20px]">
                Nationality: Viet Nam
              </div>
              <div className="flex-wrap flex w-1/2 pb-[20px]">
                Phone: (+84) 0334745645
              </div>
              <div className="flex-wrap flex w-1/2 pb-[20px]">
                Language: Vietnamese, English
              </div>


              <div className="flex-wrap flex w-1/2 pb-[20px]">Address: Ha Noi, Viet Nam</div>
              <div className="flex-wrap flex w-1/2 pb-[20px]">Email: quangnv1911@gmail.com</div>
              <div className="flex-wrap flex w-1/2 pb-[20px]">Linkedin:

                <Link to={"https://www.linkedin.com/in/quangnv-597558275"} target="_blank" rel="noopener noreferrer" >
                  &nbsp;quangnv-597558275
                </Link>
              </div>
              <div className="flex-wrap flex w-1/2 pb-[20px]">
                Facebook:
                <Link to={"https://www.facebook.com/quangnv1911"} target="_blank" rel="noopener noreferrer" >
                  &nbsp;quangnv1911
                </Link></div>
            </div>
            <div className="flex flex-wrap flex-1">
              <div className="border-solid border border-[#252525]
            m-[16px] pt-[20px] pr-[30px] pb-[25px] pl-[40px]
            w-[calc(50%-32px)]
            ">
                <span className="text-[50px] text-[#ffb400] block">1+</span>
                <span className="block">Experience</span>
              </div>
              <div className="border-solid border border-[#252525]
            m-[16px] pt-[20px] pr-[30px] pb-[25px] pl-[40px]
            w-[calc(50%-32px)]">
                <span className="text-[50px] text-[#ffb400] block">1+</span>
                <span className="block">Completed project</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <a href="/resource/quangnv_CV.pdf" target="_blank" className="mr-[2rem]">
              <button className="rounded-3xl border border-[#ffb400]
            uppercase text-[15px]
            px-[32px] py-[16px] 
            flex
            hover:cursor-pointer">View CV

              </button>
            </a>
            <a href="/resource/quangnv_CV.pdf" download={"true"}>
              <button className="rounded-3xl border border-[#ffb400]
            uppercase text-[15px]
            px-[32px] py-[16px] 
            flex
            hover:cursor-pointer">Download CV

              </button>
            </a>
          </div>
        </div>
        <div className="skill">
          <div className="flex ">
            <h3 className="text-[26px] font-bold uppercase mb-[24px] mt-[48px]">
              Skill
            </h3>

          </div>

          <div className="flex flex-wrap">
            <div className="">
              <img src="/img/skill/html.png" alt="html" className="w-1/2 rounded-full bg-[#2b2a2a]" />
              <span>HTML</span>
            </div>

            <div className="">
              <img src="/img/skill/html.png" alt="html" className="w-1/2 rounded-full bg-[#2b2a2a]" />
              <span>HTML</span>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default About;