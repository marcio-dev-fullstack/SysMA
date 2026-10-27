import React from 'react';
import { MOCK_PROCESSOS } from '../mock/data';
import { 
  FileText, 
  ShieldAlert, 
  AlertCircle, 
  CheckCircle2, 
  MapPin, 
  UserCheck, 
  ShieldCheck, 
  Users, 
  FilePlus, 
  Search, 
  ClipboardCheck, 
  Building2, 
  Mail, 
  Phone, 
  CheckCircle 
} from 'lucide-react';
import { Usuario } from '../types';

interface DashboardProps {
  usuario?: Usuario;
  onNavigate?: (tab: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ usuario, onNavigate }) => {
  const nomeUsuario = usuario?.nome || 'MÁRCIO RODRIGUES DE OLIVEIRA';
  const emailUsuario = usuario?.email || 'cda.marcio@gmail.com';
  const cpfUsuario = usuario?.cpf || '633.740.302-97';
  const cargoUsuario = usuario?.cargo || 'Administrador do Sistema & Secretário';
  const orgaoUsuario = usuario?.orgao || 'Secretaria Municipal de Meio Ambiente';
  const perfilUsuario = (usuario?.perfil || 'adm').toUpperCase();

  return (
    <div className="space-y-6">
      {/* BANNER DE BOAS-VINDAS PERSONALIZADO DO SERVIDOR LOGADO */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 border border-slate-700/80 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 font-black text-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20 shrink-0">
              {nomeUsuario.charAt(0)}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-extrabold uppercase tracking-wider">
                  Perfil: {perfilUsuario}
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-extrabold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Autenticado (SSL)
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white mt-1">
                Bem-vindo(a), {nomeUsuario}!
              </h1>
              <p className="text-xs text-slate-300 font-medium mt-0.5 flex items-center gap-1.5 flex-wrap">
                <span>{cargoUsuario}</span>
                <span className="text-slate-500">•</span>
                <span className="text-emerald-400 font-semibold">{orgaoUsuario}</span>
              </p>
            </div>
          </div>

          {/* Grid com Dados do Servidor Logado */}
          <div className="w-full lg:w-auto bg-slate-900/80 backdrop-blur-sm border border-slate-700/60 rounded-xl p-3.5 text-xs grid grid-cols-2 sm:grid-cols-3 gap-3 shadow-inner">
            <div>
              <p className="text-[10px] text-slate-400 font-semibold uppercase">CPF do Servidor</p>
              <p className="font-mono font-bold text-emerald-400 mt-0.5">{cpfUsuario}</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-semibold uppercase">E-mail de Acesso</p>
              <p className="font-medium text-slate-200 mt-0.5 truncate max-w-[160px]">{emailUsuario}</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-[10px] text-slate-400 font-semibold uppercase">Sessão / Nível</p>
              <p className="font-bold text-purple-300 mt-0.5 flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5 text-purple-400" /> Nível 1 - Secretário
              </p>
            </div>
          </div>
        </div>

        {/* Atalhos de Ação Rápida no Banner */}
        {onNavigate && (
          <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center gap-2 overflow-x-auto">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap mr-2">
              Ações Rápidas:
            </span>
            <button
              onClick={() => onNavigate('usuarios')}
              className="px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer shadow-sm"
            >
              <Users className="w-3.5 h-3.5" /> Gestão de Servidores
            </button>
            <button
              onClick={() => onNavigate('nova-licenca')}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer shadow-sm"
            >
              <FilePlus className="w-3.5 h-3.5" /> Nova Licença
            </button>
            <button
              onClick={() => onNavigate('fiscalizacao')}
              className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer shadow-sm"
            >
              <ClipboardCheck className="w-3.5 h-3.5" /> Vistorias & Autos
            </button>
            <button
              onClick={() => onNavigate('consulta-publica')}
              className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer shadow-sm"
            >
              <Search className="w-3.5 h-3.5" /> Consulta Pública
            </button>
          </div>
        )}
      </div>

      {/* Cards de Indicadores do Sistema */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Processos em Análise</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">14</p>
            <span className="text-xs text-emerald-600 font-medium">+2 novos hoje</span>
          </div>
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Vistorias Agendadas</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">8</p>
            <span className="text-xs text-blue-600 font-medium">3 em campo</span>
          </div>
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Denúncias Pendentes</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">5</p>
            <span className="text-xs text-amber-600 font-medium">Requer atenção</span>
          </div>
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
            <AlertCircle className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Autos de Infração</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">12</p>
            <span className="text-xs text-slate-500 font-medium">Este mês</span>
          </div>
          <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center">
            <ShieldAlert className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Seção Principal: Tabela de Processos e WebGIS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lista de Processos Recentes */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-xs p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-slate-800">Processos de Licenciamento Recentes</h2>
            {onNavigate && (
              <button
                onClick={() => onNavigate('licenciamento')}
                className="text-xs text-emerald-600 font-medium hover:underline cursor-pointer"
              >
                Ver todos
              </button>
            )}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-700 text-xs font-semibold uppercase border-b border-slate-200">
                <tr>
                  <th className="py-3 px-3">Nº Processo</th>
                  <th className="py-3 px-3">Requerente</th>
                  <th className="py-3 px-3">Tipo</th>
                  <th className="py-3 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {MOCK_PROCESSOS.map((proc) => (
                  <tr key={proc.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-3 font-semibold text-slate-800">{proc.numero_processo}</td>
                    <td className="py-3 px-3 truncate max-w-[200px]">{proc.requerente}</td>
                    <td className="py-3 px-3">
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-mono text-xs font-bold">
                        {proc.tipo_licenca}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        proc.status === 'Deferido' ? 'bg-emerald-100 text-emerald-800' :
                        proc.status === 'Em Análise' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {proc.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mapeamento Geoespacial Simulado */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-bold text-slate-800 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-600" />
                Mapa de Vistorias & APPs
              </h2>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Geolocalização dos pontos de fiscalização e áreas de preservação cadastradas no PostGIS.
            </p>
          </div>

          <div className="w-full h-56 bg-slate-100 rounded-lg border border-slate-200 relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>
            <div className="relative text-center p-4 bg-white/90 backdrop-blur-xs rounded-xl shadow-xs border border-slate-200">
              <p className="text-xs font-bold text-slate-800">Visualização GIS Interativa</p>
              <p className="text-[11px] text-slate-500 mt-1">Conectado às tabelas de Polígonos PostGIS no Supabase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
