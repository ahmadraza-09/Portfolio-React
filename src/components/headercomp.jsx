
const Headercomp = () => {
  return (
    <>
    <nav>

        <div class="logo-section">
            <a href="">Ahmad Raza</a>
        </div>
        
        <input type="checkbox" id="check"/>

        <div class="content-section">
            <label for="check" class="close-menu"><i class="fa-solid fa-xmark"></i></label>
            <a href="#">About</a>
            <a href="#">Resume</a>
            <a href="#projects">Projects</a>
            <a href="#">Blog</a>
            <a href="#contact-us">Contact</a>
        </div>

        <label for="check"><i class="fa-solid fa-bars"></i></label>

    </nav>
    </>
  )
}

export default Headercomp;
