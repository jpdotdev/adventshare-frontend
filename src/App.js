import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './routes/Home';
import StoryDetail from './routes/StoryDetail'
import { StoriesContextProvider } from './context/StoriesContext';
import StoriesList from './components/StoriesList';
import AddStory from './components/AddStory'



const App = () => {
  return (
    <StoriesContextProvider>
      <div>
        <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/stories" element={<StoriesList />} />
            <Route exact path="/stories/:id" element={<StoryDetail />} />
            <Route exact path="/stories/create" element={<AddStory />} />
          </Routes>
      </div> 
    </StoriesContextProvider>
  );
}

export default App
