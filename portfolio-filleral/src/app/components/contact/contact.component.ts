import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form = { name: '', email: '', message: '' };
  submitted = false;

  onSubmit() {
    const { name, email, message } = this.form;
    const subject = encodeURIComponent(`Contacto desde portafolio — ${name}`);
    const body = encodeURIComponent(`Hola Filleral,\n\nMi nombre es ${name}.\n\n${message}\n\nCorreo: ${email}`);
    window.location.href = `mailto:filleral19@gmail.com?subject=${subject}&body=${body}`;
    this.submitted = true;
  }
}
