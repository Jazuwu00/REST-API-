import {getConnection} from "../database/database";
//TODOS
const getPelis= async(req,res)=>{
   try {
    const connection= await getConnection();
    const result =await connection.query("select titulo,descripcion, genero from peliculas");
    console.log(result);
    res.json(result);
   } catch (error) {
    res.status(500);
    res.send(error.message);
   }

}
//uno en especifico
const getPeli= async(req,res)=>{
    try {
        console.log(req.params);
        const {id} =req.params;
        const connection= await getConnection();
        const result =await connection.query("select titulo,descripcion, genero from peliculas where id_pelicula = ?",id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
 
 }

const addPeli= async(req,res)=>{
    try {
        
        const {titulo,descripcion,genero }= req.body;
        if(titulo== undefined || descripcion== undefined|| genero== undefined){
                res.status(400).json({message: "llena los parametros"});
        }
        const peliculas={ titulo, descripcion,genero};

        const connection= await getConnection();
      

        const result =await connection.query("INSERT INTO peliculas SET ?",peliculas);
    
        res.json("added");
    } catch (error) { 
     res.status(500);
     res.send(error.message);
    }
 
 }

 const deletePeli= async(req,res)=>{
    try {
        console.log(req.params);
        const {id} =req.params;
        const connection= await getConnection();
        const result =await connection.query("DELETE from peliculas where id_pelicula = ?",id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
 
 }

 const updatePeli= async(req,res)=>{
    try {
        const { id } =req.params;
        const { titulo,descripcion,genero }= req.body;

        if(titulo== undefined || descripcion== undefined|| genero== undefined){
                res.status(400).json({message: "llena los parametros"});
        }
        const peliculas={ titulo, descripcion,genero};

       
        const connection= await getConnection();
        const result =await connection.query("UPDATE peliculas SET ? WHERE id_pelicula = ?" , [peliculas,id]);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
 
 }
export const methods ={
    getPelis,
    getPeli,
    addPeli,
    deletePeli,
    updatePeli
};