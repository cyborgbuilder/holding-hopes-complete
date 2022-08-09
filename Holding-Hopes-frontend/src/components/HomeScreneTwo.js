import React from 'react'
import styled from 'styled-components'
function HomeScreneTwo() {
  return (
    <Container>
        <TextSection>
            <h1>Welcome TO Holding Hopes</h1>
            <h4>We are helping you to hold your hope in this difficult time</h4> 
        </TextSection>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background:  #3bb19b;
    display: flex;
    align-items: center;
    justify-content: center;


    


`

const TextSection = styled.div`
z-index: 1;
width: 70%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73% ) 0px 16px 10px -10px;
padding: 40px;
border-radius: 15px;

@media only screen and (max-width: 1200px){
  box-shadow: rgb(0 0 0 / 69%) 0px 0px 0px 0px, rgb(0 0 0 / 73% ) 0px 0px 0px 0px;
}


h1{
  font-size: 120px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
 

  @media only screen and (max-width: 1200px) {
    font-size: 66px;
  }
}

h4{
  font-size: 30px;
  color: #fff;
  text-align: center;
  margin-top: 20px; 
 background: #4adcc1;
 padding: 10px;
 border-radius: 15px;
 text-transform: capitalize;
 


  @media only screen and (max-width: 1200px) {
    font-size: 16px;
  }
}

button{
  border: none;
  outline: none;
  width: 250px;
  padding: 14px;
  margin: 30px 0;
  background: rgba(234, 240, 246, 0.3);
  color: white;

  &:hover{
    cursor: pointer;
    color: black;
  }
}



`
export default HomeScreneTwo