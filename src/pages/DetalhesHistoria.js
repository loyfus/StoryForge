import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { User, Calendar } from 'lucide-react';

function DetalhesHistoria() {
  const [story, setStory] = useState(null);
  const { id } = useParams();

  const fetchStory = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/stories/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setStory(data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  useEffect(() => {
    fetchStory();
  }, [id]);

  if (!story) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-glass backdrop-blur-md p-6 rounded-lg shadow-lg dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-4">{story.title}</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{story.description}</p>
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
        <User size={16} className="mr-1" />
        <span>Autor: {story.author.username}</span>
      </div>
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
        <Calendar size={16} className="mr-1" />
        <span>Criado em: {new Date(story.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
}

export default DetalhesHistoria;
