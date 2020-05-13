sap.ui.require([
		"sap/ui/core/mvc/Controller"
	],
	function (Controller) {
		return Controller.extend("ovly.logica", {
			
			ex1: function(){
				windows.open("../ex1/ex1.html", "_blank");
			},
			
			onOpenGitHub: function(){
				// TODO: abrir repositório próprio do GitHub e não o original abaixo
				window.open("https://github.com/team-ovly/ui5-troubleshooting-1");
			}
			
		});
	});