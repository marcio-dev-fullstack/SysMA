import React, { useState } from 'react';
import Login from './pages/Login';
import { Dashboard } from './pages/Dashboard';

export function App() {
  const [usuario, setUsuario] = useState<any | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [diasLicenca, setDiasLicenca] = useState<number>(90);
  const [chaveLicenca, setChaveLicenca] = useState<string>("SYSMA-2026-LIC-90D-PREMIUM");

  if (!usuario) {
    return (
      <Login 
        onLogin={(role) => { 
          setUsuario({ role, email: 'admin@sysma.gov.br', nome: 'Gestor Ambiental' }); 
          setActiveTab('dashboard'); 
        }}
        diasLicenca={diasLicenca}
        setDiasLicenca={setDiasLicenca}
        chaveLicenca={chaveLicenca}
        setChaveLicenca={setChaveLicenca}
      />
    );
  }

  return <Dashboard />;
}

export default App;