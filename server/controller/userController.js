const fs= require('fs').promises;
const { register } = require('module');
const path=require('path');
const userFilePath=path.join(__dirname, '../../src/componentes/body/usuariosRegistrados.json');

const controller={
    register:async function(req,res){
        try{
            const userData=await fs.readFile(userFilePath, 'utf-8');
            const usuarioNuevo={
                
            }
        }catch(error){

        }

    }
}
export default controller;