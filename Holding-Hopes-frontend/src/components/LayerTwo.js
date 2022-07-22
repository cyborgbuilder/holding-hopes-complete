import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import Detail from './Detail'
import styled from 'styled-components'
import Blank from './Blank'
import VideoPage from './VideoPage'
import SliderPage from './SliderPage'
import Login from './Login'
import Signup from './Signup'
import Main from './Main';
import AnotherBlank from './AnotherBlank';

function LayerTwo() {
  const user = localStorage.getItem("token");
  return (
    <Container>
        <Blank />
        <VideoPage />
        <SliderPage />
        <Routes>
			{user && <Route path="/Main" exact element={<Main />}/>}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>

    <AnotherBlank />
        
        
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    z-index: 1000;

`
export default LayerTwo