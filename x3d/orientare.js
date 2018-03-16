windows.addEventListener("deviceorientation", on_deviceorientation);

function on_deviceorientation(e)
{
	document.getElementById("id_orintation").innerHTML = e.alpha + " " + e.beta + " " + e.gamma;

}