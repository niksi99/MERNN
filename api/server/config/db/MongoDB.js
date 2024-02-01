const mongoose = require('mongoose');

const url = process.env.MONGODB_URL;

const MongoDB_Connection = async () => {

    await mongoose.connect(url, {
        //useNewUrlParser: true,
       // useUnifiedTopology: true,
    })
    .then(() => {console.log('Radi Mongo')})
    .catch((err) => {console.log(err) })
}

module.exports = MongoDB_Connection;