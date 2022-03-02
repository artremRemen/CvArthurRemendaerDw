/*
    commentaire multilignes
*/

console.log("mot", variable , "mot");          //affiche un mot ou une variable dans la console du navigateur

'use strict'									//a mettre en début de code pendant le dev il permet d'afficher les erreurs qui ne s'affiche pas en temps normal

typeof(var1);             //donne le type de variable

//______________________________VARIABLES_______________________________

let nomVar = null;                   //on vide la variable de sa valeur

let nomVar = "val";                  //creer une variable standart 

var nomVar = "val";                  //creer une variable standart qui agis peut importe ou elle se trouve également hors de la fonction ou elle a été générée (preference pour let car plus sécuriser)

let nomVar = true;                  //variable booléene si true valeur est vrais si false valeur est fausse 

const nomconst = 'val';                      //creer une constante ne peut plus etre modifier une fois creer et doit obligatoirement avoir une valeure


var1.parseInt('val')				//convertis une variable string en nombre

var1.toString('val')				//convertis un nombre en string

var1.parseFloat('val')				//convertis une string en nombre a virgule

var1++;								//si la variable est un nombre on ajoute 1 a sa valeure

var1--;								//si la variabel est un nombre on retire 1 a sa valeure

+var1								//change les string en nombre

-var1								//change de signe de la variable (la rend négative ou positive)

var1 += nombre						// on ajoute le nombre a la variable puis on sauvegarde

var1 -= nombre						// on soustrait le nombre a la variable puis on sauvegarde(peut se faire avec toutes les opérations)

var1 <<= 1							//décale tous les bits de la variable de 1 vers a gauche

var1 >>= 1							//décale tous les bits de la variable de 1 vers a droite

//______________________________Tableaux_______________________________

let nomtableau = [ val1, val2];      //permet de creer un tableaux 

nomtableau[1]                       //demander la 2 valeure du tableau

nomtableau.length                   //sert a connaitre la longeur du tableau

nomtableau.push('val')              //va mettre la valeur a la derniere entree du tableau

nomtableau.pop();                   //suprimer la derniere entree du tableau

nomtableau.shift();                 //suprimer la premiere entrée du tableau

nomtableau.splice(numcase)          //suprimer une case spécifique du tableau

let [var1, var2, ...] = nomtableau		//sert a mettre les valeurs d'un tableau dasn des variables séparer la DERNIERE variable peut rester un tableau contenent le reste des valeurs si on l'écrit (...nomtableau)

let [,, ...] = nomtableau		//le tableau creer ici contient les valeurs du premier moins les premiere cases (le nonbre de case passées = le nombre de ,)

let var1 = nomtableau.filter(var2 => nomtableau.cellule ==='valeur');		//sert a récuperer les cases du tableau contenant les valeurs indiquer en attributs dasn les cellules ciblées

let var1 = nomtableau.every( nomvar2 => nomvar2.nomtableau >0 )				//sert a reprendre toutes les cases du tableau qui respecte la condition

let var1 = nomtableau.find( nomvar2 => var2.nomtableau >500)				//sert a trouver la cellule qui remplis la condition 

if ('valeur' in tableau) {					//permet de vérifeir si la valeur est dans le tableau 
	//code
}

//______________________________Conditions_______________________________

if (condition) 
{
    //code    
}

else
{
    //code
}

var nomvar = (condition) ? siVrais : siFaux			//un if pour les opérations simple (le = est le comparateur et peut etre changer)   operateur ternaire 

==									//est strictement égales a (il convertis une variable pour avoir les deux meme types)

===                                 //est strictement égale a (les variables doivent etre du meme type)

!=									//est différent de (il convertis une variable pour avoir les deux meme types)

!==									//est différent de (les variables doivent etre du meme type)

>=                                  //est plus grand ou égale a

<=                                  //est plus petit ou égale a

>                                   //est plus grand que

<                                   //est plus petit que

&&									// les deux valeures adjacente doivent etre true( elle auras la priorité sauf sil l'autre condition est entre ())

||									// une des deux variables adjacentes doit etre true

//________________________________switch_________________________________

switch(var1)
{

	case 'val':

		//code

	break;

	case 'val2':

		//code

	break;

	default:

		//code

	break;
}

//______________________________Boucles_______________________________

for (déclaration de variable; condition; action)            
{
	//code    
	
	break 			//sert a sortir de la boucle avant la fin de la condition 

	continue		//la boucle exécute l'action sans éxécuter le code en dessus de cette ligne 
}

while (condition) 
{
    //code    
}

nomtableau.forEach(nomvar2, cellule => console.log(nombar2, cellule))		//sert a récuperer toutes les valeurs d'un tableau

//______________________________fonctions_______________________________

let var3 = (var1, var2) => {			//déclaration d'une fonciton en ES6 (préférable a l'autre facon de déclaration car plus courte et plus prévisible)
	//code
}

let var3 = (var1, var2) => var4 * var5 		//déclaration en une ligne

let var3 = var1 => var4 * var5				// si on ne met qu'une variable en entrée les parrentheses ne sont pas obligatiores



nomFonction(var1, var2)					//appelle une fonction 

nomFonction(...var2)					//appelle une fonction avec un tableau en valeur (les variables a l'interieurs de la fonctions peuvent etre des variables standarts) 

function nomFonction(var1, var2)					//sert a définir une fonction la DERNIERE variable peut etre un tableau si on l'écrit (...nomtableau)
{
	//code
}

(function(){							//cette fonction va s'éxécuter directement apres sa création
	//code
})()

return var1; 									//lorsque que l'on doit ressortir un valeur hors de la fonction lors'quelle de termine

let var1 = (function()						//cette fonction s'auto appelle apres sa création et peut etre rappeller par la suite grace a la variable
{
	//code
})();

let nomvar = nomfonction.bind('nouveaunomfonction')		//sert a changer le nom de la fonction si besoint de la changer de contexte (fait une copie et garde l'originale)

let nomfonction = ('val1', 'val2') =>{					//fonction fleche "_"(signifie quil n'y a pas dargument et remplace les parentheses)

	//code

}

function nomFonction(var1, var2='valdefaut')					//sert a définir une fonction
{
	//code
}

function nomfunction(val){							//creer une fonction composer d'objet

	//code

	this.methode = function(){						//ceer une methode

		//code

	}
}

nomfonction.prototype.methode= function(){			//ceer un prototype que l'on va pouvoir dupliquer 

	//code
}

let nomvar = new nomfonction(val)  					//appelle cette fonction

nomfonction.methode									//appelle de la methode

nomvar1.then										//varifie si la requete a bien été envoyer
(
	data=> /*code*/  ,		
	error=>/*code*/ 
)

var nomfocntion = new nomfonction()			


var nomVar = new function nomFonction()					//appeller une fonction (si le new n'est aps mis il va tous mettre sur l'objet window (base du DOM s'il est mis il va creer un obj qui prendra les valeurs ))


//_____________________________________OBJET______________________________

let nomobj ={}						//déclaration d'un objet vide

let nomobj ={case: 'val1',
				case2:'val2'}

nomobj.case 						//appeller une case de l'objet

nomobj.case ="nouvelleval"			//assigner une nouvelle valeur a la case

nomobj.casefunc= function(){code}		//ajouter une fonction directement dans l'objet 

nomobj.casefunc()						//appelle de la fonction dans l'objet 


let nomtableau = 					//creation du tabeau
[
	{								//creation de l'objet dans le tableau
		case1= 'val',
		case2= 'val2'
	},
	{
		case= 'val',
		case2= 'val3'
	}


]

nomtableau[cellule].case 		//appelle d'un objet dans un tableau

let {var1, var2} =nomobj		//sert a mettre les valeurs d'un objet dans des variable séparer si les variables sont déja déclarés on enleve le let et on met la ligne entre ()

display(nomobj.case)			//affiche la case sélectionner a l'écran 

var nomobj = object.create(object.prototype,{case: 'valeur', case: 'valeur'}, {case:'valeur'})		//création d'un prototype d'objet (creer un template)

class nomobj {								//permet de creer un objet comme une class
	coonstructor(var1, var2){
		this.case = var1,
		this.case = var2
	}
}

var nomObj = new nomobj(var1, var2)			//appeler l'objet creer avec la class et lui entrer les valeurs	

object.getOwnPropertyDescriptor(nomobj, 'case')			//renvois toutes les propriétes que la case contient et qui permet de la modifier ou non 

object.freese(nomobj, 'case')							//permet de transmettre les parametres de cette case a toutes les case que celle si contiendrais 

object.defineProperty(nomobj, 'nouvellecase',{			//permet d'appeller plusieurs case en meme temps grace a ce nouvel attribut 

	get: function(){									//affiche les cases demander 
		return this.case = this.case2
	} ,
	set: function(){									//va remplir les cases demandés grave au variables que l'on va lui mettre
		this.case1 = nomvar1
		this.case2 = nomvar2
	}
})

nomobj.prototype.case = 'valeur'						// on ajoute la valeur a tous les objets qui utilise cet objet comme base 

let nomobj2 = new nomobj('valeurcase1', 'valeurcase2')	//l'objet 2 auras les memes propriétés que l'ojet 1 car le 1 est un prototype et agis sur les autres  (les propriétés peuvent etre changer sur un objet sans changer la valeurs des autres )

nomobj2.__proto__.case									//si le prototype existe il iras chercher la valeur de la case dans le prototype et non la valuer de la case de l'objet 

//exemple de prototype 

function objproto(var1, var2){							//on cree notre prototype en lui mettant les cases a remplir (on fait un template)
	this.case1 = var1
	this.case2 = var2
}
objproto.prototype.caseproto = 'val'					//on lui ajoute une case avec une valeur par défaut si la case n'est pas ajouter dans les objets utilisant ce prototype

objetparent.call(this)									//SI il y a une fonction parent il l'appelleras et la mettras pas défaut dasn tous les enfants
let nomObj = new objproto('val1', 'val2')				//on cree un objet utilisant ce protype et on lui met les valeurs des cases creent plus haut (on n'a pas changer la case proto car elle na pas été ajouter spécifiquement dans cet objet ce qu iveut dire qu'il va recherhcher celle du prototype)
let nomobj2 = new objproto('val1', 'val2')				//on cree un objet utilisant ce protype et on lui met les valeurs des cases creent plus haut (on n'a pas changer la case proto car elle na pas été ajouter spécifiquement dans cet objet ce qu iveut dire qu'il va recherhcher celle du prototype)

nomobj2.caseproto = 'valeur3'							//on ajoute une case a l'objet qui a le meme nom que la case ajouter par l'objet prototype ce qui veut dire que cet objet auras ce propre valeur et que les autres garderons la valeur par défaut donnée par le prototype

//creer notre propre chaine de prototype 

function objetparent(){									//on cree l'action que nos objets doivent effectuer 
	objetparent.prototype.case = function(){}
}

objproto.prototype = object.create(objetparent.prototype)	//on assigne objetparent a l'objet prototype en en le trnasforment en obj

nomobj.prototype.constructor = 'nom de l\'objet'

const {case} = require ('module') 			//aller chercher une fonction spécifique dans le module que l'on appele 

//___________________________________DOM________________________________

let nomvar = document.getElementById('id')				//récuperer une balise par l'ID

nomVar.innerText('text')								//inserer du text dans une balise

nomvar.addEventListener('action', function(){			//lors qu'une action est effectuer cette fonction permet de la lire et d'effectuer le code a l'interieur     click

	//code

	click		//lors que l'on click sur l'élément
})


nomVar.style.display = 'none       block'				// seert a montrer ou a cacher un élément de la page

window.innerHeight		//hauteur de la page du navigateur

window.innerWidth		//largeur de la page du navigateur

alert()			//affiche une fenter de dialoge

back()			//ouvre une fenter de retour en arriere dans l'historique

confirm() 		//documentnde a l'utilisateur s'il confirme une action


location.href	//donne l'url ou l'on se trouve

document.getElementById('ID')		//selectionner un élément grace a son ID

document.getElementsByClassName('class')		//selectionner un élémnet par la class

document.getElementsByTagName('tag')			//récupere toutes les balise d'un type

document.querySelectorAll("balise, class")		//selectionner utous les éléments par les balise et ou les classes et ou les attributs

nomvar1.textContent('text a afficher')			//remplacer ou ajouter du texte a l'élément secctionner( nomvar d"finit l'élément selctionner pour éviter de remttre document...)

nomvar1.setAttribute('attribut', 'valeurattribut')		//ajouter un attribut a l'élément selectionner

nomvar1.classList.add('nomclass')				//ajouter une class a un élément

element.style.color='couleur'					//changer la couleur de lélément selectionner (le color peut etre changer par un autre attribut CSS)

nomvar1.innerHTML= "contenus"					// permet d'ajouter un morceau de code a la page

nomvar1.textContent="texte"						//permet d'ajouter du texte dans une balsie

nomvar1.classList.add("classAAjouter")			//ajouter une class a la balise sélectionner

nomvar1.classList.remove("class")			//supprimer une class a la balise sélectionner

nomvar1.classList.contains("class")			//vérifie si une class est dans la balise sélectionner

nomvar1.classList.replace("vielleclass", "nouvelleClass")			//remplace une class par un autre

nomvar1.setAttribut('attribut', "valeur")					//ajouter ou modifier un attribut a une balise

nomvar1.getAttribut("attribut")					//retourner la valeur de l'attribut

nomvar1.createElement('balise')				//ajouter une balsie dans le code (n'est pas encore visible dans la page)

nomvar1.appendChild(varBalise)				//ajouter une balise dans la page en tant qu'enfant de la balise selectionner

nomvar1.removeChild(VarBalise)				//suprimer la balise enfant da la balise selectionner

nomvar1.replaceChild(varBalise2, varBalise) 		//remplacer la balise 1 par la balise 2

nomvar.preventDefault()						//empeche de faire l'action définie par défaut

nomvar.stopPropagation()				//empeche la propagation de l'evenement sur les balises parents

nomvar.event.currentTarget				//récuperer dernier objet selectionner

nomvar.preventDefault			//empeche l'éxecution de l'action (redirection validation de form ...)

//___________________________________JSON________________________________

JSON.stringify(nomvar)				//convertir variable en JSON

let nomvar = JSON.parse(nomVar2)	//transformer var json en tableau 


//___________________________________CLASS________________________________

class Nomclass			//creation de la class (premiere lettre en majuscule pour une raison de convention)
{
	//code
}

let nomvar1 = new Nomclass.fonction 		//appelle de la class et une fonction de cette class

class Nomclass2 extends NomClass 			// la class NomClass2 hérite de la NomClass elle prend toute ces variables
{
	//code
}

let timer = setTimeout(				//creer un timer le '1000' definit le temps d'activiter du timer en milliseconde 

	//fonction
	,1000
)

clearTimeout(timer)				//arrete le timer et execute le code a l'interieur


module.exports=  class nomclass {			//exporter une class en tent que module  pour l'integrer dans le fichier server 
	//code
}

const Nomclass = require('chemin') 			//importe le fichier de la class

let nomclass = new Nomclass()				//initialise la classe


let intervalle = setInterval(	//va executer la fonction tous le temps avec un delais de X milliseconde
	//fonction
	,1000
	)

clearInterval(intervalle)	//arrete execution de la boucle interval

//___________________________________XHR (Ajax)________________________________

//Xml Http Request

let nomvar1 = new XMLHttpRequest();		//on appelle la fonction XHR

nomvar1.onreadystatechange = fonction()					//suit l'évolution de la requete
{
	if(nomvar1.readystate == 4 && this.status == 200)	//si la requete est arriver au bout et qu'il n'y a pas d'erreur (erruer 200 tout est OK) alros on execute le code
	{
		//code
	}
};

nomvar1.responseText		//sert a définir la requete comme du texte

monvar.responseXML			//définit la requete comme XML

nomvar1.responseType = ''		//définit le type de requete (Json ...)

nomvar1.open("get", "url de destination", true);	//URL de redirection en méthode get (true signifie quel se fait de facon asynchrone)

nomvar.send('valeur a envoyer au serveur&valeur 2'); 			//envoyer la requete

nomvar.setRequestHeader('Content-Type','type d\'encodage')			//définir le type d'encodage utiliser par la requete

encodeURIComponent(nomvar)			//sert a échapper les caracteres spéciaux

let nomvar = new FormData()			//appelle de la librairie Form data qui permet d'envoyer les infos plus facilement peut avoir comme parametre (form) qui va selectionner et traiter le formulaire au complet

nomvar.append('nom', valeur)		//permet de mettre les valeurs a envoyer dans la requete	une fois les données enregistrées on fait un send avec la variable en attribut

//___________________________________JQuery________________________________

//Pour installer le package il faut aller dasn la console et mettre npm install jquery

import $ from 'jquery'					// importer la bibliotheque Jquery le "$" sert de variable pour appeller la fonction

let nomvar1 = $.get('url', nomobj)		//récuperer les donées par get

let nomvar1 = $.post('url', nomobj)		//récuperer les donées par post

//___________________________________Formulaire________________________________

// on donne un ID au formulaire et on le selctionne en js que l'on stocke dans une variable

nomvar1.addEventListener('submit', event => {		// lors que le formulaire seras envoyer il effectueras le code 

	let nomvar2 = form.element['nom de l\'input']		//va selectionner une case du formulaire grace a l'attribut name

	event.preventDefault()		//empeche l'envois des données
})


//---------------------------FETCH------------------------------

