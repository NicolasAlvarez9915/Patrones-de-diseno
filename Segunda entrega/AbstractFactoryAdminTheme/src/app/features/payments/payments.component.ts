import { Component, inject } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PaymentCreateDialogComponent } from './components/payment-create-dialog/payment-create-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ThemeService } from '../../core/theme/services/theme.service';
import { LightTheme } from '../../core/theme/models/light-theme';

@Component({
  selector: 'app-payments',
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, MatTableModule],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent {
  themeService = inject(ThemeService);
  currentTheme: LightTheme = new LightTheme();
  payments = new MatTableDataSource<any>();

  constructor(private paymentService: PaymentService,
    private dialog: MatDialog) {
    this.themeService.theme$.subscribe(theme => this.currentTheme = theme)
  }

  ngOnInit(): void {
    this.loadPayments();
  }


  loadPayments() {
    this.paymentService.getPayments().subscribe(data => {
      this.payments.data = data;
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(PaymentCreateDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadPayments();
      }
    });
  }
}
