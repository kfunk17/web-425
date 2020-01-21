
import { Injectable } from "@angular/core";
import { CanDeactivate, Router } from '@angular/router';
import { ProductComponent } from './product/product.component';

@Injectable ()
export class UnsavedChangesGuard implements CanDeactivate<ProductComponent> {

  canDeactivate(component: ProductComponent) {
    if (component.name.dirty) {
      return window.confirm("You currently have unsaved changes. Save now?");
    } else {
      return true;
    }
  }
}
