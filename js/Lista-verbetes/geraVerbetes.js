
//===================================== Texto dos Verbetes =====================================
let CCMMI_ControleModificadores = `
<p>
    <i>O propósito do Monitoramento e Controle do Projeto (PMC)
    (CMMI-DEV) é fornecer uma compreensão do progresso do
    projeto para que ações corretivas apropriadas possam ser 
    tomadas quando o desempenho do
    projeto se desviar significativamente do plano.</i>
</p>
<p>
    <i>Os produtos adquiridos podem precisar ser colocados sob o 
    gerenciamento de configuração pelo fornecedor e pelo projeto. 
    As provisões para a condução do gerenciamento de configuração devem ser estabelecidas em contratos com fornecedores.
    Métodos para assegurar que os dados estejam completos e consistentes devem ser estabelecidos e mantidos.</i>
</p>`;

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

//==============================================================================================

//==================================== Funções dos Verbetes ====================================
$(document).ready(function(){
    $("#CMMI_ControleModificadores").html(CCMMI_ControleModificadores);
    $("#MPSBR_ControleModificadores").html(MPSBR_ControleModificadores);
    $("#MPSBR_GrupoDeControleDeConfiguracao").html(MPSBR_GrupoDeControleDeConfiguracao);
    $("#MPSBR_Release").html(MPSBR_Release);
    $("#MPSBR_Versao").html(MPSBR_Versao);
    $("#MPSBR_Branch").html(MPSBR_Branch);
})
//==============================================================================================