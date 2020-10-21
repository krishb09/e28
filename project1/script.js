/*Project 1 guideline*/
// Keep track of a) a running score and b) results of each round of the game played.
// Provide the option to reset the score and results.
// Use at least 1 component.
// There should be some aspect of dynamic styling (e.g. winning message in green, losing message in red) and this should be accomplished using class binding.


//creating component
Vue.component('round-detail', {
    //component that will be globally available
    //data option returns its data 
    data: function () {
        return {
        }
    },
    //attributes 
    props: ['round'],
    //display the second element of the rounds[] so use index '1'
    template: `<ul><li>{{round[1]}}</li></ul>`,

});

let app = new Vue({
    //initializing new instance of Vue
    // Options
    el: '#app',
    data: {
        words: [
            ['crunchy leaves', '_ _ _ _ _ _ _   _ _ _ _ _ _ ', 'Jumping around on these fallen on the ground in fall'],
            ['pumpkin pie', '_ _ _ _ _ _ _   _ _ _', 'Hands-down the BEST thanksgiving dessert'],
            ['halloween-town', '_ _ _ _ _ _ _ _ _-_ _ _ _', 'A classic halloween movie from your childhood'],
            ['apple-picking', '_ _ _ _ _-_ _ _ _ _ _ _', 'Going to the orchard in the fall to do this activity'],
            ['chai latte', '_ _ _ _   _ _ _ _ _', 'NOT a pumpkin spice latte but...'],
            ['corn-maze', '_ _ _ _-_ _ _ _', 'It would not be fun getting lost in one of these!']
        ],
        styleObjectLose: {
            color: 'red',
        },
        styleObjectWin: {
            color: 'green',
        },
        winner: '',
        playerScore: 0,
        compScore: 0,
        name: '',
        gameMode: 'start',
        wordHint: '',
        userGuess: '',
        rounds: [],
        round: 0,
        word: '',
        lastWord: '',
        feedback: false,
        correct: false,
        wordLength: '',

    },
    methods: {
        submitUserGuess() {
            this.correct = this.userGuess == this.word;
            this.feedback = true;
            this.round++;


            //check if the guess matches the computer generated word and allot points accordingly
            //increment each round and check who wins each round
            if (this.word === this.userGuess) {
                this.playerScore++;
                this.winner = 'Player';
                this.rounds.push([this.round, 'Player won round ' + this.round + '!']);
            } else {
                this.compScore++;
                this.winner = 'Computer';
                this.rounds.push([this.round, 'Computer won round ' + this.round + '!']);
            }
        },
        startGame() {
            this.gameMode = 'play';
            this.loadGame();

        },
        loadGame() {
            this.feedback = false;
            this.userGuess = '';

            if (this.word === this.lastWord) {
                //randomly generating the word to be displayed
                this.choice = this.words[Math.floor(Math.random() * this.words.length)];
                //grabbing each element from the words array to display to user
                this.word = this.choice[0];
                this.wordLength = this.choice[1]
                this.wordHint = this.choice[2];
            }
            this.lastWord = this.word;
        },
        resetRound() {
            //reset all rounds and player/comp scores
            this.round = 0;
            this.rounds = [];
            this.userGuess = '';
            this.word = '';
            this.playerScore = 0;
            this.compScore = 0;
            this.winner = '';

        }
    },
});