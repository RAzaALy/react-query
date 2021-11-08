import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSuperCarsData, useAddSuperCarData } from "../hooks/useSuperCarsData";
// import { useQuery } from "react-query";
// const fetchCars = () => {
//   return axios.get("http://localhost:4000/cars");
// };

const RQCars = () => {
  const [model, setModel] = useState("");
  const [doors, setDoors] = useState("");
  const onSuccess = (data) => {
    console.log("On Success - perform side effects after data fetching", data);
  };
  const onError = (error) => {
    console.log(
      "on Error - perform side effects after uncountring error",
      error
    );
  };
  //by custom hook
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperCarsData(onSuccess, onError);
    const {mutate: addCar} = useAddSuperCarData();
    const AddCar = () => {
      // console.log({model, doors})
      const car = {model, doors};
      addCar(car)
    }

  // const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
  //   "super-cars",
  //   fetchCars,
  //   {
  //     // cacheTime: 5000, default value
  //     // staleTime: 30000 default value is 0
  //     // refetchOnMount: true,
  //     // refetchOnWindowFocus: true,
  //     // refetchInterval: 2000,
  //     // refetchIntervalInBackground: true,
  //     // enabled: false,
  //     onSuccess: onSuccess,
  //     onError: onError,
  //     //transformation of data
  //     select: (data) => {
  //       const superCarName = data.data.map((car) => car.model);
  //       return superCarName;
  //     },
  //   }
  // );
  // console.log({isLoading, isFetching});
  if (isLoading || isFetching) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;
  return (
    <>
      <h1>RQ super Cars Page</h1>
      <div>
        <input
          type="text"
          placeholder="Enter car name"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <input
          type="text"
          value={doors}
          placeholder="Enter car doors"
          onChange={(e) => setDoors(e.target.value)}
        />
        <button onClick={AddCar}>Add Car</button>
      </div>
    
      {data?.data.map((car) => (
        <h2 key={car.id}>
          <Link to={`/rq-cars/${car.id}`}>{car.model}</Link>
        </h2>
      ))}
        <button onClick={refetch}>Fetch Cars</button>
      {/* {data.map((car) => (
        <h1 key={car}>{car}</h1>
      ))} */}
    </>
  );
};

export default RQCars;
