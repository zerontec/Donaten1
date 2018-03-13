import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Donate} from '../shared/donate.model';

@Injectable()
export class DonateService {
  donateList: AngularFireList<any>;

  selectedDonate: Donate = new Donate();

  constructor(private firebase: AngularFireDatabase) { }

getData() {

  this.donateList = this.firebase.list('donates');
  return this.donateList;
}

insertDonate(donate: Donate) {
this.donateList.push({

name: donate.name,
blood: donate.blood,
city: donate.city,
email: donate.email

});
}

updateDonate(don: Donate) {

this.donateList.update(don.$key, {
name: don.name,
blood: don.blood,
city: don.city,
email: don.email

}); }

deleteDonate($key: string) {
this.donateList.remove($key);

}

}
