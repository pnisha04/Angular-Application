import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  cform:FormGroup;
  submitted = false;
  constructor(private formData : FormBuilder ) { }

  ngOnInit() {
    this.cform = this.formData.group({
      'name' : ['',Validators.required],
      'email': ['', [Validators.required,Validators.email]]
    })
  }

  get f(){
    return this.cform.controls;
  }

  csubmit(){
    this.submitted = true;
    console.log(this.cform.value);
    if (this.cform.invalid) {
      return;
  }
  }
  onReset(){
    this.cform.reset();
  }

}
