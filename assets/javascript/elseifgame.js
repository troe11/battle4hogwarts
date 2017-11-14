//this was part of the wizard object for enemy attack
if (this.id > 4) {
        this.enemyAttack = function(name) {
            var healLuck = Math.floor(Math.random() * this.luck + 1);
            var attackLuck = Math.floor(Math.random() * 2);
            attackLuck;
            if (this.hp <= 50) {
                console.log(this.name + ' casts a healing spell!');
                this.hp = this.hp + healLuck * 10;
                console.log(healLuck)
                return healLuck;
            } else if (attackLuck < 3) {
                console.log(this.name + ' attacks!');
                return this.attack;
            } else {
                return this.special();
            }
        }


var fight = function(goodGuy, badGuy) {
    var turn = 0;
    var moves = 1;

    

    var action = function() {

        if (turn === 0 && moves === 1) {

            var choice = prompt('What will you do?: Attack   Heal   Special   Switch').toLowerCase();

            if (choice === 'attack') {
                //Here you need to use jQuery to print something like 'goodGuy.name attacks badGuy.name!' to #moveBox, will use console.log for now 
                console.log(goodGuy.name + ' attacks ' + badGuy.name + '! And did ' + goodGuy.attack + ' damage!');
                badGuy.hp = badGuy.hp - goodGuy.attack;

            } else if (choice === 'heal') {
                console.log(goodGuy.name + ' casts a rejuvenation spell!');

            } else if (choice === 'special') {
                var damage = goodGuy.special();
                console.log(goodGuy.specialSpellName + ' And did ' + damage + ' damage!');
                badGuy.hp = badGuy.hp - damage;

            } else if (choice === 'switch') {
                goodGuy = prompt('Who do you want to fight?').toLowerCase()
                console.log(goodGuy.name)

            } else {
                alert('Try Again!');
                choice;
            }
            badGuy.deathCheck();
            if (badGuy.deathCheck() === true) {
                //need to find a way to switch opposing character
            }
            turn = turn + 1;
            moves = moves - 1;

        } else if (turn === 1 && moves === 0) {
            if (badGuy.hp > 50) {
                goodGuy.hp = goodGuy.hp - badGuy.enemyAttack();
            } else { badGuy.enemyAttack() }

            console.log(goodGuy.hp)
            console.log(badGuy.hp)
            turn = turn - 1;
            moves = moves + 1;
            goodGuy.deathCheck();
            if (goodGuy.deathCheck() === true) {
                choice === 'switch';
                $('#switch').empty();
            }

        }
        action();
    }
    action();
  }