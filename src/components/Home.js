import React from 'react'
import styled from 'styled-components';
import Section  from './Section';
function Home() {
  return (
    <Container>
       <Section
       title ="Model S"
       description="Order Online for Touchless Delivery"
       backgroundImg = "model-s.jpg"
       leftBtnText= "Custom order"
       rightBtnText = "Existing Inventory"
       />
       <Section
         title ="Model Y"
         description="Order Online for Touchless Delivery"
         backgroundImg = "model-y.jpg"
         leftBtnText= "Custom order"
         rightBtnText = "Existing Inventory"/>
       
       <Section
         title ="Model 3"
         description="Order Online for Touchless Delivery"
         backgroundImg = "model-3.jpg"
         leftBtnText= "Custom order"
         rightBtnText = "Existing Inventory"
       />
       <Section
         title ="Model X"
         description="Order Online for Touchless Delivery"
         backgroundImg = "model-x.jpg"
         leftBtnText= "Custom order"
         rightBtnText = "Existing Inventory"
       />
       <Section
       title ="Lowest Cost Solar Panels in America"
       description="Money Back Guarantee"
       backgroundImg = "solar-panel.jpg"
       leftBtnText= "Custom order"
       rightBtnText = "Existing Inventory"
       />
        <Section
       title ="Solar for New Roofs"
       description="Solar Roof Costs Less Than A New Roof Plus Solar Panels"
       backgroundImg = "solar-roof.jpg"
       leftBtnText= "Custom order"
       rightBtnText = "Existing Inventory"
       />
         <Section
       title ="Accessories"
       description=""
       backgroundImg = "accessories.jpg"
       leftBtnText= "Shop Now"
      
       />
        </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`