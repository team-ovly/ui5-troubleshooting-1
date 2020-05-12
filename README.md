# ui5-troubleshooting-1
Troubleshooting UI5 apps


## Ex 1

O UI5 não é carregado na página com sucesso. Deveria carregar a versão mais recente possível usando alguma CDN da SAP

## Ex 2

O UI5 não é carregado na página com sucesso. Deve carregar a versão 1.71.15 usando o CDN disponível no SAP Cloud Platform através do arquivo neo-app.json

## Ex 3

Tela não carrega. A tela deveria conter:

- 1 label
- 1 Input desabilitado com a informação do idioma sendo usado
- 1 checkbox com a capacidade de habilitar RTL na aplicação
- 1 botão que adiciona a classe sapUiBody no body da página

## Ex 4

Fazer exercício 3 antes.
Rodar app na versão 1.69.x

Aplicação precisa ser alterada para que apareça um "RadioButton" para cada tema suportado por esta versão.
Veja a página [Supported Combinations of Themes and Libraries](https://ui5.sap.com/1.69.0/#/topic/38ff8c27b022475a92b591bcf6262551) documentação para mais informações de quais são os temas suportados

Ao selecionar o RadioButton, o tema deve ser aplicado.

A aplicação deveria ser carregada com o tema "sap_belize" por padrão.


## Ex 5

Rodar a app na versão 1.71.19

A app usa uma abordagem mais parecida com MVC.
Tela não carrega. A tela deveria conter:

- 1 label
- 1 Input desabilitado com a informação do idioma sendo usado

A tela deve ser definida no arquivo `tela.view.js` e a mesma deve ser posta na tela através do arquivo `logica.js`
