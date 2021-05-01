	function create_qr() {
	var url = "http://api.qrserver.com/v1/create-qr-code/?data=";
	var data = document.getElementById("data").value;
	var size = document.getElementById("size").value;
	var colortxt = document.getElementById("color").value;
	var color = String(colortxt.replace("#", ""));
	var colorbgtxt = document.getElementById("bgcolor").value;
	var colorbg = String(colorbgtxt.replace("#", ""));
	var format = document.getElementById("format").value;
	var ecc = document.getElementById("ecc").value;
	url = url + data + "&size=" + size + "&color=" + color + "&bgcolor=" + colorbg + "&format=" + format + "&ecc=" + ecc;
	document.getElementById("dwnldlink").href = url;
	document.getElementById("dwnldlink").download;
	}