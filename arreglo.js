var animales = ['oso','leon','conejo'];

animales.push('raton');
animales.unshift('perro');
animales.pop();

var admitidos = animales.filter(function(animal){
    return animal != 'conejo';
})

for(var i=0; i<animales.length;i++){
    console.log('animal:',animales[i]);
}
