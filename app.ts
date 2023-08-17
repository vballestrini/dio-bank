import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { InvestmentAccount } from './class/InvestmentAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
const investmentAccount: InvestmentAccount = new InvestmentAccount('Nick', 30)

peopleAccount.deposit(10.50)
companyAccount.getLoan(1000.00)
investmentAccount.deposit(50.00)

peopleAccount.withdraw(5.49)
peopleAccount.getBalance()

companyAccount.withdraw(200.49)
companyAccount.getBalance()

investmentAccount.withdraw(35.67)
investmentAccount.getBalance()