/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useFetch } from "../hook/useFetch";

function Technologies() {
  // const url = "http://localhost:1212/api/technology";
  // const { data: tech, loader, error } = useFetch(url);
  const {
    data: tech,
    loader,
    error,
  } = useFetch("http://localhost:1212/api/technology");

  return (
    <div className="container">
      <div className="home-card rounded   ">
        <h1 className="home-card-title">Ishlab chiqarish texnologiyalari</h1>
        <div className="home-boxs fs-16 grid justify-items-center">
          {tech &&
            tech.map((item) => (
              <div className="home-box" key={item.id}>
                <div>
                  <h1 className="ml-4 text-center">{item.name}</h1>
                </div>

                <div className="iframe overflow-hidden rounded">
                  <iframe
                    className="ml-[60px]"
                    width="300"
                    height="300"
                    src={item.link}
                    title="YouTube video player"
                    // eslint-disable-next-line react/no-unknown-property
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
