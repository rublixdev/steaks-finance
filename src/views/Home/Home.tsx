import React from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/chef.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'


const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={chef} height={100} />}              
        subtitle="You’re not a real cowboy until you’ve fallen off a horse three times."
      />

      <Container>
        <Balances />
      </Container>
      <Spacer size="md" />
     
      <Spacer size="lg" />
      <div className="red-button"
        style={{
          margin: '0 auto',
        }}
      >
        <Button text="See the Menu" to="/farms" variant="secondary" />
        <Spacer size="lg" />
      </div>
    </Page>
  )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center; 

  > b {    
    color: ${(props) => props.theme.color.grey[600]};
  }
`

export default Home
