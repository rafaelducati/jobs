<a href="http://sabion.com.br">
    <img src="https://avatars2.githubusercontent.com/u/26559852?s=200&v=4" alt="Sabion Digital" width="120"/>
</a>

# front-end developer challenge

## Features utilizadas:

- React Hooks ao invés de uso de Javascript classes e seu lifecycle.
- Gerenciamento de estados global via Context API.
- Organização de componentes para cada elemento interno do cartão.
- React CSS Transition, React Swith Transition e React Transition Group para as animações de interação nos elementos.
- Em contrapartida à componentização, ao invés de utilizar CSS-in-JS foram utilizado poucos arquivos de estilização no formato SCSS, com adoção de uma abordagem mista de BEM e SMACSS.
- Utilização do pacote Create React App como base do projeto.
- Modo responsivo sem background azul de fundo presente no desktop, para otimização do espaço e UI minimalista.

## Instruções para visualização:

1. Abra o terminal de sua escolha e baixe o repositório através do comando **git clone git@github.com:rafaelducati/jobs.git**
2. Acesse a pasta **frontend-card**
3. Na pasta frontend-card, abra o console e digite **npm install** para instalar as dependências.
4. Após o término da instalação, ainda no console digite **npm start** para inicializar o projeto.
5. Após a inicialização, acesse **http://localhost:3000/** em seu browser preferido para visualizar o projeto.

## Possíveis melhorias gerais: design apresentado

-  Ocultamento dos caracteres do campo de CVV quando exibido no layout do cartão, conforme digitado no campo de formulário, simulando um caracter de asterisco * mais comum ao campo de senha. Essa abordagem pode dar mais segurança ao usuário, pois mais pessoas podem estar visualizando a tela, quando em desktop.
- Apresentação de status de erro para cada campo do formulário, gerando feedback assertivo ao usuário.

## Possíveis melhorias gerais: código enviado

- Componentização mais minuciosa de elementos do formulário: input de texto, botões, labels.
- Implementação de CSS Modules para otimização, prevendo utilização em grandes projetos.
- Organização do estilzação baseado nos componentes, separados por pasta.
- Implementação das transições de interação mais afinadas com o gif animado apresentado.

