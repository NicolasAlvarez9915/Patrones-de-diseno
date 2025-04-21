import { Component } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payments',
  imports: [CommonModule],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent {
  methods: any[] = [];
  payments: any[] = [];

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.loadPaymentMethods();
    this.loadPayments();
  }

  loadPaymentMethods() {
    this.paymentService.getPaymentMethods().subscribe(data => {
      this.methods = data;
    });
  }

  loadPayments() {
    this.paymentService.getPayments().subscribe(data => {
      console.log('Respuesta de pagos:', data);
      this.payments = data;
    });
  }
}
