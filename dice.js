$(document).ready(function() {

    //main
    addListener();

});


function addListener() {
    $('.button').click(function() {
        console.log('hej');
        var nrDice = getNrDice();
        var diceRoll = getDiceRoll(nrDice);
        console.log(diceRoll);
    });
}

function getNrDice(){
    return $('.radioBtn:checked').val();
}

function getDiceRoll(nrDice){
    console.log("nrDice: "+nrDice);
    var sum = 0;
    var diceRolled = [];
    diceRolled[0]=0;
    
    for(var val=0; val < nrDice; val++){
        console.log("loopar, varv "+val);
      var x = Math.floor((Math.random() * 6) + 1);
      console.log("slumptal: "+x);
//      sum = sum + x;
        diceRolled[0] = diceRolled[0] + x;
        diceRolled.push(x);
    };
//    console.log(diceRolled);
    return diceRolled;
}
