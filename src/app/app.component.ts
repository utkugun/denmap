import { Component, OnInit, } from '@angular/core';
import {LocationchangeService} from './locationchange.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit{


  constructor(private locchange:LocationchangeService){


  }
  title = 'den9maps';
  lat :number= 40.730610;
  lng:number = -73.935242;
  zoom:number;
  coords:object;

  ngOnInit(){
    
    navigator.geolocation.getCurrentPosition(success,error);
    var thiss=this;
    function success(pos) {
      thiss.lat=pos.coords.latitude;
      thiss.lng=pos.coords.longitude;
      console.log('aaaaaaaaa');
    }

    function error(err) {
      console.log(`ERROR(${err.code}): ${err.message}`);
    }


  this.locchange.setCurrentLocation();
 this.locchange.locchangedlat.subscribe(newloclat=> {

  this.lat=newloclat
  console.log(newloclat)

});
 this.locchange.locchangedlng.subscribe(newloclng=> {

  this.lng=newloclng
  console.log(newloclng)
});



}

}







