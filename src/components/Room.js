import React from "react";
import { useSuperCarsData } from "../hooks/useSuperCarsData";

const Room = () => {
  const onSuccess = (data) => {
    console.log("On Success - perform side effects after data fetching", data);
  };
  const onError = (error) => {
    console.log(
      "on Error - perform side effects after uncountring error",
      error
    );
  };
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperCarsData(onSuccess, onError, false);
  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;
  return (
    <div>
      <button onClick={refetch}>Fetching Data</button>
      {/* {data?.map((car) => (
        <h2>{car}</h2>
      ))} */}
    </div>
  );
};

export default Room;
