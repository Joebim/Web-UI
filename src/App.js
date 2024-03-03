import Home from './components/Home';
import AdsManager from './components/AdsManager';
import LoginUi from './components/LoginUi';
import BlogPost from './components/BlogPost';
import './App.css';
import {Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Backbutton from './components/Backbutton';
import Ui from './components/Ui';
import Graphics from './components/Graphics';
import Animation from './components/Animation';


function App() {
  return (
    <>
    <Backbutton/>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ads" element={<AdsManager />} />
        <Route path="/login" element={<LoginUi />} />
        <Route path="/blog" element={<BlogPost />} />
        <Route path="/ui" element={<Ui />} />
        <Route path="/graphics" element={<Graphics />} />
        <Route path="/animation" element={<Animation />} />
      </Routes>
    </>
  );
}

export default App;
