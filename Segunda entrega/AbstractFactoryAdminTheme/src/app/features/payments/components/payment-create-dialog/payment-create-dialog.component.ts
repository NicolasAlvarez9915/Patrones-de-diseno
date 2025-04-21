import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { LightTheme } from '../../../../core/theme/models/light-theme';
import { ThemeService } from '../../../../core/theme/services/theme.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PaymentService } from '../../../../services/payment.service';

@Component({
  selector: 'app-payment-create-dialog',
  imports: [CommonModule, MatDialogModule, MatButtonModule, ReactiveFormsModule, MatSelectModule, MatInputModule, MatFormFieldModule],
  templateUrl: './payment-create-dialog.component.html',
  styleUrl: './payment-create-dialog.component.scss'
})
export class PaymentCreateDialogComponent implements OnInit {
  themeService = inject(ThemeService);
  currentTheme: LightTheme = new LightTheme();
  methods: any[] = [];
  notifications: any[] = [];

  paymentForm!: FormGroup;

  constructor(private paymentService: PaymentService,
    public dialogRef: MatDialogRef<PaymentCreateDialogComponent>,
    private fb: FormBuilder) {
    this.themeService.theme$.subscribe(theme => this.currentTheme = theme)
  }

  ngOnInit(): void {
    this.loadPaymentMethods();
    this.loadNotificationMethods();
    this.paymentForm = this.fb.group({
      paymentType: ['', Validators.required],
      notificationType: ['', Validators.required],
      amount: [null, [Validators.required, Validators.min(1)]],
      addressee: [null, [Validators.required]]
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  submitPayment(): void {
    if (this.paymentForm.valid) {
      const paymentData = this.paymentForm.value;
      this.paymentService.createPayment(paymentData).subscribe(response => {
        this.dialogRef.close(true);
      });

    }
  }


  loadPaymentMethods() {
    this.paymentService.getPaymentMethods().subscribe(data => {
      this.methods = data;
    });
  }
  loadNotificationMethods() {
    this.paymentService.getNotificationMethods().subscribe(data => {
      this.notifications = data;
    });
  }
}
