import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Info3Page } from '../info3/info3';
import { Buscar3Page } from '../buscar3/buscar3';

/**
 * Generated class for the PerrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perros',
  templateUrl: 'perros.html',
})
export class PerrosPage {
  mascotas = [];
  info3 = Info3Page;
  searchPage = Buscar3Page;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get("/v1/klfst?&category=4020&offset=1&lim=29&lang=es").subscribe(data =>{
      if (data.hasOwnProperty('list_ads')){
        this.mascotas = data ['list_ads'];
      }
    }, error =>{
      console.log(JSON.stringify (error));
    }) 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerrosPage');
  }
  verMascota (mascota){
    this.navCtrl.push (this.info3, {mascota: mascota});
  }
  search () {
    this.navCtrl.push (this.searchPage, {mascotas: this.mascotas})
  }
}
