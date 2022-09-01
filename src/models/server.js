

const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const { dbConnection } = require('../database/config');



class Server {

    constructor() {
        this.app = express();;
        this.port = process.env.PORT;

        // Conectar a db
        dbConnection();

        // Http server
        this.server = http.createServer( this.app );

        // Configuraciones de sockets
        //this.io = socketio( this.server, {/* configuraciones */} );

    }


    middlewares() {




        this.app.use( cors() );
        this.app.use( express.json() );
        
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );

    }

    execute() {




        // Inicializar Middlewares
        this.middlewares();


        // Inicializar Server
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto:', this.port );
        })
    }


}


module.exports = Server;