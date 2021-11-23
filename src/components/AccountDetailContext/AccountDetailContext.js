import React, { useContext, createContext } from 'react';

const Context = createContext();

export function useAccountDetailsContext() {
  return useContext(Context);
}

export default function AccountDetailsContext({ children, value }) {
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
