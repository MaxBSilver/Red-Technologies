import { IOrder } from "../types/order.type";

export const getOrderTypeFilters = (orders: IOrder[]) => {
  const orderTypeFilters: string[] = [];
  orders.forEach((order: IOrder) => {
    if (!orderTypeFilters.includes(order?.orderType)) {
      orderTypeFilters.push(order?.orderType);
    }
  });
  return orderTypeFilters;
};

export const buildColumnDefinitions = (filters: string[]) => {
  return [
    { field: "orderId", headerName: "Order ID", flex: 1, maxWidth: 300 },
    {
      field: "orderType",
      headerName: "Order Type",
      type: "singleSelect",
      valueOptions: filters,
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
};

export const orderTypes: { label: string; value: string }[] = [
  { label: "Standard", value: "Standard" },
  { label: "Sale Order", value: "SaleOrder" },
  { label: "Purchase Order", value: "PurchaseOrder" },
  { label: "Transfer Order", value: "TransferOrder" },
  { label: "Return Order", value: "ReturnOrder" },
];
