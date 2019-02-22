import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the FavoritosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritosProvider {
  favoritos = []

  constructor(public  toastCtrl: ToastController) {
    console.log('Hello FavoritosProvider Provider');
  }
  remover(video){
    let index = this.favoritos.findIndex (item => { 
      return item.ad.subject == video.ad.subject && item.ad.user.account.name == video.ad.user.account.name
    });

    if (index > -1){
      this.favoritos.slice(index, 1);

      const toast = this.toastCtrl.create({
        message: 'Consola eliminada de favoritos',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  }
  existe(video){
    return this.favoritos.some(item => {
      return item.ad.subject == video.ad.subject && item.ad.user.account.name == video.ad.user.account.name
    });
  }



  addFavoritos (video) {
    this.favoritos.push (video);

    const toast = this.toastCtrl.create({
      message: 'Consola agregada a favoritos',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  getFavoritos(){
    return this.favoritos;
  };

}
