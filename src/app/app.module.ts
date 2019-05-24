import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule,} from '@angular/material/button';
import {MatSidenavModule,MatSidenavContainer,MatSidenavContent } from '@angular/material/sidenav';
import {MatIconModule } from  '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



import 'hammerjs';
import { from } from 'rxjs';

import * as jsPDF from 'jspdf';
import * as emailjs from 'emailjs';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { SendemailService } from './services/sendemail.service';
import { ProcessHttpmsgService  } from './services/process-httpmsg.service';
import { CompaniesService } from './services/companies.service';

import { FooterComponent } from './footer/footer.component';
import { baseURL } from './shared/baseurl';
import { apiURL } from './shared/baseurl';
import { ResponsivecolsDirective } from './responsivecols.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ResumeComponent,
    ContactComponent,
    PortfolioComponent,
    FooterComponent,
    ResponsivecolsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    FormsModule,
    PdfViewerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTabsModule,
    HttpClientModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
       MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [SendemailService,ProcessHttpmsgService,CompaniesService,
    { provide: 'BaseURL', useValue:baseURL }, { provide: 'ApiURL', useValue:apiURL }],
  bootstrap: [AppComponent]
})
export class AppModule { }
