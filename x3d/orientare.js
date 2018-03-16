window.addEventListener("deviceorientation", on_device_orientation);

function on_device_orientation(e)
{
	document.getElementById("id_orientation").innerHTML = e.alpha + " " + e.beta + " " + e.gamma;

	var viewpoint = document.getElementById("id_viewpoint");
	viewpoint.setAttribute("orientation", "0 0 1 " + e.alpha * Math.PI / 180);

}