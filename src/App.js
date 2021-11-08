import Home from "./components/Home";
import Cars from "./components/Cars";
import RQCars from "./components/RQCars";
import { Route, Link, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Room from "./components/Room";
import RQCar from "./components/RQCar";
import ParrallelQueries from "./components/ParrallelQueries";
import DynamicParallel from "./components/DynamicParallel";
import DependentQueries from "./components/DependentQueries";
import PaginatedQueries from "./components/PaginatedQueries";
import InfiniteQueries from "./components/InfiniteQueries";

const queryClient = new QueryClient();

function App() {
  return (
    <>
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
              <Link to="/room">Room</Link>
            </li>
            <li>
              <Link to="/rq-cars">RQ Super Cars</Link>
            </li>
            <li>
              <Link to="/rq-parallel">RQ parallel Query</Link>
            </li>
            <li>
              <Link to="/rq-parallel">RQ Dynamic Query</Link>
            </li>
            <li>
              <Link to="/rq-dependent">RQ Dependent Query</Link>
            </li>
            <li>
              <Link to="/rq-paginated">RQ Paginated Query</Link>
            </li>
            <li>
              <Link to="/rq-infinite">RQ Infinite Query</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/rq-cars/:id" element={<RQCar />} />
          <Route path="/room" element={<Room />} />
          <Route path="/rq-cars" element={<RQCars />} />
          <Route path="/rq-parallel" element={<ParrallelQueries />} />
          <Route
            path="/rq-dynamic"
            element={<DynamicParallel carIds={[1, 3]} />}
          />
          <Route
            path="/rq-dependent"
            element={<DependentQueries email="john@yopmail.com" />}
          />
          <Route path="/rq-paginated" element={<PaginatedQueries />} />
          <Route path="/rq-infinite" element={<InfiniteQueries />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default App;
