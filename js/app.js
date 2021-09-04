let personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Karla', 'Lara'),
    new Persona('Jordy','Mejía'),
];

function mostrarPersonas(){
    console.log('Mostrar personas....');
    let texto = '';
    for(let item of personas){
            console.log(item);
            texto += `<li>${item.nombre}, ${item.apellido}</li>`;
            document.getElementById('personas').innerHTML = texto;
    }
}

function agregarPersonas(){
//1- Primero selecciona el documento contenedor que tiene el formulario
    const forma = document.forms['forma'];
//2- Selecciona los inputs mediante el id que le hemos dado
    const nombre = forma[0];
    const apellido = forma[1];

    if(nombre.value != '' && apellido.value != ''){
        //3- Luego creamos un objeto de tipo de persona con los valores que introduciremos en los inputs
            const persona = new Persona(nombre.value,apellido.value);
        //4- Luego Lo imprimimos en pantalla
            console.log(persona);
        //5- Luego lo agregamos al array;
            personas.push(persona);
            mostrarPersonas();
    }else{
        console.warn('No hay más información que agregar');
    }

}