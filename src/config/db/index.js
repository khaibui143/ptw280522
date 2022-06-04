const mongoose = require('mongoose');
//mongodb+srv://thangnd:nhom21int3306@cluster0.ky29k.mongodb.net/
//mongodb://localhost:27017/f8_education_dev
//mongodb+srv://TDKien:pYlL8HkPF5CyjP3j@healthy-first.71mtj.mongodb.net/?retryWrites=true&w=majority
async function connect() {
    try {
        //
        await mongoose.connect('mongodb+srv://TDKien:pYlL8HkPF5CyjP3j@healthy-first.71mtj.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connect mongoDB successfully!!');
    } catch (error) {
        console.log('connect mongoDB failure!!!');
    }
}

module.exports = { connect };
