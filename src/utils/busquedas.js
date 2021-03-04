const usuarioPorId = (id, array) => {
  id= parseInt(id);
  //console.log("id recibido", id);
  let tmpItem = null;
  var index = array.findIndex((obj) => obj.id === id);
  //console.log(index);
  if (index > -1) {
    tmpItem = array[index];
  }
  return tmpItem;
};

module.exports = usuarioPorId;
