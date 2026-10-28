import React, { useState } from 'react';
import { MOCK_LOGS } from '../mock/data';
import { History, Shield, Lock, MapPin, Smartphone, Laptop, Search, Filter, CheckCircle2 } from 'lucide-react';
import { PerfilUsuario } from '../types';

export const Auditoria: React.FC = () => {
  const [busca, setBusca] = useState('');
  const [filtroPerfil, setFiltroPerfil] = useState<string>('todos');

  const logsFiltrados = MOCK_LOGS.filter((log) => {
    const atendeBusca =
      log.usuario.toLowerCase().includes(busca.toLowerCase()) ||
      log.acao.toLowerCase().includes(busca.toLowerCase()) ||
      log.modulo.toLowerCase().includes(busca.toLowerCase()) ||
      (log.cpf && log.cpf.includes(busca));

    const atendePerfil = filtroPerfil === 'todos' || log.perfil === filtroPerfil;

    return atendeBusca && atendePerfil;
  });

  const perfilBadges = {
    adm: 'bg-purple-100 text-purple-800 border-purple-200',
    analista: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    fiscal: 'bg-amber-100 text-amber-800 border-amber-200',
    empresario: 'bg-blue-100 text-blue-800 border-blue-200',
  };

  const perfilLabels = {
    adm: 'Administrador',
    analista: 'Analista',
    fiscal: 'Fiscal',
    empresario: 'Empresário',
  };

  return (
    <div className="space-y-6">
      {/* Banner da Trilha de Auditoria */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-xs border border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <History className="w-6 h-6 text-purple-600" /> Trilha de Auditoria & Rastreabilidade Imutável
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Logs completos de todas as ações dos 4 perfis (ADM, Analista, Fiscal e Empresário) com registro de IP, horário e geolocalização.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-lg border border-emerald-200 text-xs font-bold shrink-0">
          <Shield className="w-4 h-4 text-emerald-600" />
          <span>Audit Logs Imutáveis (RLS Active)</span>
        </div>
      </div>

      {/* Filtros e Busca */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar por usuário, CPF, ação ou módulo..."
              className="w-full pl-9 pr-4 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-bold text-slate-600 whitespace-nowrap">Filtrar por Perfil:</span>
            <select
              value={filtroPerfil}
              onChange={(e) => setFiltroPerfil(e.target.value)}
              className="px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-purple-500 font-semibold"
            >
              <option value="todos">Todos os Perfis (4)</option>
              <option value="adm">1. Administrador (ADM)</option>
              <option value="analista">2. Analista Ambiental</option>
              <option value="fiscal">3. Fiscal de Campo</option>
              <option value="empresario">4. Empresário / Requerente</option>
            </select>
          </div>
        </div>

        {/* Tabela de Logs */}
        <div className="overflow-x-auto border-t border-slate-100 pt-4">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-3.5">Usuário / Perfil / CPF</th>
                <th className="p-3.5">Ação Realizada & Módulo</th>
                <th className="p-3.5">Dispositivo & IP</th>
                <th className="p-3.5">Geolocalização do Usuário</th>
                <th className="p-3.5">Data e Horário</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {logsFiltrados.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5">
                    <div className="space-y-1">
                      <p className="font-bold text-slate-900">{log.usuario}</p>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`px-2 py-0.5 rounded-md text-[9px] font-extrabold uppercase border ${perfilBadges[log.perfil]}`}>
                          {perfilLabels[log.perfil]}
                        </span>
                        {log.cpf && (
                          <span className="text-[10px] font-mono text-slate-500 font-semibold">
                            CPF/CNPJ: {log.cpf}
                          </span>
                        )}
                      </div>
                    </div>
                  </td>

                  <td className="p-3.5">
                    <p className="font-bold text-slate-800">{log.acao}</p>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[10px] font-bold border border-slate-200">
                      {log.modulo}
                    </span>
                  </td>

                  <td className="p-3.5">
                    <div className="space-y-0.5">
                      <p className="font-mono text-slate-700 font-bold flex items-center gap-1">
                        <Laptop className="w-3.5 h-3.5 text-slate-400" />
                        IP: {log.ip}
                      </p>
                      <p className="text-[10px] text-slate-500 truncate max-w-[180px]">
                        {log.dispositivo || 'Navegador Web'}
                      </p>
                    </div>
                  </td>

                  <td className="p-3.5">
                    <div className="flex items-start gap-1 text-emerald-800 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-tight font-mono">{log.geolocalizacao}</span>
                    </div>
                  </td>

                  <td className="p-3.5 whitespace-nowrap text-slate-600 font-mono text-[11px]">
                    {log.timestamp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
