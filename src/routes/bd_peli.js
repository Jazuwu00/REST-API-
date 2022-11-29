import {Router} from "express";
import {methods as peliculas} from "../controllers/peli.controller";


const router= Router();

router.get("/",peliculas.getPelis);
router.get("/:id",peliculas.getPeli);
router.post("/",peliculas.addPeli);
router.delete("/:id",peliculas.deletePeli);
router.put("/:id",peliculas.updatePeli);



export default router;