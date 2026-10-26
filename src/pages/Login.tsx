import React, { useState } from 'react';
import { 
  TreePine, 
  Lock, 
  User, 
  LogIn, 
  ShieldCheck, 
  AlertTriangle 
} from 'lucide-react';
import { PerfilUsuario, Usuario } from '../types';

interface LoginProps {
  onLogin: (usuario: Usuario) => void;
  diasLicenca: number;
  setDiasLicenca: (dias: number) => void;
  chaveLicenca: string;
  setChaveLicenca: (chave: string) => void;
}

export const usuariosExemplo: Record<PerfilUsuario, Usuario> = {
  adm: {
    id: 'usr-adm-01',
    nome: 'Carlos Eduardo Mendes',
    email: 'admin@semma.gov.br',
    perfil: 'adm',
    cargo: 'Administrador do Sistema & Secretário',
    orgao: 'Secretaria Municipal de Meio Ambiente',
    avatar: 'ADM',
    telefone_whatsapp: '+55 (11) 98765-4321',
  },
  analista: {
    id: 'usr-ana-02',
    nome: 'Dra. Mariana Fonseca',
    email: 'mariana.analista@semma.gov.br',
    perfil: 'analista',
    cargo: 'Analista Ambiental Sênior',
    orgao: 'Coordenadoria de Licenciamento',
    avatar: 'ANA',
    telefone_whatsapp: '+55 (11) 99876-5432',
  },
  fiscal: {
    id: 'usr-fisc-03',
    nome: 'Sgt. Roberto Alves',
    email: 'roberto.fiscal@semma.gov.br',
    perfil: 'fiscal',
    cargo: 'Fiscal Ambiental Chefe de Campo',
    orgao: 'Divisão de Fiscalização e Monitoramento',
    avatar: 'FISC',
    telefone_whatsapp: '+55 (11) 97654-3210',
  },
};

export const Login: React.FC<LoginProps> = ({
  onLogin,
  diasLicenca,
  setDiasLicenca,
  chaveLicenca,
  setChaveLicenca
}) => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrar, setLembrar] = useState(true);
  const [modalBloqueado, setModalBloqueado] = useState(false);
  const [erroForm, setErroForm] = useState('');

  // Formata CPF conforme o usuário digita (máscara 000.000.000-00)
  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 9) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    } else if (value.length > 6) {
      value = value.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else if (value.length > 3) {
      value = value.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    }
    
    setCpf(value);
    setErroForm('');
  };

  // Máscara e restrição da Senha: Alfanumérica de até 8 caracteres (A-Z, a-z, 0-9)
  const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^a-zA-Z0-9]/g, '');
    if (value.length > 8) value = value.slice(0, 8);
    setSenha(value);
    setErroForm('');
  };

  const handleEntrar = (e: React.FormEvent) => {
    e.preventDefault();

    if (!cpf || cpf.length < 11) {
      setErroForm('Por favor, informe um CPF válido com 11 dígitos.');
      return;
    }

    if (!senha) {
      setErroForm('Por favor, informe a senha de acesso.');
      return;
    }

    if (senha.length < 8) {
      setErroForm('A senha deve ser alfanumérica e conter exatamente 8 caracteres.');
      return;
    }

    // Regra de Bloqueio no Dia 0 se necessário
    if (diasLicenca <= 0) {
      setModalBloqueado(true);
      return;
    }

    // Efetua login como Administrador por padrão
    onLogin(usuariosExemplo.adm);
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

          {/* Campo CPF */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-300">
              CPF do Servidor
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={cpf}
                onChange={handleCpfChange}
                placeholder="000.000.000-00"
                maxLength={14}
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
              <a href="#esqueci" onClick={(e) => { e.preventDefault(); alert('Contate o Administrador do SisMA para redefinir sua senha.'); }} className="text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
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
                placeholder="Ex: A1b2C3d4"
                maxLength={8}
                className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-sm font-medium text-white placeholder-slate-600 focus:outline-none transition-all font-mono tracking-widest"
                required
              />
            </div>
            <p className="text-[11px] text-slate-400 font-medium flex items-center gap-1 mt-1">
              ℹ️ A senha deve ser alfanumérica e conter exatamente <strong>8 dígitos</strong>.
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
          <span>Versão 2.0</span>
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
                O prazo de validade de 90 dias do SisMA expirou. Entre em contato com o Administrador para renovação.
              </p>
            </div>
            <button
              onClick={() => setModalBloqueado(false)}
              className="w-full py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-xl transition-all"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
