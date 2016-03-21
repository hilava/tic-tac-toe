// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

  var lastMove = null;
  //listen for click
  $('div.box').on("click", function setTicOrTac(event){
    //check if the box has been selected
    if($(this).text() === ""){
      //if the last move was made by 'O' update 'X', else update 'O'
      if(lastMove === null || lastMove === 'O'){
        lastMove = 'X';
      }
      else {
        lastMove = 'O';
      }
      //update the value in the box
      $(this).text(lastMove);
      //check if there's a winner
      if(checkWin()){
        //alert who won
        alert("The Winner is:" + lastMove);
      }
    }
  });

  function checkWin(){
    //check if any of the 8 win combinations return true
    var combo1 = $('#cell0').text() ===$('#cell1').text() && $('#cell1').text()===$('#cell2').text() && $('#cell0').text()!=="";
    var combo2 = $('#cell0').text() ===$('#cell3').text() && $('#cell3').text()===$('#cell6').text() && $('#cell0').text()!=="";
    var combo3 = $('#cell0').text() ===$('#cell4').text() && $('#cell4').text()===$('#cell8').text() && $('#cell0').text()!=="";
    var combo4 = $('#cell3').text() ===$('#cell4').text() && $('#cell4').text()===$('#cell5').text() && $('#cell3').text()!=="";
    var combo5 = $('#cell1').text() ===$('#cell4').text() && $('#cell4').text()===$('#cell7').text() && $('#cell1').text()!=="";
    var combo6 = $('#cell2').text() ===$('#cell4').text() && $('#cell4').text()===$('#cell6').text() && $('#cell2').text()!=="";
    var combo7 = $('#cell6').text() ===$('#cell7').text() && $('#cell7').text()===$('#cell8').text() && $('#cell6').text()!=="";
    var combo8 = $('#cell2').text() ===$('#cell5').text() && $('#cell5').text()===$('#cell8').text() && $('#cell2').text()!=="";
    var win = combo1 || combo2 || combo3 || combo4 || combo5 || combo6 || combo7 || combo8;
    //style the win cells
    if(win){
      if(combo1){
        $('#cell0').addClass("win");
        $('#cell1').addClass("win");
        $('#cell2').addClass("win");
      }
      if(combo2){
        $('#cell0').addClass("win");
        $('#cell3').addClass("win");
        $('#cell6').addClass("win");
      }
      if(combo3){
        $('#cell0').addClass("win");
        $('#cell4').addClass("win");
        $('#cell8').addClass("win");
      }
      if(combo4){
        $('#cell3').addClass("win");
        $('#cell4').addClass("win");
        $('#cell5').addClass("win");
      }
      if(combo5){
        $('#cell4').addClass("win");
        $('#cell4').addClass("win");
        $('#cell7').addClass("win");
      }
      if(combo6){
        $('#cell2').addClass("win");
        $('#cell4').addClass("win");
        $('#cell6').addClass("win");
      }
      if(combo7){
        $('#cell6').addClass("win");
        $('#cell7').addClass("win");
        $('#cell8').addClass("win");
      }
      if(combo8){
        $('#cell2').addClass("win");
        $('#cell5').addClass("win");
        $('#cell8').addClass("win");
      }
    }
    return win;
  }

  //listen for the button click, set all to boxes to "" and make apply the original style
  $('button').on("click", function reset(event){
    $('div.box').text("");
    $('#cell0').removeClass("win");
    $('#cell1').removeClass("win");
    $('#cell2').removeClass("win");
    $('#cell3').removeClass("win");
    $('#cell4').removeClass("win");
    $('#cell5').removeClass("win");
    $('#cell6').removeClass("win");
    $('#cell7').removeClass("win");
    $('#cell8').removeClass("win");
    //set last move to 'O' in order to always start with 'X'
    lastMove = 'O';
  });
});
