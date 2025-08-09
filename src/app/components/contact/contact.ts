import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
    imports: [FormsModule],
  styleUrls: ['./contact.css']
})
export class Contact {
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      alert('Message sent!');
      form.reset();
    }
  }
}
