import { Component, Input, OnInit, input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // contactForm!: FormGroup;
  hostEmail = 'madennis914@gmail.com';
  formSubmitted = false; // Add this line

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
    console.log(this.contactForm.valid,this.contactForm.value);
    // console.log(this.contactForm.value);

    // if (this.contactForm.valid) {
      console.log(this.contactForm.value);

      // SEND EMAIL
      // window.open('mailto:dominik.neal20@gmail.com', "_blank");
      const emailLink = this.generateMailToLink();

      this.formSubmitted = true; // Add this line
      this.contactForm.disable(); // Add this line

      window.open(emailLink, "_blank");
    // }
  }

  generateMailToLink() {
    const { fullName, email, message } = this.contactForm.value;
    return `mailto:` + this.hostEmail + `?subject=Contact%20Form%20Submission%20from%20` + fullName + `&body=` + message+ `%20` + ` from: ` + email;
  }
}
