import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Techstacks from './components/Techstacks';
import Myprojects from './components/Myprojects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
      <Techstacks/>
      <Myprojects />
    </div>
  );
}

export default App;
