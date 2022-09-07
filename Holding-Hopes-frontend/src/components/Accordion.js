import React, { useState } from 'react'
import styled from 'styled-components'
import { Data } from './DataAccor'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";


const Accordion = () => {


    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index){
            return setClicked(null);
        }

        setClicked(index);
    }

  return (
    <ContainerHome>
        <h2 style={{color: 'black'}}>Frequently Asked Questions</h2>
        <IconContext.Provider value={{ color: 'white' , size: '25px'}} >
    <AccordionSection>
        <Container>
            {Data.map((item, index) => {
                return (
                    <>
                      <Wrap onClick={() => toggle(index)} key={index}>
                      <h1 style={{color: 'black'}}>{item.q}</h1>
                      <span>{clicked === index ? <IoIosArrowDropupCircle style={{paddingRight: '10px'}}  /> : <IoIosArrowDropdownCircle style={{paddingRight: '10px', color: 'black'}}/>}</span>
                      </Wrap>

                      {clicked === index ? (
                          <DropDown>
                          <p>{item.a}</p>
                          </DropDown>
                      ): null }
                      
                    </>
                )
            })}
        </Container>
    </AccordionSection>
    </IconContext.Provider>
    </ContainerHome>
  )
}

const ContainerHome = styled.div`
    width: 100%;
    background: #eae9e9;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px 0;

    h2{
        font-size: 65px;
        text-transform: uppercase;
        margin: 40px 0;
        letter-spacing: 1.8px;
        color: black;

              
    @media only screen and (max-width: 1200px){
        font-size: 50px;
        text-align: center;
    }
    }




`

const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
     margin: 40px 0;
    // border-radius: 15px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

          
    @media only screen and (max-width: 1200px){
        width: 95%;
    }

`

const Container = styled.div`
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
`
const Wrap = styled.div`

    border: 1px solid #3bb19b;
    color: black;
    height: 70px;
    margin: 30px 0;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    // text-align: center;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


    h1{
        padding: 2rem ;
        font-size: 2rem;
              
    @media only screen and (max-width: 1200px){
        font-size: 1.3rem;
    }
    }

`

const DropDown = styled.div`
    color: black;
    width: 100%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // border-bottom: 1px solid yellow;
    // border-top: 1px solid yellow;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

          
    @media only screen and (max-width: 1200px){
        padding: 0 10px;
    }
`

export default Accordion