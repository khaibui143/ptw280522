const Store = require('../models/Store');
const { mongooseToObject } = require('../../util/mongoose');

class StoreController {

    // [GET] /courses/cerate
    create(req, res, next) {
        res.render('stores/create');
    }

    // [POST] /stores/store
    store(req, res, next) {
        //res.json(req.body);
        const name = req.body.name;
        const address = req.body.address;
        const ward = req.body.ward;
        const district = req.body.district;
        const phonenumber = req.body.phonenumber;
        const typestore = req.body.typestore;
        const issue = req.body.issue;
        const created = req.body.created;
        const dated = req.body.dated;

        const store = new Store({
            name: name,
            address: address,
            ward: ward,
            district: district,
            phonenumber: phonenumber,
            typestore: typestore,
            issue: issue,
            created: created,
            dated: dated,
        });
        store
            .save()
            .then(() => res.redirect('/list/stored/stores'))

    }

    // [GET] /stores/:id/detail
    detail(req, res, next) {
        Store.findById(req.params.id)
            .then(store => {
                res.render('stores/detail', { 
                    store: mongooseToObject(store)
                })                
            })
            .catch(next);
    }
    
    // [GET] /stores/:id/edit
    edit(req, res, next) {
        Store.findById(req.params.id)
            .then(store => {
                res.render('stores/edit', {
                    store: mongooseToObject(store),
                })
            })
            .catch(next);
    }

    // [PUT] /stores/:id
    update(req, res, next) {
        Store.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/list/stored/stores'))
            .catch(next);
    }

    // [GET] /stores/:id/sure
    sure(req, res, next) {
        Store.findById(req.params.id)
            .then(store => {
                res.render('stores/delete', {
                    store: mongooseToObject(store),
                })
            })
            .catch(next);
    }

    // [DELETE] /stores/:id
    delete(res, req, next) {
        Store.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [GET] /stores/:id/getnew
    getnew(req, res, next) {
        Store.findById(req.params.id)
            .then(store => {
                res.render('stores/getnew', {
                    store: mongooseToObject(store),
                })
            })
            .catch(next);
    }
    
    // [PUT] /stores/:id/aftergetnew
    aftergetnew(req, res, next) {
        Store.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/list/stored/stores'))
            .catch(next);
    }

    // [GET] /stores/:id/getnew
    print(req, res, next) {
        Store.findById(req.params.id)
            .then(store => {
                res.render('stores/print', {
                    store: mongooseToObject(store),
                })
            })
            .catch(next);
    }
}

module.exports = new StoreController();
