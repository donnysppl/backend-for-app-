const express = require('express');
const router = express.Router();
const prodRegisCtrl = require('../controllers/prodRegisCtrl');
const upload = require('../middleware/multer');

router.post('/register/',upload.prodRegisUpload.single('purchase_proof'), prodRegisCtrl.registerProduct);

module.exports = router;