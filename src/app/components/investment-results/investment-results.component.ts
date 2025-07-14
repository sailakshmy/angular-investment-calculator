import { Component, input, Input } from "@angular/core";
import { CurrencyPipe } from "@angular/common";
import { InvestmentOutput } from "../../app.model";

@Component({
  selector: "app-investment-results",
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: "./investment-results.component.html",
  styleUrl: "./investment-results.component.css",
})
export class InvestmentResultsComponent {
  results? = input<InvestmentOutput[] | undefined>();
}
