import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Info2Page } from '../info2/info2';
import { Buscar2Page } from '../buscar2/buscar2';

/**
 * Generated class for the ElctroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-elctro',
  templateUrl: 'elctro.html',
})
export class ElctroPage {
  electronicos = [];
  info2 =Info2Page;
  searchPage= Buscar2Page

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get("/v1/klfst?&category=5020&offset=1&lim=29&lang=es").subscribe(data =>{
      if (data.hasOwnProperty('list_ads')){
        this.electronicos = data ['list_ads'];
      }
    }, error =>{
      console.log(JSON.stringify (error));
    })
  }

  verElectronico (electronico){
    this.navCtrl.push (this.info2, {electronico: electronico});

  }
  search () {
    this.navCtrl.push (this.searchPage, {electronicos: this.electronicos})
  }

}




