import IOrder from "../types/order.type";
import { axios } from "./service";

class OrderService {
  getOrders() {
    return axios.get<Array<IOrder>>('/Orders');
  }

  getOrderByType(orderType: string) {
    return axios.get<IOrder>(`/Orders/ByType/${orderType}`);
  }

  createOrder(order: IOrder) {
    return axios.post<IOrder>('/Orders', order);
  }

  updateOrder(order: IOrder) {
    return axios.put<any>('/Orders', order);
  }

  deleteOrder(orders: string[]) {
    return axios.post<any>('/Orders/Delete', orders);
  }

}

const service = new OrderService();
export default service;
