import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import StoriesPage from './pages/StoriesPage';

function App() {
  return (
    <div>
      <Navigation />
        <Routes>
          <Route path="/stories" element={<StoriesPage />} />
        </Routes>
    </div> 
  );
}

export default App;
