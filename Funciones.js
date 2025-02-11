//FUNCION AT Como tal esta funcion lo que hace es decir en que posicion
//esta un numero o palabra en un array

let HarryPotter = ["Severus", "Dobby", "Regulus"]
console.log(HarryPotter.at(1))

//En este caso imprimira Dobby que esta en la posicion 1

//FUNCION CONCAT como tal esta funcion lo que hace
//  es que junta 2 arreglos concatenandolos

let Autos = ["Bmw", "Mercedes", "Audi"]
let Motos = ["Yamaha", "Ducati", "Suzuki"]

console.log(Autos.concat(Motos))

//En este caso imprimira 
// Bmw, Mercedes, Audi, Yamaha, Ducati, Suzuki

//FUNCION CONSTRUCTOR no le encontre mucho uso pero se expresaba que referenciaba
//la funcion con la que se creo el objeto que en este caso es un array

let ESDLA = ["Frodo", "Gandalf", "Bilbo"]

console.log(ESDLA.constructor === Array)
//Imprimiria True, pues ESDLA es un Array


//FUNCION COPYWITHIN copia elementos en el array y sobreescribe los que
//ya estaban, por ejemplo copia los del indice 5 y los pone desde el indice 0

let modelosMustang = [1965,1974,1979,1994,2005,2015,2021,2024]
console.log(modelosMustang.copyWithin(0,5))

// en este caso imprime 2015, 2021, 2024, 1994, 2005, 2015, 2021, 2024

//FUNCION ENTRIES esta como tal me indica cual fue la ubicacion o como dice 
//la palabra en ingles lieralmente entries= entrada

let OnePiece = ["Luffy", "Zoro", "Sanji", "Chopper", "Nami","Robin","Jimbei","Franky"]

for (let[posicion,valor] of OnePiece.entries()){
    console.log(posicion,valor)
}

// en este caso se imprime 0 Luffy
//0 Luffy
//1 Zoro
//2 Sanji
//3 Chopper
//4 Nami
//5 Robin
//6 Jimbei
//7 Franky



//FUNCION EVERY esta funcion como dice su nombre en ingles, cada, todo
//me va a indicar si todos los elementos del el array cumple con una condicion


let precios = [50000,10000,150000,200000]
console.log(precios.every(x=> x >70000))

// en este caso imprime false ya que 50000< 70000


//FUNCION FILL, lo que hace es basicamente llenar el arreglo con lo que se le de

let BalonDor = ["Rodri", "Vinicius", "Belingham", "Raphinha"]
console.log(BalonDor.fill("Vinicius"))

// en este ejemplo imprime Vinicius, ya que vinicius merecia el balon de oro

//FUNCION FILTER lo que hace es basicamente su nombre, filtrar aquellos individuos
//del array que cumplen con una condicion

let Edadpension = [60,61,62,63,64,56,57,43,67,89]
console.log(Edadpension.filter(x=> x>=63))

//En este caso imprime 63,64,67,89 ya que son aquellos que cumplen la condicion

//FUNCION FIND esta funcion es que halla el primer numero que cumpla con la condicion
//cabe decir que no los ordena asi que el primero literalmente 

let costos = [8,9,15,11,12,13]
console.log(costos.find(x=> x>10))

// en este caso imprime 15


//FUNCION INDEX, lo que hace es indicar la posicion del primer elemento 
//que cumpla la condicion

let Bleach = ["Rukia", "Ichigo", "Byakuya", "Aizen", "Ichigo"]
console.log(Bleach.findIndex(x=> x == "Ichigo"))

//En este caso devuelve 1 que es la posicion donde esta "Ichigo"


//LAS FUNCIONES FINDLAST Y FINDLASTINDEX NO ESTAN


//FUNCION FLAT como tal concatena sub arrays del array original con ese mismo
//uno le indica cuantos arrays puede agregar

let MuscleCars= ["Pontiac", "Camaro",["Chevelle","Challenger",["Hemi"]]]
console.log(MuscleCars.flat(1))

//En este caso imprime Pontiac', 'Camaro', 'Chevelle', 'Challenger', Array(1), no incluye a 
//"hemi" ya que solo le deje pasar 1 array 


//FUNCION FLATMAP, como tal mapea cada elemento y 
// despues indica ese resultado en un array incluyendo los valores originales y los nuevos

let presupuestos = [50,100,150]
console.log(presupuestos.flatMap(x=>[x, x*3]))
//En este caso imprime 50, 150, 100, 300, 150, 450 teniendo los valores originales
//Y los nuevos que son los mismos *3

//FUNCION FOREACH ejecuta lo que se le inidique una vez por
//cada elemento del array

let valores = [2,4,8]
valores.forEach((Numeros)=> console.log(Numeros))

//En este caso imprime los 3 Numeros 2,4,8


//FUNCION INCLUDES como tal indica si el valor se encuentra o no

let peliculas =["Harry Potter", "Vampire Diaries", "Arrow"]
console.log(peliculas.includes("Vampire Diaries"))

//Indica true ya que si se encuentr


//FUNCION INDEXOF indica en que indice, posicion se encuentra el elemento del arreglo

let juegos = ["Gta V", "FIFA", "Red Dead Redemption"]
console.log(juegos.indexOf("FIFA"))

//Imprime 1 pues FIFA se encuentra en la posicion 1 del arreglo


//FUNCION JOIN  lo que hace es unir todos los elementos del arreglo y los separa con otro elemento

let artistas =["Taylor Swift", "Diomedez", "Sandro"]
console.log(artistas.join(" Adora a "))

//En este caso se imprime Taylor Swift Adora a Diomedez Adora a Sandro


//FUNCION KEYS lo que hace esta funcion es que devuelve un iterador con 
// indices para cada elemento del array

let MarcasCel = ["Iphone", "Samsung", "Huawei", "Xiaomi"]
for (let key of MarcasCel.keys()){
    console.log(key)
}

//Simplemente imprime del 0 al 3 indicando los indices

//FUNCION LASTINDEXOF indica la ultima posicion en la que se encuentra el elemento en el arreglo
let SuperCars =["Koenisegg", "Bugatti", "McClaren", "Porsche", "Pagani", "Koenisegg"]
console.log(SuperCars.lastIndexOf("Koenisegg"))

//Imprimira 5 pues es la ultima posicion que ocupa Koenisegg


//FUNCION LENGHT simplemente la cantidad de elementos en el arreglo

let bebidas = ["Ron", "Whisky","Ginebra"]
console.log(bebidas.length)

//Imprime 3 pues hay 3 elementos

//FUNCION MAP crea un nuevo array con lo indicado

let rentas =[1200000,1400000,1600000]
console.log(rentas.map(x=> x*1.5))

// Imprime 1800000, 2100000, 2400000 osea los valores por 1.5 en un nuevo arreglo

//FUNCION POP elimina un elemento del arreglo
let Whiskys = ["OldParr", "Buchanans", "JohnnieWalker"]
console.log(Whiskys.pop("JohnnieWalker"))
console.log(Whiskys)
//Elimina JohnnieWalker del arreglo

//Funcion Push agrega un valor

let Gaseosas = ["CocaCola", "Pepsi", "Popular"]
console.log(Gaseosas.push("Colombiana"))
console.log(Gaseosas)

//Imprime el array original - Colombiana


//FUNCION REDUCE acumula los valores y los vuelve uno solo de izquierda a derecha

let galones = [1, 2, 8];
console.log(galones.reduce((acc, x) => acc - x, 0));
//Imprime menos 11 pues resta todos los valores
//FUNCION REDUCE RIGHT lo mismo pero desde la derecha

console.log(galones.reduce((acc, x) => acc + x, 0));
//Imprime 11 pues suma todos los valores

//FUNCION REVERSE  como dice su nombre reversa ordena al contrario

let universidades = ["Icesi", "Uao", "Jave"]
console.log(universidades.reverse())

// Imprime Jave, Uao, Icesi pues invertio el orden


//FUNCION SHIFT elimina el primer elemento y lo devuelve

let horarios= [10,12,14,16]
console.log(horarios.shift())
console.log(horarios)

//Imprime el array sin el primer elemento

//FUNCION SLICE devuelve una copia del array segun los indices de inicio y fin

let partidos =[1,2,3,4,5]
console.log(partidos.slice(1,4))

//Imprime un array con los numeros desde el de 
// la posicion uno hasta el de la 4 sin incluir el de la 4


//FUNCION SOME indica si por lo menos un elemento cumple con la  condicion dada

let decibeles= [20,30,40,50]
console.log(decibeles.some(x=> x >= 50))

//Indica true pues 50 >= 50

//FUNCION SORT simplemente ordena de menor a mayor

let pesos=[70,65,92,80,50,63]
console.log(pesos.sort())

//FUNCION SPLICE elimina elementos desde un indice hasta otro

let alturas= [175,178,179,200]
console.log(alturas.splice(0,2))
console.log(alturas)

//Imprime 179, 200 pues borro los otros 2 elementos


//FUNCION TOLOCALESTRING devuelve un string que representa los datos con formatos
//locales

let compra = [100000,"Pesos", new(Date)]
console.log(compra.toLocaleString())

//Imprime 100.000,Pesos,10/2/2025, 7:52:38 p. m.

//FUNCION TOSTRING devuelve una cadena con el array

let deportes = ["Futbol", "Tenis", "Ciclismo"]
console.log(deportes.toString())

//Imprime el mismo Array

//FUNCION UNSHIFT inserta uno o mas elemento sal incio del array e indica
//el nuevo lenght del array

let raquetas = ["Wilson", "Babolat", "Head","Dunlop"]
console.log(raquetas.unshift("Prince","Bard"))
console.log(raquetas)

//Imprime 'Prince', 'Bard', 'Wilson', 'Babolat', 'Head', 'Dunlop'


//FUNCION VALUES devuelve un iterador con  los valores de cada elemento

let MarcasDeportes = ["Adidas", "Nike", "Puma", "Reebok"]
for (let valor of MarcasDeportes.values()){
    console.log(valor)
}

//Imprime el mismo arreglo