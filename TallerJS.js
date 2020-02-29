/*1) Escribir una función que calcule el área de un triángulo recibiendo como entrada el valor de base y altura.*/

var base = 20;
var altura = 30;

function calcularArea(b,h) {
    return (b*h)/2;
};

var area = calcularArea(base,altura);

console.log(`El area de un tirangulo de base ${base} y altura ${altura} es ${area} `);

/*2) Escribir una función que retorne el valor mayor entre 3 números*/

var n1=30;
var n2=60;
var n3=45;

function hallarMayor(num1,num2,num3){
    if(num1 > num2){
        if(num1> num3){
            mayor=num1;
        }
        else{
            mayor=num3;
        }
    }else{
        if(num2> num3){
            mayor=num2;
        }
        else{
            mayor=num3;
        }
    }
};

var mayor=hallarMayor(n1,n2,n3);

console.log(`El numero mayor de los numeros  ${n1}, ${n2}, ${n3} es el  ${mayor}`);

/*3) Escribir una función que reciba el nombre y la edad y retorne true si puede votar, en caso contrario false*/

var nombre='Juan';
var edad= 19;

function validarVotacion(edad) {  
   return edad>17 ? true:false;
};

console.log(`¿Puede ${nombre} de ${edad} años votar? R/= ${validarVotacion(edad)} `);

/*4) Escribir una función que determine si un día de la semana es laboral o no (L-V)*/

var diaslaborales=['lunes','martes','miercoles','jueves','viernes'];
var ayer='viernes';
var hoy='sabado';
var manana='domingo';


function esLaboral(dia){
    return diaslaborales.indexOf(dia)===-1 ? 'no':'si';
}

console.log(`El ${ayer} ${esLaboral(ayer)} es laboral.` );
console.log(`El ${hoy} ${esLaboral(hoy)} es laboral.` );
console.log(`El ${manana} ${esLaboral(manana)} es laboral.` );

/*5) Escribir una función que reciba las notas de un estudiante y retorne el promedio*/

var notas = [1,2,3,5,5,0,4,5,4,8];

function calcularPromedio (numeros){
    var suma=0,promedio=0;
    console.log('Las notas:');
    for(var i = 0; i < numeros.length; i++){
        suma = suma + numeros[i];
        console.log(numeros[i]);
    }

    promedio = suma/numeros.length;
    console.log(`El promedio de las notas es: ${promedio.toFixed(2)}`);

};

calcularPromedio(notas);


/*6) Escribir una función que reciba un arreglo de números y retorne la suma de todos ellos*/
var numeros = [1,2,3,5,5,0,4,5,4,8];

function sumarNumeros (numeros){
    var suma=0;
    console.log('Las notas:');
    for(var i = 0; i < numeros.length; i++){
        suma = suma + numeros[i];
        console.log(numeros[i]);
    }
    console.log(`La suma de los numeros: ${suma}`);

};

sumarNumeros(numeros);

/*7) Escribir una función que reciba una lista de nombres de perros y retorne cuales empiezan por "p"*/
var perros = ['paco','luna','pecas','muñeco','pilon'];

function hallarNombre (nombres){ 
    for(var i = 0; i < nombres.length; i++){

        if(nombres[i].substr(0,1) == 'p'){
            console.log(nombres[i]);
        }
    }
};

hallarNombre(perros);



/*8) Escribir una función que reciba un un arreglo el siguiente arreglo con objetos y retorne cuantos son modelos superiores a 2018*/

var carros = [
    { marca: 'Mazda', modelo: 2029 },
    { marca: 'Chevrolet', modelo: 2017 },
    { marca: 'Jeep', modelo: 2018 },
    { marca: 'Ferrari', modelo: 2015 },
    { marca: 'Nissan', modelo: 2021 },
]

function encontrarModelo(carros) {
    var cont=0;
    carros.forEach(carro => {
    if(carro.modelo > 2018){
        cont++
    }
    });

    console.log(cont);
}

encontrarModelo(carros);
