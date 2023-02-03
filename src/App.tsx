import React, { useState } from 'react';
import Filter from './components/Filter';
import Page from './components/Page';
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify';
const Container = styled.div`
  position: relative;
  height: 100vh
`
const PageStyles = styled.div`
  position: absolute;
  top: 2%;
  left: 40%;
  transform: translate(-50%, 0%);
  background-color: #FFFFFF;
  margin: 40px 40px;
  padding: 40px;
  width: 40%;
  height: 80vh

`
const FilterStyles = styled.div `
  width: 15%;
  height: 100vh;
  position: absolute;
  right: 0;
  background-color: #FFFFFF;
  padding: 0px 25px 0 25px;
`
export interface IGlobalStyle{
  font: string ,
  fontStyle: 'Bold' | 'Italic' | 'Underlined' | 'Normal',
  color: string,
  fontSize: string,
  lineHeight: string,
  letterSpacing: string,
  position: string,
  text: string,
  isActive: boolean
}
function App() {
  const lc  = localStorage.getItem('styles')
  const [globalStyle, setGlobalStyle]= useState<IGlobalStyle>({
    font: lc ? JSON.parse(lc).font :"Fira Sans" ,
    fontStyle: lc ? JSON.parse(lc).fontStyle : "Bold",
    color: lc ? JSON.parse(lc).color :"#222222",
    fontSize: lc ? JSON.parse(lc).fontSize :"14",
    lineHeight: lc ? JSON.parse(lc).lineHeight :"125",
    letterSpacing: lc ? JSON.parse(lc).letterSpacing :"0.6",
    position: lc ? JSON.parse(lc).position :"left",
    text: lc ? JSON.parse(lc).text : "Type here ...",
    isActive: false
})
  return (
    <Container>
        <PageStyles>
          <Page globalStyle={globalStyle} setGlobalStyle={setGlobalStyle}/>
        </PageStyles>
        <FilterStyles>  
          <Filter globalStyle={globalStyle} setGlobalStyle={setGlobalStyle} />
        </FilterStyles>
        <ToastContainer position="top-left" />
    </Container>
  );
}

export default App;
