import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {


  public flag: boolean = false;
  registerForm!: FormGroup; //Give the same Formgroup name as in template

  constructor(private formBuilder: FormBuilder) {

    

    this.registerForm = this.formBuilder.group({
      //Building the form using FormBuilder
      firstName: new FormControl(), //In the FormBuilder - we are creating a group of form elements
      lastName: new FormControl(), //these should be exactly same as form
      emailAddress: ['', [Validators.required, Validators.email]],// validatiors for email
      phoneNo: [
        '',
        [
          Validators.required,             //validators for mobile number
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      password: new FormControl(),
      confirmPassword: new FormControl(),
      Address: new FormControl(),
      pincode: new FormControl(),
    });
  }

  ngOnInit(): void {}

  postData() {
    console.log(this.registerForm);
    console.log(this.registerForm.value);
  }
}
