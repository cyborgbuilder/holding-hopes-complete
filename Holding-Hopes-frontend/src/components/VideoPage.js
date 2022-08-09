import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav } from 'react-bootstrap'
function VideoPage() {
  return (
    <Container>
        <ReactPlayer url='/images/bg_video.mp4'  config={{ file: { attributes: {autoPlay: true,muted: true  }}}} playing='playing' loop='true' width='' height='' />

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
        <TextBox>
            <h1>Improve Your Life</h1>
            <h1>Reach Your Goals &</h1>
            <h1>Get Real Results</h1>
            <br></br>
            <br></br>

            

            <p>
You can access our online counseling service immediately and get caring, effective & evidence based support when you need it.
</p>
            <p>You'll find counseling for anxiety, depression, relationship issues, anger management, gender & sexuality issues, grief and phobias, all provided by qualified counselors and psychologists with results & experience</p>
            <p>Online therapy is a new idea to a lot of people, so we've made the experience as easy as possible.
</p>
        </TextBox>
    </Container>
  )
}


const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;

`

const TextBox = styled.div`
    position: absolute;
    top: 20%;
    left: 5%;
    padding: 20px;
    border-radius: 15px;
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    h1{
        font-size: 51px;
        color: black;
        margin: 10px 0;

        
    }

    p{
        font-size: 20px;
        padding: 5px;
        color: black;


    }


`
export default VideoPage