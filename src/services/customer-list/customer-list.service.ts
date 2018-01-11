import { Item } from './../../models/item/item.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CustomerListService {


	private customerListRef = this.db.list<Item>('customer-list');

	constructor(private db: AngularFireDatabase) { }

	getCustomerList() {
		return this.customerListRef;
	}

	addItem(item: Item) {
		return this.customerListRef.push(item);
	}

	updateItem(item: Item) {
		return this.customerListRef.update(item.key, item);
	}

	removeItem(item: Item) {
		return this.customerListRef.remove(item.key);
	}

}