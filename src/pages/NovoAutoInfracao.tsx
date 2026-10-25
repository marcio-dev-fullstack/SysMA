import React, { useState } from 'react';
import { AlertTriangle, Camera, CheckCircle2, FileText, MapPin, ShieldAlert, ArrowLeft } from 'lucide-react';

interface NovoAutoInfracaoProps {
  onCancel: () => void;
  onSuccess: () => void;
}

export const NovoAutoInfracao: React.FC<NovoAutoInfracaoProps> = ({ onCancel, onSuccess }) => {
  const [formData, setFormData] = useState({
    alvo: 'Madeireira & Serraria Santa Luzia',
    cpf_cnpj: '12.345.678/0001-90',
    endereco: 'Rodovia BR-316, Km 18, Zona Industrial',
    coordenadas: '-1.4589, -48.4891',
    tipo_infracao: 'Desmatamento não autorizado em APP / Queimada urbana',
    enquadramento_legal: 'Lei Federal 9.605/1998 Art. 38 c/c Lei Municipal de Proteção Ambiental',
    gravidade: 'Grave',
    valor_multa: '15000',
    relatorio_fiscal: 'Constatado supressão vegetal sem licença de operação em área limítrofe com igarapé protegida.',
    fotos: [] as string[],
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-xs border border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-600" />
            Lavratura de Auto de Infração / Notificação Ambiental
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Registro oficial para a fiscalização em campo com cálculo de multa e geolocalização.
          </p>
        </div>
        <button
          onClick={onCancel}
          className="text-slate-500 hover:text-slate-800 text-sm font-medium px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50"
        >
          Cancelar
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-xs border border-slate-200 space-y-6">
        {/* Dados do Autuado */}
        <div>
          <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4">
            1. Qualificação do Autuado / Infror
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Nome do Infror / Razão Social</label>
              <input
                type="text"
                value={formData.alvo}
                onChange={(e) => setFormData({ ...formData, alvo: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">CPF ou CNPJ</label>
              <input
                type="text"
                value={formData.cpf_cnpj}
                onChange={(e) => setFormData({ ...formData, cpf_cnpj: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1">Local da Infração (Coordenadas GPS)</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.coordenadas}
                  onChange={(e) => setFormData({ ...formData, coordenadas: e.target.value })}
                  className="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-sm font-mono focus:outline-none focus:border-amber-500"
                />
                <button className="px-4 py-2 bg-amber-600 text-white rounded-lg text-xs font-semibold hover:bg-amber-700 flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> GPS Atual
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tipificação Legal */}
        <div>
          <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4">
            2. Tipificação do Dano & Fundamentação Legal
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1">Infração Constatada</label>
              <input
                type="text"
                value={formData.tipo_infracao}
                onChange={(e) => setFormData({ ...formData, tipo_infracao: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Gravidade</label>
              <select
                value={formData.gravidade}
                onChange={(e) => setFormData({ ...formData, gravidade: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:border-amber-500"
              >
                <option value="Leve">Leve (Advertência ou Multa Leve)</option>
                <option value="Grave">Grave (Multa Moderada + Notificação)</option>
                <option value="Gravíssima">Gravíssima (Interdição / Embargo Imediato)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Valor Calculado da Penalidade (R$)</label>
              <input
                type="number"
                value={formData.valor_multa}
                onChange={(e) => setFormData({ ...formData, valor_multa: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm font-bold text-amber-900 bg-amber-50 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1">Relatório Circunstanciado da Vistoria</label>
              <textarea
                rows={3}
                value={formData.relatorio_fiscal}
                onChange={(e) => setFormData({ ...formData, relatorio_fiscal: e.target.value })}
                className="w-full p-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Upload Evidências */}
        <div>
          <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2 mb-2">
            3. Evidências Fotográficas Georreferenciadas
          </h3>
          <div className="p-4 border-2 border-dashed border-amber-300 bg-amber-50/50 rounded-xl text-center space-y-2">
            <Camera className="w-8 h-8 text-amber-600 mx-auto" />
            <p className="text-xs font-semibold text-slate-800">Capturar Foto em Campo ou Anexar Imagem</p>
            <p className="text-[10px] text-slate-500">As fotos serão armazenadas no Supabase Storage com marca d'água de data e GPS.</p>
            <button className="px-4 py-1.5 bg-amber-600 text-white rounded-lg text-xs font-semibold hover:bg-amber-700">
              Anexar Foto da Vistoria
            </button>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 bg-white p-4 rounded-xl shadow-xs border border-slate-200">
        <button
          onClick={onCancel}
          className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50"
        >
          Cancelar
        </button>
        <button
          onClick={onSuccess}
          className="px-6 py-2 bg-amber-600 text-white rounded-lg text-sm font-semibold hover:bg-amber-700 shadow-md flex items-center gap-2"
        >
          <CheckCircle2 className="w-4 h-4" /> Emitir Auto de Infração
        </button>
      </div>
    </div>
  );
};
