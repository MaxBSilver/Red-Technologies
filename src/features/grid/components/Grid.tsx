import { useOrders } from "../api/getOrders";

export const Grid = () => {
  const ordersQuery = useOrders();
  const { data } = ordersQuery;
  console.log(data);

  return <div></div>;
};
