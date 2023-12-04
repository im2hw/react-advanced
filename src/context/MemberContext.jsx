import { createContext } from "react";
import { useState } from "react";

export const MemberContext = createContext(null);

function MemberContextProvider({ children }) {
  const [activeMember, setActiveMember] = useState("훈이");
  return (
    <MemberContext.Provider value={{ activeMember, setActiveMember }}>
      {children}
    </MemberContext.Provider>
  );
}

export default MemberContextProvider;
