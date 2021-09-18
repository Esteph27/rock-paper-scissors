// add click event to buttons;

// $('#btn-r').click(function() {selectWeapon()}) 
// $('#btn-p').click(function() {selectWeapon()})
// $('#btn-s').click(function() {selectWeapon()}) 

let player1Score = 0
let computerScore = 0 

//---------- when player selects ROCK
$("#btn-r").click(function() {
    // player 1 selects rock
    chooseWeapon("ROCK")
    $('#player-1-icon').css("background", "url(../assets/images/ROCK.jpg)");

    // computer selects random
    const random = Math.floor((Math.random() * 3) + 1);
    console.log(random);

    if (random === 1) {
        $('#player-2-icon').css("background", "url(../assets/images/ROCK.jpg)");
    } else if (random === 2) {
        $('#player-2-icon').css("background", "url(../assets/images/PAPER.jpg)");
    } else if (random === 3) {
        $('#player-2-icon').css("background", "url(../assets/images/SCISSORS.jpg)");
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

    //console.log($("#score-bar-1-fill").css("width"))

    if ($("#score-bar-1-fill").css("width") === "300px") {
        setTimeout(function(){ 
            alert("you won!");
            location.reload();
        }, 500);
        console.log('you won the whole game');
    } 
    
    if (computerScore === 5) {
    console.log('you lost try again');
    } 
})
  
//---------- when player selects PAPER
$("#btn-p").click(function() {
    chooseWeapon("PAPER")
    $('#player-1-icon').css("background", "url(../assets/images/PAPER.jpg)")

    const random = Math.floor((Math.random() * 3) + 1);
    console.log(random);

    if (random === 1) {
        $('#player-2-icon').css("background", "url(../assets/images/ROCK.jpg)");
    } else if (random === 2) {
        $('#player-2-icon').css("background", "url(../assets/images/PAPER.jpg)");
    } else if (random === 3) {
        $('#player-2-icon').css("background", "url(../assets/images/SCISSORS.jpg)");
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
})

//---------- when player selects SCISSORS
$("#btn-s").click(function() {
    chooseWeapon("SCISSORS")
    $('#player-1-icon').css("background", "url(../assets/images/SCISSORS.jpg)")

    const random = Math.floor((Math.random() * 3) + 1);
    console.log(random);

    if (random === 1) {
        $('#player-2-icon').css("background", "url(../assets/images/ROCK.jpg)");
    } else if (random === 2) {
        $('#player-2-icon').css("background", "url(../assets/images/PAPER.jpg)");
    } else if (random === 3) {
        $('#player-2-icon').css("background", "url(../assets/images/SCISSORS.jpg)");
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
})

function chooseWeapon(weapon) {
console.log(weapon)
}


