import { createContext, useContext, useState } from 'react';
import cvData from '../data/cvData';

const DataContext = createContext(null);

export default function DataContextProvider({ children }) {
  const [data, setData] = useState(cvData);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error(
      'This element has no access to the DataContext. Wrap in a DataContextProvider to access the context',
    );
  }
  return context;
}
