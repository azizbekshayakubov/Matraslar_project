/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";

import Social from "../assets/style/homeimage/social.png";
import { Arrow } from "../assets/style/homeimage/Img";

import "../index.css";

const Footer = () => {
  const [vizitka, setVizitka] = useState(false);
  const [telNumber, setTelNumber] = useState("");
  const [telValid, setTelValid] = useState(false);

  const telRgx = /^[0-9]{9}$/;

  useEffect(() => {
    const rusult = telRgx.test(telNumber);
    setTelValid(rusult);
    console.log(telValid, telNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [telNumber]);

  const handleVizitka = (e) => {
    e.preventDefault();
    setVizitka(telValid ? true : false);
    setTimeout(() => {
      setVizitka(false);
    }, 3000);
  };
  const handleArrowClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="footer mt-14 pt-8">
        <div className="container mx-auto p-4 px-8 ">
          {!vizitka && (
            <div className="footers ">
              <div>
                <h1>Sizni qiziqtirdimi?</h1>
                <p className="subtitle">
                  Raqamingizni qoldiring, biz sizga yana qo'ng'iroq qilamiz
                </p>
              </div>
              <div>
                <form
                  onSubmit={handleVizitka}
                  className=" foter flex items-center justify-between gap-5 "
                >
                  <div className=" flex items-center justify-center  gap-2 rounded-md bg-white ">
                    <span className="tel__code pl-3">+998</span>
                    <div className=" h-[12px] w-[1px] bg-slate-600"></div>
                    <input
                      className="rounded p-3  outline-none"
                      onChange={(e) => setTelNumber(e.target.value)}
                      type="tel"
                      name="tel"
                      id=""
                      placeholder="Raqamingizni yozing"
                    />
                  </div>
                  <button>Yuborish</button>
                </form>
                {!telValid && telNumber && (
                  <p className="text-xs text-red-600">Must be 9 numbrs</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container  ">
        <div className="footer-center my-5 flex justify-between ">
          <div>
            <ul className="flex items-center gap-20">
              <a href="#aboutUs" className="footer__nav">
                Biz haqimizda
              </a>
              <a href="#katalog" className="footer__nav">
                Katalog
              </a>
              <a href="#aksiya" className="footer__nav">
                Aksiya
              </a>
              <a href="#address" className="footer__nav">
                Manzilimiz
              </a>
            </ul>
          </div>
          <div className="social">
            <img src={Social} alt="" />
          </div>
        </div>
        <hr />
        <div className="footer-bottom flex justify-between  p-4">
          <div className="foter-botom">
            <p className="footer-bottom-title">
              © 2021 Dream Cloud. Barcha huquqlar himoyalangan.
            </p>
          </div>
          <div className="foter-arrow">
            <button className="Arrow" onClick={handleArrowClick}>
              <Arrow />
            </button>
          </div>
          <div className="foter-vizitka"></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
