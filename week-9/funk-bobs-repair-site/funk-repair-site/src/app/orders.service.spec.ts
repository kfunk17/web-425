import { TestBed, inject } from "@angular/core/testing";

import { OrdersService } from "./orders.service";
import { Order } from './order';

describe("OrdersService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdersService]
    });
  });

  it("should be created", inject([OrdersService], (service: OrdersService) => {
    expect(service).toBeTruthy();
  }));

  it("#getStatus should return false if undefined", inject([OrdersService], (service: OrdersService) => {
    service.currentOrder = undefined;
    expect(service.getStatus()).toBe(false);
  }));

  it("currentOrderExists should be true after submitOrder() is ran", inject(
    [OrdersService],
    (service: OrdersService) => {
      let testArray: Array<object> = [{}, {}];
      let testString: string = "Test String";
      service.submitOrder(testArray, testString);
      expect(service.currentOrderExists).toBeTruthy();
    }
  ));

  it("getStatus should return currentOrderExists if not undefined", inject(
    [OrdersService],
    (service: OrdersService) => {
      let copy = service.currentOrderExists;
      service.currentOrderExists = true;
      expect(service.getStatus()).toBe(service.currentOrderExists);
    }
  ));

  it("currentOrder should contain an Order Object after submitOrder() is ran", inject(
    [OrdersService],
    (service: OrdersService) => {
      let testArray: Array<object> = [{}, {}];
      let testString: string = "Test String";
      service.submitOrder(testArray, testString);
      expect(service.currentOrder.constructor.name == "Order");
    }
  ));

  it("getEmployeeApproved() should return employeeApproved", inject(
    [OrdersService],
    (service: OrdersService) => {
      expect(service.getEmployeeApproved()).toEqual(service.employeeApproved);
    }
  ));

});
