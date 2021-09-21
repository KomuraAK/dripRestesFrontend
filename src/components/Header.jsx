import { ReactComponent as Logo } from "../img/logoSVG.svg";
import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./Menu";
import { Link } from "react-router-dom";

const Header = (_) => {
  const [sidebar, setsidebar] = useState(false);
  // const [searchbar, setsearchbar] = useState(false);

  const classe = sidebar
    ? /* se true */ "block fixed top-0 inset-y-0 right-0 transform translate-x-0 bg-cultured w-76 border-l-2 border-eireBlack justify-center items-center text-center h-full transition duration-300 ease-in-out lg:w-96 2xl:w-2/6"
    : /* se false */ "block fixed top-0 inset-y-0 right-0 transform translate-x-full bg-cultured w-76 border-l-2 border-eireBlack justify-center items-center text-center h-full transition duration-300 ease-in-out lg:w-96 2xl:w-2/6";

  return (
    <>
      <header
        className="w-full bg-cultured h-auto z-30 flex items-center 
      sm: justify-center"
      >
        <a
          href="/"
          className="order-2 w-auto h-28 mx-10 
      sm:order-2 sm:mr-FleftTright3 sm:ml-FleftTright3
      lg:mr-FleftTright2 lg:order-first lg:ml-10 lg:mr-0
      2xl:mr-FleftTright"
        >
          <Logo
            className="order-2 w-28 h-28  
        sm:order-2 
        lg:mr-FleftTright2 lg:order-first lg:ml-10 lg:mr-0
        2xl:mr-FleftTright"
          />
        </a>

        {/* menu */}
        <button
          className=" order-last transition duration-150 hover:text-maximumBlue"
          onClick={() => setsidebar(true)}
        >
          <HiIcons.HiMenuAlt3
            className="w-8 h-8 mx-10 
        md:mx-4
        lg:mx-8 "
          />
        </button>

        {/* pesquisar */}
        <button
          className="order-1 transition duration-150 hover:text-maximumBlue 
      lg:order-2"
        >
          <BsIcons.BsSearch
            className="w-8 h-8 mx-10
        md:mx-4
        lg:mx-8"
          />
        </button>
      </header>

      {/*menu*/}
      <nav className={classe}>
        
        <div className="flex align-center justify-center m-auto w-100 h-auto my-10">
          <BiIcons.BiUser className="w-12 h-auto mr-2 
          md:w-14 md:mr-4 " />

          <button className="border-2 rounded-md h-8 w-16 border-eireBlack mx-2 my-auto transition ease-in-out duration-150 font-semibold 
          md:h-10 md:w-20 md:mx-4 md:border-4 md:h-10
          hover:border-myrtleGreen hover:text-myrtleGreen">
            <Link to='Login'>Login</Link>
          </button>

          <button
            className="border-2 rounded-md h-8 w-16 border-eireBlack text-sm mx-2 my-auto transition ease-in-out duration-200 text-cultured bg-eireBlack font-semibold
            md:border-4 md:w-20 md:mx-4 md:border-4 md:h-10 md:text-base
            hover:border-myrtleGreen hover:bg-myrtleGreen"
          >
            <Link to='Cadastro'>Cadastro</Link>
          </button>

          <button className="mx-10 lg:mx-0 lg:ml-10" onClick={() => setsidebar(false)}>
            <AiIcons.AiOutlineClose className="
            w-10 h-10 transition ease-in-out duration-200 
            md:w-10 md:h-10
            hover:text-red600" />
          </button>
        </div>
        <ul className="divide-y divide-quickSilver ">
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className="text-base py-6 lg:text-2xl">
                <Link to={item.path} onClick={() => setsidebar(false)}>
                  <span className="transition duration-200 font-medium hover:text-maximumBlue ">
                    {item.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>


    </>
  );
};

export default Header;
