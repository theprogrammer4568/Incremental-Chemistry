var game =
{
	frame: 1,
	refreshrate: 50,
	deletion: false,
	particle: " up quarks",
	upquark: 0,
	upquarkpro: 0.01,
	downquark: 0,
	downquarkpro: 0.001
};

function GameLoop()
{
	gui.upquarks.innerHTML = game.upquark + game.particle;
	gui.downquarks.innerHTML = game.downquark + " down quarks";

	//Auto save every 10 seconds
	if(game.frame % (10000 / game.refreshrate) == 0 && game.frame != 0 && game.deletion == false)
	{
		game.frame = 0;
		ImportSaveFile(btoa(JSON.stringify(game)), "Successfully saved game.");
	}

	//Increase currency every second
	if(game.frame % (1000 / game.refreshrate) == 0)
	{
		game.upquark += game.upquarkpro;
		game.downquark += game.downquarkpro;

		game.upquark = Math.round(game.upquark * 100) / 100;
		game.downquark = Math.round(game.downquark * 1000) / 1000;
	}

	game.frame++;
}

document.addEventListener("DOMContentLoaded", function(event)
{
	CheckSave();
	ProductionOpen();

	setInterval(GameLoop, 50);
})