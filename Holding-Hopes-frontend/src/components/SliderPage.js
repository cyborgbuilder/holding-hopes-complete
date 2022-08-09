import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function SliderPage() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        accessibility: true,
        arrows: false
      };


  return (
    <Container>
        <Wrap>
            <Header>
            <img src='/images/bot2.png' />
                <h1>What You'll Get with our Online Counseling</h1>
                
            </Header>
            <Content>
                <Slider {...settings}>
                    <div>
                        <Image>
                            <img src='https://static.wixstatic.com/media/2d112c_c40b812f94cd483fadd48c3944e45db6~mv2.png/v1/fill/w_560,h_272,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/counselling-1024x497.png' />
                        </Image>
                        <Text>
                            <h1>Your Perfect Counseller</h1>
                            <p>You'll find an excellent choice of online counsellers and psycologists. Having a thearapist you can relate to is so important.</p>
                        </Text>
                    </div>

                    <div>
                        <Image>
                            <img  src='/images/counsil2.png' />
                        </Image>
                        <Text>
                            <h1>Qualifications & Accountability</h1>
                            <p>You'll find an excellent choice of online counsellers and psycologists. Having a thearapist you can relate to is so important.</p>
                        </Text>
                    </div>

                    <div>
                        <Image>
                            <img src='https://images.squarespace-cdn.com/content/v1/61378a74fc037602b60a61d8/1631567788161-EKURNI2FS62P35WUDJCD/VA+Insights+banner+graphic+transparent.png' />
                        </Image>
                        <Text>
                            <h1>Easy Accessible</h1>
                            <p>You'll find an excellent choice of online counsellers and psycologists. Having a thearapist you can relate to is so important.</p>
                        </Text>
                    </div>

                    <div>
                        <Image>
                            <img src='/images/slider2.png' />
                        </Image>
                        <Text>
                            <h1>Real Privacy</h1>
                            <p>You'll find an excellent choice of online counsellers and psycologists. Having a thearapist you can relate to is so important.</p>
                        </Text>
                    </div>
                </Slider>
            </Content>
        </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding-top: 50px;
    background: #eae9e9;
    display: flex;
    justify-content: center;
`

const Wrap = styled.div`
    width: 90%;

`

const Header = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding:  20px 0;
    border-radius: 15px;
   

   
    
    text-align: center;
    h1{
        font-size: 50px;
        text-transform: uppercase;

        @media only screen and (max-width: 1200px) {
            font-size: 28px;
        }
    }

    img{
        width: 8%;
    }

`

const Content = styled.div`
    width: 100%;
    margin-top: 80px;
`
const Image = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    img{
        width: 50%;

    }

`

const Text = styled.div`
    text-align: center;
    padding: 30px 0;

    p{
        margin: 10px 0;
    }
`

export default SliderPage