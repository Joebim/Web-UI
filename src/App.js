import Home from './components/Home';
import AdsManager from './components/AdsManager';
import LoginUi from './components/LoginUi';
import BlogPost from './components/BlogPost';
import './App.css';
import {Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ads" element={<AdsManager />} />
        <Route path="/login" element={<LoginUi />} />
        <Route path="/blog" element={<BlogPost />} />
      </Routes>
    </>
  );
}

export default App;
