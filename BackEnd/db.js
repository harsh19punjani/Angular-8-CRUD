const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Employee', { useNewUrlParser: true, useUnifiedTopology: true,  useFindAndModify: false }, (err) => {
    if (!err)
        console.log('mongodb connection done');
    else {
        console.log('Error in DB connection:', + JSON.stringify(err, undefined, 2))
    }
});
module.exports = mongoose;