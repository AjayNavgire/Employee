const express = require("express");
const employeeController = require("../controllers/employeeController");
const router = express.Router();

//get all employees
router.get("/",employeeController.getEmplyeeList)

router.get("/:id",employeeController.getEmployeeById)

router.put("/:id",employeeController.updateEmpolyee)

router.post("/",employeeController.createNewEmployee)

router.delete("/:id",employeeController.deleteEmployee)

module.exports = router;