# 🌳 SisMA - Sistema de Meio Ambiente (v2.0)

> **Stack Moderno**: `React 19` | `TypeScript 5.7` | `Vite 6.0` | `Tailwind CSS v4` | `Supabase (PostGIS)` | `GitHub Pages`

O **SisMA (Sistema de Meio Ambiente)** é uma solução digital moderna e integrada para gestão, licenciamento e fiscalização ambiental municipal. Reconstruído na versão **v2.0** como uma **Single Page Application (SPA)** serverless desacoplada em **React 19, TypeScript e Supabase (PostGIS)**.

---

## ✨ Funcionalidades Principais

- 📄 **Licenciamento Ambiental Digital**: Gestão completa de solicitações e emissão de Licença Prévia (LP), Licença de Instalação (LI), Licença de Operação (LO) e Licença Ambiental Simplificada (LAS).
- 🔍 **Fiscalização & Vistorias em Campo**: Emissão de ordens de serviço, registro de autos de infração e vistorias georreferenciadas com fotos.
- 📣 **Portal do Cidadão & Denúncias**: Canal público para envio anônimo ou identificado de denúncias ambientais e acompanhamento por protocolo.
- 🗺️ **WebGIS & Zoneamento Ambiental**: Mapeamento espacial interativo com integração PostGIS para acompanhamento de APPs (Áreas de Preservação Permanente) e Unidades de Conservação.
- 📊 **Dashboard & Indicadores (ESG)**: Painéis com métricas em tempo real, volume de licenças emitidas e status de chamados.
- 🛡️ **Trilha de Auditoria**: Registro detalhado e imutável de todas as ações de fiscais, analistas e administradores.

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia |
| :--- | :--- |
| **Front-End / UI** | React 19 + TypeScript 5.7 + Vite 6 |
| **Estilização** | Tailwind CSS v4 + Lucide Icons |
| **Bancos de Dados & Backend** | Supabase (PostgreSQL 16 + Extensão PostGIS) |
| **Hospedagem & CI/CD** | GitHub Pages + GitHub Actions (`.github/workflows/deploy.yml`) |

---

## 📂 Estrutura do Repositório

```text
.
├── .github/workflows/deploy.yml # Workflow de deploy automático no GitHub Pages
├── src/
│   ├── components/Layout/      # Navbar, Sidebar e elementos de navegação
│   ├── lib/supabase.ts         # Cliente Supabase tipado
│   ├── mock/data.ts            # Dados simulados para execução estática
│   ├── pages/                  # Páginas dos módulos (Dashboard, Licenciamento, etc.)
│   ├── types/index.ts          # Interfaces TypeScript do sistema
│   ├── App.tsx
│   └── main.tsx
├── supabase/
│   ├── schema.sql              # DDL das tabelas e funções PostGIS
│   └── README.md               # Guia de configuração do banco
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts              # Configuração do Vite (base: '/SisMA/')
```

---

## 🚀 Como Executar o Projeto

### 1. Pré-requisitos
- **Node.js**: v20.x ou superior
- **npm** ou **pnpm**

### 2. Instalação e Execução Local

```bash
# Clonar o repositório
git clone marcio-dev-fullstack/SisMA
cd SisMA

# Instalar as dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev
```

O aplicativo estará acessível localmente.

---

## 🗄️ Configuração do Supabase (Opcional para Modo Conectado)

Para conectar a aplicação ao seu próprio banco de dados Supabase:

1. Acesse o **SQL Editor** do seu projeto no Supabase e execute o conteúdo do arquivo `supabase/schema.sql`.
2. Crie um arquivo `.env.local` na raiz do projeto com as credenciais do seu projeto.

---

## 🌐 Deploy Automático no GitHub Pages

O projeto já inclui um fluxo de integração contínua (`.github/workflows/deploy.yml`). Para ativar a publicação automática:

1. Faça push do código para a branch `main` ou `master`.
2. No GitHub, vá em **Settings > Pages**.
3. Em **Source**, selecione **GitHub Actions**.
4. Cada commit irá compilar e atualizar automaticamente o site publicado.

---

## 📄 Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
