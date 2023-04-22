// import images
import WomanImg from "../img/woman_hero.png";
// import link
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[50rem] bg-no-repeat bg-cover bg-center py-24 bg-hero">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* pretitle */}
          <div className="font-semibold flex items-center uppercase">
            <span className="w-10 h-[2px] bg-red-500 mr-3"></span>New Trend
          </div>
          <h1 className="text-[4.375rem] leading-[1.1] uppercase font-light mb-4">
            Autumn Sale Stylish <br />
            <span className="font-semibold">Women</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Discover More
          </Link>
        </div>
        {/* image */}
        <div className="hidden lg:block">
          <img src={WomanImg} alt="woman-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
