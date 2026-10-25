-- =========================================================
-- SisMA - Sistema de Meio Ambiente (v2.0 / v9.0)
-- Script SQL para Inicialização do Banco de Dados Supabase (PostGIS)
-- =========================================================

-- 1. Habilitar a extensão de Geoprocessamento (PostGIS)
CREATE EXTENSION IF NOT EXISTS postgis;

-- 2. Tabela de Perfis de Usuários (vinculada ao Supabase Auth)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  nome_completo TEXT NOT NULL,
  cpf_cnpj VARCHAR(18) UNIQUE,
  cargo VARCHAR(100) NOT NULL,
  perfil VARCHAR(20) CHECK (perfil IN ('adm', 'analista', 'fiscal')),
  orgao TEXT DEFAULT 'Secretaria Municipal de Meio Ambiente',
  telefone_whatsapp VARCHAR(30),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Tabela de Processos de Licenciamento Ambiental
CREATE TABLE IF NOT EXISTS public.processos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  numero_processo VARCHAR(50) UNIQUE NOT NULL,
  requerente TEXT NOT NULL,
  cpf_cnpj VARCHAR(18) NOT NULL,
  tipo_licenca VARCHAR(10) CHECK (tipo_licenca IN ('LP', 'LI', 'LO', 'LAS')),
  status VARCHAR(30) CHECK (status IN ('Em Análise', 'Deferido', 'Indeferido', 'Pendente Doc')),
  atividades TEXT NOT NULL,
  parecer_tecnico TEXT,
  validade_anos INT DEFAULT 4,
  condicionantes TEXT[],
  localizacao GEOMETRY(Point, 4326),
  data_solicitacao TIMESTAMPTZ DEFAULT NOW(),
  data_emissao TIMESTAMPTZ,
  analista_id UUID REFERENCES public.profiles(id)
);

-- 4. Tabela de Vistorias e Fiscalização de Campo
CREATE TABLE IF NOT EXISTS public.vistorias (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  numero_auto VARCHAR(50) UNIQUE NOT NULL,
  alvo TEXT NOT NULL,
  localizacao GEOMETRY(Point, 4326),
  tipo_infracao TEXT NOT NULL,
  enquadramento_legal TEXT,
  gravidade VARCHAR(20) CHECK (gravidade IN ('Leve', 'Grave', 'Gravíssima')),
  valor_multa NUMERIC(12,2) DEFAULT 0.00,
  status VARCHAR(30) CHECK (status IN ('Agendada', 'Concluída', 'Em Andamento', 'Notificado')),
  fiscal_responsavel UUID REFERENCES public.profiles(id),
  fotos_urls TEXT[],
  relatorio_fiscal TEXT,
  data_vistoria DATE NOT NULL
);

-- 5. Tabela de Denúncias Ambientais (Portal do Cidadão)
CREATE TABLE IF NOT EXISTS public.denuncias (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  protocolo VARCHAR(50) UNIQUE NOT NULL,
  categoria VARCHAR(100) NOT NULL,
  descricao TEXT NOT NULL,
  bairro VARCHAR(100) NOT NULL,
  localizacao GEOMETRY(Point, 4326),
  anonimo BOOLEAN DEFAULT TRUE,
  status VARCHAR(30) DEFAULT 'Em Triagem' CHECK (status IN ('Em Triagem', 'Em Investigacao', 'Arquivada', 'Resolvida')),
  data_registro TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Tabela de Zoneamento e Unidades de Conservação (WebGIS)
CREATE TABLE IF NOT EXISTS public.zoneamento_gis (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome_zona VARCHAR(150) NOT NULL,
  categoria VARCHAR(50) CHECK (categoria IN ('APP', 'Reserva Legal', 'Unidade de Conservacao', 'Zona Urbana')),
  restricao_nivel VARCHAR(20) CHECK (restricao_nivel IN ('Alta', 'Media', 'Baixa')),
  area_ha NUMERIC(10,2) NOT NULL,
  poligono GEOMETRY(Polygon, 4326) NOT NULL
);

-- 7. Tabela de Enquadramento & Taxas Ambientais
CREATE TABLE IF NOT EXISTS public.taxas_ambientais (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  codigo VARCHAR(20) UNIQUE NOT NULL,
  descricao TEXT NOT NULL,
  potencial_poluidor VARCHAR(20) CHECK (potencial_poluidor IN ('Pequeno', 'Médio', 'Grande')),
  porte VARCHAR(20) CHECK (porte IN ('Pequeno', 'Médio', 'Grande')),
  taxa_base NUMERIC(10,2) NOT NULL
);

-- 8. Tabela de Trilha de Auditoria Imutável (Logs)
CREATE TABLE IF NOT EXISTS public.logs_auditoria (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  usuario TEXT NOT NULL,
  acao TEXT NOT NULL,
  modulo VARCHAR(50) NOT NULL,
  ip VARCHAR(45) NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- Ativação de Politicas RLS (Row Level Security)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.processos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vistorias ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.denuncias ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.zoneamento_gis ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.taxas_ambientais ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.logs_auditoria ENABLE ROW LEVEL SECURITY;

-- Regras de Acesso para Consulta e Leitura Pública
CREATE POLICY "Permitir leitura pública de processos" ON public.processos FOR SELECT USING (true);
CREATE POLICY "Permitir leitura pública de zoneamento" ON public.zoneamento_gis FOR SELECT USING (true);
CREATE POLICY "Permitir leitura pública de taxas" ON public.taxas_ambientais FOR SELECT USING (true);
