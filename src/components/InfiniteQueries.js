import axios from "axios";
import { Fragment } from "react";
import { useInfiniteQuery } from "react-query";

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
};
const InfiniteQueries = () => {
  const { data, isLoading, isError, error, hasNextPage, fetchNextPage } =
    useInfiniteQuery("colors", fetchColors, {
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < 4) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      {data?.pages.map((group, index) => (
        <Fragment key={index}>
          {group.data.map((color) => (
            <h2 key={color.id}>
              {color.id}: {color.label}
            </h2>
          ))}
        </Fragment>
      ))}
      <div>
        <button disabled={!hasNextPage} onClick={fetchNextPage}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default InfiniteQueries;
