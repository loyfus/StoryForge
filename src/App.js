import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Dashboard from './pages/Dashboard';
import CriarHistoria from './pages/CriarHistoria';
import DetalhesHistoria from './pages/DetalhesHistoria';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-background text-white flex flex-col md:flex-row">
          <Navbar />
          <main className="flex-1 p-4 md:p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/criar-historia" element={<CriarHistoria />} />
              <Route path="/historia/:id" element={<DetalhesHistoria />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

