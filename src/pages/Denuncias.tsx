import React from 'react';
import { AlertTriangle, ShieldCheck, MapPin } from 'lucide-react';
import { MOCK_DENUNCIAS } from '../mock/data';

export const Denuncias: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Canal de Denúncias Ambientais</h1>
          <p className="text-sm text-slate-500">Acompanhamento e triagem de relatos anônimos e identificados do cidadão.</p>
        </div>
      </div>

      <div className="space-y-4">
        {MOCK_DENUNCIAS.map((den) => (
          <div key={den.id} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-emerald-700 text-sm bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                {den.protocolo}
              </span>
              <span className="text-xs text-slate-500">{den.dataRegistro}</span>
            </div>

            <h3 className="font-semibold text-slate-800 text-base">{den.categoria} - {den.bairro}</h3>
            <p className="text-sm text-slate-600">{den.descricao}</p>

            <div className="flex items-center justify-between pt-3 text-xs text-slate-500">
              <span className="flex items-center">
                <MapPin className="h-3.5 w-3.5 mr-1 text-slate-400" /> Lat {den.lat}, Lng {den.lng}
              </span>
              <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold">
                Status: {den.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
