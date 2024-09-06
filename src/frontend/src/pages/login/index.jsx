import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate("/signup");
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-800 transition-colors"
            onClick={handleClose}
          >
            ✕
          </button>
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
            E-mail
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="password"
          >
            Senha
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            id="password"
            type="password"
            placeholder="Digite sua senha"
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <div></div>
          <a href="#" className="text-sm text-green-500 hover:underline">
            Esqueceu sua senha
          </a>
        </div>
        <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors mb-4">
          Login
        </button>
        <div className="text-center text-gray-500 mb-4">
          Ou inscreva-se usando
        </div>
        <div className="flex justify-center mb-4">
          <button className="flex items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition-colors">
            <FcGoogle className="mr-2" size={24} />
            Google
          </button>
        </div>
        <div className="text-center text-gray-500 mb-4">Não tem uma conta?</div>
        <button
          onClick={handleUserClick}
          className="w-full border border-green-500 text-green-500 py-2 rounded-lg hover:bg-green-50 transition-colors"
        >
          Criar uma conta
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
