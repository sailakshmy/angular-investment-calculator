import { Component, input, signal } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { UserInputComponent } from "./components/user-input/user-input.component";
import { InvestmentInput, InvestmentOutput } from "./app.model";
import { InvestmentResultsComponent } from "./components/investment-results/investment-results.component";

@Component({
  selector: "app-root",
  // standalone: true,
  templateUrl: "./app.component.html",
  // imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  // resultsData?: InvestmentOutput[] = [];
  resultsData = signal<InvestmentOutput[]>([]);
}
