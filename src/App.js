import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './routes/Home';
import StoryDetail from './routes/StoryDetail'
import { StoriesContextProvider } from './context/StoriesContext';
import StoriesList from './components/StoriesList';
import AddStory from './components/AddStory'
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import SignUp from './components/SignUp';
import Update from './routes/Update';
import Profile from './routes/Profile';


const App = () => {

  return (
    <StoriesContextProvider>
      <div>
        <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/stories" element={<StoriesList />} />
            <Route exact path="/stories/:id" element={<StoryDetail />} />
            <Route exact path="/stories/create" element={ <PrivateRoute> <AddStory /> </PrivateRoute>} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/stories/:id/update" element={<Update />} />
            <Route exact path="/users/:id" element={<Profile />} />
          </Routes>
      </div> 
    </StoriesContextProvider>
  );
}

export default App
