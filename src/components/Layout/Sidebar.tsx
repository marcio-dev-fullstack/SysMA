import React from 'react';
import { 
  LayoutDashboard, 
  FileCheck2, 
  ClipboardCheck, 
  AlertTriangle, 
  Map, 
  History, 
  TreePine,
  LogOut,
  Users,
  Search,
  Layers,
  FilePlus
} from 'lucide-react';
import { Usuario } from '../../types';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  usuario: Usuario;
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, usuario, onLogout }) => {
  const isMarcioAdmin = usuario.perfil === 'adm' || usuario.nome.toLowerCase() === 'marcio';

  const allMenuItems = [
    { id: 'dashboard', label: 'Painel Geral', icon: LayoutDashboard, perfis: ['adm', 'analista', 'fiscal', 'empresario'] },
    { id: 'licenciamento', label: 'Licenciamento', icon: FileCheck2, perfis: ['adm', 'analista', 'empresario'] },
    { id: 'nova-licenca', label: 'Nova Licença (Wizard)', icon: FilePlus, perfis: ['adm', 'analista', 'empresario'] },
    { id: 'fiscalizacao', label: 'Fiscalização & Autos', icon: ClipboardCheck, perfis: ['adm', 'fiscal'] },
    { id: 'denuncias', label: 'Denúncias', icon: AlertTriangle, perfis: ['adm', 'analista', 'fiscal'] },
    { id: 'gis', label: 'Zoneamento GIS', icon: Map, perfis: ['adm', 'analista', 'fiscal'] },
    { id: 'usuarios', label: 'Gestão de Usuários', icon: Users, perfis: ['adm'] },
    { id: 'enquadramento', label: 'Tabela de Taxas', icon: Layers, perfis: ['adm', 'analista', 'empresario'] },
    { id: 'consulta-publica', label: 'Consulta Pública', icon: Search, perfis: ['adm', 'analista', 'fiscal', 'empresario'] },
    { id: 'auditoria', label: 'Auditoria & Logs', icon: History, perfis: ['adm'] },
  ];

  // Filtrar itens do menu de acordo com o perfil do usuário
  // Apenas o administrador (marcio) pode ver 'usuarios' e 'auditoria'
  const menuItems = allMenuItems.filter((item) => {
    if (item.id === 'usuarios' || item.id === 'auditoria') {
      return isMarcioAdmin;
    }
    return item.perfis.includes(usuario.perfil);
  });

  const perfilBadges = {
    adm: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    analista: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    fiscal: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    empresario: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  };

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col h-screen sticky top-0 shrink-0">
      <div className="p-5 flex items-center gap-3 border-b border-slate-800">
        <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-xl shadow-lg shadow-emerald-500/20">
          <TreePine className="w-6 h-6" />
        </div>
        <div>
          <h2 className="font-extrabold text-white text-lg tracking-wide">SisMA</h2>
          <p className="text-[11px] text-emerald-400 font-medium">Gestão Ambiental Digital</p>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-3 mb-2 flex items-center justify-between">
          <span>Módulos ({usuario.perfil.toUpperCase()})</span>
          <span className={`text-[9px] px-1.5 py-0.5 rounded border font-bold ${perfilBadges[usuario.perfil]}`}>
            {usuario.perfil.toUpperCase()}
          </span>
        </div>

        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                isActive
                  ? 'bg-emerald-600 text-white font-semibold shadow-md shadow-emerald-900/30'
                  : 'hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800 space-y-3">
        {/* Card do Usuário Logado */}
        <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 font-black text-xs flex items-center justify-center shrink-0">
              {usuario.avatar}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-white truncate">{usuario.nome}</p>
              <p className="text-[10px] text-slate-400 truncate">{usuario.email}</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="mt-2.5 w-full py-1.5 px-2 bg-slate-900 hover:bg-rose-950/50 hover:text-rose-400 border border-slate-700 hover:border-rose-800/60 rounded-lg text-xs font-semibold text-slate-300 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Trocar Perfil / Sair</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
