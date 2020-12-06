function ImportSaveFile(save, success)
{
	var isInvalid = false;

	//Check if save is empty
	if(save.length == 0)
	{
		ShowNotification("Save file is empty. Could not import.");
		isInvalid = true;
	}

	//Check if save is valid
	try
	{
		JSON.parse(atob(save));
	}

	//This code will only run when the above code throws an exception
	catch(e)
	{
		ShowNotification("Save file is invalid. Could not import.");
		isInvalid = true;
	}

	//If the save is valid then import it
	if(isInvalid == false)
	{
		game = JSON.parse(atob(save));
		localStorage.setItem("ICSave", save);

		ShowNotification(success);
	}
}

function ExportSaveFile() 
{
	navigator.clipboard.writeText(btoa(JSON.stringify(game)));

	ShowNotification("Copied save to clipboard.");
}

function DeleteSaveFile()
{
	var confir = confirm("Are you sure you want to delete your save file? This action is permanent unless you export your save file first. This is your last warning. If you wish to delete your save, click OK. Or if you change your mind click Cancel.");

	if(confir == true)
	{
		localStorage.setItem("ICSave", null);
		ShowNotification("Successfully deleted save file. The game will now reload in 5 seconds.");

		setTimeout(function() { location.reload(true); }, 5000);
	}
}

function CheckSave()
{
	if(localStorage.getItem("ICSave") == "null")
	{
		ImportSaveFile(btoa(JSON.stringify(game)), "Could not find an existing save file. Creating new save file.");
	}

	else
	{
		ImportSaveFile(localStorage.getItem("ICSave"), "Successfully loaded existing save file.");
	}
}