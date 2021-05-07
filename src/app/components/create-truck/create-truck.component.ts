import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TruckService } from 'src/app/services/truck.service';

@Component({
  selector: 'app-create-truck',
  templateUrl: './create-truck.component.html',
  styleUrls: ['./create-truck.component.css']
})
export class CreateTruckComponent implements OnInit {

  loginForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private _truckService: TruckService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      license: [null, [Validators.required]],
      supportedWeight: [null, Validators.required],
      available: [Validators.required]
    });
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
  }

  addTruck() {
    const data: any = {
      name: this.loginForm.value.license,
      value: this.loginForm.value.supportedWeight
    }
    this._truckService.addTruck(data);
 }


}
