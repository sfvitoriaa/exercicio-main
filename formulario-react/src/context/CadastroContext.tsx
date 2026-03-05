import { createContext, useContext, useState } from "react";
import type { CadastroFormData } from "../schemas/cadastroSchema";

type CadastroContextType = {
  cadastros: CadastroFormData[];
  addCadastro: (data: CadastroFormData) => void;
};

const CadastroContext = createContext<CadastroContextType | undefined>(undefined);

export function CadastroProvider({ children }: { children: React.ReactNode }) {
  const [cadastros, setCadastros] = useState<CadastroFormData[]>([]);

  const addCadastro = (data: CadastroFormData) => {
    setCadastros((prev) => [...prev, data]);
  };

  return (
    <CadastroContext.Provider value={{ cadastros, addCadastro }}>
      {children}
    </CadastroContext.Provider>
  );
}

export function useCadastro() {
  const context = useContext(CadastroContext);
  if (!context) {
    throw new Error("useCadastro deve ser usado dentro de CadastroProvider");
  }
  return context;
}
