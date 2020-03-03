import { Component, OnInit } from '@angular/core';
import { OrdersService } from "../orders.service";
import { SwitcherService } from '../switcher.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {


  customOrder: string;
  subtotal: number;
  labor: number = 0;
  parts: number = 0;
  selectedProducts: Array<object>;
  customTotal: number = 0;
  grandTotal: number;
  responseTxt: string;
  
  
  
  constructor(public ordersService: OrdersService, public switchService: SwitcherService) {
    this.selectedProducts = ordersService.selectedProducts;
    this.customOrder = ordersService.customOrder;
    this.subtotal = ordersService.subtotal;
    if(this.subtotal == 0.00 || this.subtotal == undefined){
      this.grandTotal = 0.00;
    }else{
      this.grandTotal = Number( ( Number( this.subtotal)  ).toFixed(2) );
    }
  }

  ngOnInit() {
  }

  /**
   * A Getter for the total value, does some calculations
   * and type casting.
   */
  getTotal(){
    let total: number = 0;
    let laborCost = (Number(this.labor) * 50);
    total = laborCost + Number(this.parts);
    this.customTotal = Number(total.toFixed(2));
    this.grandTotal = Number((total + Number(this.subtotal)).toFixed(2));

  }
  /**
   * Allows an employee to reject a work order.
   * Resets Variables.
   */
  reject(){
    if(confirm("Are you sure?")){
      this.ordersService.setStatus(false);
      this.ordersService.currentOrder = undefined;
      this.ordersService.subtotal = undefined;
      this.ordersService.selectedProducts = undefined;
    }
  }
  /**
   * Allows and employee to accept a work order and 
   * give quoutes for labor and parts which are saved
   * to the OrdersSerivce.
   */
  submit(){
    if(confirm("Are you sure?")){
      this.ordersService.employeeApprovalInfo(
        this.labor,
        this.parts,
        this.customTotal,
        this.grandTotal,
        this.responseTxt
      );

      this.ordersService.setEmployeeApproved(true);
      this.ordersService.setStatus(false);


    }
  }

}
