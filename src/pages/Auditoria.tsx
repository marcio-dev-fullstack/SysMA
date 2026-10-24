import React from 'react';
import { History, ShieldCheck, UserCheck } from 'lucide-react';

export const Auditoria: React.FC = () => {
  const logs = [
    { id: 1, usuario: 'Carlos Viana (Fiscal)', acao: 'Aprovou Parecer Técnico', processo: 'SISMA-2026-00088', data: '2026-10-24 09:12' },
    { id: 2, usuario: 'Mariana Souza (Analista)', acao: 'Criou Auto de Vistoria', processo: 'AUTO-2026-045', data: '2026-10-23 16:45' },
    { id: 3, usuario: 'Sistema Automático', acao: 'Recebeu Denúncia Cidadão', processo: 'DEN-2026-099', data: '2026-10-24 08:30' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Trilha de Auditoria & Segurança</h1>
        <p className="text-sm text-slate-500">Histórico de ações, edições e pareceres registrados no sistema.</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b text-xs font-semibold text-slate-600 uppercase">
              <th className="py-3 px-4">Data / Hora</th>
              <th className="py-3 px-4">Usuário</th>
              <th className="py-3 px-4">Ação Executada</th>
              <th className="py-3 px-4">Registro do Processo</th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm">
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-slate-50">
                <td className="py-3 px-4 text-xs font-mono text-slate-500">{log.data}</td>
                <td className="py-3 px-4 font-semibold text-slate-800">{log.usuario}</td>
                <td className="py-3 px-4 text-emerald-700 font-medium">{log.acao}</td>
                <td className="py-3 px-4 font-bold text-slate-900">{log.processo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
