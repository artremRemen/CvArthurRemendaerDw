const nomVar:string = 'value';  // on va creer une constante ou une variable avec le type de celle ci (string, int, bool,...) 
const arr: string[] = [];   // on va creer un tableau et définir ke type de valeur que lon met dedans (any veut dire que l'on peut mettre plusieurs type de valeurs différentes)
const object: {case1:string, case2:number, case3?:string, [key: string]: string} = {case1: "test", case2: 3}; //on définit un tableau en précisant les type (chaque cases preciser dasn le tableaux doivent etre obligatoirement remplie exepter celles avec un ?)(la derniere partie du tableaux veut dire que l'on peut avoir d'autres entrées inconnues du type de clé donner et de la valeur donnée)

const date: Date = new Date()      //creer un bobjet specifique partant d'une class (date)

const fn:Function = (e:string):void =>{
   //le void signifie que la fonction ne doit rien retournée du tous sinon on précise le type quelle retourne 
}

function fn2(e:MouseEvent){

}

const fn3: (e:number) => number = (e:number): number =>{
return 3;
}

const var2 = document.querySelector(".class") as HTMLButtonElement      //on va dire a typescript quel element doit venir avant que celui ci arrive afin de preparer le terrain 
const var3 = <HTMLButtonElement>document.querySelector(".class")      //autre facon de dire a typescript quel element doit venir avant que celui ci arrive afin de preparer le terrain 

let var4: string|number;      //la variable peut etre soit de type string soit d etype number (focntionne avec tous les types)

var4?.toString()    //si la vriable est null alors il ne fait rien 

