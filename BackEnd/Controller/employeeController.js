const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../models/employee');

// localhost:3000/employee
router.get('/', (req, res) => {
    Employee.find((err, data) => {
        if (!err)
            res.send(data);
        else
            console.log('Error while fetching data from Employee', JSON.stringify(err, undefined, 2));
    })
});

// localhost:3000/employee/id   (id we need to pass as params)
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No records found with given id:, ${req.params.id}`);
    Employee.findById(req.params.id, (err, data) => {
        if (!err)
            res.send(data);
        else
            console.log('Error in Retriving Employee: ', JSON.stringify(err, undefinedm, 2))
    });

});


// post routes will tale data as body from users
router.post('/', (req, res) => {
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    });
    emp.save((err, data) => {
        if (!err)
            res.send(data);
        else
            console.log('Error while fetching data from Employee', JSON.stringify(err, undefined, 2));
    })
});

// update routes 

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No records found with given id:, ${req.params.id}`);

    var emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    };

    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, data) => {
        if (!err)
            res.send(data);
        else
            console.log('Error in Employee update:', JSON.stringify(err, undefined, 2));
    });

});

// Delete Routes

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No records found with given id:, ${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id, (err, data) => {
        if (!err)
            res.send(data);
        else
            console.log('Error in Employee Delete:', JSON.stringify(err, undefined, 2));
    });
})
module.exports = router;