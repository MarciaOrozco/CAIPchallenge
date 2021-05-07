import { Component, OnInit } from '@angular/core';
import { ParcelService } from 'src/app/services/parcel.service';
import { TruckService } from 'src/app/services/truck.service';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.css']
})
export class TrucksComponent implements OnInit {

  trucks: any[] = []
  parcels: any[] = []

  constructor(private _truckService: TruckService, private _parcelService: ParcelService) { }

  ngOnInit(): void {
    this.getTrucks()
    this.getParcels()
  }

  getTrucks(){
    this._truckService.getTrucks().subscribe(
      (res:Array<any>) => {        
        this.trucks = res;
        console.log(this.trucks);
      })   
  }

  getParcels(){
    this._parcelService.getParcels().subscribe(
      (res:Array<any>) => {        
        this.parcels = res;
        console.log(this.parcels);
      })   
  }

}
