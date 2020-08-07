import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PickupPage } from '../pickup/pickup.page';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit, OnChanges, OnDestroy {

  public folder: string = "Default";
  public userName: string = 'Customer';
  public customView = {
    mode: 'Home'
  }

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalController: ModalController) {

    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.folder){
      this.router.navigate([this.folder],{relativeTo: this.activatedRoute}).then(
        res => console.log('Resolved: ',res),
        err => console.log("Error: ",err)
      )
    }
   
  }

  ngOnDestroy(): void {
    console.log("On Destroy called..!");
  }


  ngOnInit() {
    console.log("On init called..!");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes: ', changes);

    // this.customView.mode = this.folder;
    // if (this.router.getCurrentNavigation().extras.state) {
    //   this.folder = this.router.getCurrentNavigation().extras.state.itemId;
    // } else {
    //   console.log("Unable to find state...!");
    // }
    // //


  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PickupPage
    });
    return await modal.present();
  }

}
