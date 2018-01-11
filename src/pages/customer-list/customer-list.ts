import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { CustomerListService } from '../../services/customer-list/customer-list.service';
import { Observable } from 'rxjs/Observable';
import { Item } from './../../models/item/item.model';

/**
 * Generated class for the CustomerListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-list',
  templateUrl: 'customer-list.html',
})
export class CustomerListPage {

customerList$: Observable<Item[]>;

constructor(public navCtrl: NavController, private customer: CustomerListService) {
  this.customerList$ = this.customer
  .getCustomerList()  //DB LIST
  .snapshotChanges()  //Key and Value
  .map(
    changes => {
      return changes.map(c => ({
        key: c.payload.key,
        ...c.payload.val(),
      }));
    });
  }
}