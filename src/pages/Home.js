import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool } from 'lucide-react';

function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center space-y-8 px-4 py-8">
      <div className="bg-card backdrop-blur-md rounded-lg p-6 md:p-12 shadow-glow">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
          Bem-vindo ao <span className="text-primary">StoryForge</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
          Crie e compartilhe suas histórias com o mundo
        </p>
        <Link
          to="/criar-historia"
          className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-3 bg-primary hover:bg-primary-hover text-white rounded-full transition-colors text-base md:text-lg"
        >
          <PenTool size={20} />
          Começar a Escrever
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: 'Crie Histórias',
            description: 'Use nossa plataforma intuitiva para dar vida às suas ideias.',
          },
          {
            title: 'Compartilhe',
            description: 'Conecte-se com outros escritores e leitores apaixonados.',
          },
          {
            title: 'Inspire-se',
            description: 'Descubra histórias incríveis de outros autores.',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-card backdrop-blur-md rounded-lg p-6 hover:shadow-glow transition-shadow"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">{feature.title}</h3>
            <p className="text-sm md:text-base text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

