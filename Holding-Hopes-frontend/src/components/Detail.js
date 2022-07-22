import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
        <Wrap>
       <Head>
        <h1>our Online Counseling Service</h1>
       </Head>

       <Content>
             <Box>
                <ImageBox>
                    <FirstImg src='https://www.pngmart.com/files/21/Counseling-PNG-Isolated-Picture.png' />
                    {/* <SecondImg src='/images/o.webp' /> */}
                </ImageBox>
                <Header>
                    <h1>Effective</h1>
                <p>Conveniant form of anxiety & depression therapy. Getting real help has never been </p>
                </Header>
            </Box>

            <Box>
                <ImageBox>
                    <FirstImg src='https://www.pngmart.com/files/21/Counseling-PNG-Isolated-Picture.png' />
                    {/* <SecondImg src='/images/o.webp' /> */}
                </ImageBox>
                <Header>
                    <h1>Secure</h1>
                <p>Conveniant form of anxiety & depression therapy. Getting real help has never been </p>
                </Header>
            </Box>

            <Box>
                <ImageBox>
                    <FirstImg src='https://www.pngmart.com/files/21/Counseling-PNG-Isolated-Picture.png' />
                    {/* <SecondImg src='/images/o.webp' /> */}
                </ImageBox>
                <Header>
                    <h1>Conveninat</h1>
                <p>Conveniant form of anxiety & depression therapy. Getting real help has never been </p>
                </Header>
            </Box>
       </Content>


            
        </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #eae9e9;
    display: flex;
    justify-content: center;


`

const Wrap = styled.div`
    width: 95%;


`

const Head = styled.div`
    text-align: center;
    padding: 40px 0;

    h1{
        text-transform: uppercase;
        font-size: 60px;
    }

`

const Content = styled.div`
    widthL 100%;
    display: flex;
    flex-wrap: wrap;

`
const Box = styled.div`
    width: 26%;
    height: 500px;

    margin: 50px;
    display: flex;
    flex-direction: column;
    justify-content: spacebetween;
    
    

`
const ImageBox = styled.div`
    width: 100%;
    height: 450px;
    position: relative;

    overflow: hidden;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover{
        cursor: pointer;
        transform: translate3d(0px, 0px, -0.197831px) rotateX(-2.177deg) rotateY(4.96148deg);
    }
    


`

const FirstImg = styled.img`
    width: 100%;
    position: absolute;
   


`


const SecondImg = styled.img`
    width: 100%;
    position: absolute;

`

const Header = styled.div`
    text-align: center;

`
export default Detail