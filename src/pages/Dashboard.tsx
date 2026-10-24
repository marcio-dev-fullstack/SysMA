import React from 'react';
import { 
  FileText, 
  CheckCircle2, 
  AlertOctagon, 
  TrendingUp, 
  MapPin, 
  Clock, 
  Download,
  Filter
} from 'lucide-react';
import { MOCK_PROCESSOS, MOCK_VISTORIAS, MOCK_DENUNCIAS, MOCK_ZONAS_GIS } from '../mock/data';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Visão Geral da Gestão Ambiental</h1>
          <p className="text-sm text-slate-500">Acompanhamento em tempo real de licenças, autos e denúncias municipais.</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-2 px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 shadow-sm">
            <Filter className="h-4 w-4 text-slate-500" />
            <span>Filtrar Período</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 shadow-sm transition">
            <Download className="h-4 w-4" />
            <span>Exportar Relatório</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Processos Ativos</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-1">{MOCK_PROCESSOS.length}</p>
            <p className="text-xs text-emerald-600 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" /> +12% neste mês
            </p>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
            <FileText className="h-6 w-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Licenças Emitidas</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-1">28</p>
            <p className="text-xs text-slate-500 mt-1">Neste trimestre</p>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
            <CheckCircle2 className="h-6 w-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Autos de Infrações</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-1">{MOCK_VISTORIAS.length}</p>
            <p className="text-xs text-amber-600 font-medium mt-1">2 aguardando parecer</p>
          </div>
          <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
            <AlertOctagon className="h-6 w-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Áreas Protegidas (GIS)</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-1">{MOCK_ZONAS_GIS.length}</p>
            <p className="text-xs text-slate-500 mt-1">671.3 hectares totais</p>
          </div>
          <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
            <MapPin className="h-6 w-6" />
          </div>
        </div>
      </div>

      {/* Main Grid: Map Simulation and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Interactive WebGIS Panel */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold text-slate-800">Mapa Georreferenciado Municipal</h2>
              <p className="text-xs text-slate-500">Visualização de processos, APPs e pontos de fiscalização.</p>
            </div>
            <span className="text-xs bg-slate-100 text-slate-600 font-medium px-2.5 py-1 rounded">Leaflet GIS</span>
          </div>

          <div className="w-full h-80 bg-slate-900 rounded-lg overflow-hidden relative border border-slate-700 flex items-center justify-center text-white">
            <div className="absolute inset-0 bg-slate-950 opacity-90 p-4 font-mono text-xs text-slate-300 overflow-auto">
              <div className="flex justify-between items-center mb-2 pb-2 border-b border-slate-800 text-emerald-400 font-semibold">
                <span>GEO-ENGINEER LAYER STATUS</span>
                <span>LAT: -23.5505 | LNG: -46.6333</span>
              </div>
              <p className="text-slate-400">Camada "APP Córrego Principal" [POLYGON ACTIVE]</p>
              <p className="text-slate-400">Camada "Loteamentos Licenciados" [POINTS: 4 LOADED]</p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                {MOCK_PROCESSOS.map(proc => (
                  <div key={proc.id} className="bg-slate-900 p-2 rounded border border-slate-800">
                    <p className="font-bold text-emerald-400">{proc.numeroProcesso}</p>
                    <p className="text-slate-300">{proc.atividade}</p>
                    <p className="text-slate-500">Status: {proc.status}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Process Feed */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-slate-800">Últimos Processos</h2>
            <Clock className="h-4 w-4 text-slate-400" />
          </div>

          <div className="space-y-3">
            {MOCK_PROCESSOS.map(proc => (
              <div key={proc.id} className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">{proc.numeroProcesso}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    proc.tipoLicenca === 'LI' ? 'bg-blue-100 text-blue-700' :
                    proc.tipoLicenca === 'LO' ? 'bg-emerald-100 text-emerald-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {proc.tipoLicenca}
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-medium truncate">{proc.requerente}</p>
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span>{proc.bairro}</span>
                  <span className="font-medium text-slate-700">{proc.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
