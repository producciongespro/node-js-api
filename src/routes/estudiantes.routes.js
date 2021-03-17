//estudiantes
import { Router } from "express";
import * as estCtr from '../controllers/estudiantes.controller';
const router = Router();

//Se recomienda instala API DOCS js para la documentación.


router.get("/", estCtr.obtener );

router.get("/activos", estCtr.obtenerActivos  );

router.get("/:id", estCtr.obtenerPorId);

router.post("/", estCtr.insertar );

router.delete("/:id", estCtr.eliminar);

router.put("/:id", estCtr.actuAlizar );


module.exports = router;
