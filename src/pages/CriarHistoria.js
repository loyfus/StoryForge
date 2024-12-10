import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, FileText, PlusCircle } from 'lucide-react';
import { getToken } from '../utils/auth';

function CriarHistoria() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const token = getToken();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/stories`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description }),
      });
      const data = await response.json();
      if (response.ok) {
        navigate('/dashboard');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-white">Criar Nova História</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="title" className="block text-sm font-medium text-gray-200">Título</label>
          <div className="relative">
            <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background-secondary border-gray-700 rounded focus:ring-primary focus:border-primary text-white"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-200">Descrição</label>
          <div className="relative">
            <FileText className="absolute left-3 top-3 text-gray-400" size={18} />
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background-secondary border-gray-700 rounded focus:ring-primary focus:border-primary text-white"
              rows="4"
              required
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded transition-colors"
        >
          <PlusCircle size={18} />
          Criar História
        </button>
      </form>
    </div>
  );
}

export default CriarHistoria;

