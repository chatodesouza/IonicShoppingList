import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { CustomerListService } from '../../services/customer-list/customer-list.service';
import { Observable } from 'rxjs/Observable';
import { Item } from './../../models/item/item.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

constructor(public navCtrl: NavController) {
  
  }

}