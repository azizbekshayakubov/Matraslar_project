import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import { useState } from "react";

import "./App.css";

function App() {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || "",
  );
  console.log(token);

  // const [complate, IsComplate] = useState(false);

  // const url = "http://localhost:1212/api/products";
  // const { data, loader, error } = useFetch(url);
  // const category = data && data.categories;
  //  console.log(category && category[0].join(' '));

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />}>
          <Route
            path="login"
            element={<Login token={token} setToken={setToken} />}
          />
          {/* <Route index element={<All />} />
          <Route path="modelA" element={<ModelA />} />
          <Route path="modelB" element={<ModelB />} />
          <Route path="modelC" element={<ModelC />} />
          <Route path="modelD" element={<ModelD />} />
          <Route path="modelE" element={<ModelE />} />
          <Route path="modelF" element={<ModelF />} /> */}
        </Route>
        <Route index element={<Home />} />
        token ?
        <Route path="admin" element={<Admin />}>
          {/* <Route
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
          /> */}
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>,
    ),
  );
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
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
