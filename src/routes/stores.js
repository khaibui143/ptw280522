const express = require('express');
const { aftergetnew } = require('../app/controllers/StoreController');
const router = express.Router();

const storeController = require('../app/controllers/StoreController');

router.get('/create', storeController.create);
router.post('/store', storeController.store);

router.get('/:id/edit', storeController.edit);
router.put('/:id', storeController.update);

router.get('/:id/sure', storeController.sure);
router.delete('/:id', storeController.delete);

router.get('/:id/getnew', storeController.getnew);
router.put('/:id/aftergetnew', storeController.aftergetnew);

router.get('/:id/takeback', storeController.takeback);
router.put('/:id/aftertakeback', storeController.aftertakeback);

router.get('/:id/print', storeController.print);

router.get('/:id/examine', storeController.examine);
router.put('/:id/afterexamine', storeController.afterexamine);

router.get('/:id/detail', storeController.detail);

module.exports = router;