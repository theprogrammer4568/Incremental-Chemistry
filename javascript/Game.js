var game =
{
	frame: 1,
	refreshrate: 50,
	particle: " up quarks",
	upquark: 0,
	upquarkpro: 0.01,
	downquark: 0,
	downquarkpro: 0.001
};

function GameLoop()
{
	ui.pps.innerHTML = "You are gaining " + game.upquarkpro + " up quarks per second.";
	ui.upquarks.innerHTML = game.upquark + " up quarks";
	ui.downquarks.innerHTML = game.downquark + " down quarks";

	game.frame++;

	if(game.frame == 1000 / game.refreshrate)
	{
		game.upquark += game.upquarkpro;
		game.downquark += game.downquarkpro;
		game.frame = 1;

		game.upquark = Math.round(game.upquark * 100) / 100;
		game.downquark = Math.round(game.downquark * 100) / 1000;
	}
}

function Init()
{
	setInterval(GameLoop, 50);
}