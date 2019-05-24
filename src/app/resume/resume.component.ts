import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  pdfSrc:string ='../../assets/files/Saraswathi_Resume.pdf';

  page: number = 1;
  totalPages: number;
  isLoaded: boolean = false;
  fileName:string = "Saraswathi_Resume.pdf";

  constructor() { }

  ngOnInit() {
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }


}


