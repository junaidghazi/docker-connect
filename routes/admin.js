const express = require('express')
const path = require('path')
const rootdir = require('../util/path');
// const { CLIENT_RENEG_LIMIT } = require('tls');
const router = express.Router();
const saveArray=[];




router.get('/add-product', (req, res, next) => {
    res.status(200).sendFile(path.join(rootdir,'views', 'add-product.html'))
})

router.post('/product', (req, res, next) => {
    // console.log(req.body)
    saveArray.push(req.body)
    console.log(saveArray);
    res.status(200).redirect('/')
});

module.exports = router