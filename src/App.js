import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './responsive.css'
import Homepage from './pages/homepage';
import Blogpage from './pages/blogpage';
import Aboutpage from './pages/aboutpage';
import Resumepage from './pages/resumepage';
import Projectspage from './pages/projectspage';
import Termsconditionspage from './pages/termsconditionspage';
import Privacypolicypage from './pages/privacypolicypage';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<Aboutpage/>}/>
      <Route path="/resume" element={<Resumepage/>}/>
      <Route path="/projects" element={<Projectspage/>}/>
      <Route path="/blog" element={<Blogpage/>}/>
      <Route path="/contact" element={<Projectspage/>}/>
      <Route path="/termsconditions" element={<Termsconditionspage/>}/>
      <Route path="/privacypolicy" element={<Privacypolicypage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
