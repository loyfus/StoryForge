import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, UserPlus } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

function Registro() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const result = await register(username, email, password);
      if (result.success) {
        alert(result.message || 'Registro realizado com sucesso!');
        navigate('/login');
      } else {
        setError(result.message || 'Erro ao registrar. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro:', error);
      setError('Ocorreu um erro inesperado. Por favor, tente novamente.');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-white">Registrar no StoryForge</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <label htmlFor="username" className="block mb-1">Nome de usuário</label>
          <User className="absolute top-10 left-3 text-gray-400" size={18} />
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-10 py-2 border rounded bg-glass backdrop-blur-md dark:bg-gray-800 dark:border-gray-700"
            required
          />
        </div>
        <div className="relative">
          <label htmlFor="email" className="block mb-1">E-mail</label>
          <Mail className="absolute top-10 left-3 text-gray-400" size={18} />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-10 py-2 border rounded bg-glass backdrop-blur-md dark:bg-gray-800 dark:border-gray-700"
            required
          />
        </div>
        <div className="relative">
          <label htmlFor="password" className="block mb-1">Senha</label>
          <Lock className="absolute top-10 left-3 text-gray-400" size={18} />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-10 py-2 border rounded bg-glass backdrop-blur-md dark:bg-gray-800 dark:border-gray-700"
            required
          />
        </div>
        <button type="submit" className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-300 flex items-center justify-center">
          <UserPlus className="mr-2" size={18} />
          Registrar
        </button>
      </form>
    </div>
  );
}

export default Registro;

