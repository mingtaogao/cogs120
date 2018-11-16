// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */

function initializePage() {
	$("#tutURL").text('arms.html');

	$("#testjs1.1").click(function(e) {
		$("#tutURL").text('chest.html');
	});

	$("#testjs1.2").click(function(e) {
		$("#tutURL").text('core.html');
	});

	$("#testjs1.3").click(function(e) {
		$("#tutURL").text('legs.html');
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}
