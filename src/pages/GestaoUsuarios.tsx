import React, { useState } from 'react';
import { Users, UserPlus, Search, Trash2, Edit2, Phone, Mail, ShieldAlert } from 'lucide-react';
import { Usuario, PerfilUsuario } from '../types';

interface GestaoUsuariosProps {
  usuarioAtual?: Usuario;
}

export const GestaoUsuarios: React.FC<GestaoUsuariosProps> = ({ usuarioAtual }) => {
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
    {
      id: 'usr-5',
      nome: 'Sgt. Roberto Alves',
      email: 'roberto.fiscal@semma.gov.br',
      cpf: '456.789.123-22',
      perfil: 'fiscal',
      cargo: 'Fiscal Ambiental Chefe de Campo',
      orgao: 'Divisão de Fiscalização e Monitoramento',
      avatar: 'R',
      telefone_whatsapp: '+55 65 98888-1234',
    },
    {
      id: 'usr-6',
      nome: 'Indústria Metalúrgica do Vale S.A.',
      email: 'contato@metalurgicavale.com.br',
      cpf: '12.345.678/0001-90',
      perfil: 'empresario',
      cargo: 'Requerente / Diretor Industrial',
      orgao: 'Setor Privado / Empreendedor',
      avatar: 'I',
      telefone_whatsapp: '+55 65 97777-5555',
    },
  ]);

  const perfilLogado = usuarioAtual?.perfil || 'adm';

  const [showModal, setShowModal] = useState(false);
  const [novoUsuario, setNovoUsuario] = useState({
    nome: '',
    email: 'cda.marcio@gmail.com',
    cpf: '',
    perfil: perfilLogado === 'analista' ? ('fiscal' as PerfilUsuario) : ('analista' as PerfilUsuario),
    cargo: perfilLogado === 'analista' ? 'Fiscal Ambiental de Campo' : 'Analista Ambiental Sênior',
    orgao: 'Secretaria Municipal de Meio Ambiente',
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
    setNovoUsuario({
      nome: '',
      email: 'cda.marcio@gmail.com',
      cpf: '',
      perfil: perfilLogado === 'analista' ? 'fiscal' : 'analista',
      cargo: perfilLogado === 'analista' ? 'Fiscal Ambiental de Campo' : 'Analista Ambiental Sênior',
      orgao: 'Secretaria Municipal de Meio Ambiente',
      telefone_whatsapp: '',
    });
  };

  const handleDelete = (id: string, nome: string) => {
    if (perfilLogado !== 'adm') {
      alert('⚠️ Ação não permitida: Apenas o Administrador pode deletar usuários do sistema.');
      return;
    }
    if (confirm(`Tem certeza que deseja excluir o usuário ${nome}?`)) {
      setUsuarios(usuarios.filter((u) => u.id !== id));
    }
  };

  const perfilBadges = {
    adm: 'bg-purple-100 text-purple-800 border-purple-200',
    analista: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    fiscal: 'bg-amber-100 text-amber-800 border-amber-200',
    empresario: 'bg-blue-100 text-blue-800 border-blue-200',
  };

  const perfilLabels = {
    adm: 'Administrador',
    analista: 'Analista',
    fiscal: 'Fiscal',
    empresario: 'Empresário',
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
            {perfilLogado === 'analista'
              ? ' Como Analista, você possui autorização para cadastrar novos Fiscais e Empresários no sistema.'
              : ' Atribuição de papéis (ADM, Analista, Fiscal, Empresário) e integração com Supabase Auth & RLS.'}
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg text-xs font-semibold hover:bg-purple-700 shadow-md flex items-center gap-2 self-start sm:self-auto cursor-pointer"
        >
          <UserPlus className="w-4 h-4" /> Cadastrar Novo Usuário
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
                <th className="p-4">CPF / CNPJ</th>
                <th className="p-4">Cargo / Órgão</th>
                <th className="p-4">Perfil de Acesso</th>
                <th className="p-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {usuarios.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs shrink-0">
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
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${perfilBadges[user.perfil]}`}
                    >
                      {perfilLabels[user.perfil]}
                    </span>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    <button className="p-1.5 text-slate-600 hover:text-purple-600 hover:bg-slate-100 rounded-lg cursor-pointer">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    {perfilLogado === 'adm' ? (
                      <button
                        onClick={() => handleDelete(user.id, user.nome)}
                        className="p-1.5 text-slate-600 hover:text-red-600 hover:bg-slate-100 rounded-lg cursor-pointer"
                        title="Excluir Usuário"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        disabled
                        className="p-1.5 text-slate-300 opacity-50 cursor-not-allowed"
                        title="Apenas o Administrador pode deletar usuários"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
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
              Cadastrar Novo Usuário no Supabase Auth
            </h3>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Nome Completo / Razão Social</label>
              <input
                type="text"
                required
                placeholder="Ex: Carlos Eduardo ou Empresa Exemplo Ltda"
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
                placeholder="+55 65 99999-9999"
                value={novoUsuario.telefone_whatsapp}
                onChange={(e) => setNovoUsuario({ ...novoUsuario, telefone_whatsapp: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-purple-500 font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">CPF ou CNPJ</label>
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
              <label className="block text-xs font-semibold text-slate-700 mb-1">E-mail Institucional / Contato</label>
              <input
                type="email"
                required
                value={novoUsuario.email}
                onChange={(e) => setNovoUsuario({ ...novoUsuario, email: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* SELEÇÃO DO PERFIL DE ACESSO */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Perfil de Acesso</label>
              <select
                value={novoUsuario.perfil}
                onChange={(e) => setNovoUsuario({ ...novoUsuario, perfil: e.target.value as PerfilUsuario })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs bg-white focus:outline-none focus:border-purple-500 font-bold"
              >
                {perfilLogado === 'adm' && (
                  <>
                    <option value="adm">1. Administrador (Acesso Total)</option>
                    <option value="analista">2. Analista Ambiental (Gerencia Licenciamento)</option>
                  </>
                )}
                <option value="fiscal">3. Fiscal Ambiental (Vistorias & Autos)</option>
                <option value="empresario">4. Empresário / Requerente (Solicita Licenças)</option>
              </select>
              {perfilLogado === 'analista' && (
                <p className="text-[10px] text-emerald-600 font-medium mt-1">
                  ℹ️ Como Analista, você pode cadastrar Fiscais e Empresários.
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Cargo / Função</label>
              <input
                type="text"
                required
                placeholder="Ex: Fiscal de Campo ou Diretoria Industrial"
                value={novoUsuario.cargo}
                onChange={(e) => setNovoUsuario({ ...novoUsuario, cargo: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-xs font-semibold bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow-sm cursor-pointer"
              >
                Salvar Usuário
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
