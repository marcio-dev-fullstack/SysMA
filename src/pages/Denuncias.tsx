import React from 'react';
import { MOCK_DENUNCIAS } from '../mock/data';
import { AlertTriangle, MapPin, Eye, ShieldCheck } from 'lucide-react';

export const Denuncias: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Portal do Cidadão - Denúncias Ambientais</h2>
          <p className="text-xs text-slate-500">
            Triagem, investigação e protocolo público de ocorrências ecológicas.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {MOCK_DENUNCIAS.map((denuncia) => (
          <div key={denuncia.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold bg-amber-50 text-amber-800 px-2 py-0.5 rounded border border-amber-200">
                  {denuncia.protocolo}
                </span>
                <span className="text-xs font-semibold text-slate-500">{denuncia.categoria}</span>
                {denuncia.anonimo && (
                  <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Anônima
                  </span>
                )}
              </div>
              <p className="text-sm font-semibold text-slate-800">{denuncia.descricao}</p>
              <p className="text-xs text-slate-500 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" /> Bairro: {denuncia.bairro}
              </p>
            </div>

            <div className="flex items-center gap-3 self-end md:self-center">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-900">
                {denuncia.status}
              </span>
              <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
