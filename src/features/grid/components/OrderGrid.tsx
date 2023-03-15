import { useMemo, useState } from "react";
import { useOrders } from "../api/getOrders";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { OrderToolbar } from "./Toolbar";
import { IOrder } from "../types/order.type";
import { deleteOrders } from "../api/deleteOrders";

export const OrderGrid = () => {
  // Component State
  const [orders, setOrders] = useState([]);
  const [selectedOrders, setselectedOrders] = useState<GridRowSelectionModel>(
    []
  );

  // Hook for fetching orders
  const getOrders = useOrders(setOrders);
  // Column declarations for Datagrid
  const columns: GridColDef[] = useMemo(() => {
    // Create orderType dropdown filter options
    const orderTypeFilters: string[] = [];
    orders.forEach((order: IOrder) => {
      if (!orderTypeFilters.includes(order?.orderType)) {
        orderTypeFilters.push(order?.orderType);
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
  }, [orders]);

  const handleDelete =  async () => {
    await deleteOrders(selectedOrders);
    getOrders.refetch();
  }
  

  return (
    <DataGrid
      rows={orders}
      columns={columns}
      getRowId={(row) => row.orderId}
      slots={{ toolbar: OrderToolbar }}
      slotProps={{ toolbar: { handleDelete } }}
      checkboxSelection
      autoHeight
      onRowSelectionModelChange={(row) => {
        setselectedOrders(row);
      }}
      rowSelectionModel={selectedOrders}
    />
  );
};
