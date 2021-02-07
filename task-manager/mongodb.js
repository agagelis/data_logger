const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


MongoClient.connect(connectionURL,{useNewUrlParser:true,useUnifiedTopology:true},(error,client)=>{
    if(error)
    {
        return console.log('Unable to connect to Database');
    }

    console.log('Connected correctly to database!');
    const db = client.db(databaseName);

    db.collection('users').insertOne({
        name:'Aggelos',
        age:35
    },(error,result)=>{
        if(error)
        {
            return console.log('Unable to insert user');
        }
        
        console.log(result.ops);
    })
})


