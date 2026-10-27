import { ProcessoLicenciamento, Vistoria, Denuncia, ZonaGIS, LogAuditoria } from '../types';

export const MOCK_PROCESSOS: ProcessoLicenciamento[] = [
  {
    id: '1',
    numero_processo: 'PROC-2026-0089',
    requerente: 'Indústria Metalúrgica do Vale S.A.',
    cpf_cnpj: '12.345.678/0001-90',
    tipo_licenca: 'LO',
    status: 'Em Análise',
    atividades: 'Operação de Fundição e Tratamento Térmico de Metais',
    data_solicitacao: '2026-02-10',
    coordenadas: [-23.5505, -46.6333],
  },
  {
    id: '2',
    numero_processo: 'PROC-2026-0102',
    requerente: 'Loteamento Residencial EcoPark',
    cpf_cnpj: '98.765.432/0001-11',
    tipo_licenca: 'LI',
    status: 'Deferido',
    atividades: 'Instalação de Loteamento Urbano de Interesse Social',
    data_solicitacao: '2026-01-15',
    coordenadas: [-23.5600, -46.6500],
  },
  {
    id: '3',
    numero_processo: 'PROC-2026-0118',
    requerente: 'Posto de Combustíveis Rota Verde',
    cpf_cnpj: '45.123.890/0001-44',
    tipo_licenca: 'LP',
    status: 'Pendente Doc',
    atividades: 'Planejamento de Instalação de Tanques Subterrâneos',
    data_solicitacao: '2026-02-18',
    coordenadas: [-23.5400, -46.6200],
  },
];

export const MOCK_VISTORIAS: Vistoria[] = [
  {
    id: 'v1',
    numero_auto: 'VIS-2026-0041',
    alvo: 'Aterro Sanitário Municipal Norte',
    fiscal: 'Dr. Carlos Eduardo Silva',
    tipo_infracao: 'Monitoramento de Chorume e Queimadores de Methane',
    status: 'Concluída',
    data_vistoria: '2026-02-20',
    coordenadas: [-23.5300, -46.6100],
  },
  {
    id: 'v2',
    numero_auto: 'VIS-2026-0055',
    alvo: 'Pedreira Serra Azul Ltda',
    fiscal: 'Engª. Amanda Oliveira',
    tipo_infracao: 'Verificação de Níveis de Ruído e Supressão Vegetal',
    status: 'Em Andamento',
    data_vistoria: '2026-02-24',
    coordenadas: [-23.5700, -46.6800],
  },
];

export const MOCK_DENUNCIAS: Denuncia[] = [
  {
    id: 'd1',
    protocolo: 'DEN-2026-8801',
    categoria: 'Descarte Irregular de Resíduos',
    bairro: 'Jardim das Oliveiras',
    descricao: 'Caçambas descartando entulho de obra nas margens do Córrego Limpo.',
    status: 'Em Triagem',
    data_registro: '2026-02-23',
    anonimo: true,
  },
  {
    id: 'd2',
    protocolo: 'DEN-2026-8805',
    categoria: 'Desmatamento Sem Autorização',
    bairro: 'Parque das Árvores',
    descricao: 'Corte de vegetação nativa em área de APP por trator de esteira.',
    status: 'Em Investigacao',
    data_registro: '2026-02-22',
    anonimo: false,
  },
];

export const MOCK_ZONAS_GIS: ZonaGIS[] = [
  {
    id: 'z1',
    nome_zona: 'APP Córrego das Pedras',
    categoria: 'APP',
    restricao: 'Alta',
    area_ha: 45.8,
  },
  {
    id: 'z2',
    nome_zona: 'Reserva Ecológica Municipal',
    categoria: 'Unidade de Conservacao',
    restricao: 'Alta',
    area_ha: 312.4,
  },
];

export const MOCK_LOGS: LogAuditoria[] = [
  {
    id: 'l1',
    usuario: 'cda.marcio@gmail.com',
    acao: 'Aprovação de Licença de Instalação (LI-2026-0102)',
    modulo: 'Licenciamento',
    ip: '192.168.1.104',
    timestamp: '2026-02-24 10:14:22',
  },
  {
    id: 'l2',
    usuario: 'amanda.oliveira@meioambiente.gov.br',
    acao: 'Emissão de Auto de Vistoria (VIS-2026-0041)',
    modulo: 'Fiscalização',
    ip: '192.168.1.112',
    timestamp: '2026-02-24 09:45:01',
  },
];
