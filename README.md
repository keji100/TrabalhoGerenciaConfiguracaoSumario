


# Glossário de Gerência de Configuração

<img src="https://upload.wikimedia.org/wikipedia/pt/9/91/Lp_logo_unisinos.png" />

## Objetivo
Este repositório tem como objetivo armazenar o trabalho da cadeira de "Gerência da Configuração de Software" da UNISINOS 2º Semestre/2018.
Neste trabalho, será desenvolvido um glossário sobre verbertes relacionados a cadeira, como por exemplo, CMMI, IEEE, RUP e MPS-BR. Além do desenvolvimento das atividades ser feito de forma colaborativa pelos integrantes do grupo.
Os verbetes que serão descritos nesse projeto são:
-	<b>Status da configuração</b>
-	<b>	Controle de modificadores</b>
-	<b>Controle de modificadores</b>
-	<b>Grupo/Comitê de Controle de Configuração</b>
-	<b>Release</b>
-	<b>Versão</b>
-	<b>Branch/Ramo</b>
-	<b>Processo de Software</b>
-	<b>Qualidade de Software</b>
-	<b>Auditoria funcinal da Configuração</b>
-	<b>Acoplamento</b>
## Ferramentas
Para este projeto serão utilizadas as seguintes ferramentas abaixo:
<table>
	 <tr>
		 <td>Ferramenta</td> 
		 <td>Descrição</td>
		 <td>Observações</td>
	</tr>
	<tr>
		<td>CSS </td>
		<td><b>CSS</b> é a sigla para o termo em inglês Cascading Style Sheets, que traduzido para o português significa Folha de Estilo em Cascatas. O <b>CSS</b> é fácil de aprender, entender e é facilmente utilizado com as linguagens de marcação HTML ou XHTML</td> 
		<td>Não será utilizado nenhum tipo de framework</td>
	</tr>
	<tr>
		<td>HTML</td> 
		<td><b>HTML</b> é uma das linguagens que utilizamos para desenvolver websites. O acrônimo <b>HTML</b> vem do inglês e significa Hypertext Markup Language ou em português Linguagem de Marcação de Hipertexto</td>
		<td>Sem observações no momento.</td>
	</tr>
	<tr>
		<td>JS (JQuery)</td> 
		<td><b>JavaScript</b> é uma linguagem de programação interpretada. Foi originalmente implementada como parte dos navegadores web para que scripts pudessem ser executados do lado do cliente e interagissem com o usuário sem a necessidade deste script passar pelo servidor, controlando o navegador, realizando comunicação assíncrona e alterando o conteúdo do documento exibido.</td>
		<td>Será utilizando também, o framework Jquery. Para mais informações, <a href="https://jquery.com/">clique aqui<a></td>
	</tr>
	<tr>
	<td>GitDesktop</td>
	<td>O GitDestkop é um programa responsável por realizar comandos para commitar os códigos, criar branchs, excluir informações entre outros. Porém sua vantagem é que tudo é realizado por uma interface gráfica, que aumenta a produtividade do desenvolvedor, já que não precisa decorar os comandos do terminal. </td>
	<td> Sem observações no momento.</td>
	</tr>
</table>

## Pré-requisitos
- Ter um navegador com compatibilidade com HTML5. (Preferência pelo navegador Google Chrome, em versões mais recentes).

## Estrutura de pastas
A estrutura do projeto é composta pelas seguintes pastas abaixo:
<table>
	<tr>
		<td><b>Pasta</b></td>
		<td><b>Descrição</b></td>
	</tr>
	<tr>
		<td>CSS</td>
		<td>Pasta para armazenamento de arquivos de estilos</td>
	</tr>
	<tr>
		<td>IMG</td>
		<td>Pasta para armazenamento de imagens do projeto</td>
	</tr>
	<tr>
		<td>JS</td>
		<td>Pasta para armazenamento de arquivos JavaScript</td>
	</tr>
</table>

## Autores
Os autores listados abaixo são todos alunos da Instituição Unisinos - São Leopoldo. A tabela tem como intuito mostrar as funções desempenhadas, onde durante o processo podem sofrer alterações. 
<table>
	<tr>
		<td><b>Nome do colaborador</br></td>
		<td><b>Função</b></td>
	</tr>
	<tr>
		<td>Willian Keji</td>
		<td>Gerente de configuração e Desenvolvedor</td>
	</tr>
	<tr>
		<td>Iago Slim</td>
		<td>Desenvolvedor e Gerente de projeto</td>
	</tr>
	<tr>
		<td>Emmanoel Ferreira</td>
		<td>Desenvolvedor</td>
	</tr>
	<tr>
		<td>Rodrigo Müller</td>
		<td>Desenvolvedor</td>
	</tr>
</table>

## Funcionalidade por função
As funcionalidades serão limitadas por tipo de função para maior controle de alterações, conforme a tabela abaixo.

<table>
	<tr>
		<td><b>Função</b></td>
		<td><b>Acesso a Branch Revision</b></td>
		<td><b>Acesso a Branch Master</b></td>
	</tr>
	<tr>
		<td>Gerente de configuração</td>
		<td>Leitura, Alteração e Criação</td>
		<td>Leitura, Alteração e Criação</td>
	</tr>
	<tr>
		<td>Gerente de projeto</td>
		<td>Leitura, Alteração e Criação</td>
		<td>Leitura</td>
	</tr>
	<tr>
		<td>Desenvolvedor</td>
		<td>Leitura, Alteração e Criação</td>
		<td>Leitura</td>
	</tr>
	<tr>
		<td>Analista de sistemas</td>
		<td>Leitura</td>
		<td>Leitura</td>
	</tr>
	<tr>
		<td>Qualquer tipo de usuário</td>
		<td>Leitura</td>
		<td>Leitura</td>
	</tr>
</table>

## Instalação do projeto
Para realizar o clone do projeto, seguir o comando abaixo
```
git clone https://github.com/keji100/TrabalhoGerenciaConfiguracaoSumario.git
```
## Politica de Gerência de configuração
Para realização de commits na Branch <i>"MASTER"</i>, deverão ser autorizados pelo Gerente  de configuração. Com isso, somente o Gerente de configuração terá autorização de commitar os arquivos como autorizar. 

### Efetuando uma alteração

Inicialmente o desenvolvedor deve fazer uma cópia da Branch Master. Então as altarações devem ser feitas em cima desta cópia da linha 
Master, em seu repositório local. Após realizar suas alterações, ele deve efetuar o commit para a linha de revisão, onde sua alterção 
será submetida a uma revisão. Esta revisão decidirá se essa nova alteração irá para linha Master.

## Branches

Sobre as branches
- <b> Master:</b> Está branch só terá arquivos estáveis, conforme validações encontradas na "Política de Gerência de configuração".

- <b>Revision:</b> Tem como objetivo, armazenar os arquivos que foram desenvolvidos, mas ainda não validados pelo colaboradores.
