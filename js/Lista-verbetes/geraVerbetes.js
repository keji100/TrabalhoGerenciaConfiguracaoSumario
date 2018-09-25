Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @iagoslim Sign out
1
0 2 keji100/TrabalhoGerenciaConfiguracaoSumario
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights
TrabalhoGerenciaConfiguracaoSumario/js/Lista-verbetes/geraVerbetes.js
3769234  6 minutes ago
@iagoslim iagoslim Atualização de verbete
@emmanoelf @keji100 @iagoslim
     
101 lines (84 sloc)  6.68 KB

//===================================== Texto dos Verbetes =====================================
let CCMMI_ControleModificadores = `
<p>
    O propósito do Monitoramento e Controle do Projeto (PMC)
    (CMMI-DEV) é fornecer uma compreensão do progresso do
    projeto para que ações corretivas apropriadas possam ser 
    tomadas quando o desempenho do
    projeto se desviar significativamente do plano.
</p>
<p>
    Os produtos adquiridos podem precisar ser colocados sob o 
    gerenciamento de configuração pelo fornecedor e pelo projeto. 
    As provisões para a condução do gerenciamento de configuração devem ser estabelecidas em contratos com fornecedores.
    Métodos para assegurar que os dados estejam completos e consistentes devem ser estabelecidos e mantidos.
</p>`;

let CMMI_GrupoDeControleDeConfiguracao = `
<p>
    Obtenha autorização apropriada antes de alterar os itens de configuração
    são inseridos no sistema de gerenciamento de configuração.
</p>
<p>
    Por exemplo, a autorização pode vir do CCB, do gerente de projeto, do produto
    proprietário ou o cliente. 
</p>`;

let CMMI_QualidadeDeSoftware = `
<p>
    O SEI (Desenvolvedora do CMMI - Software Engineering Institute) adotou a premissa do gerenciamento de processos, “a qualidade de um
    sistema ou produto é altamente influenciado pela qualidade do processo usado para
    desenvolvê-lo e mantê-lo ”, e definiu CMMs que incorporam essa premissa.
</p>
`

let CMMI_ProcessoDeSoftware = `
<p>
    Para engenharia de software, o projeto detalhado é focado em produtos de software
    e desenvolvimento de componentes. A estrutura interna dos componentes do produto é
    definida, esquemas de dados são gerados, algoritmos são desenvolvidos e
    heurísticas são estabelecidas para fornecer recursos de componentes do produto com o intuito
    satisfazer os requisitos atribuídos.
</p>
`

let MPSBR_ControleModificadores = `
<p>Tem função de executar a função de controle da configuração de forma sistemática, armazenando todas as informações geradas durante o andamento das solicitações de modificação e relatando essas informações aos envolvidos, assim como estabelecido pela função de contabilização da situação da configuração.</p>`;

let MPSBR_GrupoDeControleDeConfiguracao = `
<p>Grupo de pessoas responsável por avaliar e aprovar ou rejeitar modificações propostas em itens de configuração, e certificar que as modificações aprovadas foram implementadas.</p>`;

let MPSBR_Release = `
<p>É necessário, ainda, estabelecer um controle para a liberação de <em>baseline</em> aos interessados e autorizados contendo tanto versões para a produção quanto produtos de trabalho fechados, incluindo o empacotamento e a entrega.</p>
<p>A liberação de <em>baselines</em> contendo versões para a produção ocorre o quanto antes, de forma a minimizar o retrabalho necessário para adaptar as modificações ao restante do software. Idealmente, essas liberações ocorrem de forma incremental e contínua, visando aumentar a transparência do processo Gerência de Configuração como um todo. Por exemplo, após uma solicitação de modificação, o solicitante passa a ser um interessado direto na liberação futura do software.</p>`;

let MPSBR_Versao = `
<p>Em geral, os itens de configuração são projetados, implementados e testados independentemente, são identificados unicamente pelo seu nome e a sua MPS.BR – Guia de Implementação de Software – Parte 2:2016 24/66 numeração de versão retrata seu posicionamento na hierarquia e os documentos ou parte de documentos que descrevem o item de configuração fazem parte do item.</p>
<p>Para cada item de configuração, identificado no plano de Gerência de Configuração, são usualmente definidos:</p>
<ul>
    <li>um identificador único</li>
    <li>o nível de controle pretendido, por exemplo, apenas armazenar no repositório, também controlar a versão e ainda incluir em <em>baseline</em></li>
    <li>o momento de se aplicar este controle</li>
    <li>um responsável</li>
</ul>`

let MPSBR_Branch = `
<p>É a definição de uma estratégia que permita desenvolvimento em paralelo sobre uma base única de programas fontes.</p>`;

let MPSBR_ProcessoDeSoftware = `
<p>O MPS.BR, Melhoria do Processo de Software Brasileiro, é um programa da Softex com apoio do Ministério da Ciência, Tecnologia, Inovações e Comunicações (MCTIC). Com inicio em dezembro de 2003, o programa tem como objetivo melhorar a capacidade de desenvolvimento de software, serviços e as práticas de gestão de RH na indústria de TIC.</p>`;

let MPSBR_QualidadeDeSoftware = `
<p>O programa MPS.BR conta com uma Unidade de Execução do Programa (UEP) e duas estruturas de apoio para a execução de suas atividades, o Fórum de Credenciamento e Controle (FCC) e a Equipe Técnica do Modelo (ETM). Por meio destas estruturas, o MPS.BR pode contar com a participação de representantes de universidades, instituições governamentais, centros de pesquisa e de organizações privadas, os quais contribuem com suas visões complementares que agregam valor e qualidade ao programa. </p>`;

let MPSBR_AuditoriaFuncionalDeConfig = `
<p>Abrange a revisão dos planos, dados, metodologia e resultados dos testes, assegurando que a release cumpra corretamente o que foi especificado.</p>`

let RUP_QualidadeDeSoftware = `
<p>O Rup atribui a responsabilidade de controlar a qualidade do produto a todos os envolvimentos, sejam os desenvolvedores bem como seus gestores e responsáveis pela gerência de configruação do projeto. </p>`;


//==============================================================================================

//==================================== Funções dos Verbetes ====================================
$(document).ready(function(){
    $("#CMMI_ControleModificadores").html(CCMMI_ControleModificadores);
    $("#CMMI_GrupoDeControleDeConfiguracao").html(CMMI_GrupoDeControleDeConfiguracao);
    $("#CMMI_ProcessoDeSoftware").html(CMMI_ProcessoDeSoftware);
    $("#CMMI_QualidadeDeSoftware").html(CMMI_QualidadeDeSoftware);
    $("#MPSBR_ControleModificadores").html(MPSBR_ControleModificadores);
    $("#MPSBR_GrupoDeControleDeConfiguracao").html(MPSBR_GrupoDeControleDeConfiguracao);
    $("#MPSBR_Release").html(MPSBR_Release);
    $("#MPSBR_Versao").html(MPSBR_Versao);
    $("#MPSBR_Branch").html(MPSBR_Branch);
    $("#MPSBR_ProcessoDeSoftware").html(MPSBR_ProcessoDeSoftware);
    $("#MPSBR_QualidadeDeSoftware").html(MPSBR_QualidadeDeSoftware);
    $("#MPSBR_AuditoriaFuncionalDeConfig").html(MPSBR_AuditoriaFuncionalDeConfig);
    $("#RUP_QualidadeDeSoftware").html(RUP_QualidadeDeSoftware);
})
//==============================================================================================
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
Press h to open a hovercard with more details.