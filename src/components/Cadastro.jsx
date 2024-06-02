import { useState } from "react";
import { useUser } from "../contexts/userContext/userContext";

const Cadastro = () => {
  const { setCadastro, setShowSucesso } = useUser();
  const [inputCadastro, setInputCadastro] = useState("");

  const handleCadastro = () => {
    if (inputCadastro.trim() !== "") {
      setCadastro(inputCadastro.trim());
      setInputCadastro("");
      setShowSucesso(true);
    }
  };

  return (
    <div className="h-full w-full bg-opacity-20 bg-white justify-center items-center flex absolute">
      <div className="p-2 bg-white h-96 w-96 rounded-xl">
        <div className="flex flex-col justify-between  h-full w-full px-10">
          <h1 className="text-3xl text-center text-black">Cadastrar usuario</h1>

          <div className="flex flex-col pb-20 gap-3">
            <input
              value={inputCadastro}
              type="text"
              className="p-2 rounded-xl outline-none bg-black"
              onChange={({ target }) => setInputCadastro(target.value)}
            />
            <button
              onClick={handleCadastro}
              className="p-1 bg-blue-500 rounded-xl hover:bg-blue-600">
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
