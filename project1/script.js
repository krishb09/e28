// Keep track of a) a running score and b) results of each round of the game played.
// Provide the option to reset the score and results.
// Use at least 1 component.
// There should be some aspect of dynamic styling (e.g. winning message in green, losing message in red) and this should be accomplished using class binding.


//creating component
Vue.component('round-detail', {
    //component that will be globally available
    //data option returns its data 
    data: function () {
        return {}
    },

    props: {
        'number': {
            type: Number,
            default: 0
        },
        'winner': {
            type: String,
            default: ''
        }
    },
    //display the component 
    template: '#round-detail',

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
        playerScore: 0,
        compScore: 0,
        name: '',
        gameMode: 'start',
        wordHint: '',
        guess: '',
        rounds: [],
        round: 1,
        word: '',
        lastWord: '',
        feedback: false,
        correct: false,
        compGuess: '',
        wordLength: '',

    },
    methods: {
        submitUserGuess() {
            this.correct = this.guess == this.word;
            this.feedback = true;
        },
        startGame() {
            this.gameMode = 'play';
            this.loadGame();
        },

        deleteRound(roundNumber) {
            console.log('Delete Round');
            function checkRound(round) {
                return round.number != this;
            }
            this.rounds = this.rounds.filter(checkRound, roundNumber);
        },

        loadGame() {
            this.feedback = false;
            this.guess = '';

            if (this.word === this.lastWord) {
                this.choice = this.words[Math.floor(Math.random() * this.words.length)];
                this.word = this.choice[0];
                this.wordLength = this.choice[1]
                this.wordHint = this.choice[2];
            }

            this.lastWord = this.word;
        },

        resetRound() {

            this.rounds = [];
            this.playerScore = 0;
            this.compScore = 0;

        }


    },

});