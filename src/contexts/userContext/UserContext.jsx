import { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";

const STORAGE_KEY = "USUARIO";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [showSucesso, setShowSucesso] = useState(false);
  const [cadastro, setCadastro] = useState(() => {
    const saveCadastro = localStorage.getItem(STORAGE_KEY);
    return saveCadastro ? JSON.parse(saveCadastro) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cadastro));
  }, [cadastro]);

  return (
    <UserContext.Provider
      value={{ cadastro, setCadastro, setShowSucesso, showSucesso }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
