import { DioAccount } from "./DioAccount"

export class InvestmentAccount extends DioAccount {

  deposit(value: number): void {
    super.deposit(value + 10); 
  };

}