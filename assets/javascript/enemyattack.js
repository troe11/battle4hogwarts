if (turn === false) {
	var randomizer = Math.floor(Math.random()*10);
	if (enemy.hp < 50) {
		enemy.hp = enemy.hp + randomizer*10;
		message.text(enemy.name + ' casts a healing spell!')
        $('#badGuyHP').text(badGuy.hp)
        $('#moveBox').html(message)
        turn = true;
	} 

	else if (randomizer < 4) {
		goodGuy.hp = goodGuy.hp - enemy.special();
		message.text(badSpecial)
        $('#goodGuyHP').text(goodGuyHP.hp);    
        $('#moveBox').text(badSpecial).css({"text-align": "center", "font-size": "2em"});
		turn = true;
	} 

	else {
		goodGuy.hp = goodGuy.hp - enemyAttack;
		message.text(enemy.name + " attacks!")
        $('#goodGuyHP').text(goodGuy.hp);
        $('#moveBox').html(message)
        turn = true;
	}
}