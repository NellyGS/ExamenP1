import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../info/info';
import { BuscarPage } from '../buscar/buscar';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  videos = [];
  info = InfoPage;
  buscaPage= BuscarPage;

  constructor(public navCtrl: NavController, public http: HttpClient, public fav: FavoritosProvider) {
    this.http.get("/v1/klfst?&category=5060&offset=1&lim=29&lang=es").subscribe(data =>{
      if (data.hasOwnProperty('list_ads')){
        this.videos = data ['list_ads'];
      }
    }, error =>{
      console.log(JSON.stringify (error));
    })
  }

  verVideo (video){
    this.navCtrl.push (this.info, {video: video});
  }
  buscar () {
    this.navCtrl.push (this.buscaPage, {videos: this.videos})
  }
  


}



