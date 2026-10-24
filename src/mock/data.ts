import { ProcessoLicenciamento, VistoriaFiscalizacao, DenunciaAmbiental, ZonaAmbientalGIS } from '../types';

export const MOCK_PROCESSOS: ProcessoLicenciamento[] = [
  {
    id: 'proc-1',
    numeroProcesso: 'SISMA-2026-00101',
    requerente: 'Loteamentos Ecoville Ltda',
    cpfCnpj: '12.345.678/0001-90',
    tipoLicenca: 'LI',
    atividade: 'Parcelamento do Solo Urbano (Loteamento)',
    nivelImpacto: 'Alto',
    status: 'Em Análise',
    dataSolicitacao: '2026-10-12',
    bairro: 'Jardim das Palmeiras',
    lat: -23.5505,
    lng: -46.6333,
    descricaoArea: 'Área total de 45.000m² com necessidade de supressão vegetal parcial.'
  },
  {
    id: 'proc-2',
    numeroProcesso: 'SISMA-2026-00088',
    requerente: 'Posto de Combustíveis Alvorada',
    cpfCnpj: '98.765.432/0001-11',
    tipoLicenca: 'LO',
    atividade: 'Armazenamento de Combustíveis Derivados do Petróleo',
    nivelImpacto: 'Médio',
    status: 'Aprovado',
    dataSolicitacao: '2026-09-28',
    bairro: 'Centro',
    lat: -23.5580,
    lng: -46.6410,
    descricaoArea: 'Renovação de Licença de Operação com laudo de estanqueidade atualizado.'
  },
  {
    id: 'proc-3',
    numeroProcesso: 'SISMA-2026-00120',
    requerente: 'Cerâmica São José S.A.',
    cpfCnpj: '44.555.666/0001-22',
    tipoLicenca: 'LP',
    atividade: 'Extração e Beneficiamento de Argila',
    nivelImpacto: 'Alto',
    status: 'Vistoria Agendada',
    dataSolicitacao: '2026-10-20',
    bairro: 'Distrito Industrial',
    lat: -23.5420,
    lng: -46.6200,
    descricaoArea: 'Pedido de Licença Prévia para expansão da jazida minerária.'
  },
  {
    id: 'proc-4',
    numeroProcesso: 'SISMA-2026-00135',
    requerente: 'Lava Rápido EcoClean',
    cpfCnpj: '33.222.111/0001-55',
    tipoLicenca: 'LAS',
    atividade: 'Lava-Rápido Automotivo com Caixa Separadora de Água e Óleo',
    nivelImpacto: 'Baixo',
    status: 'Pendência Documental',
    dataSolicitacao: '2026-10-22',
    bairro: 'Vila Nova',
    lat: -23.5610,
    lng: -46.6500,
    descricaoArea: 'Solicitante precisa apresentar outorga de poço artesiano.'
  }
];

export const MOCK_VISTORIAS: VistoriaFiscalizacao[] = [
  {
    id: 'vist-101',
    numeroAuto: 'AUTO-2026-042',
    fiscalResponsavel: 'Eng. Carlos Eduardo Viana',
    dataVistoria: '2026-10-21',
    tipoInfracao: 'Desmatamento',
    local: 'APP do Córrego Verde - Lote 14',
    status: 'Autuado',
    gravidade: 'Gravíssima',
    lat: -23.5530,
    lng: -46.6280,
    observacoes: 'Supressão vegetal não autorizada em área de preservação permanente (margem de rio).'
  },
  {
    id: 'vist-102',
    numeroAuto: 'AUTO-2026-045',
    fiscalResponsavel: 'Dra. Mariana Souza',
    dataVistoria: '2026-10-23',
    tipoInfracao: 'Resíduos Sólidos',
    local: 'Rua das Indústrias, 500',
    status: 'Pendente',
    gravidade: 'Grave',
    lat: -23.5480,
    lng: -46.6380,
    observacoes: 'Descarte irregular de entulho e resíduos industriais em terreno baldio.'
  }
];

export const MOCK_DENUNCIAS: DenunciaAmbiental[] = [
  {
    id: 'den-1',
    protocolo: 'DEN-2026-099',
    categoria: 'Queimada',
    descricao: 'Queimada urbana em terreno baldio gerando fumaça densa nas residências.',
    bairro: 'Bairro Alto',
    dataRegistro: '2026-10-24',
    status: 'Recebida',
    anonima: true,
    lat: -23.5560,
    lng: -46.6350
  },
  {
    id: 'den-2',
    protocolo: 'DEN-2026-085',
    categoria: 'Poluição Hídrica',
    descricao: 'Efluente colorido com forte cheiro químico descartado diretamente na galeria pluvial.',
    bairro: 'Distrito Industrial',
    dataRegistro: '2026-10-22',
    status: 'Em Investigação',
    anonima: false,
    lat: -23.5430,
    lng: -46.6220
  }
];

export const MOCK_ZONAS_GIS: ZonaAmbientalGIS[] = [
  {
    id: 'zona-1',
    nome: 'Área de Preservação Permanente (APP Córrego Principal)',
    categoria: 'APP',
    areaHectares: 120.5,
    corHex: '#16a34a',
    restricoes: ['Proibida edificação', 'Vegetação nativa protegida', 'Faixa não edificável de 30 metros'],
    coordenadasCentro: [-23.5530, -46.6280]
  },
  {
    id: 'zona-2',
    nome: 'Parque Ecológico Municipal das Aves',
    categoria: 'Unidade de Conservação',
    areaHectares: 340.0,
    corHex: '#0d9488',
    restricoes: ['Apenas uso sustentável e ecoturismo', 'Pesquisas científicas autorizadas'],
    coordenadasCentro: [-23.5650, -46.6450]
  },
  {
    id: 'zona-3',
    nome: 'Distrito Industrial Sustentável - Zona B',
    categoria: 'Zona Industrial',
    areaHectares: 210.8,
    corHex: '#d97706',
    restricoes: ['Exige caixa separadora de óleo', 'Tratamento primário de efluentes obrigatório'],
    coordenadasCentro: [-23.5420, -46.6200]
  }
];
