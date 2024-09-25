import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Images from './components/Images';


const ApiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("nature");
  const [Loader, setLoader] = useState(true);
  


  const fetchImages = async () => {
    try {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${search}&per_page=80`,
        {
          headers: {
            Authorization: ApiKey
          }
        }
      );
      setImages(res.data.photos); 
      setLoader(false)
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  
 useEffect(() => {
   fetchImages()
 
   
 }, [search]);
 

  return (
    <>
      <Router>
        <Navbar setSearch={setSearch} fetchImages={fetchImages} /> 
        <Routes>
          <Route path='/' element={<Images photos={images} Loader= {Loader} />} />  
        </Routes>
      </Router>
    </>
  );
}

export default App;
