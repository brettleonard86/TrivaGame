$(document).ready(function() {
    //var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive]

    var correct = 0;
    var wrong = 0;
    var timer = 50;

    var interval = setInterval(function() {
        timer--;
        $("#countDown").html("Time Remaining: " + timer);
        if (timer === 0) {
            clearInterval(interval);
            gameEnd();
        }
    }, 1000);

    /////Play the music////
    $("#theme").get(0).play();

    $("#submit").click(function() {
        ///////////////question 1/////////////////

        if ($("#questionOne input:radio:checked").attr("value") === "Newman") {
            correct++;
            $("#correct").html("Correct: " + correct)
            console.log("#1 Correct")
            $("#answerNumberOne").html("Correct!")
        } else {
            console.log("#1 Newman")
            wrong++;
            $("#wrong").html("Wrong: " + wrong)
            $("#answerNumberOne").html("Wrong! It was NNNNewwwmman.")
        }
        //////////Question 2///////////
        if ($("#questionTwo input:radio:checked").attr("value") === "BL") {
            correct++;
            $("#correct").html("Correct: " + correct)
            console.log("#2 Correct")
            $("#answerNumberTwo").html("Correct!")
        } else {
            console.log("#2 Beautiful Lineswoman")
            wrong++;
            $("#wrong").html("Wrong: " + wrong)
            $("#answerNumberTwo").html("Wrong! It was Beautiful Lineswoman.")
        }
        //////////////Question 3/////////////
        if ($("#questionThree input:radio:checked").attr("value") === "deadBody") {
            correct++;
            $("#correct").html("Correct: " + correct)
            console.log("#3 Correct")
            $("#answerNumberThree").html("Correct!")
        } else {
            console.log("#3 Dead Body")
            wrong++;
            $("#wrong").html("Wrong: " + wrong)
            $("#answerNumberThree").html("Wrong! It was the cadaver in the open surgery room.")
        }
        /////////////question 4////////////////
        if ($("#questionFour input:radio:checked").attr("value") === "kozmo") {
            correct++;
            $("#correct").html("Correct: " + correct)
            console.log("#4 Correct")
            $("#answerNumberFour").html("Correct!")
        } else {
            console.log("#4 Kramer")
            wrong++;
            $("#wrong").html("Wrong: " + wrong)
            $("#answerNumberFour").html("Wrong! It was Kramer.")
        }
        //////////////Question 5///////////////
        if ($("#questionFive input:radio:checked").attr("value") === "manzier") {
            correct++;
            $("#correct").html("Correct: " + correct)
            console.log("#5 Correct")
            $("#answerNumberFive").html("Correct!")
        } else {
            console.log("#5 Wrong, it was Manzier")
            wrong++;
            $("#wrong").html("Wrong: " + wrong)
            $("#answerNumberFive").html("Wrong! It was decorating a Christmas Tree. ")
        }

        $("#theme").get(0).pause();
        console.log("stop music")
        clearInterval(interval);

    });

    function gameEnd(){
	correct = 0;
	wrong = 0;
	}

});



