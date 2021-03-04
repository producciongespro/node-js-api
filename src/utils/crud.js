exports.agregarObjeto = function (item, array) {
  // se crea su id basado en la longitud del array:
  //console.log("usuario recibido:", item);   
  //se agrega al objeto:
  item.id = array.length + 1;
  array.push(item);
  return item;
};

exports.eliminarObjeto = function (id, array) {
  id = parseInt(id);
  console.log("id desde crud", id);
  console.log("array desde crud", array);  
  let eliminado=null;

  for (let index = 0; index < array.length; index++) {
    if (id === array[index].id ) {
      console.log("Posicion", index, "objeto a eliminar", array[index] );      
    eliminado = array.splice(index, 1 )
    }    
  }
  
  return eliminado;
}
