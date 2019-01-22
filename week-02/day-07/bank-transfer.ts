'use strict';

export{}

const accounts: any[] = [
    { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
    { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
    { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
  ];

  
function getNameAndBalance (accountValue: number) {
    let arrayOfNameAndBalance = [];
    
    accounts.map(function (element) {
        if (element.accountNumber === accountValue) {
            arrayOfNameAndBalance.push(element.clientName);
            arrayOfNameAndBalance.push(element.balance);
        }
    });

    return arrayOfNameAndBalance;
}

console.log(getNameAndBalance(11234543));


function transferAmount (accounts, fromAccountNumber, toAccountNumber, amount) {
    let isTransactionDone = false;

    //using map to iterate through all the account numbers at the bank 
    //to check wether the number is exist (comparing the parameter account number with the bank account numbers)
    accounts.map(function (elementFrom) {
        if (elementFrom.accountNumber === fromAccountNumber) {
            accounts.map(function (elementTo) {
                if (elementTo.accountNumber === toAccountNumber) {
                    elementTo.balance = elementTo.balance + amount;
                    isTransactionDone = true;
                } 
            });

            //substract the amount from the fromAccount if fromAccount number is found
            elementFrom.balance = elementFrom.balance - amount;
        }
    });

    if (isTransactionDone === false) {
        console.log("404 - account not found");
    }
}

transferAmount(accounts, 43546731, 23456311, 500.0);

console.log(accounts);