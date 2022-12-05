import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm = this.fb.group({
    name: ['', [Validators.minLength(4), Validators.required]],
    topic: ['', [Validators.minLength(10), Validators.required]],
    phone: ['', [Validators.minLength(11), Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    message: ['', [Validators.minLength(20), Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  sendForm(){
    alert("A mensagem foi enviada!");
    this.contactForm.reset();
  }
}
