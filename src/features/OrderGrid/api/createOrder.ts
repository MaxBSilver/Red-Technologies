import { http } from "./http";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

interface IFormValues {
  customerName: string;
  orderType: string;
  user: string;
};

export const createOrder = async (order: IFormValues) => {
  const { user } = order;
  const orderId = uuidv4();
  const createdDate = moment().format("MMMM Do YYYY, h:mm:ss a");
  const params = {
    ...order,
    createdByUserName: user,
    createdDate,
    orderId,
  };
  return http.post(`/Orders`, params).then((res) => res);
};
