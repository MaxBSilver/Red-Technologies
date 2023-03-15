import { http } from "./http";
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

type FormValues = {
    customerName: string;
    orderType: string;
  };

export const createOrder = async (order: FormValues) => {
    const orderId = uuidv4();
    const createdDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    const params = {
        ...order,
        createdByUserName: 'Max',
        createdDate,
        orderId
    }
  return http.post(`/Orders`, params).then((res) => res?.data);
};