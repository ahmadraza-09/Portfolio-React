import Skillsboxcomp from "./skillsboxcomp";
import Sociallinkscomp from "./sociallinkscomp";

const Aboutcomp = () => {
  return (
    <>
      <div className="about-container">

        <div className="about-content">

          {<Sociallinkscomp/>}

          {/* <img className="car" src="images/white-car.png" alt="" /> */}

          <div className="profile-img">
            <img src="images/ahmadraza.jpg" alt="" />
          </div>

          <div className="about-head">
            <h1>Hey, I'm Ahmad Raza</h1>
            <div className="about-head-pasion">
              <h2>Frontend Developer</h2>
              <h2>Youtuber</h2>
              <h2>Full Stack Developer</h2>
            </div>
          </div>

          <div className="about-content-text">
            <p>I'm Creative Director and UI/UX Designer from Delhi, India, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.


My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
          </div>
        </div>

        <div className="what-i-am">
          {<Skillsboxcomp 
            imageSrc="images/frontend.png"  
            skillBoxHead= "Frontend Developer"
            skillBoxText= "I like to code things from scratch, and enjoy bringing ideas to life in the browser."
            languageUsedHead= "Language I Use"
            languageUsed1= "HTML"
            languageUsed2= "CSS"
            languageUsed3= "Bootstrap"
            languageUsed4= "JavaScript"
            languageUsed5= "ReactJS"
            languageUsed6= "Git & GitHub"
            devToolsHead= "Dev Tools"
            devToolsUsed1= "VS Code"
            devToolsUsed2= "Git"
            devToolsUsed3= "GitHub"
            devToolsUsed4= "Netlify"
          />}
          {<Skillsboxcomp
            imageSrc="images/youtube.png"  
            skillBoxHead= "Youtuber"
            skillBoxText= "I started working on YouTube. Because I want to share my knowledge whatever i know about."
            languageUsedHead= "Videos I Make On"
            languageUsed1= "HTML"
            languageUsed2= "CSS"
            languageUsed3= "Bootstrap"
            languageUsed4= "JavaScript"
            languageUsed5= "ReactJS"
            languageUsed6= "Git & GitHub"
            devToolsHead= "Tools I Used"
            devToolsUsed1= "Youtube Studio"
            devToolsUsed2= "Kinemaster"
            devToolsUsed3= "PixelLab"
            devToolsUsed4= "OBS Studio"
          />}
          {<Skillsboxcomp
            imageSrc="images/fullstack.webp"  
            skillBoxHead= "Full Stack Developer"
            skillBoxText= "I like to code things from scratch, and enjoy bringing ideas to life in the browser."
            languageUsedHead= "Language I Use"
            languageUsed1= "HTML"
            languageUsed2= "CSS"
            languageUsed3= "Bootstrap"
            languageUsed4= "JavaScript"
            languageUsed5= "ReactJS"
            languageUsed6= "Git & GitHub"
            showElement= {true}
            languageUsed7= "Node JS"
            languageUsed8= "Express JS"
            languageUsed9= "My SQL"
            languageUsed10= "Mongo DB"
            devToolsHead= "Dev Tools"
            devToolsUsed1= "VS Code"
            devToolsUsed2= "Git"
            devToolsUsed3= "GitHub"
            devToolsUsed4= "Netlify"
          />}
        </div>
      </div>
    </>
  )
}

export default Aboutcomp;
