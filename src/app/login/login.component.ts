import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{HttpClient} from '@angular/common/http'
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment.prod';

const backendurl = environment.backendurl;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  login(Form:NgForm)
  {
    if(Form.valid)
    {
      this.http.post(backendurl+'/users/login',Form.value).subscribe((resfromserver)=>{
        if(resfromserver["message"]=="login success")
        {
          alert("login success");
          localStorage.setItem('token',resfromserver["signedtoken"]);
            localStorage.setItem('email',resfromserver["email"]);
            this.router.navigate(['/home']);
        }
        else if(resfromserver["message"]=="pwd not match")
        {
          alert("pwd not match");

        }
        else
        {
          alert("luser not found");
        }
      })
    }
    else
    {
      alert("all fields required");
    }
  }

}
