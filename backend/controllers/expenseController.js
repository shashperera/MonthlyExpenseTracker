const expenseModel = require("../models/expenseModel")


//async and await ,wait for the asynchronous operation to complete
//wrap await line in a try-catch block to handle potential errors
exports.getExpense = async(req, res) => {
    try {
        const expenses = await expenseModel.find().sort({createdAt : -1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message: 'Server error'})
    }
}


exports.addExpense = async(req, res) => {
    // console.log(req.body);
    const {title, amount, category, description, date} = req.body

    //create an instance of the expense schema/model
    const expense = expenseModel({
        title,
        amount,
        category,
        description,
        date
    })
    console.log(expense)


    try {
        //validations
        if(!title || !category ||!description || !date){
            return res.status(400).json({message: 'All field are required'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount should be a positive no'})
        }
        await expense.save()
        res.status(200).json({message: 'Expense added'})
        
    } catch (error) {
        res.status(500).json({message: 'Server error'})

        
    }

}

exports.deleteExpense = async(req, res) => {
    const {id} = req.params;
    console.log(req.params);
    expenseModel.findByIdAndDelete(id)
        .then((expense) => {
            res.status(200).json({message: 'Expense deleted'})
        })
        .catch((err) => {
            res.status(500).json({message: 'Server error for delete'})

        })

}