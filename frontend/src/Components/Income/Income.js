import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layout';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income() {
  const {addIncome, income, getIncome, deleteIncome, totalIncome} = useGlobalContext()


  useEffect(() => {
    getIncome()
  },[]) //effect should only run when dependency.array of dependencies inside [] changes. 
  //If dependencies does not change between renders, the effect won't run. 

  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Income</h1>
      <h2 className="total-income">Total Income: <span>€{totalIncome()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="income">
                      {income.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income; //destructure properties of income
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteIncome}
                            />

                      })}
                      </div>
                      </div>
      </InnerLayout>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`
display: flex;
overflow: auto;
.total-income{
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
.icon{
  width: 70px;
  height: 80px;
  border-radius: 20px;
  background: #F5F5F5;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #FFFFFF;
  i{
      font-size: 2.6rem;
  }
}

.income-content{
    display: flex;
    gap: 3.5rem;
    .income{
        flex: 1;
    }
}
`;


export default Income