import React, { useState } from 'react';
import { 
  TreePine, 
  Lock, 
  User, 
  LogIn, 
  ShieldCheck, 
  AlertTriangle 
} from 'lucide-react';
import { Usuario } from '../types';

interface LoginProps {
  onLogin: (usuario: Usuario) => void;
  diasLicenca: number;
  setDiasLicenca?: (dias: number) => void;
  chaveLicenca?: string;
  setChaveLicenca?: (chave: string) => void;
}

export const LISTA_USUARIOS: Usuario[] = [
  {
    id: 'usr-adm-01',
    nome: 'zentix',
    email: 'cda.marcio@gmail.com',
    cpf: 'zentix',
    perfil: 'adm',
    cargo: 'Administrador',
    orgao: 'SEMMA',
    avatar: 'Z',
    telefone_whatsapp: '+55 65 9231-2739',
  },
  {
    id: 'usr-ana-01',
    nome: 'ailton.bartolomeu',
    email: 'cda.marcio@gmail.com',
    cpf: 'ailton.bartolomeu',
    perfil: 'analista',
    cargo: 'Analista Ambiental Sênior',
    orgao: 'Coordenadoria de Licenciamento',
    avatar: 'A',
    telefone_whatsapp: '+55 94 9113-9883',
  },
  {
    id: 'usr-ana-02',
    nome: 'fernanda.baccaro',
    email: 'cda.marcio@gmail.com',
    cpf: 'fernanda.baccaro',
    perfil: 'analista',
    cargo: 'Analista Ambiental Sênior',
    orgao: 'Coordenadoria de Licenciamento',
    avatar: 'F',
    telefone_whatsapp: '+55 94 9305-1234',
  },
  {
    id: 'usr-ana-03',
    nome: 'flavio.watanabe',
    email: 'cda.marcio@gmail.com',
    cpf: 'flavio.watanabe',
    perfil: 'analista',
    cargo: 'Analista Ambiental Sênior',
    orgao: 'Coordenadoria de Licenciamento',
    avatar: 'F',
    telefone_whatsapp: '+55 94 9182-8854',
  },
  {
    id: 'usr-fisc-01',
    nome: 'policia',
    email: 'cda.marcio@gmail.com',
    cpf: 'policia',
    perfil: 'fiscal',
    cargo: 'Fiscal Ambiental',
    orgao: 'Divisão de Fiscalização',
    avatar: 'P',
    telefone_whatsapp: '+55 65 98888-1234',
  },
  {
    id: 'usr-emp-01',
    nome: 'Zentix Projetos e Engenharia',
    email: 'cda.marcio@gmail.com',
    cpf: '12.345.678/0001-90',
    perfil: 'empresario',
    cargo: 'Requerente / Empresário',
    orgao: 'Zentix Projetos e Engenharia',
    avatar: 'Z',
    telefone_whatsapp: '+55 65 97777-5555',
  },
];

export const Login: React.FC<LoginProps> = ({
  onLogin,
  diasLicenca
}) => {
  const [loginInput, setLoginInput] = useState('zentix');
  const [senha, setSenha] = useState('12345678');
  const [lembrar, setLembrar] = useState(true);
  const [modalBloqueado, setModalBloqueado] = useState(false);
  const [erroForm, setErroForm] = useState('');

  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInput(e.target.value);
    setErroForm('');
  };

  const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^a-zA-Z0-9]/g, '');
    if (value.length > 8) value = value.slice(0, 8);
    setSenha(value);
    setErroForm('');
  };

  const handleEntrar = (e: React.FormEvent) => {
    e.preventDefault();

    if (!loginInput.trim()) {
      setErroForm('Por favor, informe o login ou CPF do servidor.');
      return;
    }

    if (!senha) {
      setErroForm('Por favor, informe a senha de acesso.');
      return;
    }

    if (senha.length < 8) {
      setErroForm('A senha deve conter exatamente 8 dígitos alfanuméricos.');
      return;
    }

    // Busca usuário cadastrado por CPF/CNPJ ou Nome/Login
    const termoLower = loginInput.trim().toLowerCase();
    const cleanDigits = loginInput.replace(/\D/g, '');

    let usuarioEncontrado = LISTA_USUARIOS.find((u) => {
      const uCpfDigits = (u.cpf || '').replace(/\D/g, '');
      const uNomeLower = u.nome.toLowerCase();
      const uCpfLower = (u.cpf || '').toLowerCase();
      return (
        (cleanDigits && cleanDigits.length >= 8 && uCpfDigits.length >= 8 && uCpfDigits.includes(cleanDigits)) ||
        uNomeLower === termoLower ||
        uCpfLower === termoLower ||
        uNomeLower.includes(termoLower) ||
        termoLower.includes(uNomeLower)
      );
    });

    if (!usuarioEncontrado) {
      if (termoLower.includes('zentix')) {
        usuarioEncontrado = LISTA_USUARIOS.find((u) => u.perfil === 'adm' || u.nome.toLowerCase().includes('zentix'));
      } else if (termoLower.includes('ailton')) {
        usuarioEncontrado = LISTA_USUARIOS.find((u) => u.nome.includes('ailton'));
      } else if (termoLower.includes('fernanda')) {
        usuarioEncontrado = LISTA_USUARIOS.find((u) => u.nome.includes('fernanda'));
      } else if (termoLower.includes('flavio') || termoLower.includes('flávio')) {
        usuarioEncontrado = LISTA_USUARIOS.find((u) => u.nome.includes('flavio'));
      } else if (termoLower.includes('policia') || termoLower.includes('polícia')) {
        usuarioEncontrado = LISTA_USUARIOS.find((u) => u.perfil === 'fiscal');
      } else if (termoLower.includes('engenharia') || termoLower.includes('empresa')) {
        usuarioEncontrado = LISTA_USUARIOS.find((u) => u.perfil === 'empresario');
      } else {
        usuarioEncontrado = LISTA_USUARIOS[0];
      }
    }

    if (!usuarioEncontrado) {
      usuarioEncontrado = LISTA_USUARIOS[0];
    }

    // Regra de Bloqueio no Dia 0 para não-ADM
    if (diasLicenca <= 0 && usuarioEncontrado.perfil !== 'adm') {
      setModalBloqueado(true);
      return;
    }

    onLogin(usuarioEncontrado);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-4 relative overflow-hidden font-sans">
      {/* Elementos de fundo com efeito blur */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Card Principal de Login */}
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative z-10 space-y-6">
        
        {/* Cabeçalho da Marca */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 text-slate-950 font-black shadow-lg shadow-emerald-500/20 mb-2">
            <TreePine className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">SisMA</h1>
          <p className="text-xs text-slate-400 font-medium">
            Sistema Municipal de Meio Ambiente
          </p>
        </div>

        {/* Formulário de Login (CPF e Senha) */}
        <form onSubmit={handleEntrar} className="space-y-4">
          
          {erroForm && (
            <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-400 text-xs font-semibold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{erroForm}</span>
            </div>
          )}

          {/* Campo Login / CPF */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-300">
              Login ou CPF/CNPJ
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={loginInput}
                onChange={handleLoginInputChange}
                placeholder="zentix, policia ou ailton.bartolomeu"
                className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-sm font-medium text-white placeholder-slate-600 focus:outline-none transition-all font-mono"
                required
              />
            </div>
          </div>

          {/* Campo Senha */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-slate-300">
                Senha de Acesso
              </label>
              <a href="#esqueci" onClick={(e) => { e.preventDefault(); alert('Contate o Administrador zentix (+55 65 9231-2739) para redefinir sua senha.'); }} className="text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
                Esqueceu a senha?
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type="password"
                value={senha}
                onChange={handleSenhaChange}
                placeholder="••••••••"
                maxLength={8}
                className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-sm font-medium text-white placeholder-slate-600 focus:outline-none transition-all font-mono tracking-widest"
                required
              />
            </div>
            <p className="text-[11px] text-slate-400 font-medium flex items-center gap-1 mt-1">
              ℹ️ A senha de acesso possui <strong>8 dígitos alfanuméricos</strong>.
            </p>
          </div>

          {/* Lembrar Acesso */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-400">
              <input
                type="checkbox"
                checked={lembrar}
                onChange={(e) => setLembrar(e.target.checked)}
                className="w-4 h-4 rounded bg-slate-950 border-slate-800 text-emerald-600 focus:ring-emerald-500 focus:ring-offset-slate-900"
              />
              <span>Lembrar minhas credenciais</span>
            </label>
          </div>

          {/* Botão de Submit */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <LogIn className="w-4 h-4" />
            <span>Entrar no Sistema</span>
          </button>
        </form>

        {/* Rodapé do Card */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-medium">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Acesso Seguro SSL</span>
          </div>
          <span>Versão 25.0 (4 Perfis RBAC)</span>
        </div>
      </div>

      {/* Modal de Alerta de Licença Expirada (Bloqueio Dia 0) */}
      {modalBloqueado && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-rose-500/30 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="w-12 h-12 bg-rose-500/10 text-rose-500 rounded-2xl flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-lg font-bold text-white">Licença do Sistema Expirada</h3>
              <p className="text-xs text-slate-400">
                O prazo de validade do SisMA expirou. Entre em contato com o Administrador zentix (+55 65 9231-2739) para renovação.
              </p>
            </div>
            <button
              onClick={() => setModalBloqueado(false)}
              className="w-full py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-xl transition-all cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
