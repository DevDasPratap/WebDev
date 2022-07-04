class BankAcount {
    accountHolderName;
    accountNumber;
    balance;

    constructor(accountHolderName, balance = 0) {
        this.accountHolderName = accountHolderName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    diposit(amount) {
        this.balance += amount;
        console.log(`Rs: ${amount} Money diposit successful`);
    }

    withdraw(amount) {
        this.balance -= amount;
        console.log(`Rs: ${amount} Money withdraw successful`);
    }
}

const accounts = new BankAcount();
accounts.accountHolderName='Pratap';
accounts.balance=10000;
// console.log(accounts);

accounts.diposit(500);
console.log(accounts);

accounts.withdraw(1000);
console.log(accounts);