import Blogcomp from "../components/blogcomp";
import Headercomp from "../components/headercomp";
import Footercomp from "../components/footercomp";

const Blogpage = () => {
  return (
    <>
        {<Headercomp/>}
        {<Blogcomp/>}
        {<Footercomp/>}
    </>
  )
}

export default Blogpage;
