import React from "react";
import Homepage from "./pages/homepage";
import { Route, Routes } from "react-router-dom";
import Discription from "./components/Discription";
import { useState } from 'react';
import Navbar from "./components/Navbar";


function App() {

  const [bgImage, setBgImage] = useState('https://images.pexels.com/photos/6408282/pexels-photo-6408282.jpeg')
  const images = ['https://cdn.pixabay.com/photo/2023/05/04/02/24/bali-7969001_640.jpg',
    'https://cdn.pixabay.com/photo/2023/04/22/17/59/flower-7944162_960_720.jpg',
    'https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_960_720.jpg',
    'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg',
    'https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_960_720.jpg',
    'https://cdn.pixabay.com/photo/2013/07/25/01/31/forest-166733_960_720.jpg',
    'https://images.pexels.com/photos/6408282/pexels-photo-6408282.jpeg'];

  const handleBgChange = () => {
    const currentIndex = images.indexOf(bgImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setBgImage(images[nextIndex]);
  }


  return (
    <div className="App"
      style={{
        backgroundImage: `url(${bgImage})`,
        height: '150vh',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }} >
      <Navbar handleBgChange={handleBgChange} />
      <div >
        <Routes>
          <Route path="/" element={<Homepage />}></Route>

          <Route path="/:paramsid" element={<Discription />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
