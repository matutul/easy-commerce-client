import { RouterProvider } from "react-router-dom";
import { router } from "./route";
import Poduct from "./context/product/Poduct";
function App() {
  return (
    <Poduct>
      <RouterProvider router={router} />
    </Poduct>
  );
}

export default App;
