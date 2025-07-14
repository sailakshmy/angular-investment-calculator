import { Component } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { UserInputComponent } from "./components/user-input/user-input.component";
import { InputData } from "./app.model";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  imports: [HeaderComponent, UserInputComponent],
})
export class AppComponent {
  calculateInvestmentResults({
    initialInvestment,
    duration,
    expectedReturn,
    annualInvestment,
  }: InputData) {
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

    return annualData;
  }
}
