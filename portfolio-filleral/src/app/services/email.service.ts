import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

// EmailJS config — create free account at https://www.emailjs.com
// and replace these values with yours
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

export interface ContactPayload {
  from_name: string;
  from_email: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class EmailService {

  send(payload: ContactPayload): Promise<void> {
    return emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, payload as unknown as Record<string, unknown>, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => undefined);
  }
}
