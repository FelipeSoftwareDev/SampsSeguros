const {MongoClient, ObjectId} = require('mongodb')

const dbClient = new MongoClient(process.env.DB_URI)

async function healthCheckDb(){
    try {
        await dbClient.connect();
        const document = await dbClient.db("samps").command({ping:1})
        console.log("Database up and running!", document);
    }catch(error){
        console.log("Erro ao tentar conectar na base de dados", error);
    }finally {
        await dbClient.close();
    }

}

module.exports = { 
    dbClient,
    healthCheckDb,
    ObjectId,
};
