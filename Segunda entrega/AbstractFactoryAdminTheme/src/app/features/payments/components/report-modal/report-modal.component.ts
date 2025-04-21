import { Component, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { PaymentService } from '../../../../services/payment.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LightTheme } from '../../../../core/theme/models/light-theme';
import { ThemeService } from '../../../../core/theme/services/theme.service';

@Component({
  selector: 'app-report-modal',
  imports: [CommonModule, MatDialogModule, MatButtonModule, ReactiveFormsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatCheckboxModule],
  templateUrl: './report-modal.component.html',
  styleUrl: './report-modal.component.scss'
})
export class ReportModalComponent {
  themeService = inject(ThemeService);
  currentTheme: LightTheme = new LightTheme();
  reportForm!: FormGroup;
  themes = ['LIGHT', 'DARK'];
  formats = ['A4', 'LETTER'];
  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ReportModalComponent>,
    private paymentService: PaymentService
  ) {
    this.reportForm = this.fb.group({
      includeLogo: [true],
      title: ['Reporte de Pago'],
      includePaymentDetails: [true],
      includeUserInfo: [true],
      theme: ['LIGHT'],
      includeTimestamp: [true],
      footerMessage: ['Gracias por su pago'],
      format: ['A4']
    });
  }

  closet() {
    this.dialogRef.close();
  }

  generateReport(): void {
    const paymentData = this.data.payment;
    const options = this.reportForm.value;
    const reportPayload = {
      options: options,
      paymentData
    };

    this.paymentService.createReport(reportPayload).subscribe(response => {
      const blob = new Blob([response], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    })
  }
}
