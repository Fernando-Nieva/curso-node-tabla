
const {crearArchivo} = require('./helpers/multiplicador');
const argv=require('./config/yargs');


console.clear();

 crearArchivo (argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch (err => console.log(err));
    









// let numero=0;
// for(let i=1 ;i<=10 ; i++ ){
//     numero=5*i;
//     console.log(` 5 x ${i} = ${numero}  `);
// }
// const base=3;
// let salida='';
// for(let i=1 ;i<=10 ; i++ ){
   
//     salida += `${base}x${i}=${base*i}\n`;

// }
// fs.writeFileSync(`tabla-${base}.txt`,salida ,(err)=>{
//     if(err)throw err;
//     console.log(`tabla-${base}.txt creado`);
// })


// console.clear();
// console.log(process.argv );
// const[,,arg3 = 'base=5']= process.argv;
// const[,base] = arg3.split('=');

//  //const base=5;

