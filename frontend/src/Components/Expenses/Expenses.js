import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layout';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import ExpenseItem from '../IncomeItem/IncomeItem';

function Expenses() {
  const {addExpense, income: expenses, getIncome: getExpenses, deleteIncome: deleteExpenses, totalIncome: totalExpenses} = useGlobalContext()


  useEffect(() => {
    getExpenses()
  },[]) //effect should only run when dependency.array of dependencies inside [] changes. 
  //If dependencies does not change between renders, the effect won't run. 

  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1>Expenses</h1>
      <h2 className="total-expenses">Total Expenses: <span>${totalExpenses()}</span></h2>
                <div className="expenses-content">
                    <div className="expenses-container">
                        <Form />
                    </div>
                    <div className="expenses">
                      {expenses.map((expenses) => {
                            const {_id, title, amount, date, category, description, type} = expenses; //destructure properties of income
                            return <ExpenseItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteExpenses}
                            />

                      })}
                      </div>
                      </div>
      </InnerLayout>
    </ExpenseStyled>
  )
}

const ExpenseStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-expenses{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 0.25rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: blue; //var(--color-green)
        }
    }
    .expenses-content{
        display: flex;
        gap: 3.5rem;
        .expenses{
            flex: 1;
        }
    }
`;

export default Expenses