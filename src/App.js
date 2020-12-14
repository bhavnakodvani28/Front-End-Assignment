import React, {useState,  useEffect} from 'react';
import './App.css';
//import {Heading} from './component/Heading';
import "./component/button.css";
import Heading from "./component/Heading";
import {Loader} from './component/Loader';

import {UnsplashImage} from './component/UnsplashImage';

import axios from 'axios';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';




//style
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
body
{
  font-family:sans-serif;

}

`;
/*const button = styled.button
`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;*/

const WrapperImage = styled.section
`
max-width : 70rem;
margin : 4rem auto;
display : grid;
grid-gap: 1em;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
grid-auto-rows:300px;

`;
function App() {
  
 
  const accessKey="vwAkHGnm_OrVvmCuh5dKP1ENUYEPceZmM0Hj1J6OVVg";
  const [counter, setCounter] = useState(10);
  const Timer = () =>{

   setTimeout(() => {if(counter > 0) {setCounter(counter - 1)} else {fetchImages()}}, 100);
  //  setTimeout(
  //   function() {
  //       this.setState({ setCounter: 1 });
  //   }
  //   .bind(this),
  //   3000
//);
  }
  
  
  const [images, setImages] = useState([]);
  useEffect(()=>{
  fetchImages(); 

    

  },[])

  const fetchImages = () => {
    const apiRoot="http://api.unsplash.com";
    const accessKey="vwAkHGnm_OrVvmCuh5dKP1ENUYEPceZmM0Hj1J6OVVg";
    

  axios
    .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
    .then(res => setImages([...images,...res.data]))
    


}
  return (
    <div className="App">
 <button className="btn" onClick={Timer}>Click Me and Wait</button>
  <Heading  />
 
     <div>Countdown: {counter}</div>
     <GlobalStyle />
    <InfiniteScroll
      dataLength={images.length}
      next={fetchImages}
      hasMore={true}
      loader={<Loader />}
    >
   <WrapperImage>
{images.map(image =>(
<UnsplashImage url={image.urls.thumb} key={image.id} />
 ))} 
</WrapperImage>
    </InfiniteScroll>
      </div>
  );
}

export default App;
