import React, { useContext, useState } from "react"
import axios from 'axios'

//axios to connect to server
const BASE_URL = "https://monthly-expense-tracker-backend.onrender.com/api/v1/";
// const BASE_URL = "http://localhost:5000/api/v1/";


const GlobalContext = React.createContext()

export const GlobalProvider = ({ children }) => {

    const [income, setIncome] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    //calculate income
    const addIncome = async (income) => {
        const response = await axios.post(`${"https://monthly-expense-tracker-backend.onrender.com/api/v1/"}addIncome`, income)
            .catch((err) => {
                setError(err.response.data.message)
            })
        getIncome()
    }

    const getIncome = async () => {
        const response = await axios.get(`${BASE_URL}getIncome`)
        setIncome(response.data)
        console.log(response.data)
    }

    const deleteIncome = async (id) => {
        const res  = await axios.delete(`${BASE_URL}deleteIncome/${id}`)
        getIncome()
    }

    //cal total income
    const totalIncome = () => {
        let totalIncome = 0;
        income.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }
    console.log(    totalIncome()
    )

    // //calculate expenses
    const addExpenses = async (expenses) => {
        const response = await axios.post(`${BASE_URL}addExpense`, expenses) //endpont is add-expense, payload is "income"
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getExpenses()
    }

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}getExpense`)
        setExpenses(response.data)
        console.log(response.data)
    }

    const deleteExpenses = async (id) => {
        const res  = await axios.delete(`${BASE_URL}deleteExpense/${id}`)
        getExpenses()
    }

    const totalExpenses = () => {
        let totalExpenses = 0;
        expenses.forEach((expenses) =>{
            totalExpenses = totalExpenses + expenses.amount
        })

        return totalExpenses;
    }


    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...income, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncome,
            income,
            deleteIncome,
            totalIncome,
            expenses,
            addExpenses,
            getExpenses,
            deleteExpenses,
            totalExpenses,
            totalBalance,
            transactionHistory

        }}>            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}