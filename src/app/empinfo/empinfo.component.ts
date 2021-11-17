import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';

import {  EmpinfoservService } from 'src/app/empinfoserv.service';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-empinfo',
  templateUrl: './empinfo.component.html',
  styleUrls: ['./empinfo.component.css']
})
export class EmpinfoComponent implements OnInit {

 
  constructor(private http:EmpinfoservService) { }
empData:any=[];  
  ngOnInit()
  {
    
     this.http.fetchFlights().subscribe(data=>{
        // console.log("responcssse recived ",data),
      this.empData = data.users;
      console.log("Data :",this.empData)      
      // error=>console.log("exception recoved ")
      })
  }


}
