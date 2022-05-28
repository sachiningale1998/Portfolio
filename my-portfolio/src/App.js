import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Techstacks from './components/Techstacks';
import Myprojects from './components/Myprojects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
      <Techstacks/>
      <Myprojects />
      <Contact/>
    </div>
  );
}

export default App;
