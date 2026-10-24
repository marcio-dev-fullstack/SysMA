import React from 'react';
import { Leaf, Bell, User, Search, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab }) => {
  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-emerald-600 p-2 rounded-lg flex items-center justify-center text-white shadow-md">
              <Leaf className="h-6 w-6" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                SisMA <span className="text-xs bg-emerald-900/80 text-emerald-300 font-medium px-2 py-0.5 rounded border border-emerald-700">v2.0 React</span>
              </span>
              <p className="text-xs text-slate-400">Sistema Municipal de Meio Ambiente</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar processo, protocolo ou auto de infração..."
                className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-4 py-1.5 text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700 text-xs text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              <span className="font-medium">Servidor Público</span>
            </div>

            <button className="relative p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-emerald-500 rounded-full"></span>
            </button>

            <div className="flex items-center space-x-2 pl-2 border-l border-slate-800">
              <div className="h-8 w-8 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-xs text-white">
                GA
              </div>
              <div className="hidden lg:block text-left text-xs">
                <p className="font-semibold text-slate-200">Gestor Ambiental</p>
                <p className="text-slate-400">Semam - Prefeitura</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
