import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Info2Page } from '../info2/info2';

/**
 * Generated class for the Buscar2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar2',
  templateUrl: 'buscar2.html',
})
export class Buscar2Page {
  electronicos = [];
  items = [];
  info2Page = Info2Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.electronicos  = this.navParams.get ('electronicos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Buscar2Page');
  }

  getItems (ev){
    console.log (ev.target.value);

    this.items = this.electronicos.filter (electronico => {
      return electronico.ad.subject.toLowerCase (). includes (ev.target.value.toLowerCase ())  ;
    });
  }
  verElectronico (electronico){
    this.navCtrl.push (this.info2Page, {electronico: electronico})
  }
}
