import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from './../../models/item/item.model';

import { CustomerListService } from './../../services/customer-list/customer-list.service';
import { ToastService } from './../../services/toast/toast.service';

/**
 * Generated class for the AddCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-customer',
  templateUrl: 'add-customer.html',
})
export class AddCustomerPage {
	item: Item = {
		cust_name: '',
		cust_surname: '',
		cust_phone_mobile: '',
		cust_email: '',
		cust_job: '',
		cust_no_children: undefined,
		cust_address: '',
	};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private customer: CustomerListService,
    private toast: ToastService,
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCustomerPage');
  }


  addItem(item: Item) {
  	this.customer.addItem(item).then(ref => {
      this.toast.show("Müşteri kaydı gerçekleştirildi.");
      // THIS is for 1Parent-1Child Depth Page Hierarchies
      this.navCtrl.setRoot('HomePage', { key: ref.key });
      this.navCtrl.push('CustomerListPage');
  	})
  }
}
