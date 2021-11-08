import axios from "axios";
import { useQuery } from "react-query";

const fetchCars = () => {
  return axios.get("http://localhost:4000/cars");
};
const fetchBikes = () => {
  return axios.get("http://localhost:4000/bikes");
};

const ParrallelQueries = () => {
  const { data: cars } = useQuery("super-cars", fetchCars);
  const { data: bikes } = useQuery("super-bikes", fetchBikes);
  return <div>parallel queries page</div>;
};

export default ParrallelQueries;
