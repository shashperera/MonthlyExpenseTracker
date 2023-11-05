import React, { useContext, useState } from "react"
import axios from 'axios'

//axios to connect to server
const BASE_URL = "http://localhost:5000/api/v1/";


const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [income, setIncome] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    //calculate income
    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}addIncome`, income)
            .catch((err) =>{
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

    const totalIncome = () => {
        let totalIncome = 0;
        income.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    //calculate expenses
    const addExpense = async (income) => {
        const response = await axios.post(`${BASE_URL}addExpense`, income) //endpont is add-expense, payload is "income"
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

    const deleteExpense = async (id) => {
        const res  = await axios.delete(`${BASE_URL}deleteExpense/${id}`)
        getExpenses()
    }

    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
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
            // getIncome: getIncome,
            // income: income,
            // deleteIncome,
            // expenses,
            // totalIncome,
            // addExpense,
            // getExpenses,
            // deleteExpense,
            // totalExpenses,
            // totalBalance,
            // transactionHistory,
            // error,
            // setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}