
const middleware = require('../utils/middleware');
const router = require("express").Router();
let f  = require("../dataccess/fabricadeautos");

// Obtener todo 
router.get("/", async (req, res) => { 
    res.status(200).json(await f.getAll(req.query));
  });
  
  // Obtener uno 
  router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const data = await f.getOne(id);
  
    if (data) {
      res.status(200).json(data);
    } else {
      res.sendStatus(404);
    }
  });
  
  // POST con usuario logueado (sino se cierra el programa)
  router.post("/", middleware.validarUserLogin, async (req, res) => {
    
    const body = { ...req.body, user: req.user };
    const data = await f.save(body); 
    res.status(200).json(data);
  });
  
  
  
  
  
  
  router.delete("/:id", async (req, res) => {
    const id = req.params.id;
  
    await f.borrar(id)
    res.sendStatus(202)
  }
  );
  
  // Modificar un elemento 
  router.put("/:id", async (req, res) => {
    const id = req.params.id;
   
    if (await f.update(id, req.body) ) { 
      res.sendStatus(202);
    } else {
      res.sendStatus(404);
    }
  });
  
  module.exports = router;