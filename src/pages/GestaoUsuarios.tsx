import React, { useState } from 'react';
import {
  Users,
  UserPlus,
  Search,
  Pencil,
  Trash2,
  Shield,
  Phone,
  X
} from 'lucide-react';

interface Usuario {
  id: string;
  nome: string;
  email: string;
  cpf: string;
  perfil: 'adm' | 'analista' | 'fiscal' | 'empresario';
  cargo: string;
  orgao: string;
  telefone_whatsapp: string;
}

const USUARIOS_INICIAIS: Usuario[] = [
  {
    id: 'usr-adm-01',
    nome: 'MÁRCIO RODRIGUES DE OLIVEIRA',
    email: 'cda.marcio@gmail.com',
    cpf: '633.740.302-97',
    perfil: 'adm',
    cargo: 'Administrador',
    orgao: 'SEMMA',
    telefone_whatsapp: '+55 65 9231-2739'
  },
  {
    id: 'usr-ana-01',
    nome: 'Ailton Bartolomeu',
    email: 'cda.marcio@gmail.com',
    cpf: '111.949.113-98',
    perfil: 'analista',
    cargo: 'Analista Ambiental Sênior',
    orgao: 'Coordenadoria de Licenciamento',
    telefone_whatsapp: '+55 65 9113-9883'
  },
  {
    id: 'usr-ana-02',
    nome: 'Fernanda Baccaro',
    email: 'cda.marcio@gmail.com',
    cpf: '222.949.305-12',
    perfil: 'analista',
    cargo: 'Analista Ambiental Sênior',
    orgao: 'Coordenadoria de Licenciamento',
    telefone_whatsapp: '+55 65 94 9305-1234'
  },
  {
    id: 'usr-ana-03',
    nome: 'Flávio Watanabe',
    email: 'cda.marcio@gmail.com',
    cpf: '333.949.182-88',
    perfil: 'analista',
    cargo: 'Analista Ambiental Sênior',
    orgao: 'Coordenadoria de Licenciamento',
    telefone_whatsapp: '+55 65 94 9182-8854'
  },
  {
    id: 'usr-fis-01',
    nome: 'Sgt. Roberto Alves',
    email: 'roberto.fiscal@semma.gov.br',
    cpf: '456.789.123-22',
    perfil: 'fiscal',
    cargo: 'Fiscal Ambiental Chefe de Campo',
    orgao: 'Divisão de Fiscalização e Monitoramento',
    telefone_whatsapp: '+55 65 98888-1234'
  },
  {
    id: 'usr-emp-01',
    nome: 'Indústria Metalúrgica do Vale S.A.',
    email: 'contato@metalurgicavale.com.br',
    cpf: '12.345.678/0001-90',
    perfil: 'empresario',
    cargo: 'Requerente / Diretor Industrial',
    orgao: 'Setor Privado / Empreendedor',
    telefone_whatsapp: '+55 65 97777-5555'
  }
];

export const GestaoUsuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>(USUARIOS_INICIAIS);
  const [busca, setBusca] = useState('');
  const [modalAberto, setModalAberto] = useState(false);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [usuarioAtual, setUsuarioAtual] = useState<Usuario>({
    id: '',
    nome: '',
    email: '',
    cpf: '',
    perfil: 'fiscal',
    cargo: '',
    orgao: '',
    telefone_whatsapp: ''
  });

  const usuariosFiltrados = usuarios.filter(
    (u) =>
      u.nome.toLowerCase().includes(busca.toLowerCase()) ||
      u.email.toLowerCase().includes(busca.toLowerCase()) ||
      u.cpf.includes(busca)
  );

  const abrirNovoUsuario = () => {
    setModoEdicao(false);
    setUsuarioAtual({
      id: `usr-${Date.now()}`,
      nome: '',
      email: '',
      cpf: '',
      perfil: 'fiscal',
      cargo: '',
      orgao: '',
      telefone_whatsapp: ''
    });
    setModalAberto(true);
  };

  const abrirEdicaoUsuario = (usuario: Usuario) => {
    setModoEdicao(true);
    setUsuarioAtual({ ...usuario });
    setModalAberto(true);
  };

  const salvarUsuario = (e: React.FormEvent) => {
    e.preventDefault();
    if (modoEdicao) {
      setUsuarios(usuarios.map((u) => (u.id === usuarioAtual.id ? usuarioAtual : u)));
    } else {
      setUsuarios([usuarioAtual, ...usuarios]);
    }
    setModalAberto(false);
  };

  const excluirUsuario = (id: string) => {
    if (window.confirm('Tem certeza que deseja remover este usuário do sistema?')) {
      setUsuarios(usuarios.filter((u) => u.id !== id));
    }
  };

  const getBadgePerfil = (perfil: Usuario['perfil']) => {
    switch (perfil) {
      case 'adm':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-700">
            ADMINISTRADOR
          </span>
        );
      case 'analista':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
            ANALISTA
          </span>
        );
      case 'fiscal':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
            FISCAL
          </span>
        );
      case 'empresario':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
            EMPRESÁRIO
          </span>
        );
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
            <Users className="w-5 h-5" />
            <span>Usuários do Sistema</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-800">
            Gestão de Servidores & Controle de Acesso (RBAC)
          </h1>
          <p className="text-slate-500 text-sm">
            Atribuição de papéis (ADM, Analista, Fiscal, Empresário) e integração com Supabase Auth & RLS.
          </p>
        </div>

        <button
          onClick={abrirNovoUsuario}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl shadow-sm transition-all text-sm"
        >
          <UserPlus className="w-4 h-4" />
          <span>Cadastrar Novo Usuário</span>
        </button>
      </div>

      {/* Tabela de Usuários */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por nome, e-mail, CPF..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <span className="text-sm text-slate-500 font-medium">
            {usuariosFiltrados.length} Usuários Cadastrados
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-4">Servidor / E-mail</th>
                <th className="py-3 px-4">WhatsApp</th>
                <th className="py-3 px-4">CPF / CNPJ</th>
                <th className="py-3 px-4">Cargo / Órgão</th>
                <th className="py-3 px-4">Perfil de Acesso</th>
                <th className="py-3 px-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {usuariosFiltrados.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                        {u.nome.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800">{u.nome}</div>
                        <div className="text-xs text-slate-500">{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{u.telefone_whatsapp}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-slate-600 font-mono text-xs">{u.cpf}</td>
                  <td className="py-3 px-4">
                    <div className="font-medium text-slate-800">{u.cargo}</div>
                    <div className="text-xs text-slate-500">{u.orgao}</div>
                  </td>
                  <td className="py-3 px-4">{getBadgePerfil(u.perfil)}</td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => abrirEdicaoUsuario(u)}
                        className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                        title="Editar Usuário"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => excluirUsuario(u.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                        title="Excluir Usuário"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal de Cadastro / Edição */}
      {modalAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full overflow-hidden border border-slate-100">
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-800">
                {modoEdicao ? 'Editar Dados do Usuário' : 'Cadastrar Novo Usuário'}
              </h3>
              <button
                onClick={() => setModalAberto(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={salvarUsuario} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  value={usuarioAtual.nome}
                  onChange={(e) => setUsuarioAtual({ ...usuarioAtual, nome: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Ex: Maria da Silva"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    required
                    value={usuarioAtual.email}
                    onChange={(e) => setUsuarioAtual({ ...usuarioAtual, email: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="email@semma.gov.br"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                    CPF / CNPJ
                  </label>
                  <input
                    type="text"
                    required
                    value={usuarioAtual.cpf}
                    onChange={(e) => setUsuarioAtual({ ...usuarioAtual, cpf: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="000.000.000-00"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                    Cargo
                  </label>
                  <input
                    type="text"
                    required
                    value={usuarioAtual.cargo}
                    onChange={(e) => setUsuarioAtual({ ...usuarioAtual, cargo: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Ex: Fiscal Ambiental"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                    Órgão / Setor
                  </label>
                  <input
                    type="text"
                    required
                    value={usuarioAtual.orgao}
                    onChange={(e) => setUsuarioAtual({ ...usuarioAtual, orgao: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Ex: Secretaria de Meio Ambiente"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                    WhatsApp / Telefone
                  </label>
                  <input
                    type="text"
                    required
                    value={usuarioAtual.telefone_whatsapp}
                    onChange={(e) =>
                      setUsuarioAtual({ ...usuarioAtual, telefone_whatsapp: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="+55 65 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                    Perfil RBAC
                  </label>
                  <select
                    value={usuarioAtual.perfil}
                    onChange={(e) =>
                      setUsuarioAtual({
                        ...usuarioAtual,
                        perfil: e.target.value as Usuario['perfil']
                      })
                    }
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="adm">Administrador (adm)</option>
                    <option value="analista">Analista Ambiental (analista)</option>
                    <option value="fiscal">Fiscal de Campo (fiscal)</option>
                    <option value="empresario">Empresário / Requerente (empresario)</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setModalAberto(false)}
                  className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium shadow-sm transition-all"
                >
                  {modoEdicao ? 'Salvar Alterações' : 'Concluir Cadastro'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GestaoUsuarios;