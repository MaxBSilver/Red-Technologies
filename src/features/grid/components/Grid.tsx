import { useMemo, useState } from "react";
import { useOrders } from "../api/getOrders";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export const Grid = () => {
  // Component State
  const [orders, setOrders] = useState([]);

  // Hook for fetching orders
  useOrders(setOrders);

  // Column declarations for Datagrid
  const columns: GridColDef[] = useMemo(
    () => [
      { field: "orderId", headerName: "Order ID", flex: 1, maxWidth: 300 },
      { field: "orderType", headerName: "Order Type", flex: 1, maxWidth: 150 },
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
    ],
    []
  );

  return (
    <DataGrid
      rows={orders}
      columns={columns}
      getRowId={(row) => row.orderId}
      checkboxSelection
      autoHeight
    />
  );
};
