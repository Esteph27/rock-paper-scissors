// add click event to buttons;

// $('#btn-r').click(function() {selectWeapon()}) 
// $('#btn-p').click(function() {selectWeapon()})
// $('#btn-s').click(function() {selectWeapon()}) 

let player1Score = 0
let computerScore = 0 

//---------- when player selects ROCK (function below is repeated for PAPPER and SCISSORS)

$("#btn-r").click(function() {
    // player 1 selects rock
    chooseWeapon("ROCK")
    $('#player-1-icon').css("background", "url(assets/images/ROCK.jpg)");
    //$('#player-1-icon').css("background-size", "cover");

    // computer selects random
    const random = Math.floor((Math.random() * 3) + 1);
    console.log(random);

    if (random === 1) {
        $('#player-2-icon').css("background", "url(assets/images/ROCK.jpg)");
        //$('#player-2-icon').css("background-size", "cover");
    } else if (random === 2) {
        $('#player-2-icon').css("background", "url(assets/images/PAPER.jpg)");
       // $('#player-2-icon').css("background-size", "cover");
    } else if (random === 3) {
        $('#player-2-icon').css("background", "url(assets/images/SCISSORS.jpg)");
        //$('#player-2-icon').css("background-size", "cover");
    }

    // works out score and score bar fills in for winner 
    if (random === 3) {
        console.log("Player 1 wins!");
        player1Score++
        $("#score-bar-1-fill").css("width", (100/5) * player1Score + "%")
        console.log("Player score", player1Score);
    } else if (random == 2) {
        console.log("You lost - haha");
        computerScore++
        $("#score-bar-2-fill").css("width", (100/5) * computerScore + "%")
        console.log("Computer score", computerScore);
    } 

    // check width of score fill bar 
    console.log($("#score-bar-1-fill").css("width"))

    // when score bar fill for player 1 reaches it's max (300px), delcare winner;
    if ($("#score-bar-1-fill").css("width") === "300px") {
        setTimeout(function(){ 
            alert("Congrats, you won! Play Again?");
            location.reload();
        }, 300);
        console.log('player 1 won whole game');
    } 

    // when score bar fill for player 2 reaches it's max (300px), delcare winner;
    if ($("#score-bar-2-fill").css("width") === "300px") {
        setTimeout(function(){ 
            alert("Oh dear, looks like you lost this time. Try again?");
            location.reload();
        }, 300);
        console.log('computer won whole game');
    } 

    // when score bar fill for either Player 1 or Computer reaches it's max on mobile screen (120px), declare winner;
    const isMobile = window.matchMedia("only screen and (max-width: 425px)").matches;
    if (isMobile) {
        if ($("#score-bar-1-fill").css("width") === "120px") {
            setTimeout(function(){ 
                alert("Congrats, you won! Play Again?");
                location.reload();
            }, 300);
            console.log('player 1 won whole game');
        } else if ($("#score-bar-2-fill").css("width") === "120px") {
            setTimeout(function(){ 
                alert("Oh dear, looks like you lost this time. Try again?");
                location.reload();
            }, 300);
            console.log('computer won whole game');
        } 
    }
})
  
//---------- when player selects PAPER
$("#btn-p").click(function() {
    chooseWeapon("PAPER")
    $('#player-1-icon').css("background", "url(assets/images/PAPER.jpg)");
   //$('#player-1-icon').css("background-size", "cover");

    const random = Math.floor((Math.random() * 3) + 1);
    console.log(random);

    if (random === 1) {
        $('#player-2-icon').css("background", "url(assets/images/ROCK.jpg)");
        //$('#player-2-icon').css("background-size", "cover");
    } else if (random === 2) {
        $('#player-2-icon').css("background", "url(assets/images/PAPER.jpg)");
       // $('#player-2-icon').css("background-size", "cover");
    } else if (random === 3) {
        $('#player-2-icon').css("background", "url(assets/images/SCISSORS.jpg)");
       // $('#player-2-icon').css("background-size", "cover");
    }

    if (random === 3) {
        console.log("You lost - haha");
        computerScore++
        $("#score-bar-2-fill").css("width", (100/5) * computerScore + "%")
        console.log("Computer score", computerScore)
    } else if (random == 1) {
        console.log("Player 1 wins!");
        player1Score++
        $("#score-bar-1-fill").css("width", (100/5) * player1Score + "%")
        console.log("Player score", player1Score);
    }

    console.log($("#score-bar-1-fill").css("width"))

     if ($("#score-bar-1-fill").css("width") === "300px") {
        setTimeout(function(){ 
            alert("Congrats, you won! Play Again?");
            location.reload();
        }, 300);
        console.log('player 1 won whole game');
    } 

    if ($("#score-bar-2-fill").css("width") === "300px") {
        setTimeout(function(){ 
            alert("Oh dear, looks like you lost this time. Try again?");
            location.reload();
        }, 300);
        console.log('computer won whole game');
    } 

    const isMobile = window.matchMedia("only screen and (max-width: 425px)").matches;
    if (isMobile) {
        if ($("#score-bar-1-fill").css("width") === "120px") {
            setTimeout(function(){ 
                alert("Congrats, you won! Play Again?");
                location.reload();
            }, 300);
            console.log('player 1 won whole game');
        } else if ($("#score-bar-2-fill").css("width") === "120px") {
            setTimeout(function(){ 
                alert("Oh dear, looks like you lost this time. Try again?");
                location.reload();
            }, 300);
            console.log('computer won whole game');
        } 
    }
})

//---------- when player selects SCISSORS
$("#btn-s").click(function() {
    chooseWeapon("SCISSORS")
    $('#player-1-icon').css("background", "url(assets/images/SCISSORS.jpg)");
    //$('#player-1-icon').css("background-size", "cover");

    const random = Math.floor((Math.random() * 3) + 1);
    console.log(random);

    if (random === 1) {
        $('#player-2-icon').css("background", "url(assets/images/ROCK.jpg)");
       //$('#player-2-icon').css("background-size", "cover");
    } else if (random === 2) {
        $('#player-2-icon').css("background", "url(assets/images/PAPER.jpg)");
       //$('#player-2-icon').css("background-size", "cover");
    } else if (random === 3) {
        $('#player-2-icon').css("background", "url(assets/images/SCISSORS.jpg)");
        //$('#player-2-icon').css("background-size", "cover");
    }

    if (random === 3) {
        console.log("Player 1 wins!");
        player1Score++
        $("#score-bar-1-fill").css("width", (100/5) * player1Score + "%")
        console.log("Player score", player1Score);
    } else if (random == 1) {
        console.log("You lost - haha");
        computerScore++
        $("#score-bar-2-fill").css("width", (100/5) * computerScore + "%")
        console.log("Computer score", computerScore);
    }

    console.log($("#score-bar-1-fill").css("width"))
     
    if ($("#score-bar-1-fill").css("width") === "300px") {
        setTimeout(function(){ 
            alert("Congrats, you won! Play Again?");
            location.reload();
        }, 300);
        console.log('player 1 won whole game');
    } 

    if ($("#score-bar-2-fill").css("width") === "300px") {
        setTimeout(function(){ 
            alert("Oh dear, looks like you lost this time. Try again?");
            location.reload();
        }, 300);
        console.log('computer won whole game');
    } 

    const isMobile = window.matchMedia("only screen and (max-width: 425px)").matches;
    if (isMobile) {
        if ($("#score-bar-1-fill").css("width") === "120px") {
            setTimeout(function(){ 
                alert("Congrats, you won! Play Again?");
                location.reload();
            }, 300);
            console.log('player 1 won whole game');
        } else if ($("#score-bar-2-fill").css("width") === "120px") {
            setTimeout(function(){ 
                alert("Oh dear, looks like you lost this time. Try again?");
                location.reload();
            }, 300);
            console.log('computer won whole game');
        } 
    }
})

function chooseWeapon(weapon) {
    console.log(weapon);
}


