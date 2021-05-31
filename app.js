const express = require('express');

const app = express();

const ProductsRoute = require('./Routes/Product.rout');
app.use('/products', ProductsRoute);



app.listen(3000,()=>{
    console.log('Server started on port 3000...');
});