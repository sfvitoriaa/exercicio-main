import { z } from "zod";

export const cadastroSchema = z.object({
  cpf: z.string().regex(/^\d{11}$/, "O CPF deve conter exatamente 11 dígitos"),
  nomeCompleto: z.string().min(3, "Informe o nome completo"),
  cep: z.string().regex(/^\d{5}-\d{3}$/, "O CEP deve estar no formato XXXXX-XXX"),
  rua: z.string().min(1, "Informe a rua"),
  numero: z.string().min(1, "Informe o número"),
  complemento: z.string().optional(),
  bairro: z.string().min(1, "Informe o bairro"),
  cidade: z.string().min(1, "Informe a cidade"),
  estado: z.string().min(2, "Informe o estado"),
});

export type CadastroFormData = z.infer<typeof cadastroSchema>;
