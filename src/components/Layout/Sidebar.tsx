import React from 'react';
import { 
  LayoutDashboard, 
  FileCheck2, 
  ClipboardCheck, 
  AlertTriangle, 
  Map, 
  History, 
  TreePine 
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Painel Geral', icon: LayoutDashboard },
    { id: 'licenciamento', label: 'Licenciamento', icon: FileCheck2 },
    { id: 'fiscalizacao', label: 'Fiscalização', icon: ClipboardCheck },
    { id: 'denuncias', label: 'Denúncias', icon: AlertTriangle },
    { id: 'gis', label: 'Zoneamento GIS', icon: Map },
    { id: 'auditoria', label: 'Auditoria & Logs', icon: History },
  ];

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

      <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
        <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-3 mb-2">
          Módulos Principais
        </div>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-emerald-600 text-white font-semibold shadow-md shadow-emerald-900/30'
                  : 'hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-800/60 rounded-lg p-3 text-xs border border-slate-700/50">
          <p className="font-semibold text-slate-200">Supabase Backend Ready</p>
          <p className="text-slate-400 text-[11px] mt-1">
            Integração PostGIS & RLS pronta para deploy.
          </p>
        </div>
      </div>
    </aside>
  );
};
