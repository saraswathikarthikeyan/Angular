import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  }  from '@angular/forms';
import { Message } from '../shared/message';
import {SendemailService} from '../services/sendemail.service';
import {environment} from '../../environments/environment';
import {ResponsivecolsDirective} from '../responsivecols.directive';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  msgFormGrp: FormGroup;
  messagePost: Message;
  successMsg:string[];
  errMsg:string;
  status:string;
  loadDisplay:boolean = false;
  apiUrl = environment.apiURL;

  constructor(private fb: FormBuilder, private sendEmail: SendemailService) {   
    this.createForm(); }

  ngOnInit() {
   
  }

  formErrors = {
    'firstname': '',
    'email': '',
    'message': ''
  };

  validationMessages = {
    'firstname': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
    'message': {
      'required':      'message is required.',
      'minlength':     'message must be at least 15 characters long.',
      'maxlength':     'message cannot be more than 250 characters long.'
    }
  };

  createForm(): void{
    this.msgFormGrp = this.fb.group ({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      email:['', [Validators.required, Validators.email]],
      message:['', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]]
    });

    this.msgFormGrp.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {

    if(!this.msgFormGrp) {return}

    const form = this.msgFormGrp;

    for (const field in this.formErrors)
    {
      if(this.formErrors.hasOwnProperty(field))
      {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if(control && control.dirty && !control.valid)
        {
          const messages = this.validationMessages[field]; 
          for(const key in control.errors)
          {
            if(control.errors.hasOwnProperty(key))
            {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }      
      }
    }
    }

    onSubmit(){
      this.messagePost = this.msgFormGrp.value;
        
      if(this.msgFormGrp.valid)
      {
        this.loadDisplay = true;
        this.sendEmail.sendEmailfn(this.messagePost).subscribe(data => {this.status=data.status;this.successMsg=data.message;  //Success Form Displayed for 5seconds
            this.loadDisplay=false; }  ,  errMsg => { this.errMsg = errMsg; this.loadDisplay=false;});
      }

      this.msgFormGrp.reset({
        firstname: '',
        email: '',
        message: ''
      });

    }
}
