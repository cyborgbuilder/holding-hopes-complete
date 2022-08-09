import React from 'react'
import styled from 'styled-components'
import Comments from './Comments';


function Main() {
  return (
    <>
     <Container>
     <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />

     
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