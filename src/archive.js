






let botHand = '';
let endResult = '';
let totalGames = 0;

let results = JSON.parse(localStorage.getItem('results')) || {
  wins: 0, //0-wins
  losses: 0, //1-losses
  ties: 0 //2-ties
};

let winlossRatio = 0.5;

const resultsDisplay = {
  wins: document.getElementById('wins'), //0
  losses: document.getElementById('losses'), //1
  ties: document.getElementById('ties'), //2
  totalGames: document.getElementById('total-games'), //3
  winlossRatio: document.getElementById('winloss-ratio') //4
}



function play(handValue, hand) {
  const result = document.getElementById('result');

  //picks an integer from 1 to 3
  const botPlay = Math.floor( Math.random() * 3 ) + 1;
  defineBotHand(botPlay)

  //this only happens when it isnt a refresh (handValue for 0 is referred as 'Refresh')
  if (handValue !== 0) { 
    if (handValue == botPlay) {
      result.innerHTML = `Both played <img src="images/${hand}-emoji.png" class="hand-icon">   You Tied!`;
      results.ties++
    } 
    else if ((handValue - (botPlay % 3)) == 1) {
      endResult = 'You win!'
      results.wins++
    } 
    else if ((handValue - (botPlay % 3)) !== 1) {
      endResult = 'You lost! Lmao.'
      results.losses++
    }

    if (handValue !== botPlay ) {
    result.innerHTML = `You played <img src="images/${hand}-emoji.png" class="hand-icon">   <img src="images/${botHand}-emoji.png" class="hand-icon"> was played by Bot   ${endResult}`;
    }
  }

  

  //winloss ratio is calculated by (wins + 0.5(ties)) divided by total games (win + lose + tie)
  totalGames = results.wins + results.losses + results.ties

  winlossRatio = (results.wins + ( 0.5 * results.ties )) / totalGames || 'NaN'

  /*for (i = 0; i <= 2; i++) {
    resultsDisplay[i].innerHTML = results[i];
  }*/

  resultsDisplay.wins.innerHTML = results.wins.toLocaleString()
  resultsDisplay.losses.innerHTML = results.losses.toLocaleString()
  resultsDisplay.ties.innerHTML = results.ties.toLocaleString()
  resultsDisplay.totalGames.innerHTML = totalGames.toLocaleString()

  if (winlossRatio !== 'NaN') {
    resultsDisplay.winlossRatio.innerHTML = `${(winlossRatio * 100).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}%`
  } else {
    resultsDisplay.winlossRatio.innerHTML = 'N/A'
  }



  //saving
  localStorage.setItem('results', JSON.stringify(results)
  );

  //console.log(results[0], results[1], results[2])
  //console.log(handValue, (botPlay % 3), winlossRatio)
}

function defineBotHand(botPlay) {
  if (botPlay == 1) {
    return botHand = 'Rock'
  } else if (botPlay == 2) {
    return botHand = 'Paper'
  } else if (botPlay == 3) {
    return botHand = 'Scissors'
  }
}


//rock is 1, paper is 2, scissors is 3

/*
  3 beats 2, 1, 0
  2 beats 1, 0
  1 beats 0

  2 loses 3, 2
  1 loses 2
  0 loses 1
*/