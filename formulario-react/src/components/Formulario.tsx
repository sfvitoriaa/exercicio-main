import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cadastroSchema } from "../schemas/cadastroSchema";
import type { CadastroFormData } from "../schemas/cadastroSchema";

export default function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CadastroFormData>({
    resolver: zodResolver(cadastroSchema),
  });

  const onSubmit = (data: CadastroFormData) => {
    console.log("Dados enviados:", data);
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-3 p-4 bg-gray-100 rounded shadow"
      >
        <input {...register("cpf")} placeholder="CPF" className="block w-full border p-2 rounded" />
        {errors.cpf && <span className="text-red-500">{errors.cpf.message}</span>}

        <input {...register("nomeCompleto")} placeholder="Nome completo" className="block w-full border p-2 rounded" />
        {errors.nomeCompleto && <span className="text-red-500">{errors.nomeCompleto.message}</span>}

        <input {...register("cep")} placeholder="CEP (XXXXX-XXX)" className="block w-full border p-2 rounded" />
        {errors.cep && <span className="text-red-500">{errors.cep.message}</span>}

        <input {...register("rua")} placeholder="Rua" className="block w-full border p-2 rounded" />
        {errors.rua && <span className="text-red-500">{errors.rua.message}</span>}

        <input {...register("numero")} placeholder="Número" className="block w-full border p-2 rounded" />
        {errors.numero && <span className="text-red-500">{errors.numero.message}</span>}

        <input {...register("complemento")} placeholder="Complemento" className="block w-full border p-2 rounded" />

        <input {...register("bairro")} placeholder="Bairro" className="block w-full border p-2 rounded" />
        {errors.bairro && <span className="text-red-500">{errors.bairro.message}</span>}

        <input {...register("cidade")} placeholder="Cidade" className="block w-full border p-2 rounded" />
        {errors.cidade && <span className="text-red-500">{errors.cidade.message}</span>}

        <input {...register("estado")} placeholder="Estado" className="block w-full border p-2 rounded" />
        {errors.estado && <span className="text-red-500">{errors.estado.message}</span>}

        <button type="submit" className="bg-blue-400 text-white px-4 py-2 rounded w-full">
          Enviar
        </button>
      </form>
    </div>
  );
}
