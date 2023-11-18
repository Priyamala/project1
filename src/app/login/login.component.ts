import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
name:string="";
pwd:string="";
msg:string="";

constructor(private router:Router){

}

redirecttologin(){
this.router.navigate(['header']);
}

checklogin(){
  if(this.name=="priya"&& this.pwd=="priya"){
    this.msg="Login successfully";
  }
  else{
    this.msg="enter the crt values";
  }
}


}