import React from 'react'
import HomeBot from './HomeBot'
import HomeScreneOne from './HomeScreneOne'
import HomeScreneTwo from './HomeScreneTwo'
import styled from 'styled-components'


function LayerOne() {
  return (
    <Container>
    <HomeBot />
    <HomeScreneOne />
    <HomeScreneTwo />
    </Container>
  )
}


const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
 


`

export default LayerOne