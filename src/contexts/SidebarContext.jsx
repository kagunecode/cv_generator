import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext(null);

export default function SidebarContextProvider({ children }) {
  const [status, setStatus] = useState(false);

  return (
    <SidebarContext.Provider value={{ status, setStatus }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebarContext() {
  const context = useContext(SidebarContext);
  if (!SidebarContext) {
    throw new Error(
      'This element has no access to the SidebarContext. Wrap in a SidebarContextProvider to access the context',
    );
  }
  return context;
}
