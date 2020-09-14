const Customer = require('../models/customer.model')

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "content canot be empty" });
    }

    const customer = new Customer({
        email: req.body.email,
        name: req.body.name,
        active: req.body.active
    });

    Customer.create(customer, (err, data) => {
        if (err) {
             kubemm.status(500).send({
                message: 'internal server error'
            });
        }

        res.send(data);
    })
};


exports.getById = (req, res) => {
    if (!req.params.customerId) {
        res.status(400).send({
            message: 'customer id cannot be empty'
        });
    }

    Customer.getById(req.params.customerId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Customer with id " + req.params.customerId
                });
            }
        } else res.send(data);
    })
};