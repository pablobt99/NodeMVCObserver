const express = require('express')
const router = express.Router();

const Product = require('../Models/Product.model');

router.get('/', async (req, res,next) =>{
   try{
       const resoults = await Product.find({}, {__v: 0});
       res.send(resoults)

   }catch(error){
       console.log(error.message);
   }
});

router.post('/', async (req,res,next)=>{
    
    try{
        const product = new Product(req.body);
        const resoult = await product.save();
        res.send(resoult);
    }catch(error){
        console.log(error.message);
    }
    
    //const product = new Product({
    //    name: req.body.name,
    //    price: req.body.price
    //});
    //product.save().then(resoult =>{
    //    console.log(resoult);
    //    res.send(resoult);
    //}).catch(err=>{
    //    console.log(err.message);
    //});
    //res.send();
});
router.get('/:id', (req, res, next)=>{
    res.send('getting a single product');
});
router.patch('/:id', (req, res, next)=>{
    res.send('updating a single product');
});
router.delete('/:id', (req, res, next)=>{
    res.send('deleting a single product');
});

module.exports = router;