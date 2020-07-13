import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {LandingPage} from "../pages/landing/landing";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { HttpClientModule } from '@angular/common/http';
import {BeritaPage} from "../pages/berita/berita";
import {BeritaDetailPage} from "../pages/berita-detail/berita-detail";
import { ApiProvider } from '../providers/api/api';
import { FlickityModule } from 'ngx-flickity';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BeritaPage,
    BeritaDetailPage,
    LandingPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlickityModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BeritaPage,
    BeritaDetailPage,
    LandingPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ApiProvider
  ]
})
export class AppModule {}
