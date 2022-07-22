import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
function VideoPage() {
  return (
    <Container>
        <ReactPlayer url='/images/bg_video.mp4'  config={{ file: { attributes: {autoPlay: true,muted: true  }}}} playing='playing' loop='true' width='' height='' />

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
    padding: 40px;
    border-radius: 15px;
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    h1{
        font-size: 65px;
        color: #fff;
        margin: 10px 0;
        text-decoration: underline;

        
    }

    p{
        font-size: 20px;
        padding: 5px;
        color: #fff;

    }


`
export default VideoPage