// fade snips 

setTimeout(function() {

	$('.snips-loader').fadeOut(500);
	$('.snips').delay(550).fadeIn(500);
}, 500)



// search hack
$('.search-bar input').on('focus', () => ($('.search-bar').css('background', 'linear-gradient(to right, orange , yellow, green, cyan, blue, violet)')));
$('.search-bar input').on('focusout', () => ($('.search-bar').css('background', 'none')));
$('.ctc').click(function(e){
	var snip = $(this).siblings('pre').text();
	$('#clip-copy-off-screen').val(snip).select();
	document.execCommand("copy");
	copied_pop();
})
var sound = new Howl({
  src: ['ding.mp3'],
  volume: .2
});




function copied_pop(){
	$('.pop-wrap').show();
	$('.pop-wrap').fadeOut(1500);
	sound.play();
}

$('input').keyup(function(e){
	var searchTerm = $(this).val().toUpperCase();
	var cards = $('.card-title').val();
	// $('.card').hide();
	if (searchTerm.length > 0) {
		$('.card').show();
		$('.card-title:not(:contains('+searchTerm+'))').parent().parent().hide(); 
	} else {
		$('.card').show();
	}

});