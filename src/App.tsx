import React, { useState } from 'react';
import { Sidebar } from './components/Layout/Sidebar';
import { Navbar } from './components/Layout/Navbar';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Licenciamento } from './pages/Licenciamento';
import { Fiscalizacao } from './pages/Fiscalizacao';
import { Denuncias } from './pages/Denuncias';
import { ZoneamentoGIS } from './pages/ZoneamentoGIS';
import { Auditoria } from './pages/Auditoria';
import { NovaLicencaWizard } from './pages/NovaLicencaWizard';
import { DetalheProcesso } from './pages/DetalheProcesso';
import { NovoAutoInfracao } from './pages/NovoAutoInfracao';
import { GestaoUsuarios } from './pages/GestaoUsuarios';
import { ConsultaPublica } from './pages/ConsultaPublica';
import { EnquadramentoAtividades } from './pages/EnquadramentoAtividades';
import { Usuario, ProcessoLicenciamento } from './types';
import { KeyRound, RefreshCw, Clock, CheckCircle2 } from 'lucide-react';

export function App() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedProcesso, setSelectedProcesso] = useState<ProcessoLicenciamento | null>(null);

  // Estado da Chave de Licença e Validade em Dias (Padrão 90 dias)
  const [diasLicenca, setDiasLicenca] = useState(90);
  const [chaveLicenca, setChaveLicenca] = useState('SISMA-2026-LIC-90D-PREMIUM-8F92A');
  const [modalLicenca, setModalLicenca] = useState(false);

  // Se não estiver autenticado, exibe a tela de Login
  if (!usuario) {
    return (
      <Login
        onLogin={(u) => { setUsuario(u); setActiveTab('dashboard'); }}
        diasLicenca={diasLicenca}
        setDiasLicenca={setDiasLicenca}
        chaveLicenca={chaveLicenca}
        setChaveLicenca={setChaveLicenca}
      />
    );
  }

  const handleLogout = () => {
    setUsuario(null);
    setSelectedProcesso(null);
  };

  const handleRenovarLicenca = () => {
    setDiasLicenca(90);
    setChaveLicenca(`SISMA-2026-LIC-90D-RENOVADA-${Math.floor(1000 + Math.random() * 9000)}`);
    setModalLicenca(false);
  };

  const renderContent = () => {
    if (selectedProcesso) {
      return (
        <DetalheProcesso
          processo={selectedProcesso}
          onBack={() => setSelectedProcesso(null)}
        />
      );
    }

    switch (activeTab) {
      case 'dashboard':
        return (
          <Dashboard
            usuario={usuario}
            onNavigate={(tab) => {
              setSelectedProcesso(null);
              setActiveTab(tab);
            }}
          />
        );
      case 'licenciamento':
        return (
          <Licenciamento
            onSelectProcesso={(p) => setSelectedProcesso(p)}
            onNewLicenca={() => setActiveTab('nova-licenca')}
          />
        );
      case 'nova-licenca':
        return (
          <NovaLicencaWizard
            onCancel={() => setActiveTab('licenciamento')}
            onSuccess={() => setActiveTab('licenciamento')}
          />
        );
      case 'fiscalizacao':
        return (
          <Fiscalizacao
            onNewAuto={() => setActiveTab('novo-auto')}
          />
        );
      case 'novo-auto':
        return (
          <NovoAutoInfracao
            onCancel={() => setActiveTab('fiscalizacao')}
            onSuccess={() => setActiveTab('fiscalizacao')}
          />
        );
      case 'denuncias':
        return <Denuncias />;
      case 'gis':
        return <ZoneamentoGIS />;
      case 'usuarios':
        return <GestaoUsuarios />;
      case 'enquadramento':
        return <EnquadramentoAtividades />;
      case 'consulta-publica':
        return <ConsultaPublica />;
      case 'auditoria':
        return <Auditoria />;
      default:
        return (
          <Dashboard
            usuario={usuario}
            onNavigate={(tab) => {
              setSelectedProcesso(null);
              setActiveTab(tab);
            }}
          />
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          setSelectedProcesso(null);
          setActiveTab(tab);
        }} 
        usuario={usuario} 
        onLogout={handleLogout} 
      />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar 
          currentModule={selectedProcesso ? `Processo ${selectedProcesso.numero_processo}` : activeTab} 
          usuario={usuario} 
          onLogout={handleLogout} 
          diasLicenca={diasLicenca}
          chaveLicenca={chaveLicenca}
          onOpenLicencaModal={() => setModalLicenca(true)}
        />
        <main className="flex-1 p-6 overflow-y-auto">{renderContent()}</main>
      </div>

      {/* MODAL DE GERENCIAMENTO DA LICENÇA DO SISTEMA */}
      {modalLicenca && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-purple-100 text-purple-700 rounded-xl">
                  <KeyRound className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-base">Gerenciador de Licença do SisMA</h3>
                  <p className="text-xs text-slate-500">Validade do Sistema Municipal de Meio Ambiente</p>
                </div>
              </div>
              <button
                onClick={() => setModalLicenca(false)}
                className="text-slate-400 hover:text-slate-600 text-xs font-bold px-2 py-1"
              >
                ✕
              </button>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Chave Ativa:</span>
                <span className="font-mono font-bold text-slate-800">{chaveLicenca}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Contagem Regressiva:</span>
                <span className={`font-black text-sm flex items-center gap-1 ${
                  diasLicenca <= 0 ? 'text-rose-600' : diasLicenca <= 5 ? 'text-amber-600' : 'text-emerald-600'
                }`}>
                  <Clock className="w-4 h-4" />
                  {diasLicenca} DIAS RESTANTES
                </span>
              </div>
            </div>

            {usuario.perfil === 'adm' ? (
              <div className="space-y-3 pt-2">
                <p className="text-xs text-slate-600">
                  Como <strong>Administrador (ADM)</strong>, você tem acesso para renovar a licença por mais 90 dias a qualquer momento.
                </p>
                <button
                  onClick={handleRenovarLicenca}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Renovar Chave de Licença por +90 Dias</span>
                </button>
              </div>
            ) : (
              <p className="text-xs text-slate-500 bg-amber-50 p-3 rounded-lg border border-amber-200 text-amber-800">
                ℹ️ Apenas o perfil <strong>Administrador (ADM)</strong> possui autorização para cadastrar uma nova chave de licença ou realizar a renovação.
              </p>
            )}

            <div className="pt-2 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setModalLicenca(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
