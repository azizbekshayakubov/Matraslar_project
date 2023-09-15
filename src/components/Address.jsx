import { useFetch } from "../hook/useFetch";
import { Img } from "../assets/style/homeimage/Img";
import Homeabout from "../assets/style/homeimage/home-about.png";
import { Link } from "react-router-dom";

function Address() {
  // const urlAddress = "http://localhost:1212/api/address";
  // const { data: address, loader: loaderr } = useFetch(urlAddress);
  const { data: address, loader: loaderr } = useFetch(
    "http://localhost:1212/api/address",
  );

  console.log(address);
  return (
    <div className="container">
      <div className="home-about mt-10  justify-center gap-48" id="address">
        <h1 className="manzillarimiz">Manzillarimiz</h1>
        {loaderr && <h2>Loading...</h2>}
        {address &&
          address.map((item) => (
            <div
              className="adress-is flex items-center justify-around"
              key={item.id}
            >
              <div className="adres-top">
                <h3>{item && item.location}</h3>
                <p>{item && item.destination}</p>
                <Link
                  to={item ?? item.geolocation}
                  className="adres-location mt-4 flex items-center justify-center gap-2 rounded border border-slate-700 px-[50px] py-[10px]"
                >
                  <div className="adres-location">
                    <div className="flex justify-center rounded">
                      <Img /> <span>Geolokatsiya</span>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="adres-img">
                <img
                  src={Homeabout}
                  alt="addrss"
                  className="h-[230px] w-[420px]"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Address;
