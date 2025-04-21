import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeSwitcherComponent } from './features/theme-switcher/theme-switcher.component';
import { PaymentsComponent } from './features/payments/payments.component';
import { PaymentService } from './services/payment.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [PaymentsComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AbstractFactoryAdminTheme';
  paymentService = inject(PaymentService);
}
