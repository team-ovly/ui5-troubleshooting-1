sap.ui.jsview("ovly.tela", {
   
   getControllerName: function() {
      return null;
   },

   createContent: function(oController) {
    	var aControles = [];
    	
		var oLabel = new sap.m.Label();
		oLabel.setText("Idioma");
		aControles.push(oLabel);
	
		var oInput = new sap.m.Input();
		var sLanguage = sap.ui.getCore().getConfiguration().getLanguage();
		oInput.setValue(sLanguage); 
		oInput.setEnabled(false);
		aControles.push(oLabel);
		
		return aControles;
	
   }

});