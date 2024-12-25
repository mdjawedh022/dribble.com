import './App.css';
import Header from './components/Header/Header';
import {  Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
   
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/explore" element={<h1>Explore Page</h1>} />
        <Route path="/explore/popular" element={<h1>Popular Page</h1>} />
        <Route path="/explore/web-design" element={<h1>Web Design Page</h1>} />
        <Route path="/hire-a-designer" element={<h1>Hire a Designer</h1>} />
        <Route
          path="/hire-a-designer/freelance"
          element={<h1>Freelance Designers</h1>}
        />
        <Route path="/find-jobs" element={<h1>Find Jobs Page</h1>} />
        <Route path="/blog" element={<h1>Blog Page</h1>} />
        <Route path="/signup" element={<h1>Sign Up Page</h1>} />
        <Route path="/login" element={<h1>Log In Page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
