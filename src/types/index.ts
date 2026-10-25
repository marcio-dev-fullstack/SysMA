export type PerfilUsuario = 'adm' | 'analista' | 'fiscal';

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  perfil: PerfilUsuario;
  cargo: string;
  orgao: string;
  avatar: string;
  telefone_whatsapp?: string;
}

export interface LicencaSistema {
  chave: string;
  diasRestantes: number;
  dataExpiracao: string;
  status: 'ativa' | 'expirando' | 'expirada';
  notificacoesWhatsappEnviadas: Array<{
    dia: number;
    dataHora: string;
    destinatario: string;
    telefone: string;
    mensagem: string;
    status: 'Enviado' | 'Falha';
  }>;
}

export type StatusProcesso = 'Em Análise' | 'Deferido' | 'Indeferido' | 'Pendente Doc';
export type TipoLicenca = 'LP' | 'LI' | 'LO' | 'LAS';

export interface ProcessoLicenciamento {
  id: string;
  numero_processo: string;
  requerente: string;
  cpf_cnpj: string;
  tipo_licenca: TipoLicenca;
  status: StatusProcesso;
  atividades: string;
  data_solicitacao: string;
  coordenadas?: [number, number];
  parecer_tecnico?: string;
  validade_anos?: number;
  data_emissao?: string;
  condicionantes?: string[];
}

export interface Vistoria {
  id: string;
  numero_auto: string;
  alvo: string;
  fiscal: string;
  tipo_infracao: string;
  status: 'Agendada' | 'Concluída' | 'Em Andamento' | 'Notificado';
  data_vistoria: string;
  coordenadas?: [number, number];
  valor_multa?: number;
  observacoes?: string;
  fotos_urls?: string[];
}

export interface Denuncia {
  id: string;
  protocolo: string;
  categoria: string;
  bairro: string;
  descricao: string;
  status: 'Em Triagem' | 'Em Investigacao' | 'Arquivada' | 'Resolvida';
  data_registro: string;
  anonimo: boolean;
}

export interface ZonaGIS {
  id: string;
  nome_zona: string;
  categoria: 'APP' | 'Reserva Legal' | 'Unidade de Conservacao' | 'Zona Urbana';
  restricao: 'Alta' | 'Media' | 'Baixa';
  area_ha: number;
}

export interface LogAuditoria {
  id: string;
  usuario: string;
  acao: string;
  modulo: string;
  ip: string;
  timestamp: string;
}

export interface AtividadeAmbiental {
  id: string;
  codigo: string;
  descricao: string;
  potencial_poluidor: 'Pequeno' | 'Médio' | 'Grande';
  porte: 'Pequeno' | 'Médio' | 'Grande';
  taxa_base: number;
}
