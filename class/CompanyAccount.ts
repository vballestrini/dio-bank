import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  
  getLoan(value: number): void {
    if(this.validateStatus()){
      this.deposit(value)
      console.log('Você realizou um empréstimo de R$ ' + value.toFixed(2))
    }
  }

}
