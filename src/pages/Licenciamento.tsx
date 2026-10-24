import React, { useState } from 'react';
import { FileCheck2, Plus, Search, Filter, MapPin, Eye, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import { MOCK_PROCESSOS } from '../mock/data';
import { ProcessoLicenciamento } from '../types';

export const Licenciamento: React.FC = () => {
  const [processos, setProcessos] = useState<ProcessoLicenciamento[]>(MOCK_PROCESSOS);
  const [busca, setBusca] = useState('');
  const [selectedProcesso, setSelectedProcesso] = useState<ProcessoLicenciamento | null>(null);

  const processosFiltrados = processos.filter(p => 
    p.numeroProcesso.toLowerCase().includes(busca.toLowerCase()) ||
    p.requerente.toLowerCase().includes(busca.toLowerCase()) ||
    p.atividade.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Licenciamento Ambiental</h1>
          <p className="text-sm text-slate-500">Gestão de Licenças Prévias (LP), de Instalação (LI), Operação (LO) e LAS.</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 shadow-sm transition">
          <Plus className="h-4 w-4" />
          <span>Novo Processo</span>
        </button>
      </div>

      {/* Filter and Search */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Pesquisar por número do processo, requerente ou atividade..."
            className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <button className="flex items-center space-x-2 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200">
          <Filter className="h-4 w-4" />
          <span>Filtrar por Status</span>
        </button>
      </div>

      {/* Process Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                <th className="py-3.5 px-4">Número do Processo</th>
                <th className="py-3.5 px-4">Requerente / CPF-CNPJ</th>
                <th className="py-3.5 px-4">Tipo Licença</th>
                <th className="py-3.5 px-4">Impacto</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Data Solicitação</th>
                <th className="py-3.5 px-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm">
              {processosFiltrados.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50/80 transition">
                  <td className="py-3.5 px-4 font-bold text-slate-900">{p.numeroProcesso}</td>
                  <td className="py-3.5 px-4">
                    <p className="font-semibold text-slate-800">{p.requerente}</p>
                    <p className="text-xs text-slate-500">{p.cpfCnpj}</p>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-1 rounded font-bold text-xs bg-slate-100 text-slate-800 border border-slate-300">
                      {p.tipoLicenca}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                      p.nivelImpacto === 'Alto' ? 'bg-red-100 text-red-700' :
                      p.nivelImpacto === 'Médio' ? 'bg-amber-100 text-amber-700' :
                      'bg-emerald-100 text-emerald-700'
                    }`}>
                      {p.nivelImpacto}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {p.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 text-xs">{p.dataSolicitacao}</td>
                  <td className="py-3.5 px-4 text-right">
                    <button 
                      onClick={() => setSelectedProcesso(p)}
                      className="p-1.5 text-slate-600 hover:text-emerald-600 hover:bg-slate-100 rounded-lg transition"
                      title="Ver Detalhes"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProcesso && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-lg text-slate-900">{selectedProcesso.numeroProcesso}</h3>
              <button onClick={() => setSelectedProcesso(null)} className="text-slate-400 hover:text-slate-600 font-bold">✕</button>
            </div>
            <div className="space-y-2 text-sm text-slate-700">
              <p><strong>Requerente:</strong> {selectedProcesso.requerente} ({selectedProcesso.cpfCnpj})</p>
              <p><strong>Atividade:</strong> {selectedProcesso.atividade}</p>
              <p><strong>Tipo de Licença:</strong> {selectedProcesso.tipoLicenca}</p>
              <p><strong>Bairro:</strong> {selectedProcesso.bairro}</p>
              <p><strong>Descrição da Área:</strong> {selectedProcesso.descricaoArea}</p>
              <div className="p-3 bg-slate-100 rounded text-xs font-mono">
                Coordenadas GIS: Lat {selectedProcesso.lat}, Lng {selectedProcesso.lng}
              </div>
            </div>
            <div className="pt-3 border-t flex justify-end space-x-2">
              <button onClick={() => setSelectedProcesso(null)} className="px-4 py-2 bg-slate-200 text-slate-800 rounded-lg text-sm font-medium hover:bg-slate-300">
                Fechar
              </button>
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700">
                Aprovar Parecer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
