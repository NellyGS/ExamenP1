import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Info3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info3',
  templateUrl: 'info3.html',
})
export class Info3Page {
  mascota = {};
  imgs = []

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mascota= this.navParams.get ('mascota');
    if (this.mascota.ad.hasOwnProperty ('images')){
      this.imgs = this.mascota.ad.images;
    }
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Info3Page');
  }

}
