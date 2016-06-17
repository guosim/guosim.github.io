$(document).ready(function() {

	$('.projects figure').each(function(i){
		setTimeout(function(){
			$('.projects figure').eq(i).addClass('is-showing');
		}, 100 * (i+1));
	});


});