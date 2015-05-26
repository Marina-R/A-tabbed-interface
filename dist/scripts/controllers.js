$(document).ready(start);

function start () {
	var $tab = $('button');
	var $text = $('section');

	$tab.click(function (e) {
		$tab.css('background-color', 'white')
		var thisTab = e.target;
		$(thisTab).css('background-color', 'grey');
		var tabClass = e.target.className;
		var tabId = e.target.id;
		$text.hide();
		$('.'+tabClass).show();
	});
}