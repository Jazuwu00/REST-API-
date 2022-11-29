import express from "express";
import morgan from "morgan";

//routes
import bdpeli from "./routes/bd_peli";

const app= express();

//settings

app.set("port",3000);

//middleware
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/peliculas",bdpeli);

export default app;


