import { useState, createContext } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [cadastro, setCadastro] = useState();

  return (
    <UserContext.Provider value={{ cadastro, setCadastro }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
