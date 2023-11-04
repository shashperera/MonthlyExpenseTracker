const { addExpense, getExpense, deleteExpense } = require('../controllers/expenseController')
const { addIncome, getIncome, deleteIncome } = require('../controllers/incomeController')

const router = require('express').Router()

router.get('/',(req,res)=> {
    res.send('Hi GET in transactions')
})

router.post('/addIncome',addIncome) //method from controller
    .get('/getIncome',getIncome)
    .delete('/deleteIncome/:id',deleteIncome)
    .post('/addExpense',addExpense)
    .get('/getExpense',getExpense)
    .delete('/deleteExpense/:id',deleteExpense)






module.exports = router