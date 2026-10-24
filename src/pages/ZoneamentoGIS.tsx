import React from 'react';
import { MOCK_ZONAS_GIS } from '../mock/data';
import { Map, Layers, Shield, TreePine } from 'lucide-react';

export const ZoneamentoGIS: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Zoneamento Ambiental & Polígonos GIS</h2>
          <p className="text-xs text-slate-500">
            Consultas de sobreposição de propriedades com APPs e Unidades de Conservação (PostGIS).
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-xs p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-600" />
              Camadas do Mapa Georreferenciado
            </h3>
          </div>
          <div className="w-full h-80 bg-slate-900 rounded-lg relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="relative text-center p-6 bg-slate-800/90 text-white rounded-xl border border-slate-700 shadow-xl max-w-md">
              <TreePine className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
              <h4 className="font-bold text-base">Camada PostGIS Ativa</h4>
              <p className="text-xs text-slate-300 mt-1">
                Renderizando Polígonos de APPs e Reserva Legal diretamente da tabela <code>zoneamento_gis</code> do Supabase.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5 space-y-4">
          <h3 className="font-bold text-slate-800 text-sm border-b border-slate-100 pb-3">Zonas Cadastradas</h3>
          {MOCK_ZONAS_GIS.map((zona) => (
            <div key={zona.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-800 text-xs">{zona.nome_zona}</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  {zona.categoria}
                </span>
              </div>
              <p className="text-xs text-slate-500">Área delimitada: <strong>{zona.area_ha} hectares</strong></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
