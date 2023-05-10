import React, { createContext, useState, Dispatch, SetStateAction } from "react";

// context type
interface AuthContext {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}

// create context
export const AuthContext = createContext<AuthContext>({} as AuthContext);

// props
interface props {
  children: React.ReactNode;
}

// AuthProvider:
// provides auth context to children
const AuthProvider = ({ children } : props) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
