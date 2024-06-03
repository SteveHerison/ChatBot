import { useContext } from "react";
import { ChatBotContext } from "./ChatContext";

export const useChat = () => useContext(ChatBotContext);
