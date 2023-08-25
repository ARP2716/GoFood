const mongoose = require('mongoose')

const mongoURI = "mongodb+srv://aniketpandit9206:Aniket12345@cluster0.qbvkwy4.mongodb.net/food?retryWrites=true&w=majority";

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
