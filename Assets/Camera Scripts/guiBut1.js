var icon : Texture2D;

function OnGUI () {
	if (GUI.Button (Rect (10,10, 100, 50), icon)) {
		print ("you clicked the icon");
	}

	if (GUI.Button (Rect (10,70, 100, 20), "This is text")) {
		print ("you clicked the text button");
	}
}