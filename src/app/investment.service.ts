import { Injectable } from '@angular/core';
import { AnnualData, InvestmentInput } from './investment.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  constructor() {}

  calculateInvestmentResults(data: InvestmentInput): AnnualData[] {
    const { annualInvestment, duration, expectedReturn, initialInvestment } =
      data;
    const annualData: AnnualData[] = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;

      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    return annualData;
  }
}
