const hands = ["rock", "paper", "scissors"];

let player1 = {
  name: "Rick",
  getHand: function () {
    return hands[parseInt(Math.random() * 10) % 3];
  },
};

let player2 = {
  name: "Morty",
  getHand: function () {
    return hands[parseInt(Math.random() * 10) % 3];
  },
};

let player3 = {
  name: "MrMeeSeeks",
  getHand: function () {
    return hands[parseInt(Math.random() * 10) % 3];
  },
};

let player4 = {
  name: "Swanson",
  getHand: function () {
    return hands[parseInt(Math.random() * 10) % 3];
  },
};


//playGame(player1, player2, 5);  // Executes function to play game up to 5 wins between the two players

function playGame(player1, player2, playUntil) {
  let p1Counter = 0;
  let p2Counter = 0;

  while (p1Counter < playUntil && p2Counter < playUntil) {
    let hand1 = player1.getHand();
    let hand2 = player2.getHand();

    if (hand1 === hand2) {
      console.log(player1.name + " throws: " + hand1);
      console.log(player2.name + " throws: " + hand2);
      console.log("Tie! No Winner");
      console.log();
    } else if (
      (hand1 === "rock" && hand2 === "scissors") ||
      (hand1 === "scissors" && hand2 === "paper") ||
      (hand1 === "paper" && hand2 === "rock")
    ) {
      console.log(player1.name + " throws: " + hand1);
      console.log(player2.name + " throws: " + hand2);
      console.log(player1.name + " wins!");
      console.log();
      p1Counter++;
    } else if (
      (hand1 === "rock" && hand2 === "paper") ||
      (hand1 === "scissors" && hand2 === "rock") ||
      (hand1 === "paper" && hand2 === "scissors")
    ) {
      console.log(player1.name + " throws: " + hand1);
      console.log(player2.name + " throws: " + hand2);
      console.log(player2.name + " wins!");
      console.log();
      p2Counter++;
    }
    console.log("Scoreboard");
    console.log(
      player1.name + ": " + p1Counter + " | " + player2.name + ": " + p2Counter
    );
    console.log("----------");

    console.log(); //line break
  }

  if (p1Counter === playUntil) {
    console.log(player1.name + " has reached " + playUntil+" win(s)!");
    console.log("----------");
    console.log();
    return player1;
  } else if (p2Counter === playUntil) {
    console.log(player2.name + " has reached " + playUntil+" win(s)!");
    console.log("----------");
    console.log();
    return player2;
  }
}

playTournament(player1,player2,player3,player4,1) // Calls function to play with 4 players for one decisive game.

function playTournament(player1,player2,player3,player4,playUntil){

  console.log((playGame(playGame(player1,player2,playUntil), playGame(player3,player4,playUntil),playUntil)).name+" is the world champion!");

}