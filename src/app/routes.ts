import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


export const routes:Routes = [
    { path:'about', component:AboutComponent },
    { path:'contact', component:ContactComponent },
    { path:'resume', component:ResumeComponent },
    { path:'portfolio', component:PortfolioComponent },

    { path:'', redirectTo:'/about', pathMatch:'full'}

    

];