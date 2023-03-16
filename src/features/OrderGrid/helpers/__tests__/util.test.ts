import { getOrderTypeFilters, buildColumnDefinitions } from "../util";
import { orders, columns } from "./data.json";

describe("util", () => {
    
  describe("getOrderTypeFilters", () => {
    test("Should create a string array of order types", () => {
      const expectedTypes: string[] = [
        "Standard",
        "TransferOrder",
        "SaleOrder",
        "ReturnOrder",
        "PurchaseOrder",
      ];
      const types = getOrderTypeFilters(orders);
      // There are 5 unique order types in the data
      expect(types).toHaveLength(5);
      expect(types).toEqual(expectedTypes);
    });
    test("Should return an empty array if no orders are present", () => {
      const types = getOrderTypeFilters([]);
      expect(types).toHaveLength(0);
    });
  });

  describe("buildColumnDefinitions", () => {
    const filters = [
      "Standard",
      "TransferOrder",
      "SaleOrder",
      "ReturnOrder",
      "PurchaseOrder",
    ];
    const columnDefinitions = buildColumnDefinitions(filters);
    console.log(columnDefinitions);
    expect(columnDefinitions).toEqual(columns);
  });
});
