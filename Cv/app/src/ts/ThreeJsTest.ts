type CanvasSize = {
    width:number,
    height:number
}
import * as THREE from 'three';


const canvasAbout: HTMLCanvasElement = document.querySelector('.Canvas__About') as HTMLCanvasElement;


const canvasWH:CanvasSize = {width: canvasAbout.offsetWidth, height: canvasAbout.offsetHeight}; 


var renderer, scene, camera, mesh;


function init(){
    // on initialise le moteur de rendu
    renderer = new THREE.WebGLRenderer();
    
    // si WebGL ne fonctionne pas sur votre navigateur vous pouvez utiliser le moteur de rendu Canvas à la place
    // renderer = new THREE.CanvasRenderer();
    renderer.setSize( canvasWH.width, canvasWH.height );
    canvasAbout.appendChild(renderer.domElement);
    
    // on initialise la scène
    scene = new THREE.Scene();
    
    // on initialise la camera que l’on place ensuite sur la scène
    camera = new THREE.PerspectiveCamera(50, canvasWH.width/ canvasWH.height, 1, 10000 );
    camera.position.set(-canvasWH.width/4, 0, 1000);
    scene.add(camera);
    
    // on créé un  cube au quel on définie un matériau puis on l’ajoute à la scène 
    const geometry = new THREE.BoxGeometry( 200, 200, 200 );
    const material = new THREE.MeshBasicMaterial( { color: 0x555555} );
    const cube = new THREE.Mesh( geometry, material );

    //passer le modele en wireframe
    const wireframe = new THREE.WireframeGeometry( geometry );

    const line = new THREE.LineSegments( wireframe );
    line.material.depthTest = false;
    line.material.opacity = 0.25;
    line.material.transparent = true;

    //ajouter le modele ou le wireframe a la scene
    scene.add( line );
    
    // on effectue le rendu de la scène
    renderer.render( scene, camera );
    
    //animation du mesh
    function animate() {
        requestAnimationFrame( animate );

        line.rotation.y -= 0.01;

        renderer.render( scene, camera );
    };

    animate();

}
init();