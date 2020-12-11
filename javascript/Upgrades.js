function UpgradeMax()
{
	
}

function UpgradeDQPro()
{
	if(game.upquark >= 1)
	{
		game.upquark -= 1;
		game.downquarkpro += 0.001;
	}
}

function UpgradeCP()
{
	if(game.upquark >= 1 && game.downquark >= 2)
	{
		game.upquark -= 1;
		game.downquark -= 2;

		game.proton++;
	}
}

function UpgradeCN()
{
	if(game.upquark >= 2 && game.downquark >= 1)
	{
		game.upquark -= 2;
		game.downquark -= 1;

		game.neutron++;
	}
}

function UpgradeCG()
{
	if(game.upquark >= 1 && game.downquark >= 1)
	{
		game.upquark -= 1;
		game.downquark -= 1;

		game.gluon++;
	}
}