import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, FileText, QrCode, ShieldCheck, Download, Calendar, MapPin, AlertCircle, Clock } from 'lucide-react';
import { ProcessoLicenciamento } from '../types';

interface DetalheProcessoProps {
  processo: ProcessoLicenciamento;
  onBack: () => void;
}

export const DetalheProcesso: React.FC<DetalheProcessoProps> = ({ processo, onBack }) => {
  const [showCertificado, setShowCertificado] = useState(false);
  const [parecerTexto, setParecerTexto] = useState(
    'Após análise técnica da documentação apresentada e vistoria realizada no local do empreendimento, constata-se conformidade com a legislação ambiental municipal. RECOMENDA-SE o deferimento com a expedição da Licença de Operação (LO), sujeita ao cumprimento rigoroso das condicionantes estabelecidas.'
  );

  return (
    <div className="space-y-6">
      {/* Top Action Bar */}
      <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-xs border border-slate-200">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 px-3 py-1.5 rounded-lg hover:bg-slate-100"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar aos Processos
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowCertificado(true)}
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700 shadow-sm flex items-center gap-2"
          >
            <QrCode className="w-4 h-4" /> Visualizar / Emitir Licença Digital
          </button>
        </div>
      </div>

      {/* Main Process Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Main Card */}
          <div className="bg-white p-6 rounded-xl shadow-xs border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full uppercase">
                  Licença {processo.tipo_licenca}
                </span>
                <h2 className="text-2xl font-black text-slate-800 mt-2">{processo.numero_processo}</h2>
                <p className="text-sm font-semibold text-slate-600 mt-0.5">{processo.requerente}</p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                  <Clock className="w-3.5 h-3.5" /> {processo.status}
                </span>
                <p className="text-xs text-slate-400 mt-2">Protocolado em: {processo.data_solicitacao}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="font-semibold text-slate-500">CPF / CNPJ do Requerente</p>
                <p className="font-bold text-slate-800 text-sm mt-0.5">{processo.cpf_cnpj}</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="font-semibold text-slate-500">Atividade Principal</p>
                <p className="font-bold text-slate-800 text-sm mt-0.5">{processo.atividades}</p>
              </div>
            </div>
          </div>

          {/* Technical Evaluation Section */}
          <div className="bg-white p-6 rounded-xl shadow-xs border border-slate-200 space-y-4">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" /> Parecer Técnico do Analista Ambiental
            </h3>
            <textarea
              rows={4}
              value={parecerTexto}
              onChange={(e) => setParecerTexto(e.target.value)}
              className="w-full p-3 text-xs text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-500 font-sans leading-relaxed"
            />
            <div className="flex justify-end gap-2">
              <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-200">
                Salvar Rascunho
              </button>
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700">
                Aprovar & Finalizar Parecer
              </button>
            </div>
          </div>
        </div>

        {/* Right Timeline & Condicionantes */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-xs border border-slate-200 space-y-4">
            <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">
              Linha do Tempo do Processo
            </h3>
            <div className="space-y-4 text-xs">
              {[
                { title: 'Protocolo da Solicitação', date: '2026-10-10', done: true },
                { title: 'Análise de Documentos e CAR', date: '2026-10-12', done: true },
                { title: 'Vistoria Ambiental Realizada', date: '2026-10-18', done: true },
                { title: 'Emissão do Parecer Técnico', date: 'Em andamento', done: false },
                { title: 'Expedição do Certificado Digital', date: 'Pendente', done: false },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${item.done ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'}`}>
                      {idx + 1}
                    </div>
                    {idx < 4 && <div className="w-0.5 h-8 bg-slate-200 my-0.5" />}
                  </div>
                  <div>
                    <p className={`font-semibold ${item.done ? 'text-slate-800' : 'text-slate-400'}`}>{item.title}</p>
                    <p className="text-[10px] text-slate-400">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Certificado Digital de Licença */}
      {showCertificado && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl border-4 border-emerald-600 relative overflow-hidden">
            <div className="text-center space-y-2 border-b border-slate-200 pb-4">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto font-black text-xl">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h2 className="text-lg font-extrabold text-slate-800 uppercase tracking-widest">
                SECRETARIA MUNICIPAL DE MEIO AMBIENTE
              </h2>
              <p className="text-xs text-slate-500 font-semibold">CERTIFICADO DE LICENÇA AMBIENTAL DE OPERAÇÃO (LO)</p>
            </div>

            <div className="py-6 space-y-4 text-xs">
              <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200 text-emerald-900 font-medium">
                Concedida a **{processo.requerente}** (CNPJ: {processo.cpf_cnpj}) para a atividade de **{processo.atividades}**.
              </div>
              <div className="grid grid-cols-2 gap-2 text-slate-700">
                <p><strong>Nº da Licença:</strong> LO-2026/0488</p>
                <p><strong>Validade:</strong> 4 Anos (até 2030-10-24)</p>
                <p><strong>Autenticação Supabase:</strong> {processo.id}</p>
                <p><strong>Status:</strong> VIGENTE</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div className="text-left space-y-1">
                  <p className="text-[10px] text-slate-400">Validação oficial por QR Code imutável:</p>
                  <div className="w-20 h-20 bg-slate-900 text-white rounded-lg flex items-center justify-center p-1 font-mono text-[9px] text-center">
                    [QR CODE VALIDADO]
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <button
                    onClick={() => setShowCertificado(false)}
                    className="px-4 py-2 bg-slate-200 text-slate-800 rounded-lg font-semibold hover:bg-slate-300 mr-2"
                  >
                    Fechar
                  </button>
                  <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 flex items-center gap-1.5 inline-flex">
                    <Download className="w-4 h-4" /> Baixar PDF Autêntico
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
