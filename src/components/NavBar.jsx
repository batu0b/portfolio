import { useState } from "react";
import { useNavigate, useMatch } from "react-router-dom";
export const NavBar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const about = useMatch("/portfolio/about-me");
  const hello = useMatch("/portfolio");
  const contact = useMatch("/portfolio/contact");

  return (
    <nav className="w-full justify-center px-4 lg:p-0  text-gray-400/70 flex h-20  md:text-xl sm:text-lg text-sm font-code">
      <div className=" w-full border-b  lg:w-10/12  border-gray-400/60  flex items-end justify-between  ">
        <div className=" cursor-pointer hover:text-white hover:drop-shadow-sm hover:shadow-white duration-500 text-gray-200/60">{`<BatuhanBahayetmez / >`}</div>
        <button onClick={() => setShow(true)} className="max-md:flex hidden ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <ul className=" basis-2/5 divide-x-2  divide-gray-400/60  justify-end md:flex hidden items-center ">
          <li
            className={`cursor-pointer hover:text-white ${
              hello && "text-white"
            } duration-300 px-8 `}
          >
            {" "}
            <span
              onClick={() => {
                navigate("/");
                setShow(false);
              }}
            >
              _Hello
            </span>{" "}
          </li>
          <li
            className={`cursor-pointer hover:text-white ${
              about && "text-white"
            } duration-300 px-8 `}
          >
            {" "}
            <span
              onClick={() => {
                navigate("/about-me");
                setShow(false);
              }}
            >
              _About
            </span>
          </li>
          <li
            className={`cursor-pointer hover:text-white ${
              contact && "text-white"
            } duration-300 px-8 `}
          >
            <span
              onClick={() => {
                navigate("/contact");
                setShow(false);
              }}
            >
              _Contact
            </span>{" "}
          </li>
        </ul>

        <div
          className={`top-0 right-0 w-[100vw] flex flex-col justify-center items-center gap-28 bg-[#040404] p-10 pl-20  fixed h-full z-40  ease-in-out duration-300 ${
            show && window.innerWidth <= 768
              ? "translate-x-0 "
              : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setShow(false)}
            className="absolute z-50 top-20 right-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <span
            className={`cursor-pointer hover:text-white ${
              hello && "text-white"
            } duration-300 px-8 `}
          >
            {" "}
            <span
              onClick={() => {
                navigate("/");
                setShow(false);
              }}
            >
              _Hello
            </span>{" "}
          </span>
          <span
            className={`cursor-pointer hover:text-white ${
              about && "text-white"
            } duration-300 px-8 `}
          >
            {" "}
            <span
              onClick={() => {
                navigate("/about-me");
                setShow(false);
              }}
            >
              _About
            </span>
          </span>
          <span
            className={`cursor-pointer hover:text-white ${
              contact && "text-white"
            } duration-300 px-8 `}
          >
            <span
              onClick={() => {
                navigate("/contact");
                setShow(false);
              }}
            >
              _Contact
            </span>{" "}
          </span>
        </div>
      </div>
    </nav>
  );
};
