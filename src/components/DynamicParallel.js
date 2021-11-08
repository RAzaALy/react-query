import axios from "axios";
import { useQueries } from "react-query";

const fetchCar = (carId) => {
  return axios.get(`http://localhost:4000/cars/${carId}`);
};

const DynamicParallel = ({ carIds }) => {
  const queryResults = useQueries(
    carIds.map((id) => {
      return {
        queryKey: ["super-car", id],
        queryFn: () => fetchCar(id),
      };
    })
  );
  console.log({queryResults}, "results");
  return <div>{JSON.stringify(queryResults)}</div>;
};

export default DynamicParallel;
