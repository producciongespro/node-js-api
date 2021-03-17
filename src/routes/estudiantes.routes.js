//estudiantes
import { Router } from "express";
import * as estCtr from '../controllers/estudiantes.controller';
const router = Router();


router.get("/", estCtr.obtenerEstudiantes )

router.get("/:id", estCtr.obtenerPorId);

router.post("/", estCtr.insertarEstudiante );


module.exports = router;
