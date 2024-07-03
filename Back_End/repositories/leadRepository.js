const {dbClient: client, ObjectId} = require('../db/mongodb')

const repo = {
    create: async (lead) =>{
        await client.connect();
        const db = await client.db('samps');
        const collection = await db.collection("leads");
        const document = await collection.insertOne(lead);
        await client.close();
        return document;
    },
    delete: async (id) => {
        await client.connect();
        const db = await client.db('samps');
        const collection = await db.collection("leads");
        
        const exist = await collection.findOne({_id: ObjectId.createFromHexString(id)})
        
        if(!exist){
            throw new Error("Lead not found with id: "+id);
        }
        await collection.deleteOne({_id: ObjectId.createFromHexString(id)})
        await client.close();
        return;
    },
    update: async () => {

    },
    get: async (options) => {
        await client.connect();
        const db = await client.db('samps');
        const collection = await db.collection("leads");
        const documents = await collection.find(options).toArray();
        await client.close();
        return documents;
    }

}

module.exports = repo;