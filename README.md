# ui5-troubleshooting-1
Troubleshooting UI5 apps


## Ex 1

O UI5 não é carregado na página com sucesso. Deveria carregar a versão mais recente possível usando alguma CDN da SAP

## Ex 2

O UI5 não é carregado na página com sucesso. Deveria carregar a versão 1.71.15 usando o CDN disponível no SAP Cloud Platform através de uma rota no arquivo neo-app.json

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

A app não usa containers HTML e sim uma visão. A visão é feita em JavaScript (o que não é a abordagem mais comum) para tornar o processo semelhante aos exercícios anteriores.
A tela não carrega. A tela deveria conter:

- 1 label
- 1 Input desabilitado com a informação do idioma sendo usado

A tela deve ser definida no arquivo `tela.view.js` e a mesma deve ser exibida através do arquivo `logica.js`

O label deve ser exibido acima do input.

## Ex 6

Rodar a app na versão 1.71.19

A app usa uma abordagem mais parecida com MVC. A tela é feita em XML, formato mais utilizado atualmente.

A tela deveria conter:

- 1 label
- 1 Input desabilitado (não é necessário preencher com o idioma)
- 1 Checkbox
- 1 Botão com a capacidade de escanear código de barras (mas nada deve acontecer ao escaner um)

Os controles devem ser organizados **verticalmente**.

A tela deve ser definida no arquivo `tela.view.xml` e a mesma deve ser exibida através do arquivo `logica.js`

**Não é necessário** tratar os eventos dos controles ou preencher as propriedades de forma dinâmica (via JS).


## Ex 7

Rodar a app na versão 1.71.19

A app usa uma abordagem mais parecida com MVC. A tela é feita em XML, formato mais utilizado atualmente.
A lógica JS foi inserida em uma Controller.

A tela deveria conter:

- 1 label
- 1 Input desabilitado
- 1 Checkbox
- 1 Botão com a capacidade de escanear código de barras

Os controles devem ser organizados **verticalmente**.

**É necessário**:
- preencher o input com o idioma
- aplicar RTL ao selecionar o checkbox
- exibir um `alert` com o código de barras ao ser escaneado

A tela deve ser definida no arquivo `tela.view.xml` e toda lógica do tratamento da tela no arquivo `logica.js`


## Ex 8

Rodar a app na versão 1.71.19

A tela está quebrada. Ajuste os pontos falhos de código para que a tela fique conforme a image abaixo:

Não é necessário implementar o controller.

![To be]("./ex8/ex8_to_be.jpg" "To be")

## Ex 9

Rodar a app na versão 1.71.19

Fazer exercício 8 antes.
A visão é carregada em [modo assíncrono](https://ui5.sap.com/1.71.19/#/topic/68d0e58857a647d49470d9f92dd859bd).
O botão `Salvar` deve ser exibido no rodapé mas a tela não está carregando depois da alteração.

## Ex 10
Rodar a app na versão 1.71.19
Substituindo o arquivo `index` por um Launchpad simples
