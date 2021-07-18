
function main() {
	var scene = new THREE.Scene();
	var box = generateBox(15,15,15);
	box.name = 'box-1';
	box.translateZ(-30);
	scene.add(box);
	var pointLight = generatePointLight(0xffffff, 1);
	pointLight.position.y = 5;
	scene.add(pointLight);
	var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 1000);
	camera.position.x = 0;
	camera.position.y = 5;
	camera.position.z = 5;
	camera.lookAt(new THREE.Vector3(0,0,-30))
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.getElementById('webgl').appendChild(renderer.domElement);
	update(renderer, scene, camera);
	return scene;



}
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n);
    });
}

async function start(t, t2) {

	for (var i = 0; i < t; i++) {
		console.info(i)
			    			scene.getObjectByName('box-1').rotation.y -= 0.01;
			scene.getObjectByName('box-1').rotation.x += 0.01;
			await delay(t2)

	}



}
	var scene = main();
	 document.addEventListener("keydown", PressT);
	function PressT (evt) {
        var kc = evt.keyCode;

	if (kc == 37) {
		// Pfeil nach links
		scene.getObjectByName('box-1').rotation.y -= 0.005;
	} else if (kc == 38) {
		// Pfeil nach oben
		scene.getObjectByName('box-1').rotation.x -= 0.005;
	} else if (kc == 39) {
		// Pfeil nach rechts
		scene.getObjectByName('box-1').rotation.y += 0.005;
	} else if (kc == 40) {
		// Pfeil Nach unten
		scene.getObjectByName('box-1').rotation.x += 0.005;
	}}


function generatePointLight(color, intensity) {
	return new THREE.PointLight(color, intensity);
}

function generateBox(w, h, d) {
	var geo = new THREE.BoxGeometry(w, h, d);
	var mat = new THREE.MeshPhongMaterial({
		color: 'rgb(100,100,100)'
	});
	var mesh = new THREE.Mesh(geo, mat);
	return mesh;
}

function update(renderer, scene, camera) {
	renderer.render(scene, camera);

	requestAnimationFrame(function(){
		update(renderer, scene, camera)
	})
}











 console.log(scene);
 	start(301,50)