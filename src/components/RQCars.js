import axios from "axios";
import { useQuery } from "react-query";

const fetchCars = () => {
    return axios.get("http://localhost:4000/cars");

}

const RQCars = () => {
  const { isLoading, data } = useQuery("super-cars",  });
  if (isLoading) return "Loading...";
  return (
    <>
      {data?.data.map((car) => (
        <h2 key={car.id}>{car.model}</h2>
      ))}
    </>
  );
};

export default RQCars;
