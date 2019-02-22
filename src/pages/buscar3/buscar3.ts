import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Info3Page } from '../info3/info3';

/**
 * Generated class for the Buscar3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar3',
  templateUrl: 'buscar3.html',
})
export class Buscar3Page {
  mascotas = [];
  items = [];
  info3Page = Info3Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mascotas = this.navParams.get ('mascotas')
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Buscar3Page');
  }

  getItems (ev){
    console.log (ev.target.value);

    this.items = this.mascotas.filter (mascota => {
      return mascota.ad.subject.toLowerCase (). includes (ev.target.value.toLowerCase ())  ;
    });
  }
  verMascota (mascota){
    this.navCtrl.push (this.info3Page, {mascota: mascota});
  }
}
