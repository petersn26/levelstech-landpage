import style from "./style";
import {Navbar, Hero, About} from "./components";

const page = () =>  (
    <div className="bg-primary text-black overflow-hidden">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-hero ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <About/>
        </div>
      </div>

    </div>
  );


export default page
