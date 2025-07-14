import { Injectable, signal } from "@angular/core";
import { InvestmentInput, InvestmentOutput } from "./app.model";

@Injectable({
  providedIn: "root",
})
export class InvestmentService {
  //   resultsData?: InvestmentOutput[] = [];
  resultsData = signal<InvestmentOutput[]>([]);
  calculateInvestmentResults({
    initialInvestment,
    duration,
    expectedReturn,
    annualInvestment,
  }: InvestmentInput) {
    const annualData = [];
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
    console.log("Annual Data", annualData);
    // this.resultsData = annualData;
    this.resultsData.set(annualData);
  }
}
