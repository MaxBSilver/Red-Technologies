import { useQuery } from "@tanstack/react-query";
import { IOrder } from "../types/order.type";
import { http } from "./http";

export const getOrders = (): Promise<IOrder[]> => {
  return http.get(`/Orders`).then((res) => res?.data);
};

export const useOrders = (setOrders: any) => {
  return useQuery<IOrder[]>({
    queryKey: ["orders"],
    queryFn: () => getOrders(),
    onSuccess: (data) => setOrders(data),
  });
};
