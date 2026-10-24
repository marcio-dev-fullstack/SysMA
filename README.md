<div align="center">

  <img src="https://img.shields.io/badge/SysMA-Sistema%20de%20Gest%C3%A3o%20Ambiental-tree?style=for-the-badge&color=2e7d32" alt="SysMA Header Banner" width="100%" />

  # 🌿 SysMA — Sistema de Licenciamento Ambiental Municipal

  **Plataforma moderna, eficiente e escalável para automação e gestão de licenças e processos ambientais.**

  [![GitHub Stars](https://img.shields.io/github/stars/marcio-dev-fullstack/SysMA?style=flat-square&color=388e3c)](https://github.com/marcio-dev-fullstack/SysMA/stargazers)
  [![GitHub Forks](https://img.shields.io/github/forks/marcio-dev-fullstack/SysMA?style=flat-square&color=388e3c)](https://github.com/marcio-dev-fullstack/SysMA/network/members)
  [![GitHub License](https://img.shields.io/github/license/marcio-dev-fullstack/SysMA?style=flat-square&color=388e3c)](LICENSE)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

  [Sobre](#-sobre-o-projeto) •
  [Funcionalidades](#-funcionalidades-em-destaque) •
  [Tecnologias](#%EF%B8%8F-arquitetura-e-tecnologias) •
  [Instalação](#-como-executar-o-projeto) •
  [Contribuição](#-contribuição)

</div>

---

## 🎯 Sobre o Projeto

O **SysMA** é uma plataforma *Full Stack* desenvolvida para digitalizar e otimizar todo o ciclo de vida do licenciamento ambiental em secretarias e órgãos municipais. O sistema substitui processos físicos por fluxos totalmente digitais, garantindo maior agilidade para empreendedores e rigor técnico para os analistas ambientais.

### 💡 Principais Impactos

* **Redução de Prazos:** Agilização na tramitação de pareceres técnicos e emissão de licenças.
* **Auditabilidade:** Histórico imutável de movimentações de cada processo.
* **Sustentabilidade:** Processos 100% digitais (zero papel).

---

## ⚡ Funcionalidades em Destaque

| Módulo | Descrição |
| :--- | :--- |
| 📜 **Licenciamento Simplificado** | Emissão e acompanhamento de LP (Prévia), LI (Instalação) e LO (Operação). |
| 📁 **Gestão do Histórico** | Controle digital e centralizado de todos os processos e pareceres técnicos. |
| 📊 **Dashboard Analítico** | Visão geral de processos ativos, licenças vigentes, pendências e prazos de vencimento. |
| 🛡️ **Segurança & Controle** | Níveis de acesso granulares (Administrador, Analista e Requerente). |
| 📍 **Georreferenciamento** | Suporte para dados espaciais e mapeamento básico das áreas licenciadas. |

---

## 🛠️ Arquitetura e Tecnologias

```text
 ┌─────────────────────────────────────────────────────────────┐
 │                      CAMADA DE CLIENTE                      │
 │                     Interface Web / PWA                     │
 └──────────────────────────────┬──────────────────────────────┘
                                │  HTTPS / Rest API
                                ▼
 ┌─────────────────────────────────────────────────────────────┐
 │                      CAMADA DE NEGÓCIO                      │
 │               Serviços de Autenticação & Regras             │
 └──────────────────────────────┬──────────────────────────────┘
                                │
                                ▼
 ┌─────────────────────────────────────────────────────────────┐
 │                      PERSISTÊNCIA & DADOS                   │
 │           PostgreSQL / Supabase Storage & Database          │
 └─────────────────────────────────────────────────────────────┘
```

| Camada | Tecnologia / Ferramenta | Uso |
| :--- | :--- | :--- |
| **Frontend** | HTML5 / CSS3 / JavaScript | Interface de usuário responsiva e dinâmica |
| **Backend / BaaS** | Supabase / PostgreSQL | Autenticação, banco de dados relacional e file storage |
| **Deploy / CI-CD** | GitHub Pages / Actions | Integração e entrega contínua |

---

## 🚀 Como Executar o Projeto

### 1. Pré-requisitos
* Git instalado na máquina.
* Navegador moderno (Google Chrome, Mozilla Firefox, Microsoft Edge ou Safari).

### 2. Clonando e Executando

```bash
# Clone o repositório
git clone https://github.com/marcio-dev-fullstack/SysMA.git

# Acesse o diretório
cd SysMA

# Abra o arquivo index.html no seu navegador ou utilize a extensão Live Server no VS Code
```

---

<div align="center">

**SysMA — Sistema de Licenciamento Ambiental Municipal**  
*Tecnologia e inovação para uma gestão ambiental mais ágil, transparente e eficiente.*

### 📜 Licença

Software Proprietário.  
Desenvolvido por: [Zentix Tecnologia](https://zentix.eng.br)

Todos os direitos reservados © 2026.

</div>