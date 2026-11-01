# Manual Técnico e Especificação dos 16 Instrumentos Oficiais de Fiscalização Ambiental da SEMMARH

**Prefeitura Municipal de Conceição do Araguaia – Estado do Pará**  
**Secretaria Municipal de Meio Ambiente e Recursos Hídricos (SEMMARH)**  
**Sistema de Meio Ambiente (SisMA)**  

---

## 1. Visão Geral e Fundamentação Jurídica

O presente documento estabelece a especificação técnica e jurídica completa dos **16 Instrumentos Oficiais de Fiscalização Ambiental** utilizados pelos Agentes de Fiscalização da **Secretaria Municipal de Meio Ambiente e Recursos Hídricos (SEMMARH)** de Conceição do Araguaia - PA [51, 66]. 

A padronização destes documentos digitais e impressos no **SisMA (Sistema de Meio Ambiente)** visa assegurar a legalidade, a ampla defesa, o contraditório, a rastreabilidade geográfica (GPS/PostGIS) e a segurança jurídica de todo o **Processo Administrativo Punitivo Ambiental** [49, 52, 67].

### 1.1. Legislações Municipais de Regência

1. **Decreto Municipal nº 137, de 16 de Abril de 2015** [49]:
   - Regulamenta os instrumentos e procedimentos administrativos de fiscalização ambiental incumbidos aos Agentes de Fiscalização Ambiental [49].
   - Enumera taxativamente os 16 instrumentos oficiais de fiscalização no seu **Art. 3º, incisos I a XVI** [51, 52].
   - Fixa prazos para defesa (15 dias para Auto de Infração) e obrigações emergenciais (até 20 dias para Termo de Notificação) [53].
2. **Lei Municipal nº 1.181, de 05 de Agosto de 2013** [65]:
   - Institui a atuação e o **Poder de Polícia Administrativa Ambiental** dos servidores lotados na SEMMARH [65].
   - Define a fé pública dos fiscais [66] e institui a competência do Conselho Municipal de Meio Ambiente (**COMAM**) como instância recursal [69, 70].
3. **Decreto Municipal nº 018, de 31 de Janeiro de 2017** [33]:
   - Regulamenta a fiscalização e limpeza de terrenos baldios, construções abandonadas e quintais desocupados [33, 35, 36].
   - Estabelece o prazo de **20 dias improrrogáveis** para execução do serviço de limpeza [36], prazo de **10 dias** para interposição de recurso [36] e pena de multa de **20 VRM (Valor de Referência do Município)** [37], acrescida de 25% a título de custas administrativas caso o município execute o serviço [46].
4. **Lei Municipal nº 1.430, de 18 de Março de 2024** [71]:
   - Dispõe sobre a proteção, bem-estar e fiscalização contra maus-tratos a animais domésticos e de tração [71, 72].
   - Fixa intimação com prazo de **7 a 8 dias** para regularização de instalações [81, 86], regras para recolhimento, microchipagem, laudos veterinários e feiras de adoção [86, 88, 91].

---

## 2. Padrão Visual, Diagramação e Sistema de Vias em 3 Cores

Todos os instrumentos oficiais gerados pelo SisMA seguem o modelo de **Impressão em 3 Vias** com cores distintas e destinação obrigatória [4, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 32]:

* **1ª VIA (BRANCA)**: Destinada à instrução do **Processo Administrativo Punitivo** na SEMMARH [4, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 32].
* **2ª VIA (ROSA / AZUL)**: Entregue diretamente ao **Autuado, Notificado ou Beneficiário** [4, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 32].
* **3ª VIA (AMARELA)**: Retida na **Unidade Emitente / Arquivo da Fiscalização** [4, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 32].

### Cabeçalho Oficial Unificado:
```
========================================================================================
                                 ESTADO DO PARÁ
                   PREFEITURA MUNICIPAL DE CONCEIÇÃO DO ARAGUAIA
             SECRETARIA MUNICIPAL DE MEIO AMBIENTE E RECURSOS HÍDRICOS
                  Paço Mul. Dom Joseph Patrick Hanhan, Trav. Ver. Virgulina Coelho, Nº 1145, 
                  Bairro São Luiz II, CEP: 68540-000 – Fone: (94) 3421-0033 / 2166
========================================================================================
```

---

## 3. Especificação Detalhada dos 16 Instrumentos Oficiais

```
========================================================================================
INSTRUMENTO 01: AUTO DE INFRAÇÃO
========================================================================================
- Código Oficial: AI-0001 (Série Numerada)
- Amparo Legal: Decreto Municipal nº 137/2015, Art. 3º, I e Art. 5º, § 4º, I; Lei Municipal nº 1.181/2013, Art. 6º, I.
- Finalidade: Aplicar sanções administrativas por infrações ambientais constatadas em vistoria.
- Campos Obrigatórios:
  1. Identificação da Ação: Dia, Mês, Ano, Hora, Número Sequencial.
  2. Infrator: Nome Completo / Razão Social, CNPJ/CPF, Endereço, Bairro, CEP, Telefone, Atividade Exercida.
  3. Descrição do Fato: Descrição detalhada da infração e coordenadas GPS.
  4. Quadro de Penalidades Selecionáveis (Checkboxes):
     ( ) Advertência
     ( ) Multa simples ou diária (Valor R$)
     ( ) Apreensão de animais, produtos, instrumentos, petrechos, equipamentos e veículos
     ( ) Inutilização do produto
     ( ) Interdição do produto
     ( ) Suspensão de venda ou fabricação do produto
     ( ) Embargo, desfazimento ou demolição de obra
     ( ) Interdição parcial/total do estabelecimento
     ( ) Cassação de Alvará de Licença
     ( ) Prestação de serviços à comunidade
  5. Agente Autuante: Nome do Servidor, Matrícula nº e Cargo/Função.
  6. Testemunhas: Nome e Endereço de 2 (duas) testemunhas presentes.
  7. Ciência do Autuado: Nome, RG/CPF e Assinatura de recebimento da 1ª via.
- Prazo Legítimo de Defesa: 15 (quinze) dias corridos contados da ciência do autuado (Art. 5º, § 4º, I do Decreto 137/2015).

========================================================================================
INSTRUMENTO 02: TERMO DE NOTIFICAÇÃO
========================================================================================
- Código Oficial: TN-0001
- Amparo Legal: Decreto Municipal nº 137/2015, Art. 3º, II e Art. 5º, § 4º, II; Lei Municipal nº 1.181/2013, Art. 6º, II.
- Finalidade: Notificar o infrator para cumprir obrigações ambientais emergenciais para cessar ou mitigar danos.
- Campos Obrigatórios:
  1. Qualificação do Notificado: Razão Social/Nome, CNPJ/CPF, Endereço, Atividade, Bairro, CEP, Telefone.
  2. Determinação Fiscal: "NOTIFICADO A: [Descrição detalhada da exigência administrativa ou sanitária]".
  3. Advertência Legal: Aviso expresso de que o descumprimento acarretará autuação e imposição de multa.
  4. Validação: Assinatura do Servidor/Matrícula, Cargo, Assinatura de Ciente do Notificado com RG, Data e Hora.
- Prazo para Cumprimento: No máximo 20 (vinte) dias corridos (Art. 5º, § 4º, II do Decreto 137/2015).

========================================================================================
INSTRUMENTO 03: TERMO DE APREENSÃO
========================================================================================
- Código Oficial: TA-0001
- Amparo Legal: Decreto Municipal nº 137/2015, Art. 3º, III; Lei Municipal nº 1.181/2013, Art. 6º, III.
- Finalidade: Apreensão imediata de produtos, subprodutos ou equipamentos utilizados na infração ambiental.
- Campos Obrigatórios:
  1. Identificação do Evento: Data, Hora, Local da Apreensão, Bairro, Município.
  2. Relação de Itens: Descrição minuciosa dos Produtos e/ou Equipamentos Apreendidos (quantidade, estado).
  3. Vínculo Processual: Referência expressa ao Auto de Infração nº correlato.
  4. Infrator Vinculado: Lavrado contra (Nome Completo) e CPF/CNPJ.
  5. Encerramento: Assinatura do Servidor (Matrícula), Responsável Ciente e 2 Testemunhas.

========================================================================================
INSTRUMENTO 04: TERMO DE APREENSÃO E GUARDA
========================================================================================
- Código Oficial: TAG-0001
- Amparo Legal: Decreto Municipal nº 137/2015, Art. 3º, IV; Lei Municipal nº 1.181/2013, Art. 6º, IV.
- Finalidade: Documentar a apreensão e formalizar a instituição depositária dos bens apreendidos.
- Campos Obrigatórios:
  1. Dados da Apreensão: Data, Hora, Local, Estado Geral do Bem (Novo, Usado, Danificado).
  2. Situação do Infrator: Com identificação / Sem identificação.
  3. Fiel Depositário Institucional: Razão Social da Instituição Responsável, CNPJ, Endereço, Bairro, CEP e Nome do Responsável.
  4. Descrição dos Itens: Relação completa de Petrechos ou Equipamentos sob guarda.
  5. Cláusula de Compromisso: Obrigação de manter os bens no estado em que foram recebidos até deliberação do órgão.

========================================================================================
INSTRUMENTO 05: TERMO DE EMBARGO E/OU INTERDIÇÃO
========================================================================================
- Código Oficial: TEI-0001
- Amparo Legal: Decreto Municipal nº 137/2015, Art. 3º, V; Lei Municipal nº 1.181/2013, Art. 6º, V.
- Finalidade: Paralisação imediata de obras, atividades ou estabelecimentos que estejam causando degradação.
- Campos Obrigatórios:
  1. Identificação do Local: Data, Hora, Nome do Empreendimento, Área Afetada, Bairro, Município.
  2. Vínculo Legal: Referência ao Auto de Infração nº.
  3. Motivação do Embargo: Fundamentação técnica detalhada das causas da interdição/embargo.
  4. Infrator Notificado: Nome Completo e CPF/CNPJ do responsável.
  5. Validação: Assinatura do Servidor/Matrícula, Assinatura do Infrator Ciente e 2 Testemunhas.

========================================================================================
INSTRUMENTO 06: TERMO DE DOAÇÃO
========================================================================================
- Código Oficial: TD-0001
- Amparo Legal: Decreto Municipal nº 137/2015, Art. 3º, VI; Lei Municipal nº 1.181/2013, Art. 6º, VI.
- Finalidade: Transferir a propriedade de bens apreendidos não perecíveis a entidades públicas ou filantrópicas.
- Campos Obrigatórios:
  1. Origem dos Bens: Referência ao Termo de Apreensão nº e Data de Apreensão.
  2. Relação de Produtos: Descrição quantitativa e qualitativa dos bens doados.
  3. Entidade Beneficiária: Razão Social da Instituição, CNPJ, Endereço, Bairro e Nome do Responsável.
  4. Assinaturas: Servidor Responsável (Matrícula), Beneficiário Ciente e 2 Testemunhas.

========================================================================================
INSTRUMENTO 07: TERMO DE SOLTURA DE ANIMAIS SILVESTRES
========================================================================================
- Código Oficial: TSAS-0001
- Amparo Legal: Decreto Municipal nº 137/2015, Art. 3º, VII; Lei Municipal nº 1.181/2013, Art. 6º, VII.
- Finalidade: Registrar a devolução de espécimes da fauna silvestre ao seu habitat natural.
- Campos Obrigatórios:
  1. Dados da Soltura: Data, Hora, Local/Área da Soltura, Bairro, Município (com coordenadas GPS do bioma).
  2. Identificação da Fauna: Nome vulgar e científico dos Animais Silvestres libertados e quantidade.
  3. Testemunhas & Fiscal: Assinatura do Servidor/Matrícula e de 2 Testemunhas acompanhantes do manejo.

========================================================================================
INSTRUMENTO 08: TERMO DE COMPROMISSO
========================================================================================
- Código Oficial: TC-0001
- Amparo Legal: Decreto Municipal nº 137/2015, Art. 3º, VIII; Lei Municipal nº 1.181/2013, Art. 6º, VIII.
- Finalidade: Acordo administrativo no qual o compromissado se obriga a adequar suas atividades no prazo fixado.
- Campos Obrigatórios:
  1. Qualificação: Razão Social/Nome, CNPJ/CPF, Endereço, Atividade, Bairro, CEP, Telefone.
  2. Cláusula de Ajuste: Exigências legais enumeradas e prazo concedido em dias para cumprimento.
  3. Sanção por Descumprimento: Advertência explícita de autuação imediata em caso de inobservância.
  4. Aceite: Assinatura do Servidor/Matrícula, Assinatura de Ciente do Notificado, RG, Data e Hora.

========================================================================================
INSTRUMENTO 09: TERMO DE COMPROMISSO DE FIEL DEPOSITÁRIO
========================================================================================
- Código Oficial: TCFD-0001
- Amparo Legal: Decreto Municipal nº 137/2015, Art. 3º, IX; Lei Municipal nº 1.181/2013, Art. 6º, IX.
- Finalidade: Nomear guardião legal temporário para maquinários, veículos e produtos apreendidos.
- Campos Obrigatórios:
  1. Fiel Depositário: Razão Social/Nome Completo, CNPJ/CPF, Endereço, Bairro, CEP, Telefone.
  2. Descrição dos Bens: Marca, Modelo, Número de Série, Placa, Cor e Estado de Conservação de veículos/máquinas.
  3. Termo de Responsabilidade: Fiel depositário assume a obrigação civil e penal pela guarda dos bens até deliberação do COMAM ou SEMMARH.
  4. Assinaturas: Servidor/Matrícula, Fiel Depositário Ciente e 2 Testemunhas.

========================================================================================
INSTRUMENTO 10: TERMO DE APREENSÃO E GUARDA DE ANIMAIS SILVESTRES
========================================================================================
- Código Oficial: TAGAS-0001
- Amparo Legal: Decreto Municipal nº 137/2015, Art. 3º, X; Lei Municipal nº 1.181/2013, Art. 6º, X.
- Finalidade: Registrar apreensão de espécimes da fauna silvestre mantidos ilegalmente e definir a fiel custódia.
- Campos Obrigatórios:
  1. Dados da Operação: Data, Hora, Local da Apreensão, Bairro, Município.
  2. Identificação dos Animais: Nome vulgar, quantidade e situação de saúde dos animais apreendidos.
  3. Situação do Infrator: Com identificação / Sem identificação (Auto de Infração nº vinculante).
  4. Custódia Técnica: Razão Social da Instituição/CRIAS/CETAS responsável pela guarda, Endereço e Nome do Responsável.
  5. Compromisso Sanitário: Obrigação de manter os animais com alimentação, cuidados veterinários e abrigo até deliberação.

========================================================================================
INSTRUMENTO 11: TERMO DE APREENSÃO E GUARDA DE PRODUTOS FLORESTAIS
========================================================================================
- Código Oficial: TAGPF-0001
- Amparo Legal: Decreto Municipal nº 137/2015, Art. 3º, XI; Lei Municipal nº 1.181/2013, Art. 6º, XI.
- Finalidade: Formalizar apreensão de madeira, carvão ou vegetação nativa extraída ilegalmente.
- Campos Obrigatórios:
  1. Dados da Ocorrência: Data, Hora, Local da Apreensão, Bairro, Município.
  2. Produtos Florestais: Nome vulgar das essências florestais, volume (m³ ou st) ou peso (kg/ton).
  3. Depositário Florestal: Razão Social da Instituição guardiã, Endereço e Nome do Responsável.
  4. Assinaturas: Servidor Responsável (Matrícula), Responsável pela Guarda e 2 Testemunhas.

========================================================================================
INSTRUMENTO 12: TERMO DE INUTILIZAÇÃO DE PETRECHOS, PRODUTOS E EQUIPAMENTOS
========================================================================================
- Código Oficial: TIPPE-0001
- Amparo Legal: Decreto Municipal nº 137/2015, Art. 3º, XII; Lei Municipal nº 1.181/2013, Art. 6º, XII.
- Finalidade: Registrar a destruição/inutilização no local da infração de petrechos predatórios ou carcaças inviáveis.
- Campos Obrigatórios:
  1. Dados do Fato: Data, Hora, Local da Inutilização, Bairro, Município, Área.
  2. Objeto da Inutilização: Especificação exata dos materiais destruídos (redes predatórias, motosserras, fornos ilegais, etc.).
  3. Justificativa Técnica: Motivo da impossibilidade de recolhimento ou risco iminente.
  4. Vínculo Legal: Número do Auto de Infração correspondente e CPF/CNPJ do infrator.
  5. Assinaturas: Servidor Autuante (Matrícula), Responsável Ciente e 2 Testemunhas da Inutilização.

========================================================================================
INSTRUMENTO 13: TERMO DE DOAÇÃO DE PRODUTOS PERECÍVEIS
========================================================================================
- Código Oficial: TDPP-0001
- Amparo Legal: Decreto Municipal nº 137/2015, Art. 3º, XIII; Lei Municipal nº 1.181/2013, Art. 6º, XIII.
- Finalidade: Destinar sumariamente alimentos e pescados apreendidos a instituições de caridade para evitar perecimento.
- Campos Obrigatórios:
  1. Apreensão: Data, Hora, Local da Apreensão, Bairro, Município, Auto de Infração nº.
  2. Relação de Perecíveis: Nome, quantidade (kg), estado de conservação e laudo sanitário sumário.
  3. Instituição Beneficiária: Razão Social, CNPJ, Endereço, Bairro, Município e Nome do Responsável Recebedor.
  4. Assinaturas: Servidor (Matrícula), Beneficiário Ciente e de Acordo, e 2 Testemunhas.

========================================================================================
INSTRUMENTO 14: RELATÓRIO DE FISCALIZAÇÃO
========================================================================================
- Código Oficial: RF-0001
- Amparo Legal: Decreto Municipal nº 137/2015, Art. 3º, XIV e Art. 4º, § 1º; Lei Municipal nº 1.181/2013, Art. 6º, XIV.
- Finalidade: Documento técnico circunstanciado que descreve minuciosamente os fatos apurados em campo.
- Campos Obrigatórios:
  1. Dados Operacionais: Local da Fiscalização, Data da Operação, Horário, Fiscais Ambientais Envolvidos.
  2. Motivação da Ação: Denúncia anonimizada, Ordem de Serviço ou Fiscalização de Rotina.
  3. Ocorrências Constatadas: Descrição minuciosa do dano ambiental e coordenadas GPS do ponto.
  4. Orientações / Medidas Corretivas: Determinações imediatas tomadas pelos fiscais.
  5. Anexos Fotográficos & Mídia: Vínculo com arquivos digitais (fotos de alta resolução e vídeos MP4 georreferenciados).
  6. Validação: Assinaturas de todos os Fiscais (Matrículas) e Visto do Superior Hierárquico / Coordenador.

========================================================================================
INSTRUMENTO 15: LAUDO TÉCNICO AMBIENTAL
========================================================================================
- Código Oficial: LT-0001
- Amparo Legal: Decreto Municipal nº 137/2015, Art. 3º, XV e Art. 2º, parágrafo único, "b"; Lei Municipal nº 1.181/2013, Art. 6º, XV.
- Finalidade: Parecer pericial emitido por técnico habilitado para valoração do dano ambiental e enquadramento das penalidades.
- Campos Obrigatórios:
  1. Identificação do Perito/Técnico: Nome do Servidor, Matrícula, Cargo e Registro Profissional (CREA, CRBio, etc.).
  2. Corpo do Laudo: Metodologia adotada, extensão da área afetada (ha ou m²), valoração pecuniária do dano e potencial poluidor.
  3. Conclusão Pericial: Parecer opinativo conclusivo para subsidiar a decisão do Secretário e do COMAM.
  4. Anexos: Mapas vetoriais PostGIS, croquis e relatório fotográfico de campo.

========================================================================================
INSTRUMENTO 16: TERMO DE SUBSTITUIÇÃO DE FIEL DEPOSITÁRIO
========================================================================================
- Código Oficial: TSFD-0001
- Amparo Legal: Decreto Municipal nº 137/2015, Art. 3º, XVI; Lei Municipal nº 1.181/2013, Art. 6º, XVI.
- Finalidade: Transferir legalmente a responsabilidade da guarda de bens apreendidos de um depositário para outro.
- Campos Obrigatórios:
  1. Vínculo do Termo Anterior: Referência ao Termo de Guarda e Depósito de Produtos/Equipamentos nº original.
  2. Fiel Depositário Substituído (Anterior): Razão Social/Nome e CNPJ/CPF do guardião desonerado.
  3. Novo Fiel Depositário (Substituto): Razão Social/Nome, CNPJ/CPF, Endereço e Nome do Novo Responsável.
  4. Relação dos Bens Transferidos: Descrição completa e conferência do estado de conservação dos itens.
  5. Validação Mútua: Assinaturas do Depositário Substituído, do Novo Depositário Ciente, da Autoridade Competente e de 2 Testemunhas.
========================================================================================
```

---

## 4. Arquitetura de Software e Integração no SisMA

### 4.1. Mapeamento de Componentes React & TypeScript
No pacote **`sisma-completo-v1.zip`**, a gestão e emissão dos 16 instrumentos estão integradas nos seguintes módulos da aplicação SPA:

1. **`src/pages/NovoAutoInfracao.tsx`**:
   - Interface dinâmica para seleção dos 16 tipos de termos e autos durante a lavratura.
   - Captura automática de coordenadas via API de Geolocalização do navegador/dispositivo móvel.
   - Suporte a upload de evidências multimídia (fotos JPEG/PNG e vídeos em formato MP4).
2. **`src/pages/Fiscalizacao.tsx`**:
   - Listagem geral das vistorias, ordens de serviço e autos lavrados pelos fiscais.
   - Modal de Visualização/Impressão em **3 Vias (Branca, Rosa/Azul e Amarela)** com formatação idêntica ao papel timbrado da SEMMARH.
3. **`src/types/index.ts`**:
   - Definição estrita das interfaces TypeScript (`Vistoria`, `AutoInfracao`, `LogAuditoria`).
4. **`supabase/schema.sql`**:
   - Tabela `public.vistorias` e `public.logs_auditoria` preparadas com colunas espaciais PostGIS (`geometry(Point, 4326)`) para rastreamento de cada auto emitido.

### 4.2. Estrutura do Banco de Dados no Supabase / PostgreSQL

```sql
-- Tabela para Armazenamento dos 16 Instrumentos e Vistorias
CREATE TABLE IF NOT EXISTS public.vistorias (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    numero_auto VARCHAR(50) NOT NULL UNIQUE,
    tipo_instrumento VARCHAR(100) NOT NULL, -- Enum correspondente aos 16 instrumentos
    alvo_razao_social VARCHAR(255) NOT NULL,
    cpf_cnpj VARCHAR(20) NOT NULL,
    fiscal_id UUID REFERENCES public.profiles(id),
    fiscal_nome VARCHAR(255) NOT NULL,
    fiscal_matricula VARCHAR(50) NOT NULL,
    tipo_infracao TEXT NOT NULL,
    enquadramento_legal TEXT NOT NULL,
    valor_multa NUMERIC(12,2) DEFAULT 0.00,
    prazo_defesa_dias INT DEFAULT 15,
    coordenadas GEOMETRY(Point, 4326),
    fiel_depositario_nome VARCHAR(255),
    fiel_depositario_cpf_cnpj VARCHAR(20),
    beneficiario_doacao VARCHAR(255),
    status VARCHAR(50) DEFAULT 'Concluída',
    fotos_urls TEXT[],
    videos_urls TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE public.vistorias ENABLE ROW LEVEL SECURITY;

-- Política de Acesso: Leitura pública, gravação apenas por fiscais e admin
CREATE POLICY "Permitir leitura para autenticados" ON public.vistorias FOR SELECT USING (true);
CREATE POLICY "Permitir inserção por Fiscais e Admins" ON public.vistorias FOR INSERT WITH CHECK (
    EXISTS (
        SELECT 1 FROM public.profiles 
        WHERE profiles.id = auth.uid() AND profiles.perfil IN ('adm', 'fiscal')
    )
);
```

---

## 5. Considerações Finais e Conformidade de Produção

Com a inclusão e estruturação rigorosa dos **16 Instrumentos Oficiais de Fiscalização da SEMMARH**, o **SisMA (v1.0)** assegura aos fiscais, analistas e gestores municipais de Conceição do Araguaia uma ferramenta de alta fidelidade técnica e jurídica, eliminando o risco de nulidades nos processos administrativos ambientais.
