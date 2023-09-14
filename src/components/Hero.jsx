import { ArrowRight } from "../assets/style/imgs/icons/icons";
import bed from "../assets/style/imgs/bed.png";

import "./_Response.scss";

function Hero() {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzU2MTUwfQ.TSJs3Yomp3woiYfoUUwK2azBR0tBBE-Rwtaco33pfP0",
  );

  return (
    <div className="w-full overflow-auto">
      <div className="flex">
        <div className="hero container flex  w-full items-center">
          <div className="hero__left">
            <div className="hero__title fs-18 md:text-5xl">
              Kechalari sokin dam oling
            </div>
            <div className="hero__right-two">
              <img src={bed} alt="bed" />
            </div>
            <a href="#katalog" className="flex-categ">
              <div className="categ__btn ">
                <div>
                  <ArrowRight />
                </div>
                <span className=" ml-7">Kategoriyalar</span>
              </div>
            </a>
            <div className=" flex-line ">
              <div className="line ">{}</div>
            </div>
          </div>
          <div className="hero__right">
            <img src={bed} alt="bed" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
