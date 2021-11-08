import React from "react";
import { useParams } from "react-router";
import { useSuperCarData } from "../hooks/useSuperCarData";

const RQCar = () => {
  const { id } = useParams();
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
    useSuperCarData(onSuccess, onError, id);
  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;
  return (
    <div>
      <h1>Super Car details</h1>
      <h2>
        Deatials of car {data.data?.model} and it have {data.data?.doors} doors.
      </h2>
    </div>
  );
};

export default RQCar;
