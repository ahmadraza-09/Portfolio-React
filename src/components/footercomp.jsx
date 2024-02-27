import { useNavigate } from 'react-router-dom';

const Footercomp = () => {

    let navigate = useNavigate();

  return (
    <>
      <div className="footer">
        <div className="logo-section" >
            <li onClick={() => {navigate('/')}}>Ahmad Raza</li>
            <p>Make your website and grow your Bussiness. We Create Dynamic Websites & Applications.</p>
        </div>

        <ul className="menu-section">
            <li onClick={() => {navigate('/')}}>Home</li>
            <li onClick={() => {navigate('/about')}}>About</li>
            <li onClick={() => {navigate('/projects')}}>Projects</li>
            <li onClick={() => {navigate('/resume')}}>Resume</li>
        </ul>

        <ul className="menu-section">
            <li onClick={() => {navigate('/termsconditions')}}>Terms and Conditions</li>
            <li onClick={() => {navigate('/privacypolicy')}}>Privacy Policy</li>
            <li onClick={() => {navigate('/blog')}}>Blogs</li>
            <li onClick={() => {navigate('/contact')}}>Contact Us</li>
        </ul>

        <ul className="menu-section">
            <h2>Let's Connect</h2>
            <p>ahmadraza@gmail.com</p>
            <div className="social">
                <a href="https://www.instagram.com/roneeey_09/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://github.com/ahmadraza-09" target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/ahmadraza09/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.youtube.com/channel/UC55vehqjvMVqg_HTTJr2HGQ" target="_blank"><i className="fa-brands fa-youtube"></i></a>
            </div>
        </ul>
      </div>
    </>
  )
}

export default Footercomp;
