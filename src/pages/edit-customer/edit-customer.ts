import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from './../../models/item/item.model';

import { CustomerListService } from './../../services/customer-list/customer-list.service';
import { ToastService } from './../../services/toast/toast.service';

/**
 * Generated class for the EditCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-customer',
  templateUrl: 'edit-customer.html',
})
export class EditCustomerPage {
	item: Item

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private customer: CustomerListService,
    private toast: ToastService,
    ) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  updateItem(item: Item) {
  	this.customer.updateItem(item).then(() => {
      this.toast.show('Müşteri bilgileri güncellendi.');
  		this.navCtrl.setRoot('HomePage');
      this.navCtrl.push('CustomerListPage');
  	});
  }

  removeItem(item: Item) {
    this.customer.removeItem(item).then(() => {
      this.toast.show('Müşteri bilgileri silindi.');
      this.navCtrl.setRoot('HomePage');
      this.navCtrl.push('CustomerListPage');
    });
  }

}