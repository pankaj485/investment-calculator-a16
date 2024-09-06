import {
  Component,
  EventEmitter,
  Output,
  signal,
  WritableSignal,
} from '@angular/core';
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
  @Output() calculateResult = new EventEmitter<void>();
  constructor(private investmentService: InvestmentService) {}
  initialInvestment: WritableSignal<string> = signal('1000');
  annualInvestment: WritableSignal<string> = signal('200');
  expectedReturn: WritableSignal<string> = signal('5');
  duration: WritableSignal<string> = signal('10');

  onFormSubmit() {
    this.calculateInvestmentResults();
  }

  calculateInvestmentResults() {
    this.investmentService.calculateInvestmentResults({
      annualInvestment: Number(this.annualInvestment()),
      initialInvestment: Number(this.initialInvestment()),
      duration: Number(this.duration()),
      expectedReturn: Number(this.expectedReturn()),
    });
    this.calculateResult.emit();
  }
}
