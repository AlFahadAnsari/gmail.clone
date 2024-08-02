import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import SideBar from "./components/SideBar";
import Inbox from "./pages/Inbox";
import Body from "./components/Body";
import Mail from "./pages/Mail";
import SendMail from "./components/SendMail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path:"/mail/:id",
        element:<Mail/>
      },
    ],
  },
]);

function App() {
  return (
    <div className="bg-[#f6f8fc] h-screen w-screen overflow-auto ">
      <Navbar />
      <RouterProvider router={router}/>
      <div className="absolute w-[30%] bottom-0 right-20 z-10 ">
        <SendMail/>
      </div>
    </div>
  );
}

export default App;
