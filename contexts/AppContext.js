import { useContext, createContext, useState } from "react";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  /* Site Nav State */
  const [open, setOpen] = useState(false);

  return (
    <AppContext.Provider value={{ siteNav: { open, setOpen } }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
