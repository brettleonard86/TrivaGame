$(document).ready(function(){

	var correctAnswers = ["The Soup Nazi", "Brett Leonard"];


	$('#submit').on('click', function() {


		console.log('question 1 answer =', $('#question_1 input:radio:checked').attr('value'));
		console.log('is question 1 correct? ', ($('#question_1 input:radio:checked').attr('value') == correctAnswers[0]));


	});

});

