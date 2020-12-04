function ImportSaveFile(save)
{
	var isInvalid = false;

	if(save.length == 0)
	{
		ShowNotification("Save file is empty. Could not import.");

		isInvalid = true;
	}

	try
	{
		if(isInvalid == false)
		{
			game = JSON.parse(atob(save));
		}
	}

	catch(e)
	{
		ShowNotification("Save file is invalid. Could not import.");

		isInvalid = true;
	}

	if(isInvalid == false)
	{
		ShowNotification("Successfully imported save file.");

		localStorage.setItem("ICSave", save);
	}
}

function ExportSaveFile() 
{
	navigator.clipboard.writeText(btoa(JSON.stringify(game)));

	ShowNotification("Copied save to clipboard.");
}

function CheckSave()
{
	if(localStorage.getItem("ICSave") == undefined || localStorage.getItem("ICSave") == null)
	{
		var defaultsave = "eyJwcm9kdWN0aW9udWkiOm51bGwsInBhcnRpY2xlIjoiIHVwIHF1YXJrcyIsInByb2R1Y3Rpb24iOjAuMDEsInVwcXVhcmsiOjAsImRvd25xdWFyayI6MH0=";

		game = JSON.parse(atob(defaultsave));
	}

	else
	{
		ImportSaveFile(localStorage.getItem("ICSave"));
	}
}