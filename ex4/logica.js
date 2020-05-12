
function desenhaTela() {

	var oLabel = new sap.m.Label();
	oLabel.setText("Idioma"); // TODO: encontrar documentação deste metodo na documentação
	oLabel.placeAt("container_label");

	var oInput = new sap.m.Input();
	var sLanguage = sap.ui.getCore().getConfiguration().getLanguage(); // TODO: encontrar documentação deste metodo na documentação
	oInput.setValue(sLanguage); // TODO: encontrar documentação deste metodo na documentação
	oInput.setEnabled(false);
	oInput.placeAt("container_input");

	// TODO: ler a documentação do 'constructor' da classe abaixo
	var oCheckbox = new sap.m.CheckBox({
		text: "Right To Left", // Texto inicial
		selected: false,
		select: function (oControlEvent) {
			var oParameters = oControlEvent.getParameters();
			var bSelected = oParameters.selected;
			sap.ui.getCore().getConfiguration().setRTL(bSelected);
		}
	});
	oCheckbox.setText("RTL"); // Texto alterado em tempo de execução
	oCheckbox.placeAt("container_checkbox");

	var aTemas = ["sap_bluecrystal", "sap_belize", "sapfiori3", ];
	for (var i = 1; i <= aTemas.length; i++) {
		var sTema = aTemas[i];
		
		new sap.m.RadioButton({
			text: sTema,
			select: mudarTema
		}).placeAt("container_radiobuttons");
		
	} 
}

function onPressButton(oInformacoesDoEvento) {
	// Um pouco de JS nativo para adicionar a classe 'sapUiBody' no 'body' da página
	// Na prática esta classe será usada em qualquer app

	// TODO: encontrar as chamadas abaixo na documentação do DevDocs ou MDN
	var oDomBody = document.querySelector("#corpo_da_pagina");
	oDomBody.classList.add("sapUiBody");
}

function mudarTema(oInformacoesDoEvento){
	var oRadioButtonSelecionado = oInformacoesDoEvento.getSource();
	var sTema = oRadioButtonSelecionado.setText(); // pega o nome do tema
	sap.ui.getCore().applyTheme(sTema);
}