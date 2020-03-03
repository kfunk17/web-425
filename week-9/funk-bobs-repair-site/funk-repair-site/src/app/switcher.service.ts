import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SwitcherService {

  employeeView: boolean;
  customerView: boolean;
  router: any;

  constructor( router: Router) {
    this.customerView = true;
    this.employeeView = false;
    this.router = router;
  }
  
  /**
   * A getter for the customer view flag
   *
   * @returns
   * @memberof SwitcherService
   */
  getCustomerView(){
    return this.customerView;
  }

  /**
   * A getter for the employee view flag
   *
   * @returns
   * @memberof SwitcherService
   */
  getEmployeeView(){
    return this.employeeView;
  }

  /**
   * A setter for both the employee and customer flags
   *
   * @param {string} viewStringFlag
   * @memberof SwitcherService
   */
  public setView(viewStringFlag: string){
    if( viewStringFlag == 'cus'){
      this.employeeView = false;
      this.customerView = true;
      console.log("Set to customer");
      this.router.navigateByUrl('/orders');
    }else{
      this.employeeView = true;
      this.customerView = false;
      console.log("Set to employee");
      this.router.navigateByUrl("/pendingorders");
    }
  }



}
