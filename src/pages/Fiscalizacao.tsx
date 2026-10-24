import React from 'react';
import { ShieldAlert, AlertOctagon, Plus, CheckCircle, MapPin } from 'lucide-react';
import { MOCK_VISTORIAS } from '../mock/data';

export const Fiscalizacao: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Fiscalização & Vistorias em Campo</h1>
          <p className="text-sm text-slate-500">Emissão de autos de infração, laudos de vistoria e ordens de serviço.</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 shadow-sm transition">
          <Plus className="h-4 w-4" />
          <span>Nova Ordem de Vistoria</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MOCK_VISTORIAS.map((vist) => (
          <div key={vist.id} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="font-bold text-slate-900 text-base">{vist.numeroAuto}</span>
              <span className={`px-2.5 py-0.5 rounded text-xs font-bold ${
                vist.gravidade === 'Gravíssima' ? 'bg-red-100 text-red-700' :
                'bg-amber-100 text-amber-700'
              }`}>
                Gravidade: {vist.gravidade}
              </span>
            </div>

            <div className="space-y-1 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Infração: {vist.tipoInfracao}</p>
              <p className="text-xs text-slate-500 flex items-center">
                <MapPin className="h-3.5 w-3.5 mr-1 text-slate-400" />
                {vist.local}
              </p>
              <p className="text-xs text-slate-600 pt-2">{vist.observacoes}</p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Fiscal: <strong>{vist.fiscalResponsavel}</strong></span>
              <span>Data: {vist.dataVistoria}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
