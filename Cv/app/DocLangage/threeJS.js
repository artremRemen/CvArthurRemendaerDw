//a besoint du fichier three.js dans le dossier js

script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r83/three.js"></script> //sert a implanter threejs au site en passant par un URL

var scene = new THREE.Scene();      //création de la scene

var camera = new THREE.PerspectiveCamera( fov, width / height, 1, 1000 );           //création de la caméras avec ces options (field of view ),   width/ height (aspet, ratio de la caméras ), clip distance proche, clip distance loin

camera.position.y = 100;        //place la caméra dans la scene

var renderer = new THREE.WebGLRenderer();                       //définit le moteur de rendus
renderer.setSize( window.innerWidth, window.innerHeight );      //taille de la fenetre
document.body.appendChild( renderer.domElement );               //endroit de la fenetre

scene.add( camera );            // ajout de la caméras a la scene

var geometry = new THREE.BoxGeometry( 1, 1, 1 );    //création d'un cube avec les tailles

var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );      //création d'un matériaux basique

var line = new THREE.Geometry();                    //créer une ligne
line.vertices.push(new THREE.Vector3( -3, 0, 0) );  //définir un point de la ligne
line.vertices.push(new THREE.Vector3( -3, 1, 0) );  //un deuxieme point de la ligne

var cube = new THREE.Mesh( geometry, material );                //liaison du cube et du matériaux 

scene.add( cube );          //implantation du cube (le cube peut etre remplacer par autre chose)

camera.position.z = 5;      //position de la caméras 

function animate() {                //rendus de la scene  et création des animations
    requestAnimationFrame( animate );   //implantation des animations

    //animation

    renderer.render( scene, camera );   //création du rendus
}
animate();

//___________________________________animations________________________________________

cube.rotation.x += 0.01;    //vitesse de rotation sur l'axe des X

cube.rotation.y += 0.01;    //vitesse de rotation sur l'axe des Y