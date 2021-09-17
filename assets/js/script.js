// add click event to buttons;

// $('#btn-r').click(function() {selectWeapon()}) 
// $('#btn-p').click(function() {selectWeapon()})
// $('#btn-s').click(function() {selectWeapon()}) 

function selectWeapon() {
    console.log('weapon selected!')
}

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

    if (random === 3) {
        console.log("Player 1 wins!");
    } else if (random == 2) {
        console.log("You lost - haha");
    } else if (random == 1) {
        console.log("it's a draw!");
    }
})
  
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
    } else if (random == 2) {
        console.log("it's a draw!");
    } else if (random == 1) {
        console.log("Player 1 wins!");
    }
})

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
    } else if (random == 2) {
        console.log("it's a draw!");
    } else if (random == 1) {
        console.log("You lost - haha");
    }
})

function chooseWeapon(weapon) {
console.log(weapon)
}

