// (coter terminal)

    //node -- version       donne la version de Node JS


//(coter terminal éditeur)

    //node fichier.js           executer le code du fichier cibler 

    //npm install --save nodemon        //install une librairie permattant de relancer automatiquement le serveur a condition d'aller dans le package changer le node par nodemon et d'axecuter dans le terminal npm run start

/*
    //type MIME  de fichier que le serveur peut renvoyer

    Du texte brut : text/plain

    Du HTML : text/html

    Du CSS : text/css

    Une image JPEG : image/jpeg

    Une vidéo MPEG4 : video/mp4

    Un fichier ZIP : application/zip

    ...
*/

//creer le serveur

let nomvar =  require('http')       //appelle la module HTTP pour pouvoir l'utiliser

let nomvar3 = require('fs')         //appelle de la librairie FS qui permet de lire les fichiers

let nomvar4 = requre('url')         //permet de lire les URL

let nomvar2 = nomvar.createServer()               //permet de creer le serveur (il n'est pas encore configurer)

    nomvar2.on('request', function(request, response){})                 //lors qu'il y a une requete il execute la fonction (le request entre les guillemet est l'vénemet a écouter) (le dernier request et le response sont les variables a récupérer )

    nomvar2.on('request', (request, response) =>{                       //pareil qu'au dessus mais avec la sintaxe ES6 (plus récente) (le request entre les guillemet est l'vénemet a écouter) (le dernier request et le response sont les variables a récupérer )

    response.writeHead('200', {                                         //envois le code d'erreur au server (200 tout est bon aps d'erreur) et des infos suplémentaires

        'content-type': 'type de fichier ; charset=utf-8'               ////entete a renvoyer au serveur (code d'erreur pour dire l'état de la demande) type de fichier a que l'on renvois aller voire en haut type MIME  et l'encodage (généralement UTF-8)

    })         

    response.write('message')                                           //message a afficher (pas obligatoire)

    response.end('message')                                             //fin de la requete et message a afficher a chaque requete

    nomvar4.parse(request.url, true).query                                          //permet de déchffrer l'url afin de la rendre exploitable (request.url et la querystring récupérée) si le deuxieme parametre est true il va aussi parser les parametres

    nomvar3.readFile('fichier a lire','charset ou buffer', (err, data) =>{                  // va chercher le fichier cibler renvoyer les infos et les possibles erreurs  on peut lui mettre un charset ou un buffer(pour les images) afin qu'il prenne tout en querystring

        if (err) throw err                                              //s'il y a une erreure on arrete le serveur (throw err) ou on la récupere et r'envois une entete différent avec un message 

        nomvar3.writeFile('fichiercopie', var a écrir, (err)=>{         //ecrir un fichier sur le serveur (va d'abord tous lire puis tous écrir pas super car peut faire planter la mémoire de node si fichier trop grand)

                //code

        })

        response.writeHead(200 , {                                         //envois le code d'erreur au server (200 tout est bon aps d'erreur) et des infos suplémentaires

            'content-type': 'type de fichier ; charset=utf-8'               //type de fichier et encodage utiliser

        }) 

        let data = data.replace('{{ motClé }}', varremplacement)               //remplacer une chaine ( {{ mot clé }} ) qui se trouve dans la page a ouvrir par la variable qui suit   doit avoir un charset ou buffer dans le readfile pour etre utilisé 

        response.end(data)                                              //on r'envois la variable de donnée
    })     
    
    let var2 = nomvar3.createReadStream('fichier a lire')                           //permet de lire et écrir en meme temps

    var2.on('data',(morceau) =>{                                        //va lire les différents morceau du fichier
        
        morceau.length                                                  //taille du morceau de fichier lus 

        //code

    })

    var2.on('end',()=>{})                                               //lors qu'il a finis de lire le fichier il éxécute cette fonction

    nomvar3.stat('fichier', (err, stat)=>{                              //donne les stats du fichier

        stat.size                                                       //permet d'avoir la taille du fichier

    })

    nomvar3.createWriteStream('fichier a creer')                        //creer un fichier pour écrir dedant

    
    var2.pipe('var decriture')                                          //va lier les deux flux (ecriture lectur) afin d'arreter de lire si l'écriture est trop lente 

    var4.on('finish', ()=>{})                                           //a la fin de la copie il executeras ce code


})                     

nomvar2.listen(port)                                              //définit le port sur lequel le serveur doit écouter 

//------------------------------------------------------------------------------------------------------------------------------------------

//creer son event

const EventEmitter = require('events')                      //appelle de la libraire d'event

let var1 = new EventEmitter()                               //instancier le nouvel event

var1.on('requete', function(){                              //création de l'évent    peut remplacer le on par once et il ne le feras qu'une seul fois
    //code
})

var1.emit('requete')                                         //active l'évent s'il a été creer avant


//------------------------------------------------------------------------------------------------------------------------------------------------

//ceation utilisation de module perso

module.exports = nonFonction                                    //exporte la function pour pouvoir l'utiliser ailleur

module.exports = {                                              //exporte directement un tableau
    //code
}

exports.var11 = function(){                                     //export directement la function sans la redéfinir en dessous

}

let var10 = require('chemin d\'access vers le fichier et le nom de l\'export')         //importe la function

//----------------------------------------------------------------------------------------------------------------------------------------------------

//module NPM

npm init        //initialise le projet

npm install --save nommodule            //va installer le module et le save dans le package.json

letvar100 = require('nommodule')            //appeller un module