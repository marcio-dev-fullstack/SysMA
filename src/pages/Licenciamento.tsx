import React, { useState } from 'react';
import { MOCK_PROCESSOS } from '../mock/data';
import { ProcessoLicenciamento } from '../types';
import { Plus, Search, Filter, FileText, CheckCircle, Clock } from 'lucide-react';

export const Licenciamento: React.FC = () => {
  const [processos] = useState<ProcessoLicenciamento[]>(MOCK_PROCESSOS);
  const [filtro, setFiltro] = useState('');

  const processosFiltrados = processos.filter(
    (p) =>
      p.requerente.toLowerCase().includes(filtro.toLowerCase()) ||
      p.numero_processo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Processos de Licenciamento Ambiental</h2>
          <p className="text-xs text-slate-500">
            Acompanhamento, análise técnica e emissão de Licenças (LP, LI, LO e LAS).
          </p>
        </div>
        <button className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-xs">
          <Plus className="w-4 h-4" />
          Novo Processo
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-5">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              placeholder="Buscar por Requerente ou Processo..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button className="flex items-center gap-2 px-3 py-2 text-sm border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
              <Filter className="w-4 h-4" />
              Filtrar
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-700 text-xs font-semibold uppercase border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Nº Processo</th>
                <th className="py-3 px-4">Requerente / CPF/CNPJ</th>
                <th className="py-3 px-4">Atividade Licenciada</th>
                <th className="py-3 px-4">Tipo</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {processosFiltrados.map((proc) => (
                <tr key={proc.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-800">{proc.numero_processo}</td>
                  <td className="py-3.5 px-4">
                    <p className="font-medium text-slate-800">{proc.requerente}</p>
                    <p className="text-xs text-slate-400 font-mono">{proc.cpf_cnpj}</p>
                  </td>
                  <td className="py-3.5 px-4 truncate max-w-[240px] text-xs">{proc.atividades}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-1 rounded bg-slate-100 text-slate-800 font-mono text-xs font-bold border border-slate-200">
                      {proc.tipo_licenca}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                        proc.status === 'Deferido'
                          ? 'bg-emerald-100 text-emerald-800'
                          : proc.status === 'Em Análise'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {proc.status === 'Deferido' ? (
                        <CheckCircle className="w-3.5 h-3.5" />
                      ) : (
                        <Clock className="w-3.5 h-3.5" />
                      )}
                      {proc.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button className="text-xs font-semibold text-emerald-600 hover:text-emerald-800 hover:underline">
                      Analisar Processo
                    </button>
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
