// Typing Animation
const roles=["Data Analyst","Power BI Developer","SQL Specialist"];
let i=0,j=0,isDeleting=false;

function type(){
let current=roles[i];
document.getElementById("typing").textContent=current.substring(0,j);

if(!isDeleting && j<current.length){ j++; }
else if(isDeleting && j>0){ j--; }
else{
isDeleting=!isDeleting;
i=(i+1)%roles.length;
}
setTimeout(type,100);
}
type();

// Dark Mode
const toggleBtn=document.getElementById("theme-toggle");

if(localStorage.getItem("theme")==="light"){
document.body.classList.add("light-mode");
toggleBtn.textContent="☀️";
}

toggleBtn.onclick=()=>{
document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
localStorage.setItem("theme","light");
toggleBtn.textContent="☀️";
}else{
localStorage.setItem("theme","dark");
toggleBtn.textContent="🌙";
}
};

// 3D Background (UNCHANGED)
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);
document.getElementById("three-container").appendChild(renderer.domElement);

const starGeometry=new THREE.BufferGeometry();
const starVertices=[];
for(let i=0;i<6000;i++){
starVertices.push((Math.random()-0.5)*2000,(Math.random()-0.5)*2000,(Math.random()-0.5)*2000);
}
starGeometry.setAttribute("position",new THREE.Float32BufferAttribute(starVertices,3));
const starMaterial=new THREE.PointsMaterial({color:0x00f2fe,size:1.5});
const stars=new THREE.Points(starGeometry,starMaterial);
scene.add(stars);

const sphereGeometry=new THREE.SphereGeometry(60,64,64);
const sphereMaterial=new THREE.MeshStandardMaterial({color:0x00f2fe,emissive:0x00f2fe});
const sphere=new THREE.Mesh(sphereGeometry,sphereMaterial);
scene.add(sphere);

const light=new THREE.PointLight(0xffffff,2);
light.position.set(200,200,200);
scene.add(light);

camera.position.z=400;

function animate(){
requestAnimationFrame(animate);
stars.rotation.y+=0.0008;
sphere.rotation.y+=0.005;
renderer.render(scene,camera);
}
animate();

// 3D Logo
const logoScene=new THREE.Scene();
const logoCamera=new THREE.PerspectiveCamera(75,1,0.1,1000);
const logoRenderer=new THREE.WebGLRenderer({canvas:document.getElementById("logo3d"),alpha:true});
logoRenderer.setSize(60,60);

const logoGeometry=new THREE.TorusKnotGeometry(10,3,100,16);
const logoMaterial=new THREE.MeshStandardMaterial({color:0x00f2fe,metalness:1,roughness:0.2});
const logoMesh=new THREE.Mesh(logoGeometry,logoMaterial);
logoScene.add(logoMesh);

const logoLight=new THREE.PointLight(0xffffff,2);
logoLight.position.set(50,50,50);
logoScene.add(logoLight);

logoCamera.position.z=40;

function animateLogo(){
requestAnimationFrame(animateLogo);
logoMesh.rotation.x+=0.02;
logoMesh.rotation.y+=0.02;
logoRenderer.render(logoScene,logoCamera);
}
animateLogo();

// Lottie Animation
lottie.loadAnimation({
container:document.getElementById("lottie-character"),
renderer:"svg",
loop:true,
autoplay:true,
path:"https://assets10.lottiefiles.com/packages/lf20_qp1q7mct.json"
});
