import { Component, Input, OnInit, input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // contactForm!: FormGroup;
  @Input() subheader = 'Contact Dominik';


  ngOnInit() {

  }

  contactForm = this.formBuilder.group({
    fullName: ['', Validators.required, Validators.minLength(5), Validators.maxLength(60)],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }

  // TODO: IMPLEMENT ON SUBMIT
  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}
