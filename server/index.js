const express =require('express');
const app =express();
app.get("/", (rep,res)=>{
    res.send("saludando desde el backend")
})

const PORT = 3001
app.listen(PORT,()=>{
    console.log("servidor corriendo en el puerto ", PORT)
})
