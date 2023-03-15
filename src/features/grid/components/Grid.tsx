import { useOrders } from "../api/getOrders";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export const Grid = () => {
  const ordersQuery = useOrders();
  const { data } = ordersQuery;
  const columns: GridColDef[] = [
    { field: "orderId", headerName: "Order ID"},
    { field: "orderType", headerName: "Order Type" },
    { field: "customerName", headerName: "Customer Name" },
    { field: "createdDate", headerName: "Created Date" },
    { field: "createdByUserName", headerName: "Created By" },
  ];
  return (
    <DataGrid
      rows={data || []}
      columns={columns}
      getRowId={(row) => row.orderId}
      checkboxSelection
      autoHeight	
    />
  );
};
