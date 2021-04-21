const guardarPdf = async (files) => {
  const expediente = files.expediente;
  console.log("expediente", expediente);
  const resp = { msj: null, isOk: false, nombreExpediente: null };  
  let nombreExpediente;

  console.log("expediente.mimetype", expediente.mimetype);

  if (expediente.mimetype == "application/pdf") {
    const ahora = Date.parse(Date());
    //console.log(ahora);
    nombreExpediente = ahora + ".pdf";
    //console.log("nombreExpediente", nombreExpediente);
    resp.error = await expediente.mv("./expedientes/" + nombreExpediente);
    if (resp.error) {
      resp.msj = error;
      return resp;
    }
  } else {
    resp.msj = "El archivo adjunto no es un pdf";
    console.log("No es un pdf");
    return resp;
  }
  resp.msj = "Archivo guardado";
  resp.isOk = true;
  resp.nombreExpediente = nombreExpediente;
  return resp;
};

export default guardarPdf;
