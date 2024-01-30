import { createContext, useState } from 'react';
import { Supplie } from '../entities/Supplie';

type SuppliesContextData = {
  supplies: Supplie[];
  setSupplies: React.Dispatch<React.SetStateAction<Supplie[]>>;
};
export const SuppliesContext = createContext({} as SuppliesContextData);

interface SuppliesContextProviderProps {
  children: React.ReactNode;
}

export default function SuppliesContextProvider({
  children,
}: SuppliesContextProviderProps) {
  const [supplies, setSupplies] = useState<Supplie[]>([]);

  return (
    <SuppliesContext.Provider
      value={{
        supplies,
        setSupplies,
      }}
    >
      {children}
    </SuppliesContext.Provider>
  );
}
