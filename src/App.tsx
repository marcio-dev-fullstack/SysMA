import React, { useState } from 'react';
import { Sidebar } from './components/Layout/Sidebar';
import { Navbar } from './components/Layout/Navbar';
import { Dashboard } from './pages/Dashboard';
import { Licenciamento } from './pages/Licenciamento';
import { Fiscalizacao } from './pages/Fiscalizacao';
import { Denuncias } from './pages/Denuncias';
import { ZoneamentoGIS } from './pages/ZoneamentoGIS';
import { Auditoria } from './pages/Auditoria';

export function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'licenciamento':
        return <Licenciamento />;
      case 'fiscalizacao':
        return <Fiscalizacao />;
      case 'denuncias':
        return <Denuncias />;
      case 'gis':
        return <ZoneamentoGIS />;
      case 'auditoria':
        return <Auditoria />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar currentModule={activeTab} />
        <main className="flex-1 p-6 overflow-y-auto">{renderContent()}</main>
      </div>
    </div>
  );
}

export default App;
