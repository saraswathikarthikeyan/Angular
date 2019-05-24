import { Component, OnInit} from '@angular/core';
import {company} from '../shared/experience';
import { CompaniesService} from '../services/companies.service';
import {ResponsivecolsDirective} from '../responsivecols.directive';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  companiesDetails:company[];
  errMess: string;

  constructor(private companyService: CompaniesService) { }

  ngOnInit() {

    this.companiesDetails = this.companyService.getCompanyDetails();

    //this.companyService.getCompanyDetailsServ().subscribe(companyDet => this.companiesDetails = companyDet, errMsg => this.errMess = <any>errMsg);
    

  }


}
