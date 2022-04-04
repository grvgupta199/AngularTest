import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public  isValid=true;
  constructor(private router: Router) { }

  ngOnInit(): void {
   
  }

  Login(val)
  {
    var obj=localStorage.getItem(val.username);
    
    if(obj!=null)
    {
      var objParse=JSON.parse(obj);
      if(objParse.username=val.username && objParse.password==val.password)
      {
        console.warn(obj)
       
    this.router.navigateByUrl('/dashboard');

      }
      else{
        this.isValid=false;
      }
    }
    else{
       this.isValid=false;
    }
     
  }
}
