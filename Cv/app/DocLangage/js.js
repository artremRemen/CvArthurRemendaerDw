/* 
commentaire multiligne      de bloc
*/

// commentaire en une ligne     commentaire de ligne

()      //operateur d'appelle de fonction

+       // lors que l'on l'utilise afin de mettre plusieurs variables les unes derriere les autres il s'appelle opérateur de concaténation


console.log("string" var);  //pemet d'afficher dans la console du navigateur ou/et de l'éditeur de text les valeurs ce trouvant entre parenthese

alert('valAafficher');       // va ouvrir une boite de dialogue avec du contenus a afficher a l'écrans 

prompt('description');      // va ouvrir une boite de dialogue qui va demander a l'utilisateur d'indiquer quelque chose dans le champs(le text entre parenthese ce mettras au dessus du champs d'entrée)

//VARIABLES_________________________________________________________________________________________________

let nomVar = null;                   //on cree un variable vide

let nomVar = "val";                  //creer une variable standart 

var nomVar = "val";                  //creer une variable standart qui agis peut importe ou elle se trouve également hors de la fonction ou elle a été générée (preference pour let car plus sécuriser)

let nomVar = true;                   //variable booléene si true valeur est vrais si false valeur est fausse 

const nomconst = 'val';              //creer une constante ne peut plus etre modifier une fois creer et doit obligatoirement avoir une valeure

var1++;								//si la variable est un nombre on ajoute 1 a sa valeure

var1--;								//si la variabel est un nombre on retire 1 a sa valeure

+var1;								//change les string en nombre

-var1;								//change de signe de la variable (la rend négative ou positive)

var1 += nombre;						// on ajoute le nombre a la variable puis on sauvegarde

var1 -= nombre;						// on soustrait le nombre a la variable puis on sauvegarde(peut se faire avec toutes les opérations)

var1 <<= 1;							//décale tous les bits de la variable de 1 vers a gauche

var1 >>= 1;							//décale tous les bits de la variable de 1 vers a droite


//Array tableau_________________________________________________________________________________________________

let nomtableau = [ val1, val2];      //permet de creer un tableaux 

nomtableau[1];                       //demander la 2 valeure du tableau

nomtableau.length;                   //sert a connaitre la longeur du tableau

nomtableau.push('val');              //va mettre la valeur a la derniere entree du tableau

nomtableau.pop();                   //suprimer la derniere entree du tableau

nomtableau.shift();                 //suprimer la premiere entrée du tableau

nomtableau.splice(numcase);          //suprimer une case spécifique du tableau

let [var1, var2, ...] = nomtableau;		//sert a mettre les valeurs d'un tableau dasn des variables séparer la DERNIERE variable peut rester un tableau contenent le reste des valeurs si on l'écrit (...nomtableau)

let [,, ...] = nomtableau;		//le tableau creer ici contient les valeurs du premier moins les premiere cases (le nonbre de case passées = le nombre de ,)

let var1 = nomtableau.filter(var2 => nomtableau.cellule ==='valeur');		//sert a récuperer les cases du tableau contenant les valeurs indiquer en attributs dasn les cellules ciblées

let var1 = nomtableau.every( nomvar2 => nomvar2.nomtableau >0 );				//sert a reprendre toutes les cases du tableau qui respecte la condition

let var1 = nomtableau.find( nomvar2 => var2.nomtableau >500);				//sert a trouver la cellule qui remplis la condition 


//Objets_________________________________________________________________________________________________

let nomobj ={};						//déclaration d'un objet vide

let nomobj ={case: 'val1', case2:'val2'};

nomobj.case; 						//appeller une case de l'objet

nomobj.case ="nouvelleval";			//assigner une nouvelle valeur a la case

nomobj.casefunc= function(){code};		//ajouter une fonction directement dans l'objet 

nomobj.casefunc();						//appelle de la fonction dans l'objet


//test_________________________________________________________________________________________________

//expression        sequence de mot ayant une valeur(ca peut etre un seul chiffre) (1, 2, 3, ...) la valeur de sortie doit etre un nombre ou qu'une valeur numérique est a l'intieur de l'instruction

//instruction ensemble de variables/chaine/nombre exécutant une condition

if (condition)          //structure de controle
{
    //code    
}

else
{
    //code
}

var nomvar = (condition) ? siVrais : siFaux			//un if pour les opérations simple (le = est le comparateur et peut etre changer)

//opérateru de comparaison

==									//est égales a (il convertis une variable pour avoir les deux meme types) comparaison sur les valeurs 

===                                 //est strictement égale a (les variables doivent etre du meme type) comparaison 

!=									//est différent de (il convertis une variable pour avoir les deux meme types)

!==									//est différent de (les variables doivent etre du meme type)

>=                                  //est plus grand ou égale a

<=                                  //est plus petit ou égale a

>                                   //est plus grand que

<                                   //est plus petit que

&&									// les deux valeures adjacente doivent etre true( elle auras la priorité sauf sil l'autre condition est entre ())

||									// une des deux variables adjacentes doit etre true
