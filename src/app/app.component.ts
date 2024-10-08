import { Component, signal, WritableSignal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { InvestmentService } from './investment.service';
import { AnnualData } from './investment.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  constructor(private investmentService: InvestmentService) {}
  investmentResult: WritableSignal<AnnualData[]> = signal([]);
  getAnnualData() {
    this.investmentResult = this.investmentService.getInvestMentResults();
  }
}
