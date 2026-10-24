import React from 'react';
import { Bell, Search, UserCheck, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentModule: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentModule }) => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-30 shadow-xs">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-slate-800 capitalize flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-emerald-600" />
          {currentModule}
        </h1>
        <span className="hidden md:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
          Conectado ao Supabase
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar processos, autos..."
            className="w-full pl-9 pr-4 py-1.5 text-sm bg-slate-100 border border-transparent rounded-lg focus:bg-white focus:border-emerald-500 focus:outline-none transition-all"
          />
        </div>

        <button className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
            F
          </div>
          <div className="hidden lg:block text-left">
            <p className="text-xs font-semibold text-slate-800">Fiscal / Analista</p>
            <p className="text-[10px] text-slate-500">SEMMA - Gestão Municipal</p>
          </div>
        </div>
      </div>
    </header>
  );
};
