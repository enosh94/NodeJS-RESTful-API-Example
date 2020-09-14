const sql = require('./dbConnection');

const Customer = function (customer) {
    this.email = customer.email,
        this.name = customer.name,
        this.active = customer.active
}

Customer.create = (newCustomer, result) => {
    sql.query('INSERT INTO customers SET ?', newCustomer, (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }
        else {
            result(null, {id: res.insertId, ...newCustomer});
        }
    });
};

Customer.getById = (customerId, result) => {
    sql.query(`SELECT * FROM customers WHERE id = ${customerId}`, (err, res) => {
        if (err) {
            console.log(err);
            result(err);
            return;
        }
        if (res.length) {
            result(null, res[0])
        }

        result({ kind: "not_found" }, null)
    });
};

module.exports = Customer