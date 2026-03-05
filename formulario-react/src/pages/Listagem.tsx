import { useCadastro } from "../context/CadastroContext";

export default function Listagem() {
  const { cadastros } = useCadastro();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Listagem de Cadastros</h1>
      {cadastros.length === 0 ? (
        <p className="text-gray-600">Nenhum cadastro enviado ainda.</p>
      ) : (
        <ul className="space-y-2">
          {cadastros.map((c, index) => (
            <li key={index} className="p-3 border rounded bg-white shadow">
              <p><strong>CPF:</strong> {c.cpf}</p>
              <p><strong>Nome:</strong> {c.nomeCompleto}</p>
              <p><strong>Cidade:</strong> {c.cidade}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
