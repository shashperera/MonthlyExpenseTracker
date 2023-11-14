const { addExpense, getExpense, deleteExpense } = require('../controllers/expenseController')
const { addIncome, getIncome, deleteIncome } = require('../controllers/incomeController')

const router = require('express').Router()

// Define a route using the router
router.get('/',(req,res)=> {
    res.send('Hi GET in transactions')
})

router.post('/addIncome',addIncome) //method from controller
    .get('/getIncome',getIncome)
    .delete('/deleteIncome/:id',deleteIncome)
    .post('/addExpense',addExpense)
    .get('/getExpense',getExpense)
    .delete('/deleteExpense/:id',deleteExpense)




// Export the router to be used in other parts of your application
module.exports = router