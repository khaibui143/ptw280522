const res = require('express/lib/response');
const Store = require('../models/Store');
const { multipleMongooseToObject } = require('../../util/mongoose');

class ListController {
    //[GET] /me/stored/courses
    storedStores(req, res, next) {
        let storeQuery = Store.find({});

        if (req.query.hasOwnProperty('_sort')) {
            const isValidType = ['asc', 'desc'].includes(req.query.type);

            storeQuery = storeQuery.sort({
                [req.query.column]: isValidType ? req.query.type: 'asc',
            });
        }

        storeQuery
            .then((stores) =>
                res.render('list/stored-stores', {
                    stores: multipleMongooseToObject(stores),
                }),
            )
            .catch(next);
    }
}

module.exports = new ListController();
