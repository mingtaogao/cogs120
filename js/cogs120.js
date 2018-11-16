// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */

function initializePage() {

	$("#testjs1.1").click(function(e) {
		alert('yo')
		document.getElementById("tutURL").setAttribute("href",'chest.html');
	});

	$("#testjs1.2").click(function(e) {
		document.getElementById("tutURL").setAttribute("href",'core.html');
	});

	$("#testjs1.3").click(function(e) {
		document.getElementById("tutURL").setAttribute("href",'legs.html');
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}
