// The Vue instance

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

})


let app = new Vue({
    //initializing new instance of Vue
    // Options
    el: '#app',
    data: {
        words: ["ZIMBABWE", "AUSTRALIA", "CHINA", "GREECE", "DENMARK", "BRAZIL"], //9 is highest
        wins: 0,
        gameMode: 'start',
        leftoverGuess: '',
        winsText: '',
        guessesMade: '',
        fillBlank: '',
        allGuesses: [],
        guessesLeft: 12,
        guessedArr: [],
        rounds: [],
        round: 1,
        appGuess: '',

    },
    computed: {
        appGuess() {
            this.words[Math.floor(Math.random() * this.words.length)];
            for (let i = 0; i < words.length; i++) {
                guessedArr.push('_');
            }
            return guessedArr;

        }


    },
    methods: {
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

        reset() {
            guessesLeft = 12;
            guessedArr = [];
            allGuesses = [];
            rounds = [];
            appGuess = words[Math.floor(Math.random() * words.length)];
            for (var i = 0; i < appGuess.length; i++) {
                guessedArr.push('_');
            }
            guessesMade.textContent = "Your Guesses so far: " + " ";
        }


    },

});


