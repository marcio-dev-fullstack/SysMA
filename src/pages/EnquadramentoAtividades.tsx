import React, { useState } from 'react';
import { Layers, Search, Plus, Sliders, ShieldAlert } from 'lucide-react';
import { AtividadeAmbiental } from '../types';

export const EnquadramentoAtividades: React.FC = () => {
  const [atividades] = useState<AtividadeAmbiental[]>([
    { id: '1', codigo: '01.01', descricao: 'Postos de Combustíveis e Serviços', potencial_poluidor: 'Grande', porte: 'Médio', taxa_base: 1850.0 },
    { id: '2', codigo: '02.04', descricao: 'Lava-Jato / Higienização Automotiva', potencial_poluidor: 'Médio', porte: 'Pequeno', taxa_base: 450.0 },
    { id: '3', codigo: '05.12', descricao: 'Serrarias e Beneficiamento de Madeira', potencial_poluidor: 'Grande', porte: 'Grande', taxa_base: 3200.0 },
    { id: '4', codigo: '08.01', descricao: 'Construção Civil & Loteamento Urbano', potencial_poluidor: 'Médio', porte: 'Grande', taxa_base: 2500.0 },
    { id: '5', codigo: '12.02', descricao: 'Supermercados e Lojas de Departamento', potencial_poluidor: 'Pequeno', porte: 'Médio', taxa_base: 600.0 },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-xs border border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Layers className="w-6 h-6 text-emerald-600" /> Tabela de Enquadramento & Taxas Ambientais
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Classificação de empreendimentos por Potencial Poluidor Degradador (PMP) e Porte.
          </p>
        </div>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700 shadow-md flex items-center gap-2 self-start sm:self-auto">
          <Plus className="w-4 h-4" /> Cadastrar Atividade
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <div className="relative w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por código ou descrição..."
              className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500"
            />
          </div>
          <span className="text-xs text-slate-500 font-semibold">{atividades.length} Atividades Cadastradas</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-4">Cód. COEMA</th>
                <th className="p-4">Descrição da Atividade</th>
                <th className="p-4">Potencial Poluidor</th>
                <th className="p-4">Porte</th>
                <th className="p-4 text-right">Taxa Licenciamento (R$)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {atividades.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-mono font-bold text-emerald-700">{item.codigo}</td>
                  <td className="p-4 font-semibold text-slate-800">{item.descricao}</td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        item.potencial_poluidor === 'Grande'
                          ? 'bg-red-100 text-red-800'
                          : item.potencial_poluidor === 'Médio'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {item.potencial_poluidor}
                    </span>
                  </td>
                  <td className="p-4 text-slate-600">{item.porte}</td>
                  <td className="p-4 text-right font-bold text-slate-800">
                    R$ {item.taxa_base.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
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
