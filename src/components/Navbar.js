import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, LogIn, UserPlus, Home, PenTool, Layout, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const NavItem = ({ to, icon: Icon, children, onClick }) => (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
        isActive(to)
          ? 'bg-primary text-white'
          : 'text-gray-400 hover:text-white hover:bg-background-secondary'
      }`}
      onClick={onClick}
    >
      <Icon size={20} />
      <span>{children}</span>
    </Link>
  );

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-background-secondary md:w-64 md:h-screen">
      <div className="flex justify-between items-center p-4 md:block">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white">
          <Book className="text-primary" />
          <span>StoryForge</span>
        </Link>
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        <NavItem to="/" icon={Home} onClick={toggleMenu}>Início</NavItem>
        {user ? (
          <>
            <NavItem to="/dashboard" icon={Layout} onClick={toggleMenu}>Dashboard</NavItem>
            <NavItem to="/criar-historia" icon={PenTool} onClick={toggleMenu}>Criar História</NavItem>
            <button
              onClick={() => { logout(); toggleMenu(); }}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-background-secondary transition-colors"
            >
              <LogIn size={20} />
              <span>Sair</span>
            </button>
          </>
        ) : (
          <>
            <NavItem to="/login" icon={LogIn} onClick={toggleMenu}>Entrar</NavItem>
            <NavItem to="/registro" icon={UserPlus} onClick={toggleMenu}>Registrar</NavItem>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

