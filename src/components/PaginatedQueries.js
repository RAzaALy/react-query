import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const fetchColors = (pageNo) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNo}`);
};
const PaginatedQueries = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery(["colors", page], () =>
    fetchColors(page),{
        //keep last successful fetched data
        keepPreviousData: true
    }
  );
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      {data?.data.map((color) => (
        <div key={color.id}>
          <h2>
            {color.id}: {color.label}
          </h2>
        </div>
      ))}
      <div>
        <button
          onClick={() => setPage((page) => page - 1)}
          disabled={page === 1}
        >
          Prev Page
        </button>
        <button
          onClick={() => setPage((page) => page + 1)}
          disabled={page === 4}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default PaginatedQueries;
