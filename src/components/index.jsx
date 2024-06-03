import { useState } from "react";
import { useUser } from "../contexts/userContext/userContext";
import Cadastro from "./Cadastro";
import { useChat } from "../contexts/chatContext/chathook";

const Componente = () => {
  const { cadastro } = useUser();
  const { chat, addMessage } = useChat();
  const [inputUser, setInputUser] = useState("");
  const [inputBot, setInputBot] = useState("");

  const handleEnter = (e) => {
    if (e.code.toLowerCase() === "enter") {
      if (inputUser.trim() !== "") {
        addMessage(cadastro, inputUser.trim());
        setInputUser("");
      } else if (inputBot.trim() !== "") {
        addMessage("bot", inputBot.trim());
        setInputBot("");
      }
    }
  };

  if (!cadastro) return <Cadastro />;

  return (
    <section className="h-full w-full p-2 text-white justify-center items-center flex">
      <div>
        <h1 className="text-3xl text-center mb-3">Chat Bot</h1>
        <div className="border-2 border-zinc-800 h-96 w-96 grid grid-rows-[3fr_1fr]">
          <div className="p-2 flex flex-col gap-2 overflow-y-auto ">
            {chat.map((item) => (
              <div
                key={item.id}
                className={`flex ${
                  item.user === "bot" ? "justify-end" : "justify-start"
                }`}>
                <p
                  className={`flex flex-col border px-2 py-1 rounded-lg ${
                    item.user === "bot" ? "bg-zinc-800 " : "bg-zinc-900"
                  }`}>
                  <span
                    className={`flex ${
                      item.user === "bot" ? "justify-end" : "justify-start"
                    }`}>
                    {item.user}
                  </span>
                  <p>{item.message}</p>
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-end">
            <input
              name={cadastro}
              placeholder={`${cadastro}, digite uma mensagem [Enter para enviar]`}
              type="text"
              className="border-t p-2 bg-transparent border-zinc-800 outline-none"
              value={inputUser}
              onChange={(e) => setInputUser(e.target.value)}
              onKeyUp={handleEnter}
            />
            <input
              name={"bot"}
              placeholder="Bot, digite uma mensagem [Enter para enviar]"
              type="text"
              className="border-t p-2 bg-transparent border-zinc-800 outline-none"
              value={inputBot}
              onChange={(e) => setInputBot(e.target.value)}
              onKeyUp={handleEnter}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Componente;
