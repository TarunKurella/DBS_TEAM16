import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{HttpClient} from '@angular/common/http'
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment.prod';

const backendurl = environment.backendurl;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  isenabled:boolean=false;
  ngOnInit(): void {
  }
  open()
  {
    this.isenabled=true;
  }
  close()
  {
    this.isenabled=false;
  }
  show()
  {

  }
  execute(Form:NgForm)
  {
    this.http.post(backendurl+'stock/executeorder',Form.value).subscribe((resfromserver)=>{
        if(resfromserver["message"]=="success")
        {
          alert("execute order success");
        }
    })
    if(!this.isenabled)
    {
      Form.reset();
    }
  }


}
