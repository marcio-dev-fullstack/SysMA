import React from 'react';
import { Bell, Search, ShieldCheck, LogOut, Clock, AlertTriangle, KeyRound } from 'lucide-react';
import { Usuario } from '../../types';

interface NavbarProps {
  currentModule: string;
  usuario: Usuario;
  onLogout: () => void;
  diasLicenca: number;
  chaveLicenca: string;
  onOpenLicencaModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentModule,
  usuario,
  onLogout,
  diasLicenca,
  chaveLicenca,
  onOpenLicencaModal
}) => {
  const badgeCores = {
    adm: 'bg-purple-100 text-purple-800 border-purple-200',
    analista: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    fiscal: 'bg-amber-100 text-amber-800 border-amber-200',
  };

  return (
    <header className="bg-white border-b border-slate-200 px-6 py-3 flex flex-col gap-2 sticky top-0 z-30 shadow-xs">
      {/* BANNER SUPERIOR DE ALERTA SE FALTAREM <= 5 DIAS PARA A LICENÇA VENCER */}
      {diasLicenca <= 5 && (
        <div className={`p-2.5 rounded-lg text-xs font-bold flex items-center justify-between gap-3 ${
          diasLicenca <= 0
            ? 'bg-rose-100 text-rose-900 border border-rose-300'
            : 'bg-amber-100 text-amber-900 border border-amber-300'
        }`}>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 animate-bounce" />
            <span>
              {diasLicenca <= 0
                ? '⚠️ ATENÇÃO ADM: A licença do SisMA expirou (0 dias). O acesso dos demais perfis foi suspenso!'
                : `⚠️ ATENÇÃO: A licença do SisMA expira em apenas ${diasLicenca} dia(s). Notificações diárias foram enviadas via WhatsApp.`}
            </span>
          </div>
          {usuario.perfil === 'adm' && onOpenLicencaModal && (
            <button
              onClick={onOpenLicencaModal}
              className="px-2.5 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded text-[11px] font-extrabold shrink-0 cursor-pointer"
            >
              Renovar Licença
            </button>
          )}
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-slate-800 capitalize flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            {currentModule}
          </h1>

          {/* Badge com Contagem de Dias da Licença */}
          <button
            onClick={onOpenLicencaModal}
            className={`hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border cursor-pointer transition-all ${
              diasLicenca <= 0
                ? 'bg-rose-100 text-rose-800 border-rose-300'
                : diasLicenca <= 5
                ? 'bg-amber-100 text-amber-800 border-amber-300 animate-pulse'
                : 'bg-emerald-100 text-emerald-800 border-emerald-300'
            }`}
            title={`Chave: ${chaveLicenca}`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Licença: {diasLicenca}d restantes</span>
          </button>
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

          <button className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer" title="Notificações">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full"></span>
          </button>

          {/* Perfil Ativo e Botão de Logout / Trocar Perfil */}
          <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
            <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-xs shadow-sm">
              {usuario.avatar}
            </div>

            <div className="hidden lg:block text-left">
              <div className="flex items-center gap-2">
                <p className="text-xs font-bold text-slate-800">{usuario.nome}</p>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${badgeCores[usuario.perfil]}`}>
                  {usuario.perfil.toUpperCase()}
                </span>
              </div>
              <p className="text-[11px] text-slate-500">{usuario.cargo}</p>
            </div>

            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 hover:border-rose-200 transition-all cursor-pointer ml-1"
              title="Sair e voltar para a Tela de Perfis"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Trocar Perfil</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
