module.exports = app =>{
    const customers = require('../controllers/customer.controller');

    app.post("/customers" , customers.create);

    app.get('/customers/:customerId', customers.getById);
}