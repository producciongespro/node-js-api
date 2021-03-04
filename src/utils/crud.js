exports.agregarObjeto = function (item, array) {
  // se crea su id basado en la longitud del array:
  console.log("usuario recibido:", item);   
  //se agrega al objeto:
  item.id = array.length + 1;
  array.push(item);
  return item;
};

exports.eliminarObjeto = function (item, array) {
  
}
