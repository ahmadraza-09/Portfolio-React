import { useNavigate } from 'react-router-dom';

const Headercomp = () => {

    let navigate = useNavigate();

  return (
    <>
    <nav>

        <div className="logo-section" >
            <li onClick={() => {navigate('/')}}>Ahmad Raza</li>
        </div>
        
        <input type="checkbox" id="check"/>

        <div className="content-section">
            <label for="check" className="close-menu"><i className="fa-solid fa-xmark"></i></label>
            <li onClick={() => {navigate('/')}}>Home</li>
            <li onClick={() => {navigate('/about')}}>About</li>
            <li onClick={() => {navigate('/resume')}}>Resume</li>
            <li onClick={() => {navigate('/projects')}}>Projects</li>
            <li onClick={() => {navigate('/blog')}}>Blog</li>
            <li onClick={() => {navigate('/contact')}}>Contact</li>
        </div>

        <label for="check"><i className="fa-solid fa-bars"></i></label>

    </nav>
    </>
  )
}

export default Headercomp;
