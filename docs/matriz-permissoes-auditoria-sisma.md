# SisMA - Sistema Municipal de Meio Ambiente
## Documento de Arquitetura & Segurança: Matriz de Permissões RBAC & Rastreabilidade de Auditoria

Este documento estabelece as diretrizes normativas e técnicas de Controle de Acesso Baseado em Papéis (**RBAC - Role-Based Access Control**) do **SisMA** (Sistema Municipal de Meio Ambiente), detalhando os privilégios operacionais dos 4 perfis do sistema, as restrições estritas de deleção de registros e a arquitetura da Trilha de Auditoria Imutável[cite: 11].

---

## 1. Matriz de Permissões dos 4 Perfis de Acesso (RBAC)

O SisMA estrutura o acesso operacional em quatro perfis bem definidos para garantir o cumprimento do princípio do menor privilégio e a integridade jurídica de todos os processos ambientais municipais[cite: 11].

| Perfil de Acesso | Acessos & Funcionalidades Permitidas | Gestão de Usuários | Regra de Deleção |
| :--- | :--- | :--- | :--- |
| **1. Administrador** <br>`(adm)`[cite: 11] | Acesso irrestrito a todos os módulos: Gestão Geral, Licenciamento, Vistorias, Denúncias, WebGIS, Tabela de Taxas, Gestão de Servidores, Renovação da Licença do Sistema (90 dias) e Trilha de Auditoria/Logs[cite: 11]. | Pode cadastrar, editar e gerenciar todos os 4 perfis (ADM, Analista, Fiscal e Empresário)[cite: 11]. | Possui permissão técnica para exclusão e gerenciamento avançado[cite: 11]. |
| **2. Analista** <br>`(analista)`[cite: 11] | Gestão de Processos de Licenciamento Digital (LP, LI, LO, LAS): análise técnica, pareceres, solicitação de documentos complementares, deferimento e indeferimento[cite: 11]. | Pode cadastrar novos Fiscais Ambientais e Empresários/Requerentes[cite: 11]. | **PROIBIDO DELETAR**: Não pode excluir processos, pareceres ou documentos criados[cite: 11]. |
| **3. Fiscal** <br>`(fiscal)`[cite: 11] | Fiscalização e Vistorias de Campo: execução de ordens de serviço, emissão de Autos de Infração, notificações e envio de relatórios com fotos e vídeos MP4 georreferenciados[cite: 11]. | Sem permissão para cadastro ou gestão de usuários no sistema[cite: 11]. | **PROIBIDO DELETAR**: Não pode excluir autos, autos de infração, fotos ou registros[cite: 11]. |
| **4. Empresário** <br>`(empresario)`[cite: 11] | Portal do Requerente: solicitação de licenças ambientais, acompanhamento de processos próprios, envio de documentos e consulta a taxas[cite: 11]. | Sem permissão para gestão de usuários[cite: 11]. | **PROIBIDO DELETAR**: Não pode excluir solicitações ou documentos submetidos[cite: 11]. |

---

## 2. Política de Imutabilidade e Regras de Proteção de Dados

Para resguardar o município contra adulterações indevidas em processos administrativos e procedimentos fiscais, o SisMA implementa políticas estritas no nível do banco de dados (PostgreSQL / Supabase RLS)[cite: 11]:

* **Proibição Geral de Exclusão (Soft Delete / Imutabilidade):** Usuários dos perfis Analista, Fiscal e Empresário não possuem a prerrogativa de deletar registros uma vez criados no banco de dados. Qualquer alteração gera uma nova versão auditável[cite: 11].
* **Autenticidade de Evidências Multimídia:** As fotos e vídeos gravados durante vistorias de campo recebem marca d'água digital contendo a data, hora exata e as coordenadas geográficas capturadas pelo GPS do dispositivo[cite: 11].
* **Validação por Perfis (RBAC RLS):** As tabelas do Supabase ativam o mecanismo *Row Level Security* (RLS), garantindo que um Empresário visualize unicamente seus próprios processos, enquanto o Analista e o Fiscal acessem somente suas atribuições funcionais[cite: 11].

---

## 3. Rastreabilidade Total na Aba Auditoria (`Auditoria.tsx`)

A aba **Auditoria & Logs de Segurança** registra de forma contínua e imutável 100% das ações e transações executadas por qualquer um dos 4 perfis no sistema. Esse mecanismo garante a total auditabilidade do SisMA perante órgãos de controle interno, Tribunal de Contas e Ministério Público[cite: 11].

| Campo Registrado | Descrição & Tipo de Dado | Exemplo de Registro Capturado |
| :--- | :--- | :--- |
| **1. Usuário & Perfil**[cite: 12] | Nome completo, e-mail, CPF/CNPJ e *badge* do perfil ativo (ADM, Analista, Fiscal, Empresário)[cite: 12]. | MÁRCIO RODRIGUES DE OLIVEIRA<br>`(cda.marcio@gmail.com)` [ADM][cite: 12] |
| **2. Ação Realizada**[cite: 12] | Detalhamento completo da operação executada (Ex: Aprovação, Emissão de Auto, Cadastro de Usuário, Solicitação)[cite: 12]. | Emissão de Auto de Vistoria e Notificação (VIS-2026-0041)[cite: 12] |
| **3. Módulo do Sistema**[cite: 12] | Identificação do módulo funcional onde a ação foi disparada[cite: 12]. | Fiscalização & Vistorias de Campo[cite: 12] |
| **4. Horário & Data**[cite: 12] | *Timestamp* com precisão de segundos (Data e Hora local)[cite: 12]. | 2026-10-27 18:41:16[cite: 12] |
| **5. Endereço IP**[cite: 12] | Endereço IP da máquina *desktop* ou dispositivo móvel utilizado[cite: 12]. | 177.136.204.89 (Conexão Segura SSL)[cite: 12] |
| **6. Geolocalização GPS**[cite: 12] | Coordenadas geográficas exatas e identificação do município/estado de acesso[cite: 12]. | -12.9714, -38.5014 (Cuiabá / MT - GPS de Campo)[cite: 12] |