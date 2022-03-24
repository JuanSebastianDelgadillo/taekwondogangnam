import * as mysql from 'mysql';

export class ConnectionDB {
    connection: any;

    constructor(){  
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'gangnam_user',
            password: '1234',
            database: 'gangnam'
         });
 
        this.connection.connect((err:Error) => {
            if (err) {
                console.log('error connecting', err);
            }else{
                console.log("connection was a success ");
            }
        });
    }
}