const incomeModel = require("../models/incomeModel")

exports.addIncome = async(req, res) => {
    // console.log(req.body);
    const {title, amount, category, description, date} = req.body

    //create an instance of the income schema/model
    const income = incomeModel({
        title,
        amount,
        category,
        description,
        date
    })
    console.log(income)


    try {
        //validations
        if(!title || !category ||!description || !date){
            return res.status(400).json({message: 'All field are required'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount should be a positive no'})
        }
        await income.save()
        res.status(200).json({message: 'Income added'})
        
    } catch (error) {
        
    }

}