import { useState, useEffect } from "react";
import Cadastro from "./Cadastro";
import { useUser } from "../contexts/userContext/userContext";

const Componente = () => {
  const { cadastro, showSucesso } = useUser();
  const [inputUser, setInputUser] = useState("");
  const [inputBot, setInputBot] = useState("");
  const [showCadastro, setShowCadastro] = useState(true);

  useEffect(() => {
    if (showSucesso) {
      setShowCadastro(false);
    }
  }, [showSucesso]);

  return (
    <section className="h-full w-full p-2 text-white justify-center items-center flex">
      <div>
        <h1 className="text-3xl text-center mb-3">Chat Bot</h1>
        <div className="border-2 border-zinc-800 h-96 w-96 grid grid-rows-[3fr_1fr]">
          <div className="p-2 flex flex-col gap-2 overflow-y-auto">
            <div className="flex justify-start">
              <p className="flex flex-col border px-2 py-1 rounded-lg bg-zinc-900">
                <span className="text-start">{cadastro}</span>
                <span>fsdsfgfgsfgsfsdf</span>
              </p>
            </div>
            <div className="flex justify-end">
              <p className="flex flex-col border px-2 py-1 rounded-lg">
                <span className="text-end">Bot</span>
                <span>fsdsfgfgsfgsfsdf</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <input
              placeholder={`${cadastro}, digite uma mensagem [Enter para enviar]`}
              type="text"
              className="border-t p-2 bg-transparent border-zinc-800 outline-none"
              value={inputUser}
              onChange={(e) => setInputUser(e.target.value)}
            />
            <input
              placeholder="Bot, digite uma mensagem [Enter para enviar]"
              type="text"
              className="border-t p-2 bg-transparent border-zinc-800 outline-none"
              value={inputBot}
              onChange={(e) => setInputBot(e.target.value)}
            />
          </div>
        </div>
      </div>

      {showCadastro && <Cadastro />}
    </section>
  );
};

export default Componente;
