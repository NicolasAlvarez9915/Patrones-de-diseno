import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private API_URL = 'http://localhost:3000'; // Cambia si tu backend tiene otra URL

  constructor(private http: HttpClient) { }

  getPaymentMethods(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/payments/payment-methods`);
  }

  getPayments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/payments/payments`);
  }

  createPayment(payment: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/payments/payments`, payment);
  }
}
