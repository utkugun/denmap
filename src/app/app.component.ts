import { Component, OnInit, DoBootstrap, } from '@angular/core';
import {LocationchangeService} from './locationchange.service'
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';

import { Input} from "@angular/core";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit{


  constructor(private locchange:LocationchangeService,public auth:AngularFireAuth, public db: AngularFireDatabase){



     }
  title = 'den9maps';
  lat :number= 40.730610;
  lng:number = -73.935242;
  zoom:number;
  coords:object;
  userid:User;
   dbref:firebase.database.Database






  login() {
    var provider=new auth.GoogleAuthProvider()
    provider.addScope('email')
    this.auth.signInWithRedirect(provider)

  }






         logout() {
        this.auth.signOut();
        }






       ngOnInit(){






       navigator.geolocation.getCurrentPosition(success,error);
       var thiss=this;
        function success(pos) {
        thiss.lat=pos.coords.latitude;
        thiss.lng=pos.coords.longitude;


        thiss.db.object('den9map/users/'+thiss.userid).set({lat:thiss.lat})
        thiss.db.object('den9map/users/'+thiss.userid).set({lng:thiss.lng})

        console.log('den9map/users/'+thiss.userid);
        }
        function error(err) {
        console.log(`ERROR(${err.code}): ${err.message}`);
        }

        this.locchange.locchangedlat.subscribe(newloclat=> {

          this.lat=newloclat
           console.log(newloclat)


         });

         this.locchange.setCurrentLocation();
         this.locchange.locchangedlng.subscribe(newloclng=> {

         this.lat=newloclng
         console.log(newloclng)


         });this.locchange.locchangedlat.subscribe(newloclat=> {

          this.lat=newloclat
           console.log(newloclat)


         });


         this.locchange.locchangedlng.subscribe(newloclng=> {

         this.lat=newloclng
         console.log(newloclng)


         });







         }




    }









