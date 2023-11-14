const incomeModel = require("../models/incomeModel")

//async and await ,wait for the asynchronous operation to complete
//wrap await line in a try-catch block to handle potential errors
exports.getIncome = async(req, res) => {
    try {
        const incomes = await incomeModel.find().sort({createdAt : -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server error'})
    }
}


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
        res.status(500).json({message: 'Server error'})

        
    }

}

exports.deleteIncome = async(req, res) => {
    const {id} = req.params;
    console.log(req.params);
    incomeModel.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({message: 'Income deleted'})
        })
        .catch((err) => {
            res.status(500).json({message: 'Server error for delete'})

        })

}