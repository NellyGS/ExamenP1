import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Info2Page } from '../info2/info2';
import { InfoPage } from '../info/info';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the FavsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favs',
  templateUrl: 'favs.html',
})
export class FavsPage {
  items = [];
  infoPage = InfoPage

  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavoritosProvider) {
    this.items= this.fav.getFavoritos ();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavsPage');
  }
  verConsola (video){
    this.navCtrl.push(this.infoPage, {video:video});
  }
}
