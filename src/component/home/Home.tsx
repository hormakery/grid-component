import React from 'react'
import {
  About,
  List,
  Title,
  Button,
  TopLeft,
  Wrapper,
  AboutList,
  Subtitle,
  TopRight,
  Description,
  WrapperLayout,
} from './Home.styles'


const Home = () => {
  return (
    <Wrapper>
      <About>
        <Title>
          Join our community
        </Title>
        <Subtitle>30-day, hassie-free money back guarantee</Subtitle>
        <Description>Gain access to our full library of tutorials along with expert code reviews.<br/>
          Perfect for any developers who are serious about knowing their skills.
        </Description>
      </About>

      <WrapperLayout>
        <TopLeft>
          <span>Monthly Subscription</span>
          <span className='list-price'><b className='price'>$29</b>per month</span>
          <b className='sub_details'>Full access for less than $1 a day</b>
          <Button>Sign Up</Button>
        </TopLeft>

        <TopRight>
          <span>Why Us</span>
          <AboutList>
            <List>Tutorials by industry experts</List>
            <List>Peer and expert code review</List>
            <List>Coding exercise</List>
            <List>Access to our GitHub repo</List>
            <List>Community forums</List>
            <List>Flashboard desks</List>
            <List>New videos every week</List>
          </AboutList>
        </TopRight>
      </WrapperLayout>
      
    </Wrapper>
  )
}

export default Home
