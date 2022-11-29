import app from "./app";

//ejecucion del server
const main=()=>{
    app.listen(app.get("port"));
    console.log(` Server on port ${app.get("port")}`);
};   

main();