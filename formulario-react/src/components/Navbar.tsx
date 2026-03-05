import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-400 p-4 text-white flex justify-between items-center">

      <div className="font-bold text-lg">Cadastro Fácil</div>

      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/cadastros">Cadastros</Link>
      </div>
    </nav>
  );
}
