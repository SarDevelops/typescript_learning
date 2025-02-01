class BankAccount {
    private balance: number;
    constructor(initialBalance: number, public accountNumber: string) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            throw new Error('Insufficient funds');
        }
        this.balance -= amount;
    }

    getBalance(): number {
        return this.balance;
    }
}

const myAccount = new BankAccount(1000, '123456');

myAccount.deposit(5000);
myAccount.withdraw(6000);
console.log(myAccount.getBalance());



class Employee {
    constructor(
        public name: string,
        public salary: number
    ) { }

    getDetails(): string {
        return `Employee : ${this.name}, Salary: ${this.salary}`;
    }
}

class Manager extends Employee {
    constructor(name: string, salary: number, public department: string) {
        super(name, salary);
    }
    getDetails(): string {
        return `Manager : ${this.name}, Salary: ${this.salary}, Department: ${this.department}`;
    }
}

const employee = new Employee('Jane Doe', 50000);
const manager = new Manager('John Doe', 100000, 'IT');

console.log(employee.getDetails());
console.log(manager.getDetails());

