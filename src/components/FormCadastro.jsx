import React from "react";
import logoSVG from "../img/logoSVG.svg";

function FormCadastro() {
  return (
    <>
      <header className="flex w-screen h-24 align-center shadow-md mb-10">
        <a href="/" className="w-24 h-24 mx-auto">
          <img
            src={logoSVG}
            alt="logo drip restés"
            className="w-24 h-24 mx-auto"
          />
        </a>
      </header>
      <article>
        <form
          action="#"
          className="shadow-inner border-2 border-dCultured w-11/12 rounded-lg mx-auto p-4 h-96 flex flex-col"
        >
          <div className="mx-auto w-10/12 h-8 my-4 flex justify-center align-center">
            {/* Nome */}
            <label
              htmlFor="Nome"
              className="font-semibold text-xl tracking-wider my-auto"
            >
              Nome
            </label>
            <input
              type="text"
              name="name"
              className="outline-none border-2 rounded-xl border-eireBlack w-3/12 mx-4 leading-4 px-4 transition duration-150 ease-out
          focus:border-myrtleGreen focus:shadow-green"
            />
            {/* Sobrenome */}
            <label
              htmlFor="Sobrenome"
              className="font-semibold text-xl tracking-wider my-auto"
            >
              Sobrenome
            </label>
            <input
              type="text"
              name="surname"
              className="outline-none border-2 rounded-xl border-eireBlack w-3/12 mx-4 leading-8 px-4 transition duration-150 ease-out
          focus:border-myrtleGreen focus:shadow-green"
            />
          </div>
          <div className="mx-auto w-10/12 h-8 my-4 flex justify-center align-center">
            {/* Nome */}
            <label
              htmlFor="Nome"
              className="font-semibold text-xl tracking-wider my-auto"
            >
              E-mail
            </label>
            <input
              type="text"
              name="email"
              className="outline-none border-2 rounded-xl border-eireBlack w-3/12 mx-4 leading-4 px-4 transition duration-150 ease-out
          focus:border-myrtleGreen focus:shadow-green"
            />
            {/* Sobrenome */}
            <label
              htmlFor="emailConfirmation"
              className="font-semibold text-xl tracking-wider my-auto"
            >
              Confirmar e-mail
            </label>
            <input
              type="text"
              name="emailConfirmation"
              className="outline-none border-2 rounded-xl border-eireBlack w-3/12 mx-4 leading-8 px-4 transition duration-150 ease-out
          focus:border-myrtleGreen focus:shadow-green"
            />
          </div>
          <div className="mx-auto w-10/12 h-8 my-4 flex justify-center align-center">
            {/* Nome */}
            <label
              htmlFor="Nome"
              className="font-semibold text-xl tracking-wider my-auto"
            >
              Insira sua senha
            </label>
            <input
              type="password"
              name="password"
              className="outline-none border-2 rounded-xl border-eireBlack w-3/12 mx-4 leading-4 px-4 transition duration-150 ease-out
          focus:border-myrtleGreen focus:shadow-green"
            />
            {/* Sobrenome */}
            <label
              htmlFor="Sobrenome"
              className="font-semibold text-xl tracking-wider my-auto"
            >
              Confirme a senha
            </label>
            <input
              type="password"
              name="user"
              className="outline-none border-2 rounded-xl border-eireBlack w-3/12 mx-4 leading-8 px-4 transition duration-150 ease-out
          focus:border-myrtleGreen focus:shadow-green"
            />
          </div>
          <div className="mx-auto w-10/12 h-8 my-4 flex justify-center align-center">
            {/* sexo */}
            <label
              htmlFor="Nome"
              className="font-semibold text-xl tracking-wider my-auto"
            >
              Selecione seu sexo
            </label>
            <select
              name="sex"
              className="outline-none border-2 border-eireBlack w-3/12 rounded-xl mx-4"
            >
              <option value="m">Masculino</option>
              <option value="f">Feminino</option>
              <option value="i">Prefiro não dizer</option>
            </select>
          </div>
        {/* botão finalizar */}
          <div className="w-full h-18 my-4 align-center justify-center flex">
            <button
              className="border-2 w-18 h-18 p-2 rounded-xl bg-eireBlack text-cultured border-eireBlack transition duration-200 mx-auto ease-out
            md:border-4 md:border-4 md:text-base
            hover:border-myrtleGreen hover:bg-myrtleGreen"
            >
              Finalizar Cadastro
            </button>
          </div>
        </form>
      </article>
    </>
  );
}

export default FormCadastro;
