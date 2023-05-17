import Cloud from "../assets/cloud.png";
import SmallLand from "../assets/land.png";
import Tub from "../assets/tubo.png";
import Land from "../assets/Group 7.png";

export const HomePage = () => {

 const  hadnleDownload  = () => {
  fetch('BATUHAN BAHAYETMEZ.pdf').then(response => {
    response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'BATUHAN BAHAYETMEZ.pdf';
        alink.click();
    })
})
 }

 return ( <div className="text-white w-full justify-center overflow-x-hidden relative  flex h-[calc(100%-5rem)] ">
    <div className="z-10 flex  lg:items-start w-3/4 h-full">
      <div className="mt-12 flex flex-col gap-16">
        <h1 className="font-press-start text-lg lg:text-2xl">Hi Everyone;</h1>
        <div className="backdrop-blur-sm bg-[#040404]/30 z-10 w-fit p-5 rounded-md">
          <span className="text-3xl lg:text-5xl font-code">
            I&apos;m{" "}
            <span className="text-[#4f69d2] uppercase">
              react.js developer &gt;
            </span>
          </span>
          <span className="text-[#529955] lg:text-xl md:text-lg underline font-code">
            <p>{"//"}welcome to my portfolio,</p>
            <p>{"//"}you can also see my projects on my Github page</p>
          </span>
          <br />
          <p className="lg:text-xl md:text-lg">
            {" "}
            <span className="text-[#3e54ab]">const</span>{" "}
            <span className="text-[#43D9AD]">githubURL </span> ={" "}
            <a className="text-[#ce9178]" href="https://github.com/batu0b">
              &quot;https://github.com/batu0b&quot;
            </a>
            ;{" "}
          </p>
          <br />
          <button onClick={hadnleDownload} className="font-press-start text-xs border-2 px-4 md:text-lg lg:text-xl rounded-xl outline-2 hover:outline outline-offset-4 duration-100 outline-purple-800 ">
            Resume
          </button>
        </div>
      </div>
    </div>
    <span >
      <img src={Cloud} alt="" className="absolute top-16 right-36 lg:h-48 md:h-40  h-32 " />
      <img src={Land} alt="" className="absolute bottom-32  right-20 lg:h-80 md:h-64 h-56 " />
      <img src={Tub} alt="" className="absolute bottom-32 left-0 lg:h-20 md:h-14  h-11" />
      <span>
        <img
          src={SmallLand}
          alt=""
          className="absolute bottom-52 left-40 lg:h-20 h-11 md:h-14 "
        />
       
        <img
          src={SmallLand}
          alt=""
          className="absolute bottom-40 left-64 lg:h-20 h-11 md:h-14 "
        />
        <img
          src={Cloud}
          alt=""
          className="absolute bottom-40 left-64 lg:h-20 h-11  md:h-14"
        />
        
      </span>
    </span>
  </div>)
};
