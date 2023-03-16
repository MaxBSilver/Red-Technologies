import { useQuery } from "@tanstack/react-query";
import { IOrder } from "../types/order.type";
import { http } from "./http";

export const getOrders = (orderType: string): Promise<IOrder[]> => {
  if (orderType)
    return http
      .get(`/Orders/ByType?orderType=${orderType}`)
      .then((res) => res?.data);
  return http.get(`/Orders`).then((res) => res?.data);
};

interface IUseOrderProps {
  setOrders: (data: any) => void;
  orderType: string;
}
export const useOrders = ({ setOrders, orderType }: IUseOrderProps) => {
  return useQuery<IOrder[]>({
    queryKey: ["orders"],
    queryFn: () => getOrders(orderType),
    onSuccess: (data) => setOrders(data),
  });
};
