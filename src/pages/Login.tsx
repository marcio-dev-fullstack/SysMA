import React, { useState } from 'react';
import { ShieldCheck, Lock, User, ArrowRight, TreePine } from 'lucide-react';

interface LoginProps {
  onLoginSuccess?: (perfil: string) => void;
}

export const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrar, setLembrar] = useState(true);
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCarregando(true);

    setTimeout(() => {
      setCarregando(false);
      if (onLoginSuccess) {
        onLoginSuccess('adm');
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#070b12] flex items-center justify-center p-4 font-sans text-slate-100">
      <div className="w-full max-w-md bg-[#0d1424] border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        {/* Logo e Título */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl mb-3 shadow-inner">
            <TreePine className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">SisMA</h1>
          <p className="text-xs text-slate-400 mt-1">Sistema Municipal de Meio Ambiente</p>
        </div>

        {/* Formulário de Login */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Campo Login */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Login
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Informe seu login"
                className="w-full bg-[#05080f] border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
              />
            </div>
          </div>

          {/* Campo Senha */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-medium text-slate-300">
                Senha de Acesso
              </label>
              <a href="#esqueceu" className="text-xs text-emerald-400 hover:underline">
                Esqueceu a senha?
              </a>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#05080f] border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
              />
            </div>
          </div>

          {/* Opção Lembrar */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="lembrar"
              checked={lembrar}
              onChange={(e) => setLembrar(e.target.checked)}
              className="w-4 h-4 rounded border-slate-800 bg-[#05080f] text-emerald-500 focus:ring-emerald-500 focus:ring-offset-0"
            />
            <label htmlFor="lembrar" className="text-xs text-slate-400 select-none cursor-pointer">
              Lembrar minhas credenciais
            </label>
          </div>

          {/* Botão Entrar */}
          <button
            type="submit"
            disabled={carregando}
            className="w-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-medium py-2.5 rounded-xl transition-all shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 text-sm disabled:opacity-50"
          >
            {carregando ? (
              <span>Acessando...</span>
            ) : (
              <>
                <span>Entrar no Sistema</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Rodapé do Card */}
        <div className="flex items-center justify-between text-xs text-slate-400 pt-6 mt-6 border-t border-slate-800/80">
          <a
            href="https://zentix.eng.br"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>https://zentix.eng.br</span>
          </a>
          <span className="text-slate-500">Versão 1.0</span>
        </div>
      </div>
    </div>
  );
};

export default Login;