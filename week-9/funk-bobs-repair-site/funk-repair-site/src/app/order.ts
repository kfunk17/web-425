
export class Order{
    selectedProducts: Array<object> = [];
    customWork: string;
    employeeResponse: string;
    customWorkCost: string;
    employeeApproved: boolean;
    customerFinalApproval: boolean;

    constructor(selectedProducts: Array<object>, customWork: string){
        this.selectedProducts = selectedProducts;
        this.customWork = customWork;
    }
}