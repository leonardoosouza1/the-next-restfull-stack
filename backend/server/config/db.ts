import * as mongoose from 'mongoose';

// class DataBase1 {
//     private DB_URI = 'mongodb://127.0.01:27017/crush-manegement';
//     private DB_CONNECTION = require('mongoose');

//     constructor() { }

//     createConnection() {
//         if (process.env.NODE_ENV == 'production') {
//             mongoose.connect(process.env.MONGODB_URI);
//             this.logger(process.env.MONGODB_URI);
//         } else {
//             mongoose.connect(this.DB_URI);
//             this.logger(this.DB_URI);
//         }
//     }

//     logger(uri: string) {
//         this.DB_CONNECTION = mongoose.connection;
//         this.DB_CONNECTION.on('connected', () => console.log(`Mongoose connected to ${uri}`));
//         this.DB_CONNECTION.on('error', (error: any) => console.log(`Mongoose connection error: ${error}`));
//         this.DB_CONNECTION.on('disconnected', () => console.log(`Mongoose disconnected`));
//     }

//     closeConnection(message: string, callback: () => void) {
//         this.DB_CONNECTION.close(() => {
//             console.log(`Mongoose disconnected through ${message}`);
//             callback();
//         })
//     }
// }

const DataBase = () => {
    const DB_URI = 'mongodb://127.0.01:27017/crush-manegement';

    const createConnection = () => {
        if (process.env.NODE_ENV == 'production') {
            mongoose.connect(process.env.MONGODB_URI);
            console.log(process.env.MONGODB_URI);
        } else {
            mongoose.connect(DB_URI);
            console.log(DB_URI);
        }

    }

    const closeConnection = () => {
        mongoose.connection.close(() => {
            console.log('Mongoose disconnected');
        })
    }

    return { createConnection, closeConnection };

}

export default DataBase