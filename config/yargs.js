/**
 * TRES TIPO DE REQUIRE
 * LA PRIMERA ES LA NATIVA LAS QUE SON PROPIAS DE NODE JS
 */
//const fs = require('fs');

/**
 * ESTA NO ES UNA LIBRERIA QUE ES PROPIA DE NODEJS, ES DECIR NO SON NATIVOS
 */
//const express = require('express');


/**
 * Y ESTAN LOS QUE NOSOTROS CREAMOS ACCEDIANDO A LA RUTA Y QUE ESTAN EN ALGUN LADO DEL PROYECTO
 */
//const path = require('./PATH');

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    },
}

const argv = require('yargs')
    .command('listar', 'Imprimir en consola la tabla', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}