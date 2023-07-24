import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Stories from './pages/Stories';

function App() {
  return (
    <div>
      <Navigation />
        <Routes>
          <Route path="/stories" element={<Stories />} />
        </Routes>
    </div> 
  );
}

export default App;
