import "antd/dist/antd.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ItemPage from "./pages/ItemPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/items" element={<ItemPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
