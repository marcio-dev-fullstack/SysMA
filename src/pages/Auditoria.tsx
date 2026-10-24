import React from 'react';
import { MOCK_LOGS } from '../mock/data';
import { History, Shield, Lock } from 'lucide-react';

export const Auditoria: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Trilha de Auditoria & Logs de Segurança</h2>
          <p className="text-xs text-slate-500">
            Registro imutável de todas as ações de aprovação, alteração e emissão de documentos.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-700 text-xs font-semibold uppercase border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Usuário</th>
                <th className="py-3 px-4">Ação Realizada</th>
                <th className="py-3 px-4">Módulo</th>
                <th className="py-3 px-4">Endereço IP</th>
                <th className="py-3 px-4">Data e Hora</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_LOGS.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-medium text-slate-800">{log.usuario}</td>
                  <td className="py-3.5 px-4 text-xs font-semibold text-slate-700">{log.acao}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-xs">
                      {log.modulo}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-xs font-mono text-slate-500">{log.ip}</td>
                  <td className="py-3.5 px-4 text-xs text-slate-500">{log.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
