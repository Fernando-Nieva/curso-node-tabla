

const { rejects } = require('assert');
const { error } = require('console');
const fs = require('fs');
const { resolve } = require('path');

const colors = require('colors');

const crearArchivo = ((base = 5,listar,hasta)=>{

    return new Promise((resolve,rejects)=>{
        const nombreArchivo=`tabla-${base}.txt`

        let salida='';

        for(let i=1 ;i<=hasta ; i++ ){
        
            salida += `${base} x ${i}=${base*i}\n`;
        
        }
        if(listar){
        console.log(`${salida}`.blue);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
            // console.log(`tabla-${base}.txt creado`);
        resolve(nombreArchivo);
        rejects(`No se pudo crear el archivo ${nombreArchivo}`);
    })
    



});

module.exports={
 crearArchivo
}