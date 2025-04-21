import { Component, inject } from '@angular/core';
import { ThemeSwitcherComponent } from './features/theme-switcher/theme-switcher.component';
import { PaymentsComponent } from './features/payments/payments.component';
import { PaymentService } from './services/payment.service';

@Component({
  selector: 'app-root',
  imports: [PaymentsComponent, ThemeSwitcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AbstractFactoryAdminTheme';
  paymentService = inject(PaymentService);
}
