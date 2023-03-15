import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.css']
})
export class DemoComponentComponent implements OnInit {
  isShowing: boolean = false
  countryName: String | undefined

  countries = [
    {code: 101, countryName: 'Australia'},
    {code: 102, countryName: 'Africa'},
    {code: 103, countryName: 'India'},
    {code: 104, countryName: 'Korea'},
    {code: 105, countryName: 'USA'}
  ]

  constructor() {
  }



  getCountryName(event: any){
    console.log(event.target.value)
    this.countryName = event.target.value
  }

  contentVisibility(){
    this.isShowing = !this.isShowing
 }
 

  ngOnInit(): void {
  }

}
