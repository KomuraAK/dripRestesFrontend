import React, { useState } from "react";
import logoSVG from "../img/logoSVG.svg";
import * as RiIcons from "react-icons/ri";

function FormLogin() {
  const [passwordShow, setpasswordShow] = useState(false);

  const togglePasswordShow = () => {
    setpasswordShow(passwordShow ? false : true);
  }
  return (
    <main className="flex ">
      <article className="z-0 bg-cultured w-halfScreen h-screen hidden align-center justify-center shadow-inner md:flex">
        <a href="/" className="m-auto">
          <img src={logoSVG} alt="" className="w-96 h-96 justify-center" />
        </a>
      </article>
      <article className="z-40 shadow-2xl w-halfScreen flex align-center justify-center">
        <form
          action="#"
          method="post"
          className="rounded-3xl border-4 w-2/4 flex flex-col shadow-xl p-4 m-auto border-dCultured"
        >
          <label
            htmlFor="user"
            className="font-semibold text-xl tracking-wider py-2"
          >
            E-mail
          </label>
          <input
            type="text"
            name="user"
            className="outline-none border-2 rounded-xl border-eireBlack w-12/12 mx-4 leading-8 px-4 transition duration-150 ease-out
          focus:border-myrtleGreen focus:shadow-green"
          />

          <label
            htmlFor="password"
            className="font-semibold text-xl tracking-wider py-2"
          >
            Senha
          </label>
          <div className='w-12/12 flex mx-4 '>
            <input
              type={passwordShow ? "text" : "password"}
              name="password"
              className="outline-none border-2 border-eireBlack leading-8 px-2 rounded-xl w-11/12 transition duration-150 ease-out
          focus:border-myrtleGreen focus:shadow-green"
            />

            <i className="
              mx-2 justify-center align-center my-auto transition duration-100 ease-in
              hover:text-myrtleGreen
            " onClick={togglePasswordShow}>
              <RiIcons.RiEyeFill className='w-6 h-6' />
            </i>
          </div>

          <a
            href="/Cadastro"
            className="
          underline text-myrtleGreen mx-auto pt-4 transition duration-150 ease-out 
          hover:text-richDBlue 
          "
          >
            Não tem uma conta? Faça seu cadastro clicando aqui!
          </a>

          <button
            className="
          w-max mt-8 mt-4 mx-auto p-2 border-4 outline-none rounded-lg border-richDBlue transition duration-200 ease-in-out font-semibold 
          hover:border-maximumBlue hover:text-myrtleGreen hover:shadow-lg
          "
          >
            Efetuar login
          </button>
        </form>
      </article>
    </main>
  );
}

export default FormLogin;
