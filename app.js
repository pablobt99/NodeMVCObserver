const express = require('express');

const app = express();

const ProductsRoute = require('./Routes/Product.rout');
app.use('/products', ProductsRoute);

app.use((req,res,next)=>{
    const err = new Error("Not found");
    err.status = 404;
    next(err);
});

//error handler
app.use((err, res, re1, next)=>{
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