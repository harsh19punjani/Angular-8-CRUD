const mongoose = require('mongoose');

// mongoose model first parameter is collection name of Employee DB
var Employee = mongoose.model('employees', {
    name: { type: String },
    position: { type: String },
    office: { type: String },
    salary: { type: Number }
});

module.exports = {
    Employee: Employee
};