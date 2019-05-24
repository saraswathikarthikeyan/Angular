import { Component, OnInit } from '@angular/core';
import {about} from '../shared/about';
import { CompaniesService} from '../services/companies.service';
import {ResponsivecolsDirective} from '../responsivecols.directive';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  homeInfo: about[];
  errMess: string;


  constructor(private companyservice: CompaniesService) { }

  ngOnInit() {


    //this.companyservice.getHomeDetailsServ().subscribe(homeInformation => this.homeInfo = homeInformation, errMsg => this.errMess = <any>errMsg);
    this.homeInfo = this.companyservice.getAboutDetails();

  }

}
