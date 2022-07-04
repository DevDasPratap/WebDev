// console.log('Constructor');

// //inside class we call variable name= property
// //inside class we call function = method
// function BankAccount(customerName, balance=0) {
//     this.customerName=customerName;
//     this.accountNo=Date.now();
//     this.balance=balance;

//     //add method
//     this.deposit=function(amount) {
//         this.balance += amount;
//     }

//     this.withdraw=(amount)=>{
//         this.balance -= amount;
//     }

// }

// let accDetails=new BankAccount('Pratap Das',10000);
// console.log(accDetails);
// // console.log(accDetails.accountNo);
// // accDetails.balance=90000;
// // console.log(accDetails);
// // accDetails.deposit(1000);
// accDetails.withdraw(1000);
// console.log(accDetails);




function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = function (amount) {
        this.balance += amount;
    };

    this.withdraw =function (amount) {
        this.balance -= amount;
    };
}


const accounts = [];
const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');

const depositForm = document.querySelector('#depositForm');
const depositAccountNumber = document.querySelector('#depositAccountNumber');
const depositAmount = document.querySelector('#depositAmount');

const withdrawForm = document.querySelector('#withdrawForm');
const withdrawAccountNumber = document.querySelector('#depositAccountNumber');
const withdrawAmount = document.querySelector('#depositAmount');

accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = new BankAccount(customerName.value, +balance.value);
    accounts.push(account);
    console.log(accounts);
});

// depositForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const account = accounts.find(
//         (account) => account.accountNumber === +depositAccountNumber.value
//     );
//     account.deposit(+depositAmount.value);
//     console.log(accounts);
// });

withdrawForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = accounts.find(
        (account) => account.accountNumber === +withdrawAccountNumber.value
    );
    account.withdraw(+withdrawAmount.value);
    console.log(accounts);
});