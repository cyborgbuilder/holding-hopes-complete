import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav } from 'react-bootstrap'





function HomeScreneOne() {
  return (
    <Container>
      <Navbar style={{position: "fixed", top: "0", width: "100%", background: "#3bb19b", opacity: "0.9", zIndex: "1000", zIndex: "1"}}   >

<Navbar.Toggle style={{marginLeft: '20px'}} />
<Navbar.Collapse>
<Nav >
    <Nav.Link  style={{marginRight: '12px', color: "#fff", fontWeight: "bold", fontSize: "18px", margin: "0 5px"}} href="">Home</Nav.Link>
    <Nav.Link style={{marginRight: '12px', color: "#fff", fontWeight: "bold", fontSize: "18px", margin: "0 5px"}} href="">Services</Nav.Link>
    <Nav.Link style={{marginRight: '12px', color: "#fff", fontWeight: "bold", fontSize: "18px", margin: "0 5px"}} href="">About</Nav.Link>
    <Nav.Link style={{marginRight: '12px', color: "#fff", fontWeight: "bold", fontSize: "18px", margin: "0 5px"}} href="">Login</Nav.Link>
    <Nav.Link style={{marginRight: '12px', color: "#fff", fontWeight: "bold", fontSize: "18px", margin: "0 5px"}} href="">Content</Nav.Link>
</Nav>
</Navbar.Collapse >

<img src='/images/logo_1.png' style={{width: "6%", margin: "0 10px"}}/>

</Navbar>

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
    background: #3bb19b;
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