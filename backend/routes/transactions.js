const router = require('express').Router()

router.get('/',(req,res)=> {
    res.send('Hi GET in transactions')
})

module.exports = router