import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { AnnualData, InvestmentInput } from './investment.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  constructor() {}

  annualData: AnnualData[] = [];
  annualDataSignal: WritableSignal<AnnualData[]> = signal([]);
  calculateInvestmentResults(
    data: InvestmentInput
  ): WritableSignal<AnnualData[]> {
    const { annualInvestment, duration, expectedReturn, initialInvestment } =
      data;
    this.annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;

      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.annualDataSignal.set(this.annualData);
    return this.annualDataSignal;
  }

  getInvestMentResults(): WritableSignal<AnnualData[]> {
    return this.annualDataSignal;
  }
}
