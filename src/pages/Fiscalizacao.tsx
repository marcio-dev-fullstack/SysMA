import React from 'react';
import { MOCK_VISTORIAS } from '../mock/data';
import { ClipboardCheck, Plus, MapPin, Calendar, User, FileText } from 'lucide-react';

interface FiscalizacaoProps {
  onNewAuto?: () => void;
}

export const Fiscalizacao: React.FC<FiscalizacaoProps> = ({ onNewAuto }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Fiscalização e Vistorias de Campo</h2>
          <p className="text-xs text-slate-500">
            Ordens de serviço, emissão de Autos de Infração e formulários de vistoria georreferenciada.
          </p>
        </div>
        <button
          onClick={onNewAuto}
          className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-xs cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Lavrar Auto de Infração / Vistoria
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MOCK_VISTORIAS.map((vistoria) => (
          <div key={vistoria.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="font-bold text-slate-800 font-mono text-sm flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-amber-600" />
                {vistoria.numero_auto}
              </span>
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                  vistoria.status === 'Concluída'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-blue-100 text-blue-800'
                }`}
              >
                {vistoria.status}
              </span>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 text-base">{vistoria.alvo}</h3>
              <p className="text-xs text-slate-500 mt-1">{vistoria.tipo_infracao}</p>
            </div>

            <div className="pt-2 text-xs text-slate-600 space-y-1.5 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-slate-400" />
                <span>Fiscal Responsável: <strong>{vistoria.fiscal}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>Data: {vistoria.data_vistoria}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Geolocalização PostGIS registrada</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
