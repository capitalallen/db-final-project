import { createConnection } from 'mysql2/promise';
import config from './config.js';

export async function query(sql, params=null) {
    const connection = await createConnection(config.db);
    try{
        let results=null;
        if (!params){
            results = await connection.execute(sql);
        } else {
            results = await connection.execute(sql, params);
        }
        if (results){
            return results[0];
        }else{
            return results;
        }
    } finally {
        await connection.end();
    }
}

