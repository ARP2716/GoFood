const mongoose = require('mongoose')
require('dotenv').config();
const mongoURI = process.env.DB_CONNECTION_STRING

module.exports = function (callback) {
    // mongoose.connect("mongodb://127.0.0.1:27017/food", { useNewUrlParser: true }, async (err, result) => {
        mongoose.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
        if (err) console.log("---" + err)
        else {
            // var database =
            console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray(async function (err, data) {
                // console.log(data);
                const categoryCollection = await mongoose.connection.db.collection("foodCategory");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);
                    // console.log(Catdata)

                })
            });
          
        }
    })
};
