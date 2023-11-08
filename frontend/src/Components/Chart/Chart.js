import React from 'react'
import PropTypes from 'prop-types'
import {
    Chart as ChartJs, CategoryScale, LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js'
import { LineGraph } from 'react-chartjs-2'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'

//register elements of chart js
ChartJs.register(
    ChartJs, CategoryScale, LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
)

function Chart() {

    const { income, expenses } = useGlobalContext()

    const data = {
        labels: income.map((inc) => {
            const { date } = inc3
            return dateFormat(date)
        }),
        datasets: [
            {
                labels: 'Income',
                data: [
                    ...income.map((income) => {
                        const { amount } = income
                        return amount
                    })
                ],
                backgroundColor: 'green'
            },
            {
                labels: 'Expenses',
                data: [
                    ...expenses.map((expenses) => {
                        const { amount } = expenses
                        return amount
                    })
                ],
                backgroundColor: 'red'
            }
        ]
    }

    return (
        <ChartStyled>
            <Line />
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
background: #FCF6F9;
border: 2px solid #FFFFFF;
box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
border-radius: 20px;
padding: 0.25rem;
`
export default Chart
