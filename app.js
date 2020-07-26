//RECORDAR QUE DESPUES DE UN CONST O LET Y LUEGO {} ES UNA DESTRUCTURACION
const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multi');
const colors = require('colors/safe');

let commando = argv._[0];

switch (commando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            // .then(listado => console.log(`Listar tabla: ${listado}`))
            // .catch(err => { console.log(err); });
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.red(archivo)))
            .catch(err => { console.log(err); });
        break;

    default:
        console.log('Commando no reconocido');
}

// let param = argv[2];
// let base = param.split('=')[1]