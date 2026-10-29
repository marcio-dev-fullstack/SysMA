# 🌳 SisMA - Sistema de Meio Ambiente (v1.0.0 Oficial)

> **Stack Moderno**: `React 19` | `TypeScript 5.7` | `Vite 6.0` | `Tailwind CSS v4` | `Supabase (PostGIS)` | `GitHub Pages`

O **SisMA (Sistema de Meio Ambiente)** é uma solução digital municipal para gestão, licenciamento e fiscalização ambiental.

---

## 🚀 Destaques da Versão v1.0.0 (Gestão de Licenciamento & Validade)

- 🔑 **Chave de Licença de Uso**: Painel de gerenciamento de licença integrado na barra inferior da Tela de Login.
- ⏳ **Relógio em Contagem Regressiva (90 a 0 dias)**: Monitoramento contínuo em dias da validade da chave do sistema.
- 🚫 **Regra de Bloqueio Automático (0 Dias Restantes)**:
  - Quando a licença atinge **0 dias**, o acesso aos perfis de **Analista Ambiental** e **Fiscal Ambiental** é automaticamente suspenso por segurança.
  - **Exceção de Acesso**: O perfil **Administrador (ADM)** mantém autorização de entrada para gerenciar e realizar a renovação da chave.
- ⚠️ **Alerta em Tela (Faltando <= 5 Dias)**:
  - Banner proeminente na tela de login e no cabeçalho interno avisando sobre a proximidade do vencimento.
- 📲 **Avisos Diários via WhatsApp (Do 5º ao 0º Dia)**:
  - Disparador de notificações automáticas via WhatsApp para os telefones dos usuários cadastrados (ADM, Analistas e Fiscais), enviando 1 mensagem por dia do dia 5 até o dia do bloqueio.
- 🧪 **Simulador Interativo de Teste**: Botões na tela de login para testar instantaneamente cenários de 90 dias, 15 dias, 5 dias, 1 dia e 0 dias (expirada), além da opção de renovação por +90 dias.

---

## ✨ Módulos e Funcionalidades do Sistema

- 🔑 **Autenticação & Seleção de Perfis (`Login.tsx`)**: Login com 3 perfis predefinidos (**ADM**, **Analista** e **Fiscal**) com simulação de licença e avisos WhatsApp.
- 📊 **Painel Geral (`Dashboard.tsx`)**: Indicadores ambientais em tempo real, licenças concedidas, vistorias agendadas e mapa georreferenciado.
- 📄 **Licenciamento Ambiental (`Licenciamento.tsx`)**: Tabela de processos com filtros de busca e status.
- 🧙‍♂️ **Wizard de Nova Licença (`NovaLicencaWizard.tsx`)**: Formulário em 4 etapas (Requerente, Localização WebGIS, Atividade/Porte e Upload em PDF).
- 📜 **Análise & Licença Digital (`DetalheProcesso.tsx`)**: Emissão de parecer técnico e geração de certificado de licença em PDF com QR Code de autenticidade.
- 🔍 **Fiscalização de Campo (`Fiscalizacao.tsx`)**: Ordens de serviço e vistorias.
- ⚖️ **Lavratura de Auto de Infração (`NovoAutoInfracao.tsx`)**: Formulário de autuação com cálculo de multa e fotos georreferenciadas.
- 📣 **Portal do Cidadão (`Denuncias.tsx`)**: Registro anônimo de denúncias ecológicas com acompanhamento por protocolo.
- 🗺️ **WebGIS & Zoneamento (`ZoneamentoGIS.tsx`)**: Consulta de sobreposição com APPs e Unidades de Conservação em PostGIS.
- 👥 **Gestão de Servidores (`GestaoUsuarios.tsx`)**: Controle de permissões (RBAC) e telefones WhatsApp.
- 🏷️ **Tabela de Taxas Ambientais (`EnquadramentoAtividades.tsx`)**: Classificação por Potencial Poluidor (PMP) e Porte.
- 🔍 **Portal de Transparência (`ConsultaPublica.tsx`)**: Validação pública de licenças emitida por CNPJ/Processo.
- 🛡️ **Trilha de Auditoria (`Auditoria.tsx`)**: Registro imutável de todas as ações de segurança.

---

## 🚀 Como Executar o Projeto Localmente

```bash
npm install
npm run dev
```

Acesse no navegador: `http://localhost:5173/`
