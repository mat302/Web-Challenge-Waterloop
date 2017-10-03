const WIDTH = 400;
const HEIGHT = 300;
const VIEW_ANGLE = 45;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 0.1
const FAR = 10000;
//const container = document.querySelector('#container');
const container = document.getElementById("container");
//container.textContent = "HEHEHEH";
const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
const scene = new THREE.Scene();

scene.add(camera);
renderer.setSize(WIDTH, HEIGHT);
container.appendChild(renderer.domElement);

const RADIUS = 50;
const SEGMENTS = 16;
const RINGS = 16;

const sphereMaterial = new THREE.MeshLambertMaterial({color: 0xCC0000});
const sphere = new THREE.Mesh(new THREE.SphereGeometry(RADIUS, SEGMENTS, RINGS), sphereMaterial);

sphere.position.z = -300;

scene.add(sphere);

//var loader = new THREE.OBJLoader();
//objURL = "hyp1.obj";
//loader.load(objURL, function(object){scene.add(object);});

const pointLight = new THREE.PointLight(0xFFFFFF);

pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

scene.add(pointLight);

renderer.render(scene, camera);

function update()
{
	renderer.render(scene, camera);
	requestAnimationFrame(update);
}

requestAnimationFrame(update);