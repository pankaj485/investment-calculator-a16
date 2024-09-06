import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { AnnualData } from '../investment.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  investmentResult = input<AnnualData[]>();
}
