import { Component, OnInit } from "@angular/core";
import { OrdersService } from "../orders.service";
import { Order } from "../order";

@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.css"],
  providers: [OrdersService]
})
export class ReviewComponent implements OnInit {
  passover: any;
  date = new Date().toISOString().slice(0, 10);
  constructor(ordersService: OrdersService) {
    
    this.passover = window["passover"]; 
    //Grab Order info from Window Object
  }

  ngOnInit() {}
  print() {
    window.print();
  }
}
