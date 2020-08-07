import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { HomeComponent } from '../components/user/home/home.component';
import { OrdersComponent } from '../components/user/orders/orders.component';

const routes: Routes = [
  {
    path: '',
    component: FolderPage,
    children: [
      {
        path: 'Home',
        component: HomeComponent
      },
      {
        path: 'Orders',
        component: OrdersComponent
      },
      {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
