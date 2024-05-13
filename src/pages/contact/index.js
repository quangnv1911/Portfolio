import { FaMap } from "react-icons/fa";
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
      <div className="body mt-[40px]">
        <div>
          <span className="uppercase">Don't be shy</span>
          <span>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</span>
          <div>
            <div><FaMap /></div>
            <div>
              <span className="uppercase">Address Point</span>
              <span>Co Nhue 2, Ha Noi, Viet Nam</span>
            </div>
          </div>

        </div>

        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Contact;