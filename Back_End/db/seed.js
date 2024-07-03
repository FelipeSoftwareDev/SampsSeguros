require('custom-env').env("dev")
const { dbClient: client } = require('./mongodb')

async function seed(){
    try{
        await client.connect();
    
        const databases= await client.db().admin().listDatabases();
        
        if(databases.databases.find(e => e.name == "samps")){        
            console.log("db Already created")
        }
        else{
            const db = await client.db("samps");
    
            await db.createCollection("leads")
            client.close();
        }    
    }catch(error){
        console.error(error);
    }finally {
        
        
    }
    return;
}

seed();


// ASYNCRONOUS PROGRAMMING
// new Promise((resolve, reject) => { resolve({mes: 1})} )
// then | catch -> non-blocking
//// do not block eventloop
// async await -> blocking
