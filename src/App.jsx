import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
//ModelTypes
import All from "./components/modelType/All";
import "./components/modelType/All";
import ModelA from "./components/modelType/ModelA";
import ModelB from "./components/modelType/ModelB";
import ModelC from "./components/modelType/ModelC";
import ModelD from "./components/modelType/ModelD";
import ModelE from "./components/modelType/ModelE";
import ModelF from "./components/modelType/ModelF";
import Buyurtmalar from "./components/AdminBlok/Buyurtmalar";
import Customers from "./components/AdminBlok/Customers";
import Toifalar from "./components/AdminBlok/Toifalar";
import LOcation from "./components/AdminBlok/Location";
import NotFound from "./pages/NotFound";
import Mahsulotlar from "./components/AdminBlok/Mahsulotlar";
import Texnology from "./components/AdminBlok/Texnology";
import { useState } from "react";

import { useFetch } from "./hook/useFetch";

// import Home from "./pages/home/Home";
// import Admin from "./pages/admin/Admin";
// import Login from "./pages/login/Login";
// import { useState } from "react";

// import "./App.css";

function App() {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || "",
  );
  console.log(token);

  const [complate, IsComplate] = useState(false);

  const url = "http://localhost:1212/api/products";
  const { data } = useFetch(url);
  // eslint-disable-next-line no-unused-vars
  const category = data && data.categories;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<All />} />
          <Route path="modelA" element={<ModelA />} />
          <Route path="modelB" element={<ModelB />} />
          <Route path="modelC" element={<ModelC />} />
          <Route path="modelD" element={<ModelD />} />
          <Route path="modelE" element={<ModelE />} />
          <Route path="modelF" element={<ModelF />} />
        </Route>
        token ?
        <Route
          path="/admin/*"
          element={token ? <Admin /> : <Login data={{ token, setToken }} />}
        >
          <Route
            path="buyrtmalar"
            index
            element={<Buyurtmalar token={token} setToken={setToken} />}
          />
          ,
          <Route path="Customers" element={<Customers />} />,
          <Route path="Location" element={<LOcation />} />,
          <Route path="Mahsulotlar" element={<Mahsulotlar />} />,
          <Route path="Texnology" element={<Texnology />} />,
          <Route
            path="Toifalar"
            element={<Toifalar complate={complate} IsComplate={IsComplate} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* , // return ( //{" "}
      <div className="App">
        // <RouterProvider router={routes} />
        //{" "}
      </div>
      // ); */}
    </>
  );
}

export default App;

//   return (
//     <>
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route
//             path="/admin/*"
//             element={token ? <Admin /> : <Login data={{ token, setToken }} />}
//           />
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;
