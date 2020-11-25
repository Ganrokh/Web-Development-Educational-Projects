new Vue({
    el: '#app',
    data: {
        gameInProgress: false,
        playerHealth: 100,
        monsterHealth: 100,
        turns: []
    },
    methods: {
        newGame: function() {
            this.gameInProgress = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function() {
            let damage = this.calcDamage(5, 15); // Player attack range is 5-15 damage
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: `You hit the Monster for ${damage}!`
            });
            this.monsterAttack();
        },
        specialAttack: function() {
            let damage = this.calcDamage(15, 25); // Player special attack range is 15-25 damage
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: `Your Special Attack the Monster for ${damage}!`
            });
            this.monsterAttack();
        },
        heal: function() {
            healing = this.calcDamage(30, 40); // Heals the player for 20-30 HP
            this.playerHealth += healing;
            if (this.playerHealth > 100) {  // Prevents Overhealing
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: `You healed for ${healing}!`
            });
            this.monsterAttack();   // Monster still attacks
        },
        runAway: function() {
            if (Math.random() > .5) {
                alert(`You escaped with ${this.playerHealth} HP! The Monster had ${this.monsterHealth} HP.`);
                this.gameInProgress = false;
            } else {
                alert('Unable to escape!')
                    this.monsterAttack();
            }
        },
        calcDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        endGameTest: function() {
            if (this.monsterHealth <= 0 && this.playerHealth > 0) {
                alert(`You won with ${this.playerHealth} HP left!`);
                this.gameInProgress = false;
            } else if (this.monsterHealth > 0 && this.playerHealth <= 0) {
                alert(`You lost by ${this.monsterHealth} HP!`);
                this.gameInProgress = false;
            } else if (this.monsterHealth <= 0 && this.playerHealth <= 0) {
                alert('Draw!');
                this.gameInProgress = false;
            }
        },
        monsterAttack: function() {
            let damage = this.calcDamage(10, 25); // Monster attack range is 10-25 damage
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: `The Monster hit you for ${damage}!`
            });
            this.endGameTest(); // Monster attacks every turn, so the endgame test is done here
        }
        
    }
});