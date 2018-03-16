window.addEventListener("deviceorientation", on_deviceorientation);

function on_deviceorientation(e)
{
	document.getElementById("id_orientation").innerHTML = e.alpha.toFixed(1) + " " + e.beta.toFixed(1) + " " + e.gamma.toFixed(1);

}