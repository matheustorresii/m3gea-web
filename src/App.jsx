import { RouterProvider } from "react-router-dom";
import { router } from "./common/navigation/router";

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
