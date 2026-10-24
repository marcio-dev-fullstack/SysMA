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
