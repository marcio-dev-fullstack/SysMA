import React, { useState } from 'react';
import { 
  TreePine, 
  ShieldCheck, 
  FileCheck2, 
  ClipboardCheck, 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert, 
  Lock,
  Building2,
  Sparkles,
  KeyRound,
  Clock,
  AlertTriangle,
  Send,
  MessageSquare,
  RefreshCw,
  Phone,
  Ban
} from 'lucide-react';
import { PerfilUsuario, Usuario, LicencaSistema } from '../types';

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
  const [perfilSelecionado, setPerfilSelecionado] = useState<PerfilUsuario>('adm');
  const [senha, setSenha] = useState('******');
  const [lembrar, setLembrar] = useState(true);
  const [modalBloqueado, setModalBloqueado] = useState(false);
  const [modalWhatsappLog, setModalWhatsappLog] = useState(false);

  const handleEntrar = (e: React.FormEvent) => {
    e.preventDefault();

    // Regra de Bloqueio: Se a licença expirou (0 dias), bloqueia todos EXCETO ADM
    if (diasLicenca <= 0 && perfilSelecionado !== 'adm') {
      setModalBloqueado(true);
      return;
    }

    onLogin(usuariosExemplo[perfilSelecionado]);
  };

  const perfis = [
    {
      id: 'adm' as PerfilUsuario,
      numero: '1',
      titulo: 'Administrador (ADM)',
      subtitulo: 'Gestão Geral & Governança',
      descricao: 'Acesso irrestrito a todos os módulos, configurações do sistema, renovação de licença e logs de auditoria imutáveis.',
      icone: ShieldAlert,
      corBorda: 'border-purple-500',
      corBgIcone: 'bg-purple-100 text-purple-700',
      corBadge: 'bg-purple-100 text-purple-800 border-purple-200',
      recursos: ['Acesso Exclusivo em Licença Expirada', 'Gestão & Renovação da Chave', 'Auditoria & Logs em Tempo Real', 'Gestão de Usuários & RLS Supabase'],
    },
    {
      id: 'analista' as PerfilUsuario,
      numero: '2',
      titulo: 'Analista Ambiental',
      subtitulo: 'Licenciamento & Análise Técnica',
      descricao: 'Focado no trâmite de Licenças Ambientais (LP, LI, LO, LAS), emissão de pareceres, verificação de condicionantes e WebGIS.',
      icone: FileCheck2,
      corBorda: 'border-emerald-500',
      corBgIcone: 'bg-emerald-100 text-emerald-700',
      corBadge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      recursos: ['Análise de Licenças LP/LI/LO/LAS', 'Emissão de Pareceres Técnicos', 'Consulta de Sobreposição no WebGIS', 'Atendimento de Denúncias'],
    },
    {
      id: 'fiscal' as PerfilUsuario,
      numero: '3',
      titulo: 'Fiscal Ambiental',
      subtitulo: 'Fiscalização & Operações de Campo',
      descricao: 'Especializado em vistorias de campo, lavratura de Autos de Infração, notificações, apreensões e geolocalização com fotos.',
      icone: ClipboardCheck,
      corBorda: 'border-amber-500',
      corBgIcone: 'bg-amber-100 text-amber-700',
      corBadge: 'bg-amber-100 text-amber-800 border-amber-200',
      recursos: ['Emissão de Autos de Infração', 'Ordens de Vistoria de Campo', 'Triagem de Denúncias Comunitárias', 'Mapeamento de Campo no WebGIS'],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Elementos visuais de fundo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Cabeçalho */}
      <header className="p-4 md:px-12 flex flex-wrap items-center justify-between z-10 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md gap-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 text-slate-950 flex items-center justify-center font-black text-2xl shadow-lg shadow-emerald-500/20">
            <TreePine className="w-6 h-6 text-slate-950" />
          </div>
          <div>
            <h1 className="font-extrabold text-white text-xl tracking-tight flex items-center gap-2">
              SisMA <span className="text-xs px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 font-medium border border-emerald-500/30">v5.0</span>
            </h1>
            <p className="text-xs text-slate-400">Sistema Municipal de Meio Ambiente</p>
          </div>
        </div>

        {/* Status Rápido da Licença no Cabeçalho */}
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border ${
            diasLicenca <= 0
              ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse'
              : diasLicenca <= 5
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
              : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
          }`}>
            <Clock className="w-3.5 h-3.5" />
            <span>Licença: <strong>{diasLicenca} dias restantes</strong></span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 border border-slate-800 rounded-full px-3 py-1.5 bg-slate-900/60">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Autenticação Supabase Auth</span>
          </div>
        </div>
      </header>

      {/* BANNER DE AVISO: Licença perto do vencimento (<= 5 dias) */}
      {diasLicenca <= 5 && (
        <div className={`z-20 px-6 py-3 border-b text-xs md:text-sm font-medium flex flex-wrap items-center justify-between gap-3 ${
          diasLicenca <= 0
            ? 'bg-rose-950/90 border-rose-800 text-rose-200'
            : 'bg-amber-950/90 border-amber-800 text-amber-200'
        }`}>
          <div className="flex items-center gap-2.5 max-w-4xl">
            {diasLicenca <= 0 ? (
              <Ban className="w-5 h-5 text-rose-400 shrink-0" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 animate-bounce" />
            )}
            <div>
              {diasLicenca <= 0 ? (
                <span>
                  <strong>LICENÇA EXPIRADA (0 DIAS):</strong> O acesso foi suspenso para Analistas e Fiscais. Apenas o <strong>Administrador (ADM)</strong> possui autorização para logar e renovar a chave de licença.
                </span>
              ) : (
                <span>
                  <strong>AVISO DE LICENÇAMETO (FALTAM {diasLicenca} DIAS):</strong> A licença do SisMA expira em <strong>{diasLicenca} dia(s)</strong>. Avisos diários via WhatsApp foram disparados para os servidores cadastrados.
                </span>
              )}
            </div>
          </div>

          <button
            onClick={() => setModalWhatsappLog(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ver Alertas WhatsApp ({diasLicenca}d ao 0d)</span>
          </button>
        </div>
      )}

      {/* Conteúdo Principal / Seleção de Perfil */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8 flex flex-col justify-center z-10 my-2">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Acesso ao Portal do Servidor</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Selecione seu Perfil de Acesso
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Escolha um dos 3 perfis autorizados para acessar o SisMA.
          </p>
        </div>

        {/* Grade com os 3 Perfis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {perfis.map((p) => {
            const Icone = p.icone;
            const isSelected = perfilSelecionado === p.id;
            const isBlockedProfile = diasLicenca <= 0 && p.id !== 'adm';

            return (
              <div
                key={p.id}
                onClick={() => setPerfilSelecionado(p.id)}
                className={`relative group cursor-pointer rounded-2xl p-6 transition-all duration-300 border ${
                  isBlockedProfile
                    ? 'border-rose-900/60 bg-rose-950/20 opacity-80'
                    : isSelected
                    ? `${p.corBorda} bg-slate-900/90 shadow-2xl shadow-emerald-950/50 ring-2 ring-emerald-500/50 scale-[1.02]`
                    : 'border-slate-800 bg-slate-900/40 hover:bg-slate-900/70 hover:border-slate-700'
                }`}
              >
                {/* Badge de Bloqueio em caso de licença expirada */}
                {isBlockedProfile && (
                  <div className="absolute top-3 right-3 bg-rose-500/20 text-rose-400 text-[10px] font-extrabold px-2 py-0.5 rounded border border-rose-500/40 flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    <span>Bloqueado (Licença 0d)</span>
                  </div>
                )}

                {/* Badge do Número do Perfil */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-extrabold px-2.5 py-1 rounded-md border ${p.corBadge}`}>
                    PERFIL {p.numero}
                  </span>
                  {isSelected && !isBlockedProfile ? (
                    <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-md">
                      <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                    </span>
                  ) : (
                    <span className="w-6 h-6 rounded-full border border-slate-700 group-hover:border-slate-500 transition-colors"></span>
                  )}
                </div>

                {/* Ícone e Título */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-3 rounded-xl ${p.corBgIcone}`}>
                    <Icone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg group-hover:text-emerald-400 transition-colors">
                      {p.titulo}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">{p.subtitulo}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4 min-h-[44px]">
                  {p.descricao}
                </p>

                {/* Telefone WhatsApp Cadastrado */}
                <div className="mb-4 py-1.5 px-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] flex items-center gap-2 text-slate-400">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">WhatsApp: <strong className="text-slate-200">{usuariosExemplo[p.id].telefone_whatsapp}</strong></span>
                </div>

                {/* Lista de Recursos */}
                <div className="space-y-2 pt-3 border-t border-slate-800/80">
                  {p.recursos.map((rec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-400">
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-emerald-400' : 'text-slate-600'}`} />
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Card do Formulário de Confirmação e Entrar */}
        <div className="max-w-xl mx-auto w-full bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-7 backdrop-blur-md shadow-2xl">
          <form onSubmit={handleEntrar} className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                {usuariosExemplo[perfilSelecionado].avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-400 font-medium">Usuário Selecionado:</p>
                <p className="text-sm font-bold text-white truncate">
                  {usuariosExemplo[perfilSelecionado].nome}
                </p>
                <p className="text-xs text-emerald-400 truncate">
                  {usuariosExemplo[perfilSelecionado].email}
                </p>
              </div>
              {diasLicenca <= 0 && perfilSelecionado !== 'adm' && (
                <span className="text-[10px] bg-rose-500/20 text-rose-300 border border-rose-500/40 px-2 py-1 rounded font-bold">
                  Entrada Bloqueada
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">
                  E-mail do Servidor
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="email"
                    readOnly
                    value={usuariosExemplo[perfilSelecionado].email}
                    className="w-full pl-9 pr-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-300 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">
                  Senha
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-300 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-400">
                <input
                  type="checkbox"
                  checked={lembrar}
                  onChange={(e) => setLembrar(e.target.checked)}
                  className="rounded bg-slate-950 border-slate-800 text-emerald-500 focus:ring-emerald-500/20"
                />
                <span>Lembrar minhas credenciais</span>
              </label>
              <span className="text-[11px] text-emerald-400 font-medium">Ambiente de Demonstração</span>
            </div>

            <button
              type="submit"
              className={`w-full py-3.5 px-6 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.99] cursor-pointer ${
                diasLicenca <= 0 && perfilSelecionado !== 'adm'
                  ? 'bg-rose-900/60 text-rose-300 border border-rose-700 hover:bg-rose-900'
                  : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 shadow-emerald-500/25'
              }`}
            >
              {diasLicenca <= 0 && perfilSelecionado !== 'adm' ? (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Acesso Bloqueado (Licença Expirada)</span>
                </>
              ) : (
                <>
                  <span>Entrar no SisMA como {perfis.find(p => p.id === perfilSelecionado)?.titulo}</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* ========================================================================= */}
        {/* BARRA DE LICENÇA DO SISTEMA (PAINEL DE CONTROLE DE VALIDADE NO RODA PÉ) */}
        {/* ========================================================================= */}
        <div className="mt-10 max-w-5xl mx-auto w-full bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-emerald-400" />
                <h3 className="font-extrabold text-white text-base">Chave de Licença de Uso do SisMA</h3>
                <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded border uppercase ${
                  diasLicenca <= 0
                    ? 'bg-rose-500/20 text-rose-400 border-rose-500/40'
                    : diasLicenca <= 5
                    ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                    : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                }`}>
                  {diasLicenca <= 0 ? 'Expirada (0d)' : diasLicenca <= 5 ? 'Vencimento Próximo' : 'Licença Ativa'}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                CHAVE: <strong className="text-slate-200">{chaveLicenca}</strong>
              </p>
            </div>

            {/* Contador de Dias / Relógio em Contagem Regressiva */}
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex items-center gap-4">
              <div className={`p-2.5 rounded-lg ${
                diasLicenca <= 0 ? 'bg-rose-500/20 text-rose-400' : diasLicenca <= 5 ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'
              }`}>
                <Clock className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Validade da Licença</p>
                <p className={`text-xl font-black ${
                  diasLicenca <= 0 ? 'text-rose-400' : diasLicenca <= 5 ? 'text-amber-400' : 'text-emerald-400'
                }`}>
                  {diasLicenca} DIAS RESTANTES
                </p>
              </div>
            </div>
          </div>

          {/* Simulador de Vencimento e Notificações (Barra de Teste Rápido) */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-semibold text-[11px]">Testar Contagem de Dias:</span>
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setDiasLicenca(90)}
                  className={`px-2.5 py-1 rounded text-[11px] font-bold border transition-colors cursor-pointer ${
                    diasLicenca === 90 ? 'bg-emerald-600 text-white border-emerald-500' : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  90 Dias (Início)
                </button>
                <button
                  type="button"
                  onClick={() => setDiasLicenca(15)}
                  className={`px-2.5 py-1 rounded text-[11px] font-bold border transition-colors cursor-pointer ${
                    diasLicenca === 15 ? 'bg-emerald-600 text-white border-emerald-500' : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  15 Dias
                </button>
                <button
                  type="button"
                  onClick={() => setDiasLicenca(5)}
                  className={`px-2.5 py-1 rounded text-[11px] font-bold border transition-colors cursor-pointer ${
                    diasLicenca === 5 ? 'bg-amber-600 text-white border-amber-500' : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  5 Dias (Início WhatsApp)
                </button>
                <button
                  type="button"
                  onClick={() => setDiasLicenca(1)}
                  className={`px-2.5 py-1 rounded text-[11px] font-bold border transition-colors cursor-pointer ${
                    diasLicenca === 1 ? 'bg-amber-600 text-white border-amber-500' : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  1 Dia (Último Aviso)
                </button>
                <button
                  type="button"
                  onClick={() => setDiasLicenca(0)}
                  className={`px-2.5 py-1 rounded text-[11px] font-bold border transition-colors cursor-pointer ${
                    diasLicenca === 0 ? 'bg-rose-600 text-white border-rose-500' : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  0 Dias (Expirada / Bloqueio)
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setModalWhatsappLog(true)}
                className="px-3 py-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 rounded-lg font-bold text-[11px] flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Simulador de Avisos WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setDiasLicenca(90);
                  setChaveLicenca(`SISMA-2026-LIC-90D-RENOVADA-${Math.floor(1000 + Math.random() * 9000)}`);
                }}
                className="px-3 py-1.5 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/30 rounded-lg font-bold text-[11px] flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Renovar por +90 Dias</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* MODAL: Acesso Bloqueado para Analista/Fiscal em licença 0 dias */}
      {modalBloqueado && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-rose-800/80 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="w-12 h-12 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto">
              <Ban className="w-7 h-7" />
            </div>

            <div className="text-center">
              <h3 className="text-xl font-black text-white">Acesso Bloqueado!</h3>
              <p className="text-xs text-rose-400 font-bold mt-1 uppercase tracking-wider">
                Licença Expirada (0 Dias Restantes)
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-2">
              <p>
                A licença de uso do <strong>SisMA</strong> expirou. Os acessos para os perfis de <strong>Analista Ambiental</strong> e <strong>Fiscal Ambiental</strong> foram suspensos automaticamente por segurança.
              </p>
              <div className="p-2.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px]">
                💡 <strong>Exceção de Acesso:</strong> Selecione o perfil <strong>Administrador (ADM)</strong> para realizar o login e efetuar a renovação da chave de licença.
              </div>
            </div>

            <button
              onClick={() => {
                setModalBloqueado(false);
                setPerfilSelecionado('adm');
              }}
              className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-lg"
            >
              Mudar para Perfil Administrador (ADM) e Entrar
            </button>
          </div>
        </div>
      )}

      {/* MODAL: Registro de Notificações Diárias do WhatsApp (5d ao 0d) */}
      {modalWhatsappLog && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-4 max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Notificações Diárias via WhatsApp</h3>
                  <p className="text-xs text-slate-400">Disparador automático ativado a partir dos 5 dias restantes</p>
                </div>
              </div>
              <button
                onClick={() => setModalWhatsappLog(false)}
                className="text-slate-400 hover:text-white text-xs font-bold px-2 py-1 bg-slate-800 rounded"
              >
                Fechar
              </button>
            </div>

            <div className="overflow-y-auto space-y-3 flex-1 pr-1">
              {[5, 4, 3, 2, 1, 0].map((d) => {
                const isSent = diasLicenca <= d;
                return (
                  <div
                    key={d}
                    className={`p-3.5 rounded-xl border text-xs space-y-2 ${
                      isSent
                        ? 'bg-emerald-950/20 border-emerald-800/60 text-slate-200'
                        : 'bg-slate-950/50 border-slate-800 text-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-emerald-400" />
                        Aviso do Dia {d} ({d === 0 ? 'Dia do Vencimento' : `${d} dia(s) antes`})
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                        isSent
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                          : 'bg-slate-800 text-slate-500 border-slate-700'
                      }`}>
                        {isSent ? 'Disparado via WhatsApp' : 'Pendente'}
                      </span>
                    </div>

                    <div className="bg-slate-950 p-2.5 rounded border border-slate-800 font-mono text-[11px] text-emerald-300">
                      "🔔 [SISMA ALERTA] Restam {d} dia(s) para o vencimento da licença do SisMA. {d === 0 ? 'Acesso bloqueado hoje para analistas/fiscais.' : 'Renove para evitar a interrupção dos serviços.'}"
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10px] text-slate-400 pt-1">
                      <div>📱 ADM: {usuariosExemplo.adm.telefone_whatsapp}</div>
                      <div>📱 Analista: {usuariosExemplo.analista.telefone_whatsapp}</div>
                      <div>📱 Fiscal: {usuariosExemplo.fiscal.telefone_whatsapp}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setModalWhatsappLog(false)}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-extrabold text-xs rounded-xl"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Rodapé */}
      <footer className="p-4 text-center text-xs text-slate-500 border-t border-slate-900 z-10 flex flex-wrap items-center justify-between gap-2 px-6">
        <p>SisMA v5.0 &bull; Secretaria Municipal de Meio Ambiente &bull; Licenciamento, Fiscalização & WebGIS</p>
        <p className="text-slate-400">Validade: <strong className="text-emerald-400">{diasLicenca} dias restantes</strong></p>
      </footer>
    </div>
  );
};
