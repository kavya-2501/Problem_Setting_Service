const winston=require('winston')
require('winston-mongodb')
const {LOG_DB_URL}=require('../config/server.config')

const allowedTransports=[];

// this configuration allows logging in the console
allowedTransports.push(new winston.transports.Console())

// this configuration allows logging in mongodb database
allowedTransports.push(new winston.transports.MongoDB({
level:'error',
db:LOG_DB_URL,
collection:'logs',
}))

// this configuration allows logging in file
allowedTransports.push(new winston.transports.File({
    filename:'app.log'
}))

const logger=winston.createLogger({

    format:winston.format.combine(     // 1. First arg to combine method is the format of timestamp
        winston.format.timestamp({
            format:'YYYY-MM-DD HH:mm:ss'
        }),

        // 2. Second arg is the method of logging and what exactly should pe printed in log
    winston.format.printf((log)=> `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),
    transports:allowedTransports
});

module.exports=logger;

