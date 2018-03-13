import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {DonateComponent} from '../donate/donate.component';
import {DonatedetailComponent} from '../donatedetail/donatedetail.component';
import {DonateListComponent} from '../donate-list/donate-list.component';
import {AboutComponent} from '../about/about.component';
import {ContactComponent} from '../contact/contact.component';


export const routes: Routes = [
    { path: 'home',  component: HomeComponent },

    { path: 'donate',     component: DonateComponent },
    { path: 'donatedetail',     component: DonatedetailComponent },
    { path: 'donate-list',     component: DonateListComponent },
    { path: 'about',     component: AboutComponent },
    { path: 'contact',     component: ContactComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];
