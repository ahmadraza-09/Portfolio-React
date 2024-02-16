
const Maincomp = () => {
  return (
    <>
    {/* Hero Section */}

    <a href="#back-to-top" className="back-to-top">
        <i className="fa-solid fa-arrow-up"></i>
    </a>

    <div className="hero-section" id="back-to-top">
        <div className="hero-left">
            <div className="text-container">
                <h3>Hi I'm</h3>
                <h1>Ahmad Raza</h1>
                <span className="text first-text">I'm a</span>
                <span className="text second-text">Freelancer</span>
                <span className="text third-text"></span>
                <span className="text fourth-text"></span>
                <span className="text fifth-text"></span>
            </div>

            <br/>
            <div className="hire-resume">
                <button>Hire Me</button>
                <a href="images/favicon.io" download={'Resume'}><button type="button">Resume</button></a>
            </div>
        </div>

        <div className="hero-right">
            <img src="images/hero-right-img.png" alt=""/>
        </div>
    </div>

    {/* About Me */}
    <div className="about-me">

        <div className="about-me-content">
            <h3>About Me</h3>
            <div className="line"></div>
            <br/>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                I'm Creative Director and UI/UX Designer from Delhi, India, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
            </p>
            <br/>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
            </p>
        </div>
        <br/>
        <br/>

        <div className="work">
            <h3>What I'm Doing</h3>
            <div className="line"></div>
            <br/>
            <br/>
            <div className="work-boxes">
                <div className="work-box flex-div" data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                    <img src="images/web design.png" alt=""/>
                    <div className="work-box-text">
                        <h3>Web Design</h3>
                        <p>The most modern and high-quality design made at a professional level.</p>
                    </div>
                </div>
                <div className="work-box flex-div" data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                    <img src="images/web development.png" alt=""/>
                    <div className="work-box-text">
                        <h3>Web Development</h3>
                        <p>High-quality development of sites at the professional level.</p>
                    </div>
                </div>
                <div className="work-box flex-div" data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                    <img src="images/mobile apps.png" alt=""/>
                    <div className="work-box-text">
                        <h3>Mobile Apps</h3>
                        <p>Professional development of applications for iOS and Android.</p>
                    </div>
                </div>
                <div className="work-box flex-div" data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                    <i className="fa-solid fa-photo-film"></i>
                    <div className="work-box-text">
                        <h3>Video Editing</h3>
                        <p>The most modern and high-quality videos made at a professional level.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Education */}
    <div className="education">
        <h3>Education</h3>
        <div className="line"></div>
        <br/>
        <br/>
        <div className="board-section" data-aos="fade-right" data-aos-anchor-placement="center-bottom">
            <div className="img-text flex-div">
                <img src="images/jac logo.png" alt=""/>
                <h3>10th JAC Board</h3>
            </div>
            <h4>&bull; <span>2018 — 2019</span></h4>
            <h4>&bull; +2 RK High School, Haidar Nagar</h4>
            <h4>&bull; Marks — 81.20%</h4>
        </div>
        <br/>
        <div className="board-section" data-aos="fade-right" data-aos-anchor-placement="center-bottom">
            <div className="img-text flex-div">
                <img src="images/jac logo.png" alt=""/>
                <h3>12th JAC Board</h3>
            </div>
            <h4>&bull; <span>2019 — 2021</span></h4>
            <h4>&bull; +2 RK High School, Haidar Nagar</h4>
            <h4>&bull; Marks — 71%</h4>
        </div>
        <br/>
        <div className="graduation-section" data-aos="fade-right" data-aos-anchor-placement="center-bottom">
            <div className="img-text flex-div">
                <img src="images/ccsu logo.png" alt=""/>
                <h3>BCA — Chaudhary Charan Singh University</h3>
            </div>
            <h4>&bull; <span>2021 — 2024</span></h4>
            <h4>&bull; College — Harlal Institute Of Management & Technology, Greater Noida</h4>
            <h4>&bull; Persuing</h4>
        </div>
        <br/>
        <br/>

        <div className="experience">
            <h3>Experience</h3>
            <div className="line"></div>
            <h4 data-aos="fade-up" data-aos-anchor-placement="center-bottom">I'm a Fresher</h4>
        </div>

    </div>

    {/* My Skills */}
    <div className="my-skills">
        <div className="skills-text">
            <h3>My Skills</h3>
            <div className="line"></div>
        </div>
        <br/>
        <br/>
        <div className="skills-mobile" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <div className="skill-box" >
                <img src="images/html.png" alt=""/>
                <br/>
                <div id="number9">
                    100%
                </div>
                <h3>HTML</h3>
            </div>
            <div className="skill-box">
                <img src="images/css.png" alt=""/>
                <br/>
                <div id="number10">
                    100%
                </div>
                <h3>CSS</h3>
            </div>
            <div className="skill-box">
                <img src="images/bootstrap.png" alt=""/>
                <br/>
                <div id="number11">
                    100%
                </div>
                <h3>Bootstrap</h3>
            </div>
            <div className="skill-box">
                <img src="images/javascript.png" alt=""/>
                <br/>
                <div id="number12">
                    80%
                </div>
                <h3>JavaScript</h3>
            </div>
            <div className="skill-box">
                <img src="images/node-js.png" alt=""/>
                <br/>
                <div id="number13">
                    50%
                </div>
                <h3>Node JS</h3>
            </div>
            <div className="skill-box">
                <img src="images/react-js.png" alt=""/>
                <br/>
                <div id="number14">
                    50%
                </div>
                <h3>React JS</h3>
            </div>
            <div className="skill-box">
                <img src="images/express-js.png" alt=""/>
                <br/>
                <div id="number15">
                    0%
                </div>
                <h3>Express JS</h3>
            </div>
            <div className="skill-box">
                <img src="images/mongo-db.png" alt=""/>  
                <br/>
                <div id="number16">
                    0%
                </div>
                <h3>Mongo DB</h3>
            </div>
        </div>
    </div>

    <div className="my-projects" id="projects">
        <div className="project-text">
            <h3>My Projects</h3>
            <div className="line"></div>
        </div>
        <br/>
        <br/>

        <div className="project-boxes" >
            <div className="project-box">
                <a href="https://mariyamsmall.netlify.app/" rel="noreferrer" target="_blank"><img src="images/mariyam's-mall.png" alt=""/></a>
                <br/>
                <a href="https://mariyamsmall.netlify.app/" rel="noreferrer" target="_blank"><h4>Live Preview</h4></a>
                <h3>Mariyam's Mall</h3>
            </div>

            <div className="project-box" data-aos="fade-left" data-aos-anchor-placement="top-bottom">
                <a href="https://ahmadraza-09.github.io/Amazon-Clone/" rel="noreferrer" target="_blank"><img src="images/amazon.png" alt=""/></a>
                <br/>
                <a href="https://ahmadraza-09.github.io/Amazon-Clone/" rel="noreferrer" target="_blank"><h4>Live Preview</h4></a>
                <h3>Amazon Clone</h3>
            </div>

            <div className="project-box" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
                <a href="https://ahmadraza-09.github.io/Amazon-Clone/" rel="noreferrer" target="_blank"><img src="images/amazon.png" alt=""/></a>
                <br/>
                <a href="https://ahmadraza-09.github.io/Amazon-Clone/" rel="noreferrer" target="_blank"><h4>Live Preview</h4></a>
                <h3>Amazon Clone</h3>
            </div>

            <div className="project-box" data-aos="fade-left" data-aos-anchor-placement="top-bottom">
                <a href="https://mariyamsmall.netlify.app/" rel="noreferrer" target="_blank"><img src="images/mariyam's-mall.png" alt=""/></a>
                <br/>
                <a href="https://mariyamsmall.netlify.app/" rel="noreferrer" target="_blank"><h4>Live Preview</h4></a>
                <h3>Mariyam's Mall</h3>
            </div>
        </div>
    </div>

    {/* Contact Us */}
    <div className="contact-us" id="contact-us">
        <div className="project-text">
            <h3>Contact Us</h3>
            <div className="line"></div>
        </div>
        <br/>

        <input type="hidden" name="redirect" value="https://yourwebsite.com/thanks.html"/>

        <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="ac18f110-8548-4859-aa68-b7b13bdbd1b2"/>
            <input type="text" id="name" name="name" placeholder="Your Name" required/>
            <input type="email" id="email" name="email" placeholder="Email Id" required/>
            <input type="text" id="phone" name="number" placeholder="Phone Number"/>
            <textarea id="message" placeholder="How can i help you ?" required></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
      
    </>
  )
}

export default Maincomp;
