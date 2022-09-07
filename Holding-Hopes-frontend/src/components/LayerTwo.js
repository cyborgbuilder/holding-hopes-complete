import React from 'react'
import styled from 'styled-components'
import Blank from './Blank'
import VideoPage from './VideoPage'
import SliderPage from './SliderPage'
import Login from './Login'
import Signup from './Signup'
import Main from './Main';

import Accordion  from './Accordion';


function LayerTwo() {
  const user = localStorage.getItem("token");
  return (
    <Container>
        <Blank />
        <VideoPage />
        {/* <Chat /> */}
        <SliderPage />
        <Accordion />
        <Main />

    {/* <Routes>
			{user && <Route path="/Main" exact element={<Main />}/>}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes> */}

        
        
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    z-index: 1000;

`
export default LayerTwo