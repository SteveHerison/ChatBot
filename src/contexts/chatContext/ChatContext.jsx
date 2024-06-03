import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { chatReducer } from "../../chatReducer/ChatReducer";

export const ChatBotContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chat, dispatch] = useReducer(chatReducer, []);

  const addMessage = (user, text) => {
    dispatch({
      type: "ADD_MESSAGE",
      payload: { user, text },
    });
  };

  return (
    <ChatBotContext.Provider value={{ chat, addMessage }}>
      {children}
    </ChatBotContext.Provider>
  );
};

ChatProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
