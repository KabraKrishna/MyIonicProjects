import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { HomeComponent } from '../components/user/home/home.component';
import { OrdersComponent } from '../components/user/orders/orders.component';
import { ProfileComponent } from '../components/user/profile/profile.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [
    FolderPage,
    HomeComponent,
    OrdersComponent,
    ProfileComponent
  ]
})
export class FolderPageModule {}
