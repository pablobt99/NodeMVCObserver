const express = require('express')
const router = express.Router();

const Product = require('../Models/Product.model');

router.get('/', async (req, res,next) =>{
   try{
       const resoults = await Product.find({}, {__v:0});
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
router.get('/:id', async (req, res, next)=>{
    const id = req.params.id
    try{
        const product = await Product.findById(id);
        res.send(product);
    }catch(error){
        console.log(error.message);
    }
});
router.patch('/:id', (req, res, next)=>{
    res.send('updating a single product');
});
router.delete('/:id', async (req, res, next)=>{
    const id = req.params.id;
    try{
        const resoult = await Product.findByIdAndDelete(id);
        res.send(resoult);
    }catch(error){
        console.log(error.message);
    }
});

module.exports = router;