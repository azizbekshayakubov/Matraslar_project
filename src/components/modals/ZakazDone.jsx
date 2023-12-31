/* eslint-disable react/prop-types */
import "./_Modal.scss";

import Zakaz from "../../assets/style/homeimage/Zakaz.png";
import { CrossBtn } from "../../assets/style/imgs/icons/icons";

const ZakazDone = ({ setOpenZakazDone }) => {
  const closeSuccesModal = () => {
    setOpenZakazDone(false);
  };

  return (
    <div className="fixed left-[30%] top-1 z-50 shadow-2xl shadow-black">
      <div className=" done-zakaz relative mx-auto bg-[#F6FBFF]">
        <div
          className=" absolute right-0 top-0"
          onClick={() => closeSuccesModal()}
        >
          <CrossBtn />
        </div>
        <div className="zakaz-title my-3 text-center">
          <h1>Arizangiz muvaffaqiyatli yuborildi</h1>
        </div>
        <div className="flex justify-center">
          <img src={Zakaz} alt="" />
        </div>
        <div className="flex justify-center">
          <div>
            <p className="zakaz-p">
              Tez orada operatorlarimiz siz bilan bog’lanishadi
            </p>
            <div className="my-3 flex justify-center">
              <button className="zakaz-btn" onClick={() => closeSuccesModal()}>
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZakazDone;
