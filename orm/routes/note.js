module.exports = (app) => {
const product = require("../controllers/controllerroutes");


app.get('/product', product.findAll);

app.post('/product', product.create);

app.get('/product:productId', product.findOne);

app.put('/product:productId', product.update);

app.delete('/product:productId', product.delete);
};
