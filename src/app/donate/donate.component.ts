import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DonateService } from '../services/donate.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
  providers : [DonateService]
})
export class DonateComponent implements OnInit {

  constructor(private donateService: DonateService) { }

  ngOnInit() {

    this.resetForm();

  }

onSubmit(form: NgForm) {

if (form.value.$key == null) 
this.donateService.insertDonate(form.value);
 else 
this.donateService.updateDonate(form.value);

this.resetForm(form);



}

resetForm(form ?: NgForm) { 

  if (form != null) {
  form.reset();
  }
  this.donateService.selectedDonate = {
    $key: null,
    name: '',
    blood: '',
    city: '',
    email: '',

  };
}

onDelete(form: NgForm) {
  if (confirm('Estas seguro de Borrarte de la lista de Heroes ?') === true) {
    this.donateService.deleteDonate(form.value.$key);
    this.resetForm(form);
  }

}


}
