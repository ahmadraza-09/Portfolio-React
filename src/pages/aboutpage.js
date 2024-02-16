import Aboutcomp from "../components/aboutcomp";
import Headercomp from "../components/headercomp";
import Footercomp from "../components/footercomp";
import "../aboutpage.css";

const Aboutpage = () => {

  // const car = document.querySelector(".car");

  // window.addEventListener("scroll", () => {

  //   let value = window.scrollY;

  //   car.style.marginTop = value * 1.5 + "px";

  // });

  return (
    <>
      {<Headercomp/>}
      {<Aboutcomp/>}
      {<Footercomp/>}
    </>
  )
}

export default Aboutpage;
