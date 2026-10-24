import React from 'react';
import { Map, Layers, Shield, Trees, Factory } from 'lucide-react';
import { MOCK_ZONAS_GIS } from '../mock/data';

export const ZoneamentoGIS: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Zoneamento & WebGIS Ambiental</h1>
          <p className="text-sm text-slate-500">Mapeamento de APPs, Unidades de Conservação e Zoneamento Urbano.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {MOCK_ZONAS_GIS.map((zona) => (
          <div key={zona.id} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-3">
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 rounded-full" style={{ backgroundColor: zona.corHex }}></div>
              <span className="font-bold text-slate-900 text-sm">{zona.categoria}</span>
            </div>
            <h3 className="font-semibold text-slate-800">{zona.nome}</h3>
            <p className="text-xs text-slate-500">Área demarcada: <strong>{zona.areaHectares} ha</strong></p>
            
            <div className="pt-2 border-t text-xs space-y-1">
              <p className="font-semibold text-slate-700">Restrições e Diretrizes:</p>
              <ul className="list-disc pl-4 text-slate-600 space-y-0.5">
                {zona.restricoes.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
