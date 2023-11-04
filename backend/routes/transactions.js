const { addIncome } = require('../controllers/incomeController')

const router = require('express').Router()

router.get('/',(req,res)=> {
    res.send('Hi GET in transactions')
})

router.post('/addIncome',addIncome) //method from controller

module.exports = router