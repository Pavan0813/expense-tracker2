import React, { createContext, useState, useContext } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
