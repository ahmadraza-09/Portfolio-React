import { useNavigate } from 'react-router-dom';
import Sociallinkscomp from './sociallinkscomp';

const Footercomp = () => {

    let navigate = useNavigate();

  return (
    <>
      <div className="footer">
        <div className="logo-section" >
            <a onClick={() => {navigate('/')}}>Ahmad Raza</a>
            <p>Make your website and grow your Bussiness. We Create Dynamic Websites & Applications.</p>
        </div>

        <ul className="menu-section">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Blog</li>
        </ul>

        <ul className="menu-section">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Contact Us</li>
        </ul>

        <ul className="menu-section">
            <h2>Let's Connect</h2>
            <p>ahmadraza@gmail.com</p>
            <div className="social">
                <a href="https://www.instagram.com/roneeey_09/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://github.com/ahmadraza-09" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/ahmad-raza-b4331727a/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.youtube.com/channel/UC55vehqjvMVqg_HTTJr2HGQ" target="_blank"><i class="fa-brands fa-youtube"></i></a>
            </div>
        </ul>
      </div>
    </>
  )
}

export default Footercomp;
