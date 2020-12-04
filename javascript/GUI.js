var ui =
{
	generator: document.getElementsByClassName("generator"),
	production: document.getElementsByClassName("production"),
	settings: document.getElementsByClassName("settings"),
	notif: document.getElementById("notif"),
	pps: document.getElementById("pps"),
	upquarks: document.getElementById("upquarks"),
	downquarks: document.getElementById("downquarks"),
};

function ShowNotification(text)
{
	ui.notif.style.opacity = 1;
	ui.notif.innerHTML = text;

	setTimeout(function() { uielements.notif.style.opacity = 0; }, 5000);
}

function GeneratorOpen()
{
	for(var i = 0; i < ui.generator.length; i++) 
	{
    	ui.generator[i].style.opacity = 1;
  	}

	for(var i = 0; i < ui.settings.length; i++) 
	{
    	ui.settings[i].style.opacity = 0;
  	}

  	for(var i = 0; i < ui.production.length; i++) 
	{
    	ui.production[i].style.opacity = 0;
  	}
}

function SettingsOpen()
{
	for(var i = 0; i < ui.settings.length; i++) 
	{
    	ui.settings[i].style.opacity = 1;
  	}

	for(var i = 0; i < ui.generator.length; i++) 
	{
    	ui.generator[i].style.opacity = 0;
  	}

  	for(var i = 0; i < ui.production.length; i++) 
	{
    	ui.production[i].style.opacity = 0;
  	}
}

function ProductionOpen()
{
	for(var i = 0; i < ui.settings.length; i++) 
	{
    	ui.settings[i].style.opacity = 0;
  	}

	for(var i = 0; i < ui.generator.length; i++) 
	{
    	ui.generator[i].style.opacity = 0;
  	}

  	for(var i = 0; i < ui.production.length; i++) 
	{
    	ui.production[i].style.opacity = 1;
  	}
}