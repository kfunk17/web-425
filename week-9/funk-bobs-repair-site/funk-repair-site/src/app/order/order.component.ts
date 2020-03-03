import { Component, OnInit } from "@angular/core";
import { OrdersService } from "../orders.service";
import { Router } from '@angular/router';


@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"],
})
export class OrderComponent implements OnInit {
  stock: Array<object>;
  customOrder: string;
  subtotal: number = 0.00;
  selectedProducts: Array<object>;

  /**
   * Using the constructor, get the latest data from the
   * order service.
   * @param ordersService 
   */
  constructor(public ordersService: OrdersService, public router: Router) {
    this.stock = ordersService.getStock();
    this.selectedProducts = ordersService.selectedProducts;
    this.customOrder = ordersService.customOrder;
    this.subtotal = ordersService.subtotal;
    
  }

  ngOnInit() {}

  /**
   * Submits the order to the order service
   */
  submit() {
    let selectedProducts: Array<object> = [];
    this.stock.forEach(value => {
      if (value["inCart"] == true) {
        selectedProducts.push(value);
      }
    });
    this.ordersService.submitOrder(selectedProducts, this.customOrder);
    this.ordersService.setStatus(true);
    this.selectedProducts = selectedProducts;
    //Save Data to Order Service
    this.ordersService.customOrder = this.customOrder;
    this.ordersService.selectedProducts = selectedProducts;
    this.ordersService.subtotal = this.subtotal;
  }
  /**
   * Tallies the running subtotal for services
   */
  sum() {
    let runningTotal = 0;
    this.stock.forEach(value => {
      if (value["inCart"] == true) {
        runningTotal += Number(value["price"]);
      }
    });
    let formattedTotal: number = Number((runningTotal / 100).toFixed(2));
    if(runningTotal == 0){
      formattedTotal = 0.00;
    }
    this.subtotal = formattedTotal;
  }
  /**
   * Clears the fields
   */
  clear() {
    this.subtotal = 0.00;
    this.customOrder = "";
    this.stock.forEach(value => {
      value["inCart"] = false;
    });
  }
  /**
   * Allows a customer to reject a quote. Resets program
   */
  reject(){
    if(confirm("Are you sure?")){
      this.ordersService.setStatus(false);
      this.ordersService.currentOrder = undefined;
      this.ordersService.subtotal = undefined;
      this.ordersService.selectedProducts = undefined;
      this.ordersService.setEmployeeApproved(false);
    }
  }
  /**
   * Accepts a the quote and work order and then navigates and
   * pushes data to the review component so that it can be printed.
   */
  accept(){
    this.clear();
    let windowObject = window.open("/review");
    let passoverObject = {
      selectedProducts: this.ordersService.selectedProducts,
      customOrder: this.ordersService.customOrder,
      subtotal: this.ordersService.subtotal,
      labor: this.ordersService.labor,
      parts: this.ordersService.parts,
      customTotal: this.ordersService.customTotal,
      grandTotal: this.ordersService.grandTotal,
      responseTxt: this.ordersService.responseTxt
    };
    windowObject["passover"] = passoverObject;
    this.ordersService.setEmployeeApproved(false);
    this.ordersService.subtotal = 0.00;
    this.router.navigateByUrl("/home");
  }
}
