import { useQuery } from "@tanstack/react-query";
import { IOrder } from "../types/order.type";
import { http } from "./http";

export const getOrders = (): Promise<IOrder[]> => {
  return http.get(`/Orders`);
};

export const useOrders = () => {
  return useQuery <IOrder[]>({
    queryKey: ["orders"],
    queryFn: getOrders
  });
};
