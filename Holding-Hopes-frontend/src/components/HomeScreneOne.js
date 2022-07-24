import React from 'react'
import styled from 'styled-components'





function HomeScreneOne() {
  return (
    <Container>
        <TextSection>
        <h1>HOLDING HOPES</h1>
        </TextSection>
        {/* <SocialIcons>
        <FaDiscord style={{color: 'white', margin: '5px 0'}}/>
          <FaTwitter style={{color: 'white', margin: '5px 0'}} />
          <FaTelegram style={{color: 'white', margin: '5px 0'}}/>
          <FaInstagram style={{color: 'white', margin: '5px 0'}}/>
          <FaPinterest style={{color: 'white', margin: '5px 0'}}/>         
          <FaFacebook style={{color: 'white', margin: '5px 0'}}/>
        </SocialIcons> */}
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #63e4f2;
    //background: url('/images/bg2.jpg');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

   
    


`
const TextSection = styled.div`
    text-align: center;

h1{
  font-size: 250px;
  color: #fff;
  
  

  @media only screen and (max-width: 1200px) {
    font-size: 76px;

  }

}

@media only screen and (max-width: 1200px) {
  z-index: 1;
}
`

export default HomeScreneOne