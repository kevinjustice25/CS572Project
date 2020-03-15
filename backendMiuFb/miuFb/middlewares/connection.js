const mongoose = require('mongoose');

module.exports = (req, res, next) => {
    mongoose.connect('mongodb+srv://root:root@cluster0-yc8k7.gcp.mongodb.net/cs572db?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
    next();
}











