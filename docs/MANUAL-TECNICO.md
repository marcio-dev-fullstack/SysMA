# Manual Técnico de Arquitetura e Implementação 

---

## 1. Visão Geral do Sistema e Arquitetura

O **SysMA (Sistema de Meio Ambiente)** foi rearquitetado para operar sob o paradigma **API-First e Desacoplado**, garantindo alta escalabilidade, custo operacional mínimo e total conformidade com os padrões modernos de engenharia de software para a gestão pública ambiental.

### Stack Tecnológica
* **Front-End / Interface Web**: React 19 + Vite + TypeScript + Tailwind CSS v4.
* **Geoprocessamento (WebGIS)**: Leaflet.js / MapLibre GL com componentes React dinâmicos para renderização de camadas de APPs, Unidades de Conservação e georreferenciamento de licenças.
* **Hospedagem Front-End**: GitHub Pages (Hospedagem estática, segura e sem custo de infraestrutura).
* **Back-End & Banco de Dados**: Supabase (PostgreSQL 15+ gerenciado com extensão geoespacial **PostGIS**).
* **Autenticação & Controle de Acesso**: Supabase Auth (JWT) com Row Level Security (RLS) por perfis de usuário (*Cidadão*, *Fiscal*, *Analista*, *Administrador*).
* **Armazenamento de Arquivos**: Supabase Storage para upload e gestão de laudos técnicos, PDFs de licenças e fotos georreferenciadas de vistorias.
* **CI/CD**: GitHub Actions para compilação estática e deploy automatizado a cada *push* no repositório.

---

## 2. Estrutura Completa de Diretórios e Arquivos do Pacote (`SysMA`)

```text
sysma/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Workflow do GitHub Actions para build e deploy no GitHub Pages
├── src/
│   ├── components/
│   │   └── Layout/
│   │       ├── Navbar.tsx      # Barra de navegação superior, status do Supabase e usuário
│   │       └── Sidebar.tsx     # Menu de navegação lateral por módulos ambientais
│   ├── lib/
│   │   └── supabase.ts         # Instanciação do cliente oficial do Supabase (@supabase/supabase-js)
│   ├── mock/
│   │   └── data.ts             # Conjunto de dados simulados para execução estática sem banco
│   ├── pages/
│   │   ├── Auditoria.tsx       # Módulo de trilhas de auditoria, logs de sistema e segurança
│   │   ├── Dashboard.tsx       # Painel executivo com estatísticas de processos e WebGIS interativo
│   │   ├── Denuncias.tsx       # Módulo de recebimento, triagem e encaminhamento de denúncias
│   │   ├── Fiscalizacao.tsx    # Gestão de vistorias em campo, autos de infração e notificações
│   │   ├── Licenciamento.tsx   # Gestão do trâmite de licenças (LP, LI, LO, LAS) e emissão
│   │   └── ZoneamentoGIS.tsx   # Módulo WebGIS para análise de APPs e zoneamento urbano/rural
│   ├── types/
│   │   └── index.ts            # Definição de interfaces TypeScript fortemente tipadas
│   ├── App.tsx                 # Componente raiz com roteamento entre páginas
│   ├── index.css               # Estilização global com utilitários do Tailwind CSS v4
│   └── main.tsx                # Ponto de entrada (Entrypoint) da aplicação React
├── supabase/
│   ├── README.md               # Instruções detalhadas de implantação no console do Supabase
│   └── schema.sql              # Script SQL DDL completo com PostGIS, tabelas e políticas RLS
├── .gitignore                  # Regras de exclusão do Git (node_modules, dist, .env)
├── index.html                  # Arquivo HTML principal do SPA
├── package.json                # Manifesto de dependências e scripts de build
├── README.md                   # Documentação geral do repositório
├── tsconfig.json               # Configurações do compilador TypeScript
└── vite.config.ts              # Configuração do bundler Vite com rota base '/SysMA/'
```

---

## 3. Configuração do Banco de Dados no Supabase (Schema SQL & PostGIS)

Para provisionar a infraestrutura de dados geoespaciais e relacionais do SysMA, execute o script SQL abaixo no **SQL Editor** do projeto no Supabase:

```sql
-- ============================================================================
-- SCRIPT DE INFRAESTRUTURA E BANCO DE DADOS - SysMA (SISTEMA DE MEIO AMBIENTE)
-- ============================================================================

-- 1. Habilitar a extensão Geoespacial PostGIS
CREATE EXTENSION IF NOT EXISTS postgis;

-- 2. Tabela de Perfis de Usuários (Vinculada ao Supabase Auth)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  nome_completo TEXT NOT NULL,
  cpf_cnpj VARCHAR(18) UNIQUE NOT NULL,
  cargo VARCHAR(50) NOT NULL CHECK (cargo IN ('Cidadao', 'Fiscal', 'Analista', 'Administrador')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Tabela de Processos de Licenciamento Ambiental
CREATE TABLE IF NOT EXISTS public.processos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  numero_processo VARCHAR(50) UNIQUE NOT NULL,
  requerente TEXT NOT NULL,
  cpf_cnpj VARCHAR(18) NOT NULL,
  tipo_licenca VARCHAR(10) NOT NULL CHECK (tipo_licenca IN ('LP', 'LI', 'LO', 'LAS')),
  status VARCHAR(30) NOT NULL CHECK (status IN ('Em Análise', 'Deferido', 'Indeferido', 'Pendente Doc')),
  atividades TEXT NOT NULL,
  localizacao GEOMETRY(Point, 4326), -- Ponto WGS84 para visualização em mapa
  data_solicitacao TIMESTAMPTZ DEFAULT NOW(),
  analista_id UUID REFERENCES public.profiles(id)
);

-- 4. Tabela de Vistorias e Fiscalização Ambiental
CREATE TABLE IF NOT EXISTS public.vistorias (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  numero_auto VARCHAR(50) UNIQUE NOT NULL,
  alvo TEXT NOT NULL,
  localizacao GEOMETRY(Point, 4326),
  tipo_infracao TEXT NOT NULL,
  status VARCHAR(30) NOT NULL CHECK (status IN ('Agendada', 'Concluída', 'Em Andamento', 'Notificado')),
  fiscal_responsavel UUID REFERENCES public.profiles(id),
  fotos_urls TEXT[], -- URLs de imagens armazenadas no Supabase Storage
  data_vistoria DATE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
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
  status VARCHAR(30) DEFAULT 'Em Triagem' CHECK (status IN ('Em Triagem', 'Em Investigação', 'Procedente', 'Arquivada')),
  data_registro TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Tabela de Zoneamento e Unidades de Conservação (WebGIS)
CREATE TABLE IF NOT EXISTS public.zoneamento_gis (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome_zona VARCHAR(150) NOT NULL,
  categoria VARCHAR(50) NOT NULL CHECK (categoria IN ('APP', 'Reserva Legal', 'Unidade de Conservacao', 'Zona Urbana')),
  restricao_nivel VARCHAR(20) NOT NULL CHECK (restricao_nivel IN ('Alta', 'Media', 'Baixa')),
  poligono GEOMETRY(Polygon, 4326) NOT NULL -- Área geográfica delimitada
);

-- 7. Tabela de Logs de Auditoria e Segurança
CREATE TABLE IF NOT EXISTS public.auditoria_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  usuario_id UUID REFERENCES public.profiles(id),
  acao VARCHAR(100) NOT NULL,
  modulo VARCHAR(50) NOT NULL,
  detalhes TEXT,
  ip_origem VARCHAR(45),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- SEGURANÇA E POLÍTICAS DE ACESSO (Row Level Security - RLS)
-- ============================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.processos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vistorias ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.denuncias ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.zoneamento_gis ENABLE ROW LEVEL SECURITY;

-- Leitura pública para tabelas consultivas de zoneamento e denúncias públicas
CREATE POLICY "Zoneamento público para leitura" ON public.zoneamento_gis FOR SELECT USING (true);
CREATE POLICY "Leitura de processos públicos" ON public.processos FOR SELECT USING (true);
```

---

## 4. Guia de Integração do Front-End com Supabase e Fallback

A aplicação conta com um mecanismo de fallback resiliente no arquivo `src/lib/supabase.ts`:

1. **Quando as credenciais do Supabase estão configuradas** (`VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`), o cliente realiza requisições HTTPS diretamente para a API REST gerada pelo PostgREST.
2. **Quando rodando como demonstração estática no GitHub Pages sem variáveis de ambiente**, o sistema alterna transparentemente para os dados contidos em `src/mock/data.ts`, garantindo que toda a interface continue interativa e utilizável.

### Exemplo de Código de Consulta em Componentes React

```typescript
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { mockProcessos } from '../mock/data';
import { ProcessoLicenciamento } from '../types';

export function useProcessos() {
  const [processos, setProcessos] = useState<ProcessoLicenciamento[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProcessos() {
      try {
        const { data, error } = await supabase
          .from('processos')
          .select('*')
          .order('data_solicitacao', { ascending: false });

        if (!error && data && data.length > 0) {
          setProcessos(data);
        } else {
          // Fallback para dados simulados em ambiente sem Supabase configurado
          setProcessos(mockProcessos);
        }
      } catch (err) {
        setProcessos(mockProcessos);
      } finally {
        setLoading(false);
      }
    }

    fetchProcessos();
  }, []);

  return { processos, loading };
}
```

---

## 5. Guia de Build e Deploy Automático no GitHub Pages

O arquivo `.github/workflows/deploy.yml` gerencia o ciclo de integração contínua e publicação.

### Conteúdo do Workflow (`.github/workflows/deploy.yml`)

```yaml
name: Deploy SysMA Front-End to GitHub Pages

on:
  push:
    branches: [ main, master ]

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repositório
        uses: actions/checkout@v4

      - name: Configurar Node.js (v20)
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Instalar Dependências
        run: npm ci

      - name: Compilar Aplicação Vite
        env:
          VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
          VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
        run: npm run build

      - name: Deploy para a Branch gh-pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages
```

### Passos para Configuração no Repositório
1. Suba o código extraído do `sysma-completo.zip` para o seu repositório no GitHub (`marcio-dev-fullstack/SysMA`).
2. No GitHub, navegue até **Settings > Secrets and variables > Actions** e cadastre as chaves:
   * `VITE_SUPABASE_URL`: URL do seu projeto no Supabase.
   * `VITE_SUPABASE_ANON_KEY`: Chave pública `anon` do Supabase.
3. Acesse **Settings > Pages** e na seção **Build and deployment**, selecione a origem como **Deploy from a branch** e escolha a branch `gh-pages` na pasta `/ (root)`.
4. Cada commit enviado para a branch principal compilará a aplicação e atualizará o site em alguns segundos.
