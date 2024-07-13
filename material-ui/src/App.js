

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";

// imports dark mode 






const router = createBrowserRouter(
  createRoutesFromElements(
    // هيكون ف كل التصميمات اللي مش هتتغير معانا
    // مثل navbar side & header
    <Route path="/" element={<Root />}>

        {/* index عشان ال page الرئيسية */}
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />


    </Route>
  )
);








/*
احنا عايزين icon => convert mode from dark to light || العكس
variable =>> use =>> useState()
*/


/*
    <CssBaseline />
      عشان نخلي ال bg => dark
*/


function App() {





  return (
    <>


        <RouterProvider router={router} />

    </>
  );
}

export default App;
