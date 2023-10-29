import React, { useState } from "react";
import { createContext } from "react";

export const Datacontext = createContext(null);
const Dataprovider = ({children}) => {
  const [account, Setaccount] = useState("");

  return (
    <Datacontext.Provider value={{ account, Setaccount }}>
      {/* Dataprovider */}
      {children}
    </Datacontext.Provider>
  );
};

export default Dataprovider;
