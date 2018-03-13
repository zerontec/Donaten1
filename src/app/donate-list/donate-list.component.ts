import { Component, OnInit } from '@angular/core';
import {AngularFireList} from 'angularfire2/database';
import { DonateService} from '../services/donate.service';
import { Donate} from '../shared/donate.model';



@Component({
  selector: 'app-donate-list',
  templateUrl: './donate-list.component.html',
  styleUrls: ['./donate-list.component.scss']
})
export class DonateListComponent implements OnInit {
 
  donatelist: Donate[];

  constructor(private donateService: DonateService) { }

  // escucha los registro nuevos en base de dato
  // firebase lo convierte a json y lo empuja al array
  ngOnInit() {

    var x = this.donateService.getData();
    x.snapshotChanges().subscribe(item => {
      this.donatelist = [];
      item.forEach(element => {

        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.donatelist.push(y as Donate);
      });
    });
  }

  onItemClick(don: Donate ) {

    this.donateService.selectedDonate = Object.assign({}, don); //toma el obejto empleado en particular seguem emp 
  }


}
