import { useMemo, useState } from "react";
import { useOrders } from "../api/getOrders";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Toolbar } from "./Toolbar";
import { IOrder } from "../types/order.type";

export const OrderGrid = () => {
  // Component State
  const [orders, setOrders] = useState([]);
  // Hook for fetching orders
  useOrders(setOrders);

  // Column declarations for Datagrid
  const columns: GridColDef[] = useMemo(() => {
    const orderTypeFilters: string[] = [];
    orders.forEach((order: IOrder) => {
      if (!orderTypeFilters.includes(order.orderType)) {
        orderTypeFilters.push(order.orderType);
      }
    });
    return [
      { field: "orderId", headerName: "Order ID", flex: 1, maxWidth: 300 },
      {
        field: "orderType",
        headerName: "Order Type",
        type: "singleSelect",
        valueOptions: orderTypeFilters,
        flex: 1,
        maxWidth: 150,
      },
      {
        field: "customerName",
        headerName: "Customer Name",
        flex: 1,
        maxWidth: 150,
      },
      {
        field: "createdDate",
        headerName: "Created Date",
        flex: 1,
        maxWidth: 200,
      },
      {
        field: "createdByUserName",
        headerName: "Created By",
        flex: 1,
        maxWidth: 150,
      },
    ];
  }, []);

  return (
    <DataGrid
      rows={orders}
      columns={columns}
      getRowId={(row) => row.orderId}
      slots={{ toolbar: Toolbar }}
      checkboxSelection
      autoHeight
    />
  );
};