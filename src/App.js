import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './pages/Home/home';
import Menu from './pages/menu/menu';
import About from './pages/aboutus/aboutus';
import Contact from './pages/contactus/contact';
import{BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/menu" element={<Menu/>}/>
      <Route path ="/aboutus" element={<AboutUs/>}/>
      <Route path ="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;


