import { useState } from "react";
import { useUser } from "../contexts/userContext/userContext";

const Cadastro = () => {
  const { setCadastro } = useUser();
  const [inputCadastro, setInputCadastro] = useState("");

  const handleCadastro = (e) => {
    if (e.code.toLowerCase() === "enter") {
      if (inputCadastro.trim() !== "bot" && inputCadastro !== "") {
        setCadastro(inputCadastro.trim());
        setInputCadastro("");
      }
    }
  };

  return (
    <div className="h-full w-full justify-center items-center flex text-white">
      <div className=" w-96 ">
        <label htmlFor={inputCadastro} className="flex flex-col pb-3">
          Qual é o seu nome?
          <input
            value={inputCadastro}
            placeholder="Qual é o seu nome?"
            type="text"
            className="p-2 rounded-xl outline-none bg-transparent border text-white"
            onChange={({ target }) => setInputCadastro(target.value)}
            onKeyUp={handleCadastro}
          />
        </label>
      </div>
    </div>
  );
};

export default Cadastro;
