import React from 'react'
import styled from 'styled-components'
function Main() {
  return (
    <>
     <Container>
        <h1>This page appear after login</h1>
      </Container>   
    </>
  )
}


const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #eae9e9;
  color: black;
  text-align: center;

`
export default Main