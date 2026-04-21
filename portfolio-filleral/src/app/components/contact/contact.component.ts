import { Component } from '@angular/core';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form = { name: '', email: '', message: '' };
  status: 'idle' | 'sending' | 'success' | 'error' = 'idle';

  constructor(private emailSvc: EmailService) {}

  onSubmit() {
    this.status = 'sending';
    this.emailSvc
      .send({
        from_name: this.form.name,
        from_email: this.form.email,
        message: this.form.message,
      })
      .then(() => {
        this.status = 'success';
        this.form = { name: '', email: '', message: '' };
      })
      .catch(() => {
        this.status = 'error';
      });
  }
}
