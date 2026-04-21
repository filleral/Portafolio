import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = 'service_bpuqnos';
const EMAILJS_TEMPLATE_ID = 'template_5xy2tr6';
const EMAILJS_PUBLIC_KEY  = 'CHyr96IAPDKv5MqT1';

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
