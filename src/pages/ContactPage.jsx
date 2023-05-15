import Cloud from "../assets/cloud.png";
import SmallLand from "../assets/land.png";
import TubLand from "../assets/tubland.png";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
export const ContactPage = () => {
  return (
    <div className="text-white w-full justify-center  relative  max-lg:h-full flex h-[calc(100%-5rem)] ">
      <div className="z-10 flex flex-col gap-4 py-20  items-center w-3/4 h-full">
        <div className="flex w-full items-center px-5 justify-between">
          <div className="flex items-center  gap-4">
            <div className="h-32 w-32 max-lg:h-24 max-lg:w-24  max-md:h-16 max-md:w-16   rounded-full border-2 border-[#414ead] ">
              <img
                src="public/images/me.png"
                alt=""
                className="rounded-full   h-full w-full"
              />
            </div>
            <div className="font-code ">
              <h1 className="text-[#414ead]"> @batu0b </h1>
              <p className="text-[#607B96]">Created on June 28th</p>
            </div>
          </div>
        </div>
        <div className="h-fit w-full px-12 py-3   bg-[#011221]/80 rounded-lg border-2  border-[#1E2D3D] font-code">
            <SyntaxHighlighter
              language="json"
              style={dark}
              showLineNumbers
              wrapLongLines={true}
              customStyle={{ backgroundColor: "transparent" }}
              wrapLines={true}
            >
              {`{ 
"Contact" : {
        "Email": "batuhan.bahayetmez@gmail.com",
      },
"Social": {
        "LinkedIn" : "Batuhan Bahayetmez",
        "GitHub": "batu0b",
      }
}`}
            </SyntaxHighlighter>
        </div>
      </div>
      <span>
        <img
          src={Cloud}
          alt=""
          className="absolute top-16 right-36 lg:h-48 md:h-40  h-32 "
        />
        <img
          src={TubLand}
          alt=""
          className="absolute bottom-0 left-0 lg:h-52 md:h-44  h-36 "
        />
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
    </div>
  );
};
