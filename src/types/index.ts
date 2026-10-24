export type TipoLicenca = 'LP' | 'LI' | 'LO' | 'LAS' | 'Dispensa';

export type StatusProcesso = 'Em Análise' | 'Vistoria Agendada' | 'Aprovado' | 'Indeferido' | 'Pendência Documental';

export interface ProcessoLicenciamento {
  id: string;
  numeroProcesso: string;
  requerente: string;
  cpfCnpj: string;
  tipoLicenca: TipoLicenca;
  atividade: string;
  nivelImpacto: 'Baixo' | 'Médio' | 'Alto';
  status: StatusProcesso;
  dataSolicitacao: string;
  bairro: string;
  lat: number;
  lng: number;
  descricaoArea?: string;
}

export interface VistoriaFiscalizacao {
  id: string;
  numeroAuto: string;
  fiscalResponsavel: string;
  dataVistoria: string;
  tipoInfracao: 'Desmatamento' | 'Poluição Sonora' | 'Resíduos Sólidos' | 'Esgoto Irregular' | 'Obra Sem Licença';
  local: string;
  status: 'Pendente' | 'Concluída' | 'Autuado' | 'Arquivado';
  gravidade: 'Leve' | 'Grave' | 'Gravíssima';
  lat: number;
  lng: number;
  observacoes: string;
}

export interface DenunciaAmbiental {
  id: string;
  protocolo: string;
  categoria: 'Queimada' | 'Desmatamento' | 'Poluição Hídrica' | 'Maus Tratos Animais' | 'Barulho Excessivo';
  descricao: string;
  bairro: string;
  dataRegistro: string;
  status: 'Recebida' | 'Em Investigação' | 'Resolvida' | 'Improcedente';
  anonima: boolean;
  lat: number;
  lng: number;
}

export interface ZonaAmbientalGIS {
  id: string;
  nome: string;
  categoria: 'APP' | 'Unidade de Conservação' | 'Zona Industrial' | 'Perímetro Urbano';
  areaHectares: number;
  corHex: string;
  restricoes: string[];
  coordenadasCentro: [number, number];
}
