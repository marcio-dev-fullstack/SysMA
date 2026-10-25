import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, FileText, MapPin, Upload, Building2, ShieldAlert } from 'lucide-react';

interface NovaLicencaWizardProps {
  onCancel: () => void;
  onSuccess: () => void;
}

export const NovaLicencaWizard: React.FC<NovaLicencaWizardProps> = ({ onCancel, onSuccess }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    tipo_licenca: 'LP',
    requerente: '',
    cpf_cnpj: '',
    email: '',
    telefone: '',
    endereco_empreendimento: '',
    bairro: '',
    coordenadas: '-1.4558, -48.4902',
    atividade_principal: 'Posto de Combustível / Lojas de Conveniência',
    potencial_poluidor: 'Médio',
    porte: 'Médio',
    area_m2: '2500',
    descricao_projeto: '',
    arquivos: [] as string[],
  });

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    else onSuccess();
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else onCancel();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-xs border border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <FileText className="w-6 h-6 text-emerald-600" />
            Nova Solicitação de Licenciamento Ambiental
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Preencha os dados do requerente, empreendimento e anexar documentos obrigatórios.
          </p>
        </div>
        <button
          onClick={onCancel}
          className="text-slate-500 hover:text-slate-800 text-sm font-medium px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50"
        >
          Cancelar
        </button>
      </div>

      {/* Stepper Progress */}
      <div className="bg-white p-4 rounded-xl shadow-xs border border-slate-200">
        <div className="flex items-center justify-between">
          {[
            { num: 1, title: 'Requerente', icon: Building2 },
            { num: 2, title: 'Empreendimento & GIS', icon: MapPin },
            { num: 3, title: 'Atividade & Porte', icon: ShieldAlert },
            { num: 4, title: 'Documentos', icon: Upload },
          ].map((item, idx) => {
            const Icon = item.icon;
            const isActive = step === item.num;
            const isDone = step > item.num;
            return (
              <div key={item.num} className="flex items-center flex-1">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                      isDone
                        ? 'bg-emerald-600 text-white'
                        : isActive
                        ? 'bg-emerald-500 text-white ring-4 ring-emerald-100'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    {isDone ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                  </div>
                  <div className="hidden sm:block">
                    <p className={`text-xs font-semibold ${isActive ? 'text-emerald-800' : 'text-slate-600'}`}>
                      Etapa {item.num}
                    </p>
                    <p className="text-xs text-slate-500 font-medium">{item.title}</p>
                  </div>
                </div>
                {idx < 3 && <div className={`flex-1 h-1 mx-4 rounded ${isDone ? 'bg-emerald-500' : 'bg-slate-200'}`} />}
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Steps Container */}
      <div className="bg-white p-6 rounded-xl shadow-xs border border-slate-200 min-h-[380px]">
        {/* Step 1: Requerente */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-800 border-b border-slate-100 pb-2">
              1. Identificação do Requerente / Empreendedor
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Tipo de Licença Requerida</label>
                <select
                  value={formData.tipo_licenca}
                  onChange={(e) => setFormData({ ...formData, tipo_licenca: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="LP">LP - Licença Prévia (Fase de Planejamento)</option>
                  <option value="LI">LI - Licença de Instalação (Fase de Obras)</option>
                  <option value="LO">LO - Licença de Operação (Funcionamento)</option>
                  <option value="LAS">LAS - Licença Ambiental Simplificada</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Razão Social / Nome Completo</label>
                <input
                  type="text"
                  placeholder="Ex: Auto Posto EcoParque Ltda"
                  value={formData.requerente}
                  onChange={(e) => setFormData({ ...formData, requerente: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">CPF / CNPJ</label>
                <input
                  type="text"
                  placeholder="00.000.000/0001-00"
                  value={formData.cpf_cnpj}
                  onChange={(e) => setFormData({ ...formData, cpf_cnpj: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">E-mail para Notificações</label>
                <input
                  type="email"
                  placeholder="contato@empresa.com.br"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Localização & GIS */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-800 border-b border-slate-100 pb-2">
              2. Localização Georreferenciada do Empreendimento
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Endereço Completo</label>
                <input
                  type="text"
                  placeholder="Av. Nazaré, Nº 1200"
                  value={formData.endereco_empreendimento}
                  onChange={(e) => setFormData({ ...formData, endereco_empreendimento: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Bairro / Zona</label>
                <input
                  type="text"
                  placeholder="Centro"
                  value={formData.bairro}
                  onChange={(e) => setFormData({ ...formData, bairro: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Coordenadas Geográficas (Latitude, Longitude em EPSG:4326)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={formData.coordenadas}
                    onChange={(e) => setFormData({ ...formData, coordenadas: e.target.value })}
                    className="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-emerald-500 font-mono"
                  />
                  <button className="px-4 py-2 bg-slate-800 text-white rounded-lg text-xs font-semibold hover:bg-slate-700 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-emerald-400" /> Marcar no Mapa
                  </button>
                </div>
              </div>
            </div>
            {/* Simulação do Mapa GIS */}
            <div className="bg-slate-900 rounded-xl p-4 text-white flex flex-col items-center justify-center h-36 border border-slate-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
              <MapPin className="w-8 h-8 text-emerald-400 animate-bounce mb-1" />
              <p className="text-xs font-semibold text-emerald-300">Ponto Selecionado: {formData.coordenadas}</p>
              <span className="text-[10px] text-slate-400 mt-1">Verificação automática PostGIS: Fora de Área de Preservação Permanente (APP)</span>
            </div>
          </div>
        )}

        {/* Step 3: Atividade & Porte */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-800 border-b border-slate-100 pb-2">
              3. Enquadramento da Atividade Ambiental
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">Atividade Principal</label>
                <input
                  type="text"
                  value={formData.atividade_principal}
                  onChange={(e) => setFormData({ ...formData, atividade_principal: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Potencial Poluidor Degradador</label>
                <select
                  value={formData.potencial_poluidor}
                  onChange={(e) => setFormData({ ...formData, potencial_poluidor: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="Pequeno">Pequeno Impacto</option>
                  <option value="Médio">Médio Impacto</option>
                  <option value="Grande">Grande Impacto</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Porte do Empreendimento</label>
                <select
                  value={formData.porte}
                  onChange={(e) => setFormData({ ...formData, porte: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="Pequeno">Pequeno Porte (&lt; 1.000m²)</option>
                  <option value="Médio">Médio Porte (1.000m² a 10.000m²)</option>
                  <option value="Grande">Grande Porte (&gt; 10.000m²)</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">Descrição do Objeto Requerido</label>
                <textarea
                  rows={3}
                  placeholder="Descreva detalhadamente as etapas produtivas, resíduos gerados e medidas de controle ambiental propostas..."
                  value={formData.descricao_projeto}
                  onChange={(e) => setFormData({ ...formData, descricao_projeto: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Upload Documentos */}
        {step === 4 && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-800 border-b border-slate-100 pb-2">
              4. Anexo de Documentos Obrigatórios (Supabase Storage)
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                { title: 'Requerimento Padrão Assinado (PDF)', req: true },
                { title: 'Comprovante de Cadastro Ambiental Rural (CAR / Matrícula)', req: true },
                { title: 'Planta de Situação & Layout em DWG / PDF', req: true },
                { title: 'Plano de Controle Ambiental (PCA) / Outorga de Água', req: false },
              ].map((doc, idx) => (
                <div key={idx} className="p-3 border border-dashed border-slate-300 rounded-lg flex items-center justify-between hover:bg-slate-50">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p className="text-xs font-bold text-slate-800">
                        {doc.title} {doc.req && <span className="text-red-500">*</span>}
                      </p>
                      <p className="text-[10px] text-slate-400">Tamanho máximo: 25MB (Formatos: PDF, PNG, ZIP)</p>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-xs font-semibold hover:bg-emerald-100 flex items-center gap-1">
                    <Upload className="w-3.5 h-3.5" /> Anexar
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-xs border border-slate-200">
        <button
          onClick={handleBack}
          className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 shadow-md shadow-emerald-900/20 flex items-center gap-2"
        >
          {step === 4 ? 'Concluir & Protocolar' : 'Avançar'} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
