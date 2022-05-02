import { createContext, useContext, useState } from "react";

// 1 - Contexto
export const CounterContext = createContext();

// 2 - Provider do Contexto
export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const addNumber = () => {
    setCounter(counter + 1);
  };

  const subNumber = () => {
    setCounter(counter - 1);
  };
  

  return (
    <CounterContext.Provider value={{ counter, addNumber, subNumber }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
