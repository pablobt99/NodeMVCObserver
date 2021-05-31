const Product = require('../Models/Product.model');
module.exports = {
    getAllProducts : async (req, res,next) =>{
        try{
            const resoults = await Product.find({}, {__v:0});
            res.send(resoults)
     
        }catch(error){
            console.log(error.message);
        }
     },
     createProduct: async (req,res,next)=>{
    
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
    },
     findProductById: async (req, res, next)=>{
        const id = req.params.id
        try{
            const product = await Product.findById(id);
            if(!product){
                throw createError(404, "Product does not exist");
            }
            res.send(product);
        }catch(error){
            console.log(error.message);
            if(error instanceof mongoos.CastError){
                next(createError(400, "invalid Product Id"));
                return;
            }
            next(error);
        }
    },
    updateProduct: async (req, res, next)=>{ 
        try{
            const id = req.params.id;
            const updates = req.body;
    
            const resoult = await Product.findByIdAndUpdate(id, updates);
            res.send(resoult);
        }catch{
            console.log(error.message);
        }
    },
    deleteProduct: async (req, res, next)=>{
        const id = req.params.id;
        try{
            const resoult = await Product.findByIdAndDelete(id);
            console.log(resoult);
            if(!resoult){
                throw createError(404, "Product does not exist");
            }
            res.send(resoult);
        }catch(error){
            console.log(error.message);
            if(error instanceof mongoos.CastError){
                next(createError(400, "invalid Product Id"));
                return;
            }
            next(error);
        }
    }

}