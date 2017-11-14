$(document).ready(function() {
    
    var playMusic = document.getElementById('music');
    // playMusic = new Audio('assets/audio/HPTheme.mp3').play();
    var Wizard = function(name, hp, luck, attack, specialSpellName, id) {
        this.id = id;
        this.name = name;
        this.hp = hp;
        this.luck = luck;
        this.attack = attack;
        this.specialSpellName = specialSpellName;
        this.deathCheck = function() {
            if (this.hp < 1) {
                alert(this.name + ' has been knocked out!')
                return true;
            }
            return false;
        };
        this.special = function(name) {
            this.specialDamage = 0;
            this.specialChance = Math.floor(Math.random() * this.luck);
            if (this.specialChance < 2) {
                specialDamage = 0;
            } else {
                specialDamage = this.attack * (this.specialChance - 2);
            }
            return specialDamage;
        };


    }

    var harry = new Wizard('Harry Potter', 150, 8, 25, 'Harry shouted "Expelliarmus!"', 1);
    var ron = new Wizard('Ron Weasley', 200, 4, 20, 'Ron blasted "Wingardium Leviosa"', 2);
    var hermione = new Wizard('Hermione Granger', 120, 7, 35, 'Hermione directed Stupefy at the evil wizard!', 3);
    var dumbledore = new Wizard('Albus Dumbledore', 300, 10, 50, 'Dumbledore murmered a spell softly under his breath...', 4);

    var voldemort = new Wizard('Lord Voldemort', 350, 9, 45, 'Lord Voldemort cast Cruicio upon his opponent, torturing them!', 5);
    var lucius = new Wizard('Lucius Malfoy', 200, 4, 40, 'Lucius Malfoy turned his nose up, then yelled "Imperio", and forced his opponent to smash their head on the nearby wall!', 6);
    var bellatrix = new Wizard('Bellatrix LeStrange', 140, 6, 30, 'Bellatrix brazenly uses the Impediment Jinx on her opponent!', 7);
    var fenrir = new Wizard('Fenrir Greyback', 250, 3, 10, 'Fenrir charges! His teeth tear into his opponent!', 8);


    var activeFighter;
    var activeBadGuy;
    $('.fighter').on('click', function() {
        activeFighter = $(this).attr('id');

        $('#goodGuyCurrent').append(this);

        var name = $('<p>');
        name.text(activeFighter.name);

        var hp = $('<p>')
        hp.text(eval(activeFighter).hp);

        $('#goodGuyName').append(name);
        $('#goodGuyHP').append(hp);
    });

    $('.bFighter').on('click', function() {
        activeBadGuy = $(this).attr('id');

        $('#badGuyCurrent').append(this);

        var name = $('<p>');
        name.text(eval(activeBadGuy).name);

        var hp = $('<p>')
        hp.text(eval(activeBadGuy).hp);

        $('#badGuyName').append(name);
        $('#badGuyHP').append(hp);
    });


    var turn = true;

    $('button').on('click', function() {
      var enemy = eval(activeBadGuy)
      var goodGuy = eval(activeFighter)
      // var enemyHP = enemy.hp;
      // var fighterHP = goodGuy.hp;
      var badSpecial = enemy.specialSpellName;
      var ggSpecial = goodGuy.specialSpellName;
      var enemyAttack = enemy.attack;
      var ggAttack = goodGuy.attack;
      var message = $('<h2>').css('text-align','center')
      console.log(turn)

      var enemyTurn = function() {
        
        if (turn === false) {
          var randomizer = Math.floor(Math.random() * 10);
          if (enemy.hp < 50) {
              enemy.hp = enemy.hp + randomizer * 10;
              message.text(enemy.name + ' casts a healing spell!')
              $('#badGuyHP').text(enemy.hp)
              $('#moveBox').html(message)
              turn = true;
          } else if (randomizer < 4) {
              goodGuy.hp = goodGuy.hp - enemy.special();
              message.text(badSpecial)
              $('#goodGuyHP').text(goodGuyHP.hp);
              $('#moveBox').text(badSpecial).css({ "text-align": "center", "font-size": "2em" });
              turn = true;
          } else {
              goodGuy.hp = goodGuy.hp - enemyAttack;
              message.text(enemy.name + " attacks!")
              $('#goodGuyHP').text(goodGuy.hp);
              $('#moveBox').html(message)
              turn = true;
          }
        }
      }
      
      if ($(this).attr('id') === "attack") {
        enemy.hp = enemy.hp - ggAttack;
        message.text(goodGuy.name + " attacks!")
        
        $('#badGuyHP').text(enemy.hp);
        $('#moveBox').html(message)
        console.log(message)

        turn = false;  
        console.log(message.text)

        //sleepFor(500);
        setTimeout(function(){
          enemyTurn();
        },500);
        //enemyTurn();
       
      } 
      else if ($(this).attr('id') === "heal") {
        goodGuy.hp = goodGuy.hp + 50;
        message.text(goodGuy.name + ' casts a healing spell!')
        $('#goodGuyHP').text(goodGuy.hp)
        $('#moveBox').html(message)
        turn = false; 
        setTimeout(function(){
          enemyTurn();
        },500);

      }
      else if ($(this).attr('id') === "special") {
        enemy.hp = enemy.hp - goodGuy.special();
        //specialSpellName is coming up as an object
        message.text(ggSpecial);
        $('#badGuyHP').text(enemy.hp);    
        $('#moveBox').text(ggSpecial);
        turn = false;
        // setTimeout(function(){
        //   enemyTurn();
        // },500);


      } else if ($(this).attr('id') === "switch") {
        message.text('Pick a new character...')
        $('#moveBox').text(message)
        $('#goodGuyCurrent').empty();
        $('#goodGuyName').empty();
        $('#goodGuyHP').empty();
       }

       



       
      
    })
})