import { Injectable } from '@angular/core';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() {
    console.log("Trigger");
  }

  currentOrder: Order;
  currentOrderExists: boolean;
  selectedProducts: Array<object>;
  customOrder: string;
  subtotal: number;

  labor: number;
  parts: number;
  customTotal: number;
  grandTotal: number;
  responseTxt: string;

  employeeApproved: boolean; //Flag for if an enployee has approved the order


  /**
   * The basic predefined services.
   */
  stock: Array<object> = [
    {text: "Password Reset: $39.99", price: "3999", id: "pswd", inCart: false },
    {text: "Spyware Removal: $99.99", price: "9999", id: "spyw", inCart: false },
    {text: "RAM Upgrade: $129.99", price: "12999", id: "ram", inCart: false },
    {text: "Software Installation: $49.99", price: "4999", id: "sftw", inCart: false },
    {text: "Tune-up: $89.99", price: "8999", id: "tune", inCart: false },
    {text: "Keyboard Cleaning: $45.00", price: "4500", id: "keyc", inCart: false },
    {text: "Disk Clean-up: $149.99", price: "14999", id: "disc", inCart: false }
  ]

  /**
   * Allows a customer to submit their initial work order
   *
   * @param {Array<object>} selectedProducts
   * @param {string} customWork
   * @memberof OrdersService
   */
  submitOrder(selectedProducts: Array<object>, customWork: string){
    this.currentOrder = new Order(selectedProducts, customWork);
    this.setStatus(true);
    console.log(this.currentOrder);  
  }
  /**
   * A getter for the stock variable
   *
   * @returns {Array<object>}
   * @memberof OrdersService
   */
  getStock(): Array<object>{
    return this.stock;
  }
  /**
   * A getter for the status variable
   *
   * @returns
   * @memberof OrdersService
   */
  getStatus(){
    if(this.currentOrderExists == undefined){
      return false;
    }
    return this.currentOrderExists;
  }
  /**
   * A setter for the status variable
   *
   * @param {boolean} value
   * @memberof OrdersService
   */
  setStatus(value: boolean){
    this.currentOrderExists = value;
  }
  /**
   * Sets the various variables associated with the
   * employee approval process.
   *
   * @param {number} labor
   * @param {number} parts
   * @param {number} customTotal
   * @param {number} grandTotal
   * @param {string} responseTxt
   * @memberof OrdersService
   */
  employeeApprovalInfo(
    labor: number,
    parts: number,
    customTotal: number,
    grandTotal: number,
    responseTxt: string
  ){
    this.labor = Number(labor) * 50;
    this.parts = parts;
    this.customTotal = customTotal;
    this.grandTotal = grandTotal;
    this.responseTxt = responseTxt;
  }
  /**
   * A setter for the Employee Approved flag
   *
   * @param {boolean} value
   * @memberof OrdersService
   */
  setEmployeeApproved(value: boolean){
    this.employeeApproved = value;
  }
  /**
   * A getter for the Amploye Approved flag
   *
   * @returns
   * @memberof OrdersService
   */
  getEmployeeApproved(){
    return this.employeeApproved;
  }


}
