//npm install -save express                 //installer expressjs

//npm isntall --save ejs                    //moteur de template pour afficher une page web

//npm install --save body-parser            //sert a implanter un middleweir afin de pouvoir déchiffrer correctement les infos de la requete

//npm install --save express-session        //sert a gérer les sessions

//npm install --save mysql                  //installer la librairie de comunication avec my SQL

//npm install --save moment                 // sert a formater les dates et dd'autres chsoes


//dans le package.json (si on veut passer en mode production)   "start": "NODE-ENV=production nodemon server.js"

let express = require('express')()               //appeller expressJS

let session = require('express-session')        //appeller la librairie de session

let message = require('/dossier/fichier')      //appelle le fichier qui va gerer My SQL (on va devoir le creer)

let moment = require('moment')                  //appeller moment

var favicon = require('serve-favicon')          //module d'intégration des favicones

var logger = require('morgan')                  //systeme de log dans la console NodeJS permet de coloré les erreurs et les infos 

var path = require('path')                      //définit les dossiers de base

var cookieParser = require('cookie-parser')     //Permet de gérer les cookies en les transmetans dans les entetes et les changeants en obj


//------------------------COTER SERVER------------------------------------------------------------------------------------

// L'ORDRE D'APPELLE DES MIDDLEWARE EST TRES IMPORTANT  



var2 = express()                                                //apres avoir appeller le module express on creer une var app

var2.get('chemin d\'acces', function(req, res) {             //sert a appeller les pages du site en donnant le chemin d'access (pour la page d'erreur 404 le code est le meme a part qu'il doit etre le dernier ) une variable peut etre mise dans le chemin d'access grace a :var
    const query = req.query                                 //récupere l'objet query et entre ces valeurs dans la variable (récupération des querystrings)

    res.setHeader('Content-Type', 'text/plain');            //définis le header a envoyer au navigateur (aller voir nodeJS pour les infos )
    res.render('fichier.ejs', {variable: req.params.casevariable}) //appeller la page et lui inserer les variables dont elle auras besoin pour fonctionner (doit ce trouver dans le dossier views qui doit etre dasn la racine du site)
    res.send('message a afficher sur le site ');            //message a mettre sur la page en brute 
});

.use(express.static(__dirname + '/public'))                 //indique que la page a charger contient des fichiers statiques (image ...) (module de base d'express)

.use(favicon(__dirname + '/public/favicon.ico'))            //ajoute la favicone a l'onglet de navigation (on doit intégrer le module ) (une fois la variable app mise sur le premier traitement elle na plus besoin d'etre mise les middlewares communiques entre eux )

var2.use(function(req, res, next){                           //en cas d'erreur 404 voici le code (il doit etre mis a la fin du traitement des pages)
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

var2.listen(port)                                               //se met a la fin du code définit le port a écouter par le server


//----------------------------------------------------librarie MySQL---------------------------------------------------------------------

//npm install mysqljs/mysql                //installer le module MySQL

let mysql = require('mysql')        //appelle la librarie MySQL

let connection = mysql.createConnection({           //prepare la connection a la DB
    host: '',
    user:'',
    password:'',
    database:''

})

connection.connect()                        //cree la connection a la DB


static create (content){

    connection.query('INSERT INTO message SET case = ?, case2 = ?', [ValeurCase1, ValeursCase2], (err, result) =>{

        //code

    })

    connection.query('SELCT * FROM table', (err, result) =>{

        //code
        
    })

}

//-----------------------------------------------------------------------------------------------------

//Moment

moment(varaformater)            //format les dates

var1.fromnow()                   //poster depuis maintenant (poster il y a ...)

//-----------------------------------------------------------------------------------------------------

//path

app.set('views', path.join(__dirname, 'views'))                 //Définit le dossier ou ce trouve les pages

app.use(express.static(path.join(__dirname, 'public')))         //définit le dossier dans lequel ce trouves les ressources pour les pages 

//-----------------------------------------------------------------------------------------------------

//morgan (logger)

app.use(logger('dev'))                                          //définit le format d'erreur (la facon dont elle vont sortir  il existe plusieurs format ) tous se met dans la console de nodeJS 

//combined  formatage standard des erreurs d'apaches combinées

: remote - addr - : remote - user[: date[clf]]":method :url HTTP/:http-version" : status: res[content - length] ":referrer" ":user-agent"

//common    formatage standard des erreurs d'apaches

: remote - addr - : remote - user[: date[clf]]":method :url HTTP/:http-version" : status: res[content - length]

//dev   formatage concis et coloré en fonction des erreurs. Le token :status seras coloré en vert en cas de succes, en rouge en cas d'erreur server, en jaune en cas d'erreur client, en cyan pour les redirection de code, et non coloré pour les informations 

: method: url: status: response - time ms - : res[content - length]

//short    formatage par défaut donne le temps de réponse

: remote - addr : remote - user : method: url HTTP /: http - version : status: res[content - length] - : response - time ms

//tiny    formatage minimal

: method: url: status: res[content - length] - : response - time ms



logger(':method :url :status :res[content-length] - :response-time ms')     //format string utilise un token définit (ici le tiny)


logger(function (tokens, req, res) {                            //fonction permet de faire un log Custom
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
    ].join(' ')
})


logger('combined', {                                            //utilise le formatage combine 
    skip: function (req, res) { return res.statusCode < 400 }   //cree des logs si la connexion ne séffectue pas   le dossier pour écrir les logs est (process.stdout)
})



//Créer un nouveau token 

morgan.token('type', function (req, res) { return req.headers['content-type'] })        //nouveau token ('type'   est le nom du nouveau token ) S'il a le mem enom qu'un token existant il va l'écraser  cette fonction doit etre appellée avec les arguments req et res de HTTP 
//On peut ajouter des d'autres arguments si on choisis de le customiser 

: date[format]      //date avec un format définit  (par défaut est web)

//clf           10/Oct/2000:13:55:36 +0000          format de date de log standard 

//iso           2000-10-10T13:55:36.000Z            Formatage en ISO 8601

//web           Tue, 10 Oct 2000 13:55:36 GMT       Formatage RFC 1123


: http - version        //version HTTP de la requete

: method                //méthode HTTP effectuée 

: referrer              //entete utilisé pour la requete 

: remote - addr         //va utiliser req.ip    addresse utilisé pour effectuer la requete 

: remote - user         //utilisateur authentifier 

: req[header]           //entete utiliser (si l'entete nest pas présente les logs vont afficher "-")

: res[header]           //entete de la réponse (si l'entete nest pas présente les logs vont afficher "-")

: response - time[digits]       //temps de réponse avant que la requete arrive dans le logger et avant que l'entete soit écrite (en milliseconde)

: status                //code d'erreur renvoyer par le server (200 404 500 ...)(si le statut est vide les logs vont afficher "-")

: total - time[digits]  // temps avant que la requete arrive dans le logger et qu'elle resorte 

: url                   //URL de la requete

: user - agent          //contenus de l'entete de l'utilisateur agent 

//-----------------------------------------------------------------------------------------------------

//cookieParser


app.use(cookieParser())     //permet d'utiliser la librairie