var player = 0;
var winningPlayer = '';
var results = { '0-0':'', '0-1':'', '0-2':'',
                '1-0':'', '1-1':'', '1-2':'',
                '2-0':'', '2-1':'', '2-2':'',};

var doesPlayerWin = function(){
  if(winningPlayer != ''){
    alert("Player " + winningPlayer + " wins!");
    $(".squares").unbind("click");
  }
};

var tieGame = function(){
  alert("The game is a tie!");
  $(".squares").unbind("click");
};

$(document).ready(function(){

    $("#reset").on("click", function(){
        window.location.reload();
    });

    $(".squares").on("click", function(){

        if(player == 0){
            $(this).css({"background": "black"});
            $(this).children("span").text("X");
            $(this).unbind("click");
            results[$(this).attr("id")] = "X";
            player = 1;}

        else {

            $(this).css({"background": "blue"});
            $(this).children("span").text("O");
            $(this).unbind("click");
            results[$(this).attr("id")] = "O";
            player = 0;}

        console.log(results);

        // Evaluate horizontal win conditions
        if     (results['0-0'] == results['0-1'] && results['0-1'] == results['0-2'] && results['0-0'] != ''){
          winningPlayer = results['0-0'];
          doesPlayerWin();}

        else if(results['1-0'] == results['1-1'] && results['1-1'] == results['1-2'] && results['1-0'] != ''){
          winningPlayer = results['1-0'];
          doesPlayerWin();}

        else if(results['2-0'] == results['2-1'] && results['2-1'] == results['2-2'] && results['2-0'] != ''){
          winningPlayer = results['2-0'];
          doesPlayerWin();}

        // Evaluate vertical win conditions
        else if(results['0-0'] == results['1-0'] && results['1-0'] == results['2-0'] && results['0-0'] != ''){
          winningPlayer = results['0-0'];
          doesPlayerWin();}

        else if(results['0-1'] == results['1-1'] && results['1-1'] == results['2-1'] && results['0-1'] != ''){
          winningPlayer = results['0-1'];
          doesPlayerWin();}

        else if(results['0-2'] == results['1-2'] && results['1-2'] == results['2-2'] && results['0-2'] != ''){
          winningPlayer = results['0-2'];
          doesPlayerWin();}

        // Evaluate diagonal win conditions
        else if(results['0-0'] == results['1-1'] && results['1-1'] == results['2-2'] && results['0-0'] != ''){
          winningPlayer = results['0-0'];
          doesPlayerWin();}

        else if(results['2-0'] == results['1-1'] && results['1-1'] == results['0-2'] && results['2-0'] != ''){
          winningPlayer = results['2-0'];
          doesPlayerWin();}

        // Evaluate tie conditions
        else if((results['0-2'] == results['1-0'] && results['1-0'] == results['2-1'] && results['2-1'] == results['2-2'] && results['0-2'] != '') ||
                (results['0-1'] == results['1-0'] && results['1-0'] == results['2-0'] && results['2-0'] == results['2-2'] && results['0-1'] != '') ||
                (results['0-0'] == results['0-2'] && results['0-2'] == results['1-2'] && results['1-2'] == results['2-0'] && results['2-0'] == results['2-1'] && results['0-0'] != '') ||
                (results['0-0'] == results['0-1'] && results['0-1'] == results['1-1'] && results['1-1'] == results['1-2'] && results['1-2'] == results['2-0'] && results['0-0'] != '') ||
                (results['0-0'] == results['0-2'] && results['0-2'] == results['1-1'] && results['1-1'] == results['1-2'] && results['1-2'] == results['2-1'] && results['0-0'] != '') ||
                (results['0-0'] == results['0-2'] && results['0-2'] == results['1-0'] && results['1-0'] == results['1-2'] && results['1-2'] == results['2-1'] && results['0-0'] != '') ||
                (results['0-0'] == results['0-2'] && results['0-2'] == results['1-1'] && results['1-1'] == results['1-2'] && results['1-2'] == results['2-1'] && results['0-0'] != '') ||
                (results['0-1'] == results['1-0'] && results['1-0'] == results['1-2'] && results['1-2'] == results['2-0'] && results['2-0'] == results['2-2'] && results['0-1'] != '') ||
                (results['0-0'] == results['0-1'] && results['0-1'] == results['1-2'] && results['1-2'] == results['2-0'] && results['2-0'] == results['2-1'] && results['0-0'] != '') ||
                (results['0-0'] == results['0-1'] && results['0-1'] == results['1-2'] && results['1-2'] == results['2-0'] && results['2-0'] == results['2-2'] && results['0-0'] != '') ||
                (results['0-0'] == results['1-1'] && results['1-1'] == results['1-2'] && results['1-2'] == results['2-0'] && results['2-0'] == results['2-1'] && results['0-0'] != '')){

                  tieGame();

               };

      });

});
