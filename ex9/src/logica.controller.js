sap.ui.controller("ovly.logica", {
	onInit: function () {
	
	}
});

// File: controller/MainController.controller.js
sap.ui.require(["sap/ui/core/mvc/XMLView", "sap/ui/core/mvc/Controller"], function(XMLView, Controller) {
	return Controller.extend("ovly.logica.MainController", {
		// ...
		onSomeEventTriggered: function() {
			// instantiate view using create-factory
			XMLView.create({
				viewName: "samples.view.CustomView"
			})
			.then(function(oCustomView) {
				// View loaded ...
			})
		}

	});
 });