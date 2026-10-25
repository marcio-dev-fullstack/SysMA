import React, { useState } from 'react';
import { Search, ShieldCheck, CheckCircle2, FileText, AlertCircle, TreePine } from 'lucide-react';

export const ConsultaPublica: React.FC = () => {
  const [busca, setBusca] = useState('');
  const [resultado, setResultado] = useState<any>(null);

  const handlePesquisar = (e: React.FormEvent) => {
    e.preventDefault();
    if (busca.trim()) {
      setResultado({
        numero: busca.toUpperCase(),
        requerente: 'Posto e Conveniência Nazaré Ltda',
        cnpj: '12.345.678/0001-90',
        tipo: 'LO - Licença de Operação',
        status: 'VIGENTE',
        emissao: '2026-01-15',
        validade: '2030-01-15',
        orgao: 'Secretaria Municipal de Meio Ambiente',
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-800 to-slate-900 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold backdrop-blur-xs border border-emerald-500/30">
            <TreePine className="w-4 h-4" /> Portal do Cidadão & Transparência
          </div>
          <h2 className="text-2xl font-black">Consulta Pública de Licenças Ambientais</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Verifique a autenticidade e validade de licenças emitidas pela Secretaria de Meio Ambiente por número de processo, protocolo ou CPF/CNPJ.
          </p>
        </div>
      </div>

      {/* Box de Pesquisa */}
      <div className="bg-white p-6 rounded-xl shadow-xs border border-slate-200">
        <form onSubmit={handlePesquisar} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Digite o número da Licença (ex: LO-2026/0488) ou CNPJ..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-emerald-500 font-medium"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 shadow-md transition-all"
          >
            Consultar
          </button>
        </form>
      </div>

      {/* Resultado */}
      {resultado && (
        <div className="bg-white p-6 rounded-xl shadow-xs border border-emerald-200 relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-emerald-600" />
              <div>
                <h3 className="text-base font-black text-slate-800">{resultado.numero}</h3>
                <p className="text-xs text-slate-500">{resultado.orgao}</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> {resultado.status}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="text-slate-500 font-semibold">Razão Social / Requerente</p>
              <p className="font-bold text-slate-800 mt-0.5">{resultado.requerente}</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="text-slate-500 font-semibold">CNPJ do Titular</p>
              <p className="font-bold text-slate-800 mt-0.5">{resultado.cnpj}</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="text-slate-500 font-semibold">Tipo de Licença Concedida</p>
              <p className="font-bold text-slate-800 mt-0.5">{resultado.tipo}</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="text-slate-500 font-semibold">Período de Validade</p>
              <p className="font-bold text-slate-800 mt-0.5">{resultado.emissao} até {resultado.validade}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
