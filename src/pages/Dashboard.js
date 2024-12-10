import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Eye } from 'lucide-react';

function Dashboard() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/stories`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setStories(data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-white">Suas Histórias no StoryForge</h2>
        <Link
          to="/criar-historia"
          className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded transition-colors text-sm"
        >
          <PlusCircle size={18} />
          Criar Nova História
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stories.map((story) => (
          <div
            key={story._id}
            className="group relative overflow-hidden rounded-lg bg-card p-4 backdrop-blur-md transition-all hover:bg-card-hover hover:shadow-glow"
          >
            <h3 className="text-lg font-semibold mb-2 text-white">{story.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{story.description}</p>
            <Link
              to={`/historia/${story._id}`}
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors text-sm"
            >
              <Eye size={16} />
              Ver Detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

