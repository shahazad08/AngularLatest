import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-democomponentone',
  templateUrl: './democomponentone.component.html',
  styleUrls: ['./democomponentone.component.css']
})
export class DemocomponentoneComponent implements OnInit {
  users:String[]=[];

  addUser(myUsername:any)
  {
    if(myUsername.value.length>3) {
      this.users.push(myUsername.value)
      myUsername.value=''
    }
    else{
     alert("Name should be more than 3")
      
    }
  }

  removeUser(i:any) {
    console.log(i);
     this.users.splice(i, 1)

    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
