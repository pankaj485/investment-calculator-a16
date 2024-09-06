import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  constructor(private investmentService: InvestmentService) {}
  initialInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturn: number = 0;
  duration: number = 0;

  onFormSubmit() {
    const investmentResult = this.calculateInvestmentResults();
    console.log(investmentResult);
  }

  calculateInvestmentResults() {
    return this.investmentService.calculateInvestmentResults({
      annualInvestment: this.annualInvestment,
      initialInvestment: this.initialInvestment,
      duration: this.duration,
      expectedReturn: this.expectedReturn,
    });
  }
}
