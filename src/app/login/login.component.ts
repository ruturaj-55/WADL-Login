import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: any[] = []

  addUser(uname:any) {
    var data = {"uname" : uname}
    this.users.push(data)
  }

  removeUser(user:any){
    var data = {"uname":user.uname}
    this.users.forEach((item,index) => {if(item === user) this.users.splice(index,1);});   
  }

  constructor() { }

  ngOnInit(): void {
  }

}
