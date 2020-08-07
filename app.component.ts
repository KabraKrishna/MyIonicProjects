import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AngularFireList, AngularFireObject, AngularFireAction } from '@angular/fire/database';
import { Pickup } from './shared/data-modals/pickup.model';
import { Observable } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public userList = [
    {
      title: 'Home',
      url: '/folder/Home',
      icon: 'home'
    },
    {
      title: 'Pickup',
      url: 'pickup',
      icon: 'car'
    },
    {
      title: 'Orders',
      url: '/folder/Orders',
      icon: 'clipboard'
    },
    {
      title: 'Stores',
      url: 'location',
      icon: 'location'
    },
    {
      title: 'Profile',
      url: '/folder/Profile',
      icon: 'person-circle'
    },
    
    {
      title: 'Change Password',
      url: '/folder/Spam',
      icon: 'lock-open'
    }
  ];
  
  public adminList = [
    { //Able to view today's order with a checkbox if marked will get disabled
      title: 'Home',
      url: '/folder/home',
      icon: 'home'
    },
    {
      title: 'View Customer',
      url: 'pickup',
      icon: 'car'
    },
    {
      title: 'View Order',
      url: '/folder/Trash',
      icon: 'clipboard'
    },
    
    
    {
      title: 'Change Password',
      url: '/folder/Spam',
      icon: 'lock-open'
    }
  ];

  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
    //this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    //this.onItemSelected(this.userList[0]);
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.userList.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
      
    }
  }

  onItemSelected(selectedItem: {title: string,url: string,icon: string}){
    
      this.selectedIndex = this.userList.findIndex(page => page.title.toLocaleLowerCase() === selectedItem.title.toLocaleLowerCase());
      console.log("onItem called");
      this.router.navigate(['folder',selectedItem.title])
  }
}



// onClick(){
//   console.log("User: ",this.authService.getCurrentUser());
// }
// onLogin(){
// this.authService.login("+14449999010","abcd123").then(
//   res => console.log("Resolve: ",res),
//   err => console.log("Reject: ",err)
// )
// }

// onLogout(){
// this.authService.logout();
// }

// onAddPickup(){
// this.userService.addNewPick({
//   date: 'abcdef',
//   scheduleDate: (new Date()).toDateString(),
//   address: {
//     line1: 'sdjlfjlf',
//     city: 'ddddddvx',
//     state: 'df',
//     zip: 234555
//   }
// })
// }

// onGetPickupList(){
// this.pickupList = this.userService.getPickupList();
// }