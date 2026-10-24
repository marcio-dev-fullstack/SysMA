<div align="center">

  <br />
  
  <h1 align="center">🌿 SisMA</h1>

  <p align="center">
    <strong>Sistema Integrado de Gestão e Licenciamento Ambiental Municipal</strong>
    <br />
    <i>Modernização, transparência e eficiência na gestão pública de recursos ambientais.</i>
  </p>

  <p align="center">
    <a href="https://github.com/marcio-dev-fullstack/SysMA/stargazers"><img src="https://img.shields.io/github/stars/marcio-dev-fullstack/SysMA?style=for-the-badge&logo=github&color=2e7d32" alt="Stars"></a>
    <a href="https://github.com/marcio-dev-fullstack/SysMA/network/members"><img src="https://img.shields.io/github/forks/marcio-dev-fullstack/SysMA?style=for-the-badge&logo=github&color=2e7d32" alt="Forks"></a>
    <a href="https://github.com/marcio-dev-fullstack/SysMA/issues"><img src="https://img.shields.io/github/issues/marcio-dev-fullstack/SysMA?style=for-the-badge&logo=github&color=2e7d32" alt="Issues"></a>
    <a href="https://github.com/marcio-dev-fullstack/SysMA/blob/main/LICENSE"><img src="https://img.shields.io/github/license/marcio-dev-fullstack/SysMA?style=for-the-badge&logo=github&color=2e7d32" alt="License"></a>
  </p>

  <br />

</div>

---

## 🎯 Sobre o Projeto

O **SisMA** é uma plataforma *Full Stack* desenvolvida para digitalizar e otimizar todo o ciclo de vida do licenciamento ambiental em secretarias e órgãos municipais. O sistema substitui processos físicos por fluxos totalmente digitais, garantindo maior agilidade para empreendedores e rigor técnico para os analistas ambientais.

### 💡 Principais Impactos

* **Redução de Prazos:** Agilização na tramitação de pareceres técnicos e emissão de licenças.
* **Auditabilidade:** Histórico imutável de movimentações de cada processo.
* **Sustentabilidade:** Processos 100% digitais (zero papel).

---

## ⚡ Funcionalidades em Destaque

<details open>
  <summary><b>📜 Módulo de Licenciamento & Processos</b></summary>
  <ul>
    <li>Gestão unificada de Licença Prévia (LP), Licença de Instalação (LI) e Licença de Operação (LO).</li>
    <li>Anexação e validação de documentos técnicos (CAR, ART, Memorial Desritivo, RIMA).</li>
    <li>Emissão automatizada de certidões e licenças com verificação por QR Code / Hash.</li>
  </ul>
</details>

<details open>
  <summary><b>📊 Dashboard & Relatórios Gerenciais</b></summary>
  <ul>
    <li>Visão geral em tempo real com métricas de processos deferidos, indeferidos e em análise.</li>
    <li>Alertas automáticos de vencimento de licenças vigentes.</li>
    <li>Relatórios consolidados para prestação de contas e fiscalização.</li>
  </ul>
</details>

<details open>
  <summary><b>🔐 Controle de Acesso & Perfis (RBAC)</b></summary>
  <ul>
    <li><b>Requerente / Empreendedor:</b> Acompanhamento e abertura de solicitações.</li>
    <li><b>Analista Técnico:</b> Emissão de pareceres, vistorias e solicitação de readequações.</li>
    <li><b>Administrador:</b> Gestão de usuários, parâmetros municipais e auditoria do sistema.</li>
  </ul>
</details>

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

## 🤝 Contribuição

Contribuições para o **SisMA** são bem-vindas! Siga os passos abaixo:

1. Faça um **Fork** deste repositório.
2. Crie uma branch para sua funcionalidade: `git checkout -b feature/minha-funcionalidade`
3. Salve suas alterações e crie uma mensagem de commit: `git commit -m 'feat: Adiciona nova funcionalidade'`
4. Envie suas alterações: `git push origin feature/minha-funcionalidade`
5. Abra um **Pull Request**.

---

## 📄 Licença

Este projeto está sob a licença **MIT** — consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

---

<div align="center">

  <sub>Desenvolvido com carinho por <strong><a href="https://github.com/marcio-dev-fullstack">Márcio Rodrigues de Oliveira</a></strong></sub>

</div>