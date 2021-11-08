import { useQuery, useMutation, useQueryClient } from "react-query";
// import axios from "axios";
import { request } from "../utils/axios-utils";
const fetchCars = () => {
  return request({ url: "/cars" });
};
const addSuperCar = (car) => {
  return request({ url: "/cars", method: "post", data: car });
};

export const useSuperCarsData = (onSuccess, onError) => {
  return useQuery("super-cars", fetchCars, {
    onSuccess: onSuccess,
    onError: onError,
    // enabled: enabled,
    //transformation of data
    // select: (data) => {
    //   const superCarName = data.data.map((car) => car.model);
    //   return superCarName;
    // },
  });
};
export const useAddSuperCarData = () => {
  const queryClient = useQueryClient();

  return useMutation(addSuperCar, {
    // onSuccess: (data) => {
    //   //additional network request
    //   // queryClient.invalidateQueries("super-cars");
    //   //save from additional network request of getcars
    //   queryClient.setQueryData("super-cars", (oldQueryData) => {
    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData.data, data.data],
    //     };
    //   });
    // },
    //Optimistic Updates

    onMutate: async (newCar) => {
      await queryClient.cancelQueries("super-cars");
      const previousCarData = queryClient.getQueryData("super-cars");
      queryClient.setQueryData("super-cars", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data,
            { id: oldQueryData?.data?.length + 1, ...newCar },
          ],
        };
      });
      return { previousCarData };
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData("super-cars", context.previousCarData);
    },
    onSettled: () => {
      queryClient.invalidateQueries("super-cars");
    },
  });
};
