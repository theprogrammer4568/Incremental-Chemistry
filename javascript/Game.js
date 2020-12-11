var game =
{
	frame: 1,
	refreshrate: 50,
	deletion: false,
	buyamount: "1",
	upquark: 0,
	upquarkpro: 0.01,
	downquark: 0,
	downquarkpro: 0.001,
	proton: 0,
	neutron: 0,
	gluon: 0
};

function GameLoop()
{
	gui.upgrademax.innerHTML = "Buy " + game.buyamount;
	gui.upquarks.innerHTML = game.upquark + " up quarks";
	gui.downquarks.innerHTML = game.downquark + " down quarks";

	gui.upgradedqpro.innerHTML = "Upgrade down quark production\nCost: 1 up quark";
	gui.protons.innerHTML = game.proton + " protons";
	gui.neutrons.innerHTML = game.neutron + " neutrons";
	gui.gluons.innerHTML = game.gluon + " gluons";

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
		game.upquarkpro += game.proton / 20;

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