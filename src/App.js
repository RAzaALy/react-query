import Home from "./components/Home";
import Cars from "./components/Cars";
import RQCars from "./components/RQCars";
import { Route, Link, Routes } from "react-router-dom";

import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Cars">Cars</Link>
          </li>
          <li>
            <Link to="/rq-cars">RQ Super Cars</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/rq-cars" element={<RQCars />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
