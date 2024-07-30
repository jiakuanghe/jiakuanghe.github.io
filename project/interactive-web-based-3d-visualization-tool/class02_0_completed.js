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

const group = new THREE.Group();
// Create the bulb geometry
const bulbGeometry = new THREE.SphereGeometry(1, 32, 32);
const bulbMaterial = new THREE.MeshPhongMaterial({ color: 0xffff00, emissive: 0xffff00, emissiveIntensity: 0.6 });
const bulb = new THREE.Mesh(bulbGeometry, bulbMaterial);
bulb.position.y = 1;
group.add(bulb)
// Add light
const ambientLight = new THREE.AmbientLight(0x404040);
group.add(ambientLight)
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(2, 3, 4);
group.add(pointLight)

// Create the base geometry
const baseGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.5, 32);
const baseMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
const base = new THREE.Mesh(baseGeometry, baseMaterial);
base.position.y = 0;
group.add(base)

// use group
scene.add(group);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the bulb
    group.rotation.x += 0.01;
    group.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();