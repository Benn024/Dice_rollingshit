$(document).ready(function() {

    //main
    addListener();

});


function addListener() {
    $('.button').click(function() {
        console.log('hej');
        var nrDice = getNrDice();
        var diceRoll = getDiceRoll(nrDice);
        console.log(nrDice);
    });
}

function getNrDice(){
    return $('.radioBtn:checked').val();
}

function diceRoll(){
    var x = Math.floor((Math.random() * 10) + 1);
}
