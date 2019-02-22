import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Info2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info2',
  templateUrl: 'info2.html',
})
export class Info2Page {
  electronico  = {};
  imgs = []

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.electronico = this.navParams.get ('electronico');
    if (this.electronico.ad.hasOwnProperty ('images')){
      this.imgs = this.electronico.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Info2Page');
  }

}
