var gui =
{
	upgrades: document.getElementsByClassName("upgrades"),
	production: document.getElementsByClassName("production"),
	settings: document.getElementsByClassName("settings"),
	notif: document.getElementById("notif"),

	upgrademax: document.getElementById("upgrademax"),
	upgradedqpro: document.getElementById("upgradedqpro"),

	upquarks: document.getElementById("upquarks"),
	downquarks: document.getElementById("downquarks"),
	protons: document.getElementById("protons"),
	neutrons: document.getElementById("neutrons"),
	gluons: document.getElementById("gluons")
};

function ShowNotification(text)
{
	gui.notif.style.opacity = 1;
	gui.notif.innerHTML = text;

	setTimeout(function() { gui.notif.style.opacity = 0; }, 5000);
}

function UpgradesOpen()
{
	for(var i = 0; i < gui.upgrades.length; i++) 
	{
    	gui.upgrades[i].style.opacity = 1;
    	gui.upgrades[i].style.visibility = "visible";
  	}

	for(var i = 0; i < gui.settings.length; i++) 
	{
    	gui.settings[i].style.opacity = 0;
    	gui.settings[i].onclick = null;
    	gui.settings[i].style.visibility = "hidden";
  	}

  	for(var i = 0; i < gui.production.length; i++) 
	{
    	gui.production[i].style.opacity = 0;
    	gui.production[i].style.visibility = "hidden";
  	}
}

function SettingsOpen()
{
	gui.settings[0].setAttribute("onclick","ExportSaveFile()");
	gui.settings[1].setAttribute("onclick","ImportSaveFile(prompt('Enter your save file here.'), 'Successfully imported save file.')");
	gui.settings[2].setAttribute("onclick","DeleteSaveFile()");

	for(var i = 0; i < gui.settings.length; i++) 
	{
    	gui.settings[i].style.opacity = 1;
    	gui.settings[i].style.visibility = "visible";
  	}

	for(var i = 0; i < gui.upgrades.length; i++) 
	{
    	gui.upgrades[i].style.opacity = 0;
    	gui.upgrades[i].style.visibility = "hidden";
  	}

  	for(var i = 0; i < gui.production.length; i++) 
	{
    	gui.production[i].style.opacity = 0;
    	gui.production[i].style.visibility = "hidden";
  	}
}

function ProductionOpen()
{
	for(var i = 0; i < gui.settings.length; i++) 
	{
    	gui.settings[i].style.opacity = 0;
    	gui.settings[i].onclick = null;
  	}

	for(var i = 0; i < gui.upgrades.length; i++) 
	{
    	gui.upgrades[i].style.opacity = 0;
  	}

  	for(var i = 0; i < gui.production.length; i++) 
	{
    	gui.production[i].style.opacity = 1;
    	gui.production[i].style.visibility = "visible";
  	}
}