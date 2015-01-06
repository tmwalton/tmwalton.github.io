var player = 0;
var resultsMatrix = {};

$(document).ready(function(){

    $("#reset").on("click", function(){
        window.location.reload();
    });


    $(".squares").on("click", function(){

        if(player == 0){
            $(this).css({"background": "black"});
            $(this).children("span").text("X");
            $(this).unbind("click");
            resultsMatrix[$(this).attr("id")] = "X";
            player = 1;

        } else {

            $(this).css({"background": "blue"});
            $(this).children("span").text("O");
            $(this).unbind("click");
            resultsMatrix[$(this).attr("id")] = "O";
            player = 0;
        }


        console.log(resultsMatrix);

        // These conditions trigger a win message

        if(resultsMatrix.square1 == "X" && resultsMatrix.square2 == "X" && resultsMatrix.square3 == "X"){
            alert("Player X Wins!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square1 == "O" && resultsMatrix.square2 == "O" && resultsMatrix.square3 == "O"){
            alert("Player O Wins!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square4 == "X" && resultsMatrix.square5 == "X" && resultsMatrix.square6 == "X"){
            alert("Player X Wins!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square4 == "O" && resultsMatrix.square5 == "O" && resultsMatrix.square6 == "O"){
            alert("Player O Wins!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square7 == "X" && resultsMatrix.square8 == "X" && resultsMatrix.square9 == "X"){
            alert("Player X Wins!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square7 == "O" && resultsMatrix.square8 == "O" && resultsMatrix.square9 == "O"){
            alert("Player O Wins!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square1 == "X" && resultsMatrix.square4 == "X" && resultsMatrix.square7 == "X"){
            alert("Player X Wins!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square1 == "O" && resultsMatrix.square4 == "O" && resultsMatrix.square7 == "O"){
            alert("Player O Wins!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square2 == "X" && resultsMatrix.square5 == "X" && resultsMatrix.square8 == "X"){
            alert("Player X Wins!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square2 == "O" && resultsMatrix.square5 == "O" && resultsMatrix.square8 == "O"){
            alert("Player O Wins!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square3 == "X" && resultsMatrix.square6 == "X" && resultsMatrix.square9 == "X"){
            alert("Player X Wins!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square3 == "O" && resultsMatrix.square6 == "O" && resultsMatrix.square9 == "O"){
            alert("Player O Wins!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square1 == "X" && resultsMatrix.square5 == "X" && resultsMatrix.square9 == "X"){
            alert("Player X Wins!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square1 == "O" && resultsMatrix.square5 == "O" && resultsMatrix.square9 == "O"){
            alert("Player O Wins!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square7 == "X" && resultsMatrix.square5 == "X" && resultsMatrix.square3 == "X"){
            alert("Player X Wins!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square7 == "O" && resultsMatrix.square5 == "O" && resultsMatrix.square3 == "O"){
            alert("Player O Wins!!!"); $(".squares").unbind("click");}

        // These conditions trigger a tied game message

        else if(resultsMatrix.square1 == "X" && resultsMatrix.square2 == "X" && resultsMatrix.square5 == "X" && resultsMatrix.square6 == "X" && resultsMatrix.square7 == "X"){
            alert("The game is a tie!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square1 == "O" && resultsMatrix.square2 == "O" && resultsMatrix.square5 == "O" && resultsMatrix.square6 == "O" && resultsMatrix.square7 == "O"){
            alert("The game is a tie!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square3 == "X" && resultsMatrix.square4 == "X" && resultsMatrix.square8 == "X" && resultsMatrix.square9 == "X"){
            alert("The game is a tie!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square3 == "O" && resultsMatrix.square4 == "O" && resultsMatrix.square8 == "O" && resultsMatrix.square9 == "O"){
            alert("The game is a tie!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square1 == "X" && resultsMatrix.square3 == "X" && resultsMatrix.square5 == "X" && resultsMatrix.square6 == "X" && resultsMatrix.square8 == "X"){
            alert("The game is a tie!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square1 == "O" && resultsMatrix.square3 == "O" && resultsMatrix.square5 == "O" && resultsMatrix.square6 == "O" && resultsMatrix.square8 == "O"){
            alert("The game is a tie!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square2 == "X" && resultsMatrix.square4 == "X" && resultsMatrix.square7 == "X" && resultsMatrix.square9 == "X"){
            alert("The game is a tie!!!"); $(this).unbind("click");}

        else if(resultsMatrix.square2 == "O" && resultsMatrix.square4 == "O" && resultsMatrix.square7 == "O" && resultsMatrix.square9 == "O"){
            alert("The game is a tie!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square1 == "X" && resultsMatrix.square3 == "X" && resultsMatrix.square4 == "X" && resultsMatrix.square6 == "X" && resultsMatrix.square8 == "X"){
            alert("The game is a tie!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square1 == "O" && resultsMatrix.square3 == "O" && resultsMatrix.square4 == "O" && resultsMatrix.square6 == "O" && resultsMatrix.square8 == "O"){
            alert("The game is a tie!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square2 == "X" && resultsMatrix.square4 == "X" && resultsMatrix.square6 == "X" && resultsMatrix.square7 == "X" && resultsMatrix.square9 == "X"){
            alert("The game is a tie!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square2 == "O" && resultsMatrix.square4 == "O" && resultsMatrix.square6 == "O" && resultsMatrix.square7 == "O" && resultsMatrix.square9 == "O"){
            alert("The game is a tie!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square1 == "X" && resultsMatrix.square2 == "X" && resultsMatrix.square6 == "X" && resultsMatrix.square7 == "X" && resultsMatrix.square8 == "X"){
            alert("The game is a tie!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square1 == "O" && resultsMatrix.square2 == "O" && resultsMatrix.square6 == "O" && resultsMatrix.square7 == "O" && resultsMatrix.square8 == "O"){
            alert("The game is a tie!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square1 == "X" && resultsMatrix.square2 == "X" && resultsMatrix.square6 == "X" && resultsMatrix.square7 == "X" && resultsMatrix.square9 == "X"){
            alert("The game is a tie!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square1 == "O" && resultsMatrix.square2 == "O" && resultsMatrix.square6 == "O" && resultsMatrix.square7 == "O" && resultsMatrix.square9 == "O"){
            alert("The game is a tie!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square1 == "O" && resultsMatrix.square5 == "O" && resultsMatrix.square6 == "O" && resultsMatrix.square7 == "O" && resultsMatrix.square8 == "O"){
            alert("The game is a tie!!!"); $(".squares").unbind("click");}

        else if(resultsMatrix.square1 == "X" && resultsMatrix.square5 == "X" && resultsMatrix.square6 == "X" && resultsMatrix.square7 == "X" && resultsMatrix.square8 == "X"){
            alert("The game is a tie!!!"); $(".squares").unbind("click");}

    });

});
