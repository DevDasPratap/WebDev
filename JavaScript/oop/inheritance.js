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
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

class SavingAccount extends BankAcount {
    transationLimit = 10000;

    constructor(accountHolderName, balance = 0) {
        super(accountHolderName, balance)
    }

    takePersonalLoan(amount){
        console.log(`Rs: ${amount} taking personal loan`);
    }
}

class CurrentAccount extends BankAcount {
    transationLimit = 50000;

    constructor(accountHolderName, balance = 0) {
        super(accountHolderName, balance)
    }

    takeBusinessLoan(amount){
        console.log(`Rs: ${amount} taking business loan`);
    }
}

const accounts = new SavingAccount();
accounts.accountHolderName = 'Pratap';
accounts.balance = 10000;
console.log(accounts);

accounts.diposit(100);
console.log(accounts);
accounts.withdraw(1000);
console.log(accounts);

accounts.takePersonalLoan(1000);
console.log(accounts);