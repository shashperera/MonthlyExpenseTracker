import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layout';

function Dashboard() {
  return (
    <DashboardStyled>Dashboard
        <InnerLayout>
            <h1>All Transactions</h1>
            <div className="stats-con">
              <div className="chart-con">
                <Chart/>

              </div>

            </div>
        </InnerLayout>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`
`;

export default Dashboard