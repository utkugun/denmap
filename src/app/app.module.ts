import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { User } from 'firebase/app';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import{LocationchangeService} from'./locationchange.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    AgmCoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDX4WYVyeGxdmB0fY9rCOZKvTQ6crCQHh0'
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,CommonModule


  ],
  providers: [LocationchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
