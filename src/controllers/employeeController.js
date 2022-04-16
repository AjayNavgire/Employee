const Employee = require('../models/employeeModel');
const EmployeeModel = require('../models/employeeModel')


// Get all employee list
exports.getEmplyeeList = (req, res) => {
    EmployeeModel.getAllEmployees((err, employees) => {
        if (err)
            res.send(err);
        // console.log('Employees', employees);
        res.send(employees)
    })
}

// Get employee details
exports.getEmployeeById = (req, res) => {
    // console.log('get emp by id')
    EmployeeModel.getEmployeeByID(req.params.id, (err, employee) => {
        if (err)
            res.send(err)
        //console.log('single employee details', employee)
        res.send(employee)

    })
}

// Create new employee
exports.createNewEmployee = (req, res) => {
    const employeeReqData = new EmployeeModel(req.body)
    // Check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' })
    } else {
        EmployeeModel.createEmployee(employeeReqData, (err, employee) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Employee created successfully', data: employee.insertId })
        })
    }
}

// Update employee
exports.updateEmpolyee = (req, res) => {
    const employeeReqData = new EmployeeModel(req.body)
    // Check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' })
    } else {
        EmployeeModel.updateEmployee(req.params.id, employeeReqData, (err, employee) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Employee updated successfully' })
        })
    }
}

// Delete Employee
exports.deleteEmployee = (req, res)=>{
    EmployeeModel.deleteEmployee(req.params.id, (err, employee)=>{
        if(err)
        res.send(err);
        res.json({success:true, message:'Employee deleted successfully!'})
    })
}