import { createContext } from "react";
import fakeData from "fakeData.json";
import { useState } from "react";

export const LetterContext = createContext(null);

function LetterContextProvider({ children }) {
  const [letters, setLetters] = useState(fakeData);
  return (
    <LetterContext.Provider value={{ letters, setLetters }}>
      {children}
    </LetterContext.Provider>
  );
}

export default LetterContextProvider;
