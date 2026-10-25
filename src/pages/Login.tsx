import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Mail, 
  User, 
  KeyRound, 
  ArrowRight, 
  CheckCircle2, 
  Leaf,
  Clock,
  Key
} from 'lucide-react';

export interface LoginProps {
  onLogin?: (role: string) => void;
  diasLicenca?: number;
  setDiasLicenca?: React.Dispatch<React.SetStateAction<number>>;
  chaveLicenca?: string;
  setChaveLicenca?: React.Dispatch<React.SetStateAction<string>>;
}

export const Login: React.FC<LoginProps> = ({ 
  onLogin, 
  diasLicenca = 90, 
  chaveLicenca = "SYSMA-2026-LIC-90D-PREMIUM" 
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<'admin' | 'analyst' | 'user'>('admin');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (onLogin) onLogin(selectedRole);
    }, 600);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-0 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl overflow-hidden relative z-10">
        
        <div className="lg:col-span-5 bg-gradient-to-br from-emerald-800 to-teal-900 p-8 lg:p-10 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-60" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-inner">
                <Leaf className="w-8 h-8 text-emerald-300" />
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-wider text-white">SysMA</h1>
                <p className="text-xs text-emerald-200 font-medium">v5.0 • Licenciamento Ambiental</p>
              </div>
            </div>

            <div className="space-y-3 my-6">
              <h2 className="text-2xl font-extrabold leading-snug tracking-tight text-white">
                Gestão Ambiental Inteligente e Integrada
              </h2>
              <p className="text-emerald-100/80 text-xs leading-relaxed">
                Plataforma oficial para emissão de licenças (LP, LI, LO), fiscalização em campo, autos de infração e geoprocessamento municipal.
              </p>
            </div>
          </div>

          <div className="relative z-10 space-y-3 p-4 bg-black/20 backdrop-blur-md rounded-2xl border border-white/10">
            <div className="flex items-center justify-between text-xs text-emerald-200 font-semibold">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-400" />
                Status da Licença
              </span>
              <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-400/30">
                {diasLicenca} Dias Restantes
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-emerald-100/70 truncate">
              <Key className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span className="font-mono truncate">{chaveLicenca}</span>
            </div>
          </div>

          <div className="relative z-10 space-y-2 pt-4 border-t border-white/10 text-xs text-emerald-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>Autenticação rápida e permissões RLS Supabase</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>Auditoria técnica e logs imutáveis</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center bg-slate-900/90">
          <div className="max-w-md mx-auto w-full space-y-6">
            
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-white tracking-tight">Acessar Portal</h3>
              <p className="text-slate-400 text-xs">
                Selecione seu perfil de acesso e entre com suas credenciais.
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 tracking-wider uppercase">
                Perfil de Acesso
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'admin', label: 'Administrador', icon: ShieldCheck },
                  { id: 'analyst', label: 'Analista', icon: User },
                  { id: 'user', label: 'Requerente', icon: KeyRound },
                ].map((role) => {
                  const Icon = role.icon;
                  const isSelected = selectedRole === role.id;
                  return (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => setSelectedRole(role.id as any)}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-lg shadow-emerald-500/10'
                          : 'bg-slate-800/50 border-slate-700/60 text-slate-400 hover:border-slate-600 hover:text-slate-200'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-1 ${isSelected ? 'text-emerald-400' : 'text-slate-400'}`} />
                      {role.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">E-mail Corporativo</label>
                <div className="relative">
                  <Mail className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="usuario@semma.gov.br"
                    className="w-full bg-slate-800/80 border border-slate-700 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-300">Senha de Acesso</label>
                  <a href="#" className="text-xs text-emerald-400 hover:underline">
                    Esqueceu a senha?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-800/80 border border-slate-700 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2 transition-all active:scale-[0.99] disabled:opacity-70 mt-2"
              >
                {loading ? (
                  <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    Entrar no SysMA
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="pt-4 border-t border-slate-800 text-center text-xs text-slate-500">
              Secretaria Municipal de Meio Ambiente • Desenvolvido por <span className="text-slate-400 font-medium">Zentix Tecnologia</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;