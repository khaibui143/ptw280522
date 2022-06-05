const Store = require('../models/Store');
const { mongooseToObject } = require('../../util/mongoose');
const { db } = require('../models/Store');

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

        const months = ["tháng 1", "tháng 2", "tháng 3", "tháng 4", "tháng 5", "tháng 6", "tháng 7", "tháng 8", "tháng 9", "tháng 10", "tháng 11", "tháng 12"];
        const d = new Date(created);
        let month = months[d.getMonth()];

        var typei;
        var prio;
        var tt = d.getDate() + ' ' + month + ' năm ' + d.getFullYear();
        var tas;
        const event = Date.now();
        if (issue == '') {
            typei = 'Chưa có/Đã bị thu hồi';
            prio = 3;
        } 
        else if (issue != null) {
            if (event > dated) {
                typei = 'Đã hết hạn sử dụng';
                prio = 2;
            } else if (event <= dated) {
                typei = 'Còn sử dụng được';
                prio = 1;
                tas = 'Rất tốt'
            }
        }

        const typeissue = typei;
        const priority = prio;
        const testtime = tt;

        console.log(tt);

        const store = new Store({
            name: name,
            address: address,
            ward: ward,
            district: district,
            phonenumber: phonenumber,
            typestore: typestore,
            issue: issue,
            typeissue: typeissue,
            created: created,
            dated: dated,
            priority: priority,
            testtime: testtime,
            infrastructure: 'Rất tốt',
            service: 'Rất tốt',
            hygiene: 'Rất tốt',
            environment: 'Rất tốt',
            inspectionunit: 'RED',
            result: 'Rất tốt',
            conclusion: 'Đủ điều kiện',
            infringe: 'Không có vi phạm'
        });

        store
            .save()
            .then(() => res.redirect('/list/stored/stores'))

    }

    // [GET] /stores/:id/detail
    detail(req, res, next) {
        // Store.countDocuments({}, function(err, count) {
        //     if (err) { return handleError(err) } //handle possible errors
        //     console.log(count);
        //     //and do some other fancy stuff
        // })
        Store.findById(req.params.id)
            .then(store => {
                if (store.issue != null) {
                    if (store.dated >= Date.now()) {
                        //console.log(store.testtime);
                        res.render('stores/detail', { 
                            store: mongooseToObject(store)
                        }) 
                    } else {
                        res.render('stores/detailout', { 
                            store: mongooseToObject(store)
                        }) 
                    }
                } else {
                    res.render('stores/detailno', { 
                        store: mongooseToObject(store)
                    }) 
                }      
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

    
    // [GET] /stores/:id/takeback
    takeback(req, res, next) {
        Store.findById(req.params.id)
            .then(store => {
                res.render('stores/takeback', {
                    store: mongooseToObject(store),
                })
            })
            .catch(next);
    }
    
    // [PUT] /stores/:id/aftertakeback
    aftertakeback(req, res, next) {
        Store.updateOne({ _id: req.params.id }, {issue: null})
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

    // [GET] /stores/:id/examine
    examine(req, res, next) {
        Store.findById(req.params.id)
            .then(store => {
                res.render('stores/examine', {
                    store: mongooseToObject(store),
                })
            })
            .catch(next);
    }
    
    // [PUT] /stores/:id/afterexamine
    afterexamine(req, res, next) {
        Store.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/list/stored/stores'))
            .catch(next);
    }

}

module.exports = new StoreController();
