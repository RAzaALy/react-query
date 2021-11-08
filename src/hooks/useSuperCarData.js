import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchCar = (carId) => {
  return axios.get(`http://localhost:4000/cars/${carId}`);
};

export const useSuperCarData = (onSuccess, onError, carId) => {
  const queryClient = useQueryClient();
  return useQuery(["super-car", carId], () => fetchCar(carId), {
    onSuccess: onSuccess,
    onError: onError,
    initialData: () => {
      const car = queryClient.getQueryData('super-cars')?.data?.find((car) => car.id === parseInt(carId));
      if(car){
        return {
          data: car
        }
      }else {
        return undefined;
      }
    }
    // enabled: enabled,
    //transformation of data
    // select: (data) => {
    //   const superCarName = data.data.map((car) => car.model);
    //   return superCarName;
    // },
  });
};
