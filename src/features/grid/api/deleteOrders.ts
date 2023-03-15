import { http } from "./http";
import { GridRowSelectionModel } from "@mui/x-data-grid";

export const deleteOrders = async (orderIds: GridRowSelectionModel) => {
  return http.post(`/Orders/Delete`, orderIds).then((res) => res?.data);
};