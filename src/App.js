import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import StoriesPage from './pages/StoriesPage';
import Home from './pages/Home';
import SingleStory from './pages/SingleStory'


function App() {
  return (
    <div>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/stories/:id" element={<SingleStory />} />
        </Routes>
    </div> 
  );
}

export default App;
