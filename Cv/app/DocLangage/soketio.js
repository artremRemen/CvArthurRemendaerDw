//npm install socket.io

let io = require('socket.io')       //appelle le module socket IO 


//-----------------------------------------------coter serveur--------------------------------------------------

io.socket.on('connexion',(socket)=>{        //on active la connexion avec socket io 
    //code
    socket.emit('type de message', 'message a envoyer')     //envois un message au client a chaque connexion (type de message est la vraible dans laquel va etre le message)

    socket.emit('message', { content: 'message', message2: 'message' })   //on envois plusieurs données dans la variable message
})


//-----------------------------------------------coter client--------------------------------------------------

//<script src="/socket.io/socket.io.js"></script>           //on récupere le fichier soket io fournis pas npm

let socket = io.connect('domaine du site:8080')                 // on ce connect au site par le domaine et le port 

socket.on('type de message',(varDeFonction)=>{                  //une fois le serveur allumer on récupere la variable envoyer par le serveur et on la lis 
    //code
})