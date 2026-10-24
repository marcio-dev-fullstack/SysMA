import React, { useState } from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Sidebar } from './components/Layout/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Licenciamento } from './pages/Licenciamento';
import { Fiscalizacao } from './pages/Fiscalizacao';
import { Denuncias } from './pages/Denuncias';
import { ZoneamentoGIS } from './pages/ZoneamentoGIS';
import { Auditoria } from './pages/Auditoria';

export function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');

  const renderContent = () => {
    switch (currentTab) {
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
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      <Navbar activeTab={currentTab} />
      <div className="flex flex-1">
        <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <main className="flex-1 p-6 max-w-7xl mx-auto w-full overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
