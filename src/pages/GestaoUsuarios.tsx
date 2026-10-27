import React, { useState } from 'react';
import { Users, UserPlus, Search, Trash2, Edit2, Phone, Mail } from 'lucide-react';
import { Usuario, PerfilUsuario } from '../types';

export const GestaoUsuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([
    {
      id: 'usr-1',
      nome: 'MÁRCIO RODRIGUES DE OLIVEIRA',
      email: 'cda.marcio@gmail.com',
      cpf: '633.740.302-97',
      perfil: 'adm',
      cargo: 'Administrador do Sistema & Secretário',
      orgao: 'Secretaria Municipal de Meio Ambiente',
      avatar: 'M',
      telefone_whatsapp: '+55 65 9231-2739',
    },
    {
      id: 'usr-2',
      nome: 'ailton.bartolomeu',
      email: 'cda.marcio@gmail.com',
      cpf: '111.949.113-98',
      perfil: 'analista',
      cargo: 'Analista Ambiental Sênior',
      orgao: 'Coordenadoria de Licenciamento',
      avatar: 'A',
      telefone_whatsapp: '+55 94 9113-9883',
    },
    {
      id: 'usr-3',
      nome: 'fernanda.baccaro',
      email: 'cda.marcio@gmail.com',
      cpf: '222.949.305-12',
      perfil: 'analista',
      cargo: 'Analista Ambiental Sênior',
      orgao: 'Coordenadoria de Licenciamento',
      avatar: 'F',
      telefone_whatsapp: '+55 94 9305-1234',
    },
    {
      id: 'usr-4',
      nome: 'flavio.watanabe',
      email: 'cda.marcio@gmail.com',
      cpf: '333.949.182-88',
      perfil: 'analista',
      cargo: 'Analista Ambiental Sênior',
      orgao: 'Coordenadoria de Licenciamento',
      avatar: 'F',
      telefone_whatsapp: '+55 94 9182-8854',
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [novoUsuario, setNovoUsuario] = useState({
    nome: '',
    email: 'cda.marcio@gmail.com',
    cpf: '',
    perfil: 'analista' as PerfilUsuario,
    cargo: 'Analista Ambiental Sênior',
    orgao: 'Coordenadoria de Licenciamento',
    telefone_whatsapp: '',
  });

  const handleCadastrar = (e: React.FormEvent) => {
    e.preventDefault();
    const userCreated: Usuario = {
      id: `usr-${Date.now()}`,
      nome: novoUsuario.nome,
      email: novoUsuario.email,
      cpf: novoUsuario.cpf,
      perfil: novoUsuario.perfil,
      cargo: novoUsuario.cargo,
      orgao: novoUsuario.orgao,
      avatar: novoUsuario.nome.charAt(0).toUpperCase(),
      telefone_whatsapp: novoUsuario.telefone_whatsapp,
    };
    setUsuarios([...usuarios, userCreated]);
    setShowModal(false);
    setNovoUsuario({ nome: '', email: 'cda.marcio@gmail.com', cpf: '', perfil: 'analista', cargo: 'Analista Ambiental Sênior', orgao: 'Coordenadoria de Licenciamento', telefone_whatsapp: '' });
  };

  return (
    <div className="space-y-6">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-xs border border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Users className="w-6 h-6 text-purple-600" /> Gestão de Servidores & Controle de Acesso (RBAC)
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Atribuição de papéis (ADM, Analista, Fiscal) e integração com Supabase Auth & RLS.
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg text-xs font-semibold hover:bg-purple-700 shadow-md flex items-center gap-2 self-start sm:self-auto cursor-pointer"
        >
          <UserPlus className="w-4 h-4" /> Cadastrar Novo Servidor
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <div className="relative w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por nome, e-mail, CPF..."
              className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-purple-500"
            />
          </div>
          <span className="text-xs text-slate-500 font-semibold">{usuarios.length} Usuários Cadastrados</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-4">Servidor / E-mail</th>
                <th className="p-4">WhatsApp</th>
                <th className="p-4">CPF</th>
                <th className="p-4">Cargo / Órgão</th>
                <th className="p-4">Perfil de Acesso</th>
                <th className="p-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {usuarios.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs">
                      {user.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">{user.nome}</p>
                      <p className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Mail className="w-3 h-3 text-slate-400" />
                        {user.email}
                      </p>
                    </div>
                  </td>
                  <td className="p-4 font-mono text-emerald-700 font-bold">
                    <div className="flex items-center gap-1">
                      <Phone className="w-3 h-3 text-emerald-600" />
                      <span>{user.telefone_whatsapp || '—'}</span>
                    </div>
                  </td>
                  <td className="p-4 font-mono text-slate-700 font-semibold">
                    {user.cpf || '—'}
                  </td>
                  <td className="p-4">
                    <p className="text-slate-800 font-semibold">{user.cargo}</p>
                    <p className="text-[10px] text-slate-400">{user.orgao}</p>
                  </td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        user.perfil === 'adm'
                          ? 'bg-purple-100 text-purple-800'
                          : user.perfil === 'analista'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {user.perfil === 'adm' ? 'Administrador' : user.perfil === 'analista' ? 'Analista' : 'Fiscal'}
                    </span>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    <button className="p-1.5 text-slate-600 hover:text-purple-600 hover:bg-slate-100 rounded-lg">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-slate-600 hover:text-red-600 hover:bg-slate-100 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Novo Usuario */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <form onSubmit={handleCadastrar} className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <h3 className="text-base font-bold text-slate-800 border-b border-slate-100 pb-2">
              Cadastrar Servidor no Supabase Auth
            </h3>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Nome / Usuário</label>
              <input
                type="text"
                required
                placeholder="Ex: ailton.bartolomeu"
                value={novoUsuario.nome}
                onChange={(e) => setNovoUsuario({ ...novoUsuario, nome: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp</label>
              <input
                type="text"
                required
                placeholder="+55 65 9231-2739"
                value={novoUsuario.telefone_whatsapp}
                onChange={(e) => setNovoUsuario({ ...novoUsuario, telefone_whatsapp: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-purple-500 font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">CPF do Servidor</label>
              <input
                type="text"
                required
                placeholder="000.000.000-00"
                value={novoUsuario.cpf}
                onChange={(e) => setNovoUsuario({ ...novoUsuario, cpf: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-purple-500 font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">E-mail Institucional</label>
              <input
                type="email"
                required
                value={novoUsuario.email}
                onChange={(e) => setNovoUsuario({ ...novoUsuario, email: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Perfil de Acesso</label>
              <select
                value={novoUsuario.perfil}
                onChange={(e) => setNovoUsuario({ ...novoUsuario, perfil: e.target.value as PerfilUsuario })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs bg-white focus:outline-none focus:border-purple-500"
              >
                <option value="adm">Administrador (Gestão Total)</option>
                <option value="analista">Analista Ambiental (Licenciamento)</option>
                <option value="fiscal">Fiscal Ambiental (Vistorias)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Cargo / Função</label>
              <input
                type="text"
                required
                placeholder="Ex: Analista Ambiental Sênior"
                value={novoUsuario.cargo}
                onChange={(e) => setNovoUsuario({ ...novoUsuario, cargo: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-xs font-semibold bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow-sm cursor-pointer"
              >
                Salvar Servidor
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
