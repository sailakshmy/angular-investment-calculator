import { Component, computed, inject, input, Input } from "@angular/core";
import { CurrencyPipe } from "@angular/common";
import { InvestmentOutput } from "../../app.model";
import { InvestmentService } from "../../investment.service";

@Component({
  selector: "app-investment-results",
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: "./investment-results.component.html",
  styleUrl: "./investment-results.component.css",
})
export class InvestmentResultsComponent {
  // results? = input<InvestmentOutput[] | undefined>();
  private investmentService = inject(InvestmentService);
  results = computed(() => this.investmentService.resultsData());
  // results = this.investmentService.resultsData.asReadonly();
  // get results() {
  //   return this.investmentService.resultsData;
  // }
}
