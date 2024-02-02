import { Container } from '../../components/Styles/Container/Container.jsx'
import React from 'react'
import { Section } from './HomePage.styled'

const HomePage = () => {
  return (
    <Container>
    <Section>
    
    <h1>Our Services</h1>
    <p>Welcome to Rental Car Company, your premier destination for high-quality car rentals. We offer a wide range of services to meet your transportation needs.</p>
    
    {/* <Images src='./public/background.jpg' alt='car'/> */}
    </Section>
    </Container>
  )
}

export default HomePage