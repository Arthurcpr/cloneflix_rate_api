const mongoose = require('mongoose')


module.exports = {
    connect: async () => {
        let db;
        if(!db) {
            db = await mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false', {useNewUrlParser: true})
             //db = await mongoose.connect('mongodb+srv://Admin:lol992434141@cluster0.0rxa0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true})
        }
        return db
    }
}
