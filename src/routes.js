import { useState, useEffect } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Editmember from "./pages/EditMember";
import AddMember from "./pages/CreateMember";
import ViewMember from "./pages/Viewmember";


export default function Router() {
    const [routes, setRoutes] = useState([]);
  useEffect(() => {
     
      setRoutes([
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/edit/:id",
          element: <Editmember/>,
        },
        {
          path: "/view/:id",
          element: <ViewMember view={true} />,
        },
        {
          path: "/add-member",
          element: <AddMember />,
        },
        
      ]);

   
  }, [ ]);

  return useRoutes(routes);
}
