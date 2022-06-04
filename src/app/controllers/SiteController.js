const Store = require('../models/Store')
const User = require('../models/User');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /home
    home(req, res, next) {
        Store.find({})
            .then((stores) => {
                res.render('home', {
                    stores: multipleMongooseToObject(stores),
                });
            })
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }

    //[POST] /login
    login(req, res, next) {
        User.find({})
            .then((users) => {
                res.render('home', {
                    courses: multipleMongooseToObject(users),
                });
            })
            .catch(next);
    }
}

module.exports = new SiteController();
