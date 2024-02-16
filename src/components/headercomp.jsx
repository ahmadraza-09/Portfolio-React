import { useNavigate } from 'react-router-dom';

const Headercomp = () => {

    let navigate = useNavigate();

  return (
    <>
    <nav>

        <div className="logo-section" >
            <a onClick={() => {navigate('/')}}>Ahmad Raza</a>
        </div>
        
        <input type="checkbox" id="check"/>

        <div className="content-section">
            <label for="check" className="close-menu"><i className="fa-solid fa-xmark"></i></label>
            <a onClick={() => {navigate('/')}}>Home</a>
            <a onClick={() => {navigate('/about')}}>About</a>
            <a onClick={() => {navigate('/resume')}}>Resume</a>
            <a onClick={() => {navigate('/projects')}}>Projects</a>
            <a onClick={() => {navigate('/blog')}}>Blog</a>
            <a onClick={() => {navigate('/contact')}}>Contact</a>
        </div>

        <label for="check"><i className="fa-solid fa-bars"></i></label>

    </nav>
    </>
  )
}

export default Headercomp;
