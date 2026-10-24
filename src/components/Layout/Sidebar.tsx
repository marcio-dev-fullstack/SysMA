import React from 'react';
import { 
  LayoutDashboard, 
  FileCheck2, 
  ShieldAlert, 
  AlertTriangle, 
  Map, 
  History
} from 'lucide-react';

interface SidebarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentTab, setCurrentTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Painel & Indicadores', icon: LayoutDashboard },
    { id: 'licenciamento', label: 'Licenciamento Ambiental', icon: FileCheck2 },
    { id: 'fiscalizacao', label: 'Fiscalização & Vistorias', icon: ShieldAlert },
    { id: 'denuncias', label: 'Denúncias Ambientais', icon: AlertTriangle },
    { id: 'gis', label: 'Zoneamento GIS & WebGIS', icon: Map },
    { id: 'auditoria', label: 'Auditoria & Logs', icon: History }
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between shrink-0 min-h-[calc(100vh-4rem)]">
      <div className="p-4 space-y-1">
        <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
          Módulos do Sistema
        </p>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                isActive
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      <div className="p-4 border-t border-slate-800 text-xs text-slate-400">
        <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60">
          <p className="font-semibold text-slate-300 mb-1">Status GitHub Pages</p>
          <div className="flex items-center space-x-2 text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Pronto para Deploy</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
