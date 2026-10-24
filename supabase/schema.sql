-- =========================================================
-- SisMA - Sistema de Meio Ambiente
-- Script SQL para Inicialização do Banco de Dados Supabase (PostGIS)
-- =========================================================

-- 1. Habilitar a extensão de Geoprocessamento (PostGIS)
CREATE EXTENSION IF NOT EXISTS postgis;

-- 2. Tabela de Perfis de Usuários (vinculada ao Supabase Auth)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  nome_completo TEXT NOT NULL,
  cpf_cnpj VARCHAR(18) UNIQUE,
  cargo VARCHAR(50) CHECK (cargo IN ('Cidadao', 'Fiscal', 'Analista', 'Administrador')),
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
  localizacao GEOMETRY(Point, 4326),
  data_solicitacao TIMESTAMPTZ DEFAULT NOW(),
  analista_id UUID REFERENCES public.profiles(id)
);

-- 4. Tabela de Vistorias e Fiscalização
CREATE TABLE IF NOT EXISTS public.vistorias (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  numero_auto VARCHAR(50) UNIQUE NOT NULL,
  alvo TEXT NOT NULL,
  localizacao GEOMETRY(Point, 4326),
  tipo_infracao TEXT NOT NULL,
  status VARCHAR(30) CHECK (status IN ('Agendada', 'Concluída', 'Em Andamento', 'Notificado')),
  fiscal_responsavel UUID REFERENCES public.profiles(id),
  fotos_urls TEXT[],
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
  status VARCHAR(30) DEFAULT 'Em Triagem',
  data_registro TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Tabela de Zoneamento e Unidades de Conservação (GIS)
CREATE TABLE IF NOT EXISTS public.zoneamento_gis (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome_zona VARCHAR(150) NOT NULL,
  categoria VARCHAR(50) CHECK (categoria IN ('APP', 'Reserva Legal', 'Unidade de Conservacao', 'Zona Urbana')),
  restricao_nivel VARCHAR(20) CHECK (restricao_nivel IN ('Alta', 'Media', 'Baixa')),
  poligono GEOMETRY(Polygon, 4326) NOT NULL
);

-- Politicas RLS (Row Level Security)
ALTER TABLE public.processos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vistorias ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.denuncias ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.zoneamento_gis ENABLE ROW LEVEL SECURITY;

-- Leitura pública para consulta de processos e zoneamento
CREATE POLICY "Permitir leitura pública de processos" ON public.processos FOR SELECT USING (true);
CREATE POLICY "Permitir leitura pública de zoneamento" ON public.zoneamento_gis FOR SELECT USING (true);
