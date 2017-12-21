const {MongoClient, ObjectID} = require('mongodb');

let dbInfo = {
    url: 'mongodb://127.0.0.1:27017/TodoApp',
    db : 'TodoApp',
    collection: 'users'

};

MongoClient.connect(dbInfo.url, function (err,db) {
    if(err) {
        return console.log("Was not able to connect to Server", err);
    }
    db.db(dbInfo.db).collection(dbInfo.collection).insertOne({
        name:'Abdul',
        age: 24,
        location: 'Cyberjaya'
    },function (err, result) {
        if(err) {
            return console.log("Was not able to insert to COLLECTION");
        }
        console.log(result.ops);
    });

    db.db(dbInfo.db).collection(dbInfo.collection).find().toArray().then(function (docs) {
        console.log('Todos\n', docs);
    }).catch(function (e) {
        console.log('unable to fetch docs', e);
    });
    db.close();
});


