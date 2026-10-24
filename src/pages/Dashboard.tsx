import React from 'react';
import { MOCK_PROCESSOS, MOCK_VISTORIAS, MOCK_DENUNCIAS } from '../mock/data';
import { FileText, ShieldAlert, AlertCircle, CheckCircle2, MapPin } from 'lucide-react';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Cards de Indicadores */}
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

      {/* Seção Principal: Tabela e Mapa Simulado */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lista de Processos Recentes */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-xs p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-slate-800">Processos de Licenciamento Recentes</h2>
            <span className="text-xs text-emerald-600 font-medium hover:underline cursor-pointer">Ver todos</span>
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
