void UpgradeDQPro()
{
	if(game.upquark >= 1)
	{
		game.upquark -= 1;
		game.downquarkpro += 0.001;
	}
}