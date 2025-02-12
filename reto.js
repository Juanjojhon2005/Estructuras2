function ParOImpar(number) {
    if (number % 2 === 0) {
        console.log(`${number} es un numero par.`)
    } else {
        console.log(`${number} es un numero impar.`)
    }
}
const ParOImpararrow = (number) => {
    if (number % 2 === 0) {
        console.log(`${number} es un numero par.`);
    } else {
        console.log(`${number} es un numero impar.`);
    }
};

ParOImpar(4);
ParOImpar(7); 
ParOImpararrow(10); 
ParOImpararrow(15); 
