export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = false

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName(): string {
    return this.name
  }

  getBalance(): void {
    console.log('Saldo atual de R$ ' + this.balance.toFixed(2))
  }

  setBalance(balance: number): void {
    this.balance = balance
  }

  deposit(value: number): void {
    try {
      if(this.validateStatus()){
        this.balance += value
        console.log('Você depositou R$ ' + value.toFixed(2))
      }
    } catch (error: any) {
      console.log(error.message)
    }
  }

  withdraw(value: number): void {
    if(this.validateStatus() && this.balance >= value){
      this.balance -= value
      console.log('Você sacou R$ ' + value.toFixed(2))
    } else {
      console.log('Saldo insuficiente')
    }
  }

  protected validateStatus(): boolean {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
  
}
