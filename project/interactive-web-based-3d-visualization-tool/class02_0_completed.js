// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const width = window.innerWidth;
const height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
const nWidth = width / Math.max(width, height) * 10;
const nHeight = height / Math.max(width, height) * 10;
//const camera = new THREE.OrthographicCamera(-nWidth / 2, nWidth / 2, nHeight / 2, -nHeight /2, 0.1, 1000);
scene.add(camera);

camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube
const geometry = new THREE.BoxGeometry()
//const geometry  = new THREE.SphereGeometry(1, 32, 16);
//const geometry = new THREE.TorusGeometry(0.8, 0.2, 16, 100)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 2. Create edge geometry and material
const edgeGeometry = new THREE.EdgesGeometry(geometry);
const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 }); // Edge color
const cubeEdges = new THREE.LineSegments(edgeGeometry, edgeMaterial);
scene.add(cubeEdges);

const sphereGeometry  = new THREE.SphereGeometry(0.7, 32, 16);
const sphereMesh = new THREE.Mesh(sphereGeometry, material);
scene.add(sphereMesh);

sphereMesh.position.x = 1
// use group
const group = new THREE.Group();
scene.add(group);

group.add(cube)
group.add(cubeEdges)
group.add(sphereMesh)

//group.scale.set(2, 2, 2)
//cube.position.set(1, 1, 1)
/*cube.scale.set(2, 2, 2);
cubeEdges.scale.set(2, 2, 2);*/

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube
    /*cube.rotation.x = 0.45;
    cube.rotation.y = 0.45;
    cubeEdges.rotation.x = 0.45;
    cubeEdges.rotation.y = 0.45;*/

    // use group
    group.rotation.x += 0.01;
    group.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();