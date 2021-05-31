const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

//mongodb+srv://admin:<password>@cluster0.2n9cs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//admin
//zRNYUtw4IKEuKQiI

mongoose.connect('mongodb+srv://admin:zRNYUtw4IKEuKQiI@cluster0.2n9cs.mongodb.net/RestApi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("db connected");
});

app.all('/test', (req,res)=>{
    //console.log(req.query);
    //console.log(req.query.name);
    //res.send(req.query);
    //console.log(req.params);
    //res.send(req.params);
    console.log(req.body);
    res.send(req.body);
});

const ProductsRoute = require('./Routes/Product.rout');
app.use('/products', ProductsRoute);

app.use((req,res,next)=>{
    const err = new Error("Not found");
    err.status = 404;
    next(err);
});

//error handler
app.use((err, req, res, next)=>{
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

app.listen(3000,()=>{
    console.log('Server started on port 3000...');
});