const { describe } = require('yargs');

const argv=require('yargs')

                .options('b',{
                    alias:'base',
                    type:'number',
                    demandOption: true,
                    describe:'Es la base de la tabla de multiplicar'


                })
                .options('l',{
                    alias:'listar',
                    type:'boolean',
                    default: false,
                    describe:'Muestra la tabla en consola'


                })
                .options('h',{
                    alias:'hasta',
                    type:'number',
                    default: 10,
                    describe:'Establece un limite en la tabla'


                })
                .check((argv,options)=>{
                    if(isNaN(argv.b)){
                        throw'la base tiene que ser un numero'

                    }
                    return true;
                })
                .check((argv,options)=>{
                    if(isNaN(argv.h)){
                        throw'el limite de la tabla tiene que ser un numero'

                    }
                    return true;
                })
                .argv;

                module.exports = argv;
