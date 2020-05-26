import { Injectable } from '@angular/core';

import { Subject} from 'rxjs';
import { app } from 'firebase';


@Injectable({
  providedIn: 'root'
})

export class LocationchangeService {
locchangedlat=new Subject<number>();
locchangedlng=new Subject<number>();
pos:Object;


  constructor() { }

 public setCurrentLocation() {

     navigator.geolocation.watchPosition(success);


         var thiss=this
          function success(pos) {



           thiss.locchangedlat.next(pos.coords.latitude)
           thiss.locchangedlng.next(pos.coords.longitude)
           console.log('uuuuuuuuuuuu')
           console.log('uzzzzzzzzzzz')
      }


  }

}



