import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/layout';
import { euro } from '../../utils/icons';
import Chart from '../Chart/Chart';
import History from '../../HistoryTransactions/History';

function Transactions() {
    const {
        totalExpenses,
        income,
        expenses,
        totalIncome,
        totalBalance,
        getIncome,
        getExpenses,
    } = useGlobalContext();

    useEffect(() => {
        getIncome();
        getExpenses();
    }, []);

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                <div className="history-con">
                        <History />
                        <div className="salary-expense-con">
                            <div className="salary">
                                <h2>Salary</h2>
                                <p>
                                    Min: {euro} {Math.min(...income.map((item) => item.amount))}
                                </p>
                                <p>
                                    Max: {euro} {Math.max(...income.map((item) => item.amount))}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Expense</h2>
                                <p>
                                    Min: {euro} {Math.min(...expenses.map((item) => item.amount))}
                                </p>
                                <p>
                                    Max: {euro} {Math.max(...expenses.map((item) => item.amount))}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    );
}

const DashboardStyled = styled.div`
  .history-con {
    grid-column: 2 / 1;
    display: grid;

    .salary-expense-con {
      display: flex;
      justify-content: space-between;

      .salary,
      .expense {
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        margin-top: 50px; // Here, use margin-top instead of class
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 3rem;
        border-radius: 25px;
        display: flex;
        flex-direction: column;

        p {
          font-weight: 400;
          font-size: 1.6rem;
        }
      }
    }
  }
`;

export default Transactions;
