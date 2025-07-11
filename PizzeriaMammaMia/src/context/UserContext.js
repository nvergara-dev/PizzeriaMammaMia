// context/UserContext.jsx
import React, { createContext, useContext, useState } from "react";

// Crear contexto
const UserContext = createContext();

// Hook personalizado para consumir el contexto
export function useUser() {
  return useContext(UserContext);
}

// Componente proveedor
export function UserProvider({ children }) {
  const [token, setToken] = useState(true); // Token simulado, inicia en true

  const logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
}
