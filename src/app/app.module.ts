import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http'
import { InfoPage } from '../pages/info/info';
import { TabsPage } from '../pages/tabs/tabs';
import { ElctroPage } from '../pages/elctro/elctro';
import { Info2Page } from '../pages/info2/info2';
import { PerrosPage } from '../pages/perros/perros';
import { Info3Page } from '../pages/info3/info3';
import { BuscarPage } from '../pages/buscar/buscar';
import { Buscar2Page } from '../pages/buscar2/buscar2';
import { Buscar3Page } from '../pages/buscar3/buscar3';
import { FavsPage } from '../pages/favs/favs';
import { FavoritosProvider } from '../providers/favoritos/favoritos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfoPage,
    TabsPage,
    ElctroPage,
    Info2Page,
    PerrosPage,
    Info3Page,
    BuscarPage,
    Buscar2Page,
    Buscar3Page,
    FavsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InfoPage,
    TabsPage,
    ElctroPage,
    Info2Page,
    Info3Page,
    PerrosPage,
    BuscarPage,
    Buscar2Page,
    Buscar3Page,
    FavsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritosProvider
  ]
})
export class AppModule {}
