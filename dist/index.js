"use strict";
const incomeOrExpense = document.querySelector("#moneyselect");
const category = document.querySelector("#category");
const amount = document.querySelector("#amount");
const details = document.querySelector("#details");
const date = document.querySelector("#date");
let currentMoney = document.querySelector("#total");
const submit = document.querySelector("#form");
let total = 1;
submit.addEventListener("submit", e => {
    e.preventDefault();
    const transaction = {
        incomeOrExpense: incomeOrExpense.value,
        category: category.value,
        amount: amount.valueAsNumber,
        date: date.value,
        details: details.value,
    };
    renderTransaction(transaction);
});
function renderTransaction(t) {
    const tableRow = document.createElement("tr");
    const incomeOrExpenseTd = document.createElement("td");
    incomeOrExpenseTd.textContent = t.incomeOrExpense;
    const categoryTd = document.createElement("td");
    categoryTd.textContent = t.category;
    const amountTd = document.createElement("td");
    t.incomeOrExpense == 'Income' ? amountTd.textContent = "+RD$" + t.amount.toString() : amountTd.textContent = "-RD$" + t.amount.toString();
    const dateTd = document.createElement("td");
    dateTd.textContent = t.date;
    const detailsTd = document.createElement("td");
    detailsTd.textContent = t.details;
    tableRow.appendChild(incomeOrExpenseTd);
    tableRow.appendChild(categoryTd);
    tableRow.appendChild(amountTd);
    tableRow.appendChild(dateTd);
    tableRow.appendChild(detailsTd);
    t.incomeOrExpense == "Income" ? total += amount.valueAsNumber : total -= amount.valueAsNumber;
    if (currentMoney)
        currentMoney.textContent = "Current: RD$" + total.toString();
    const tBody = document.querySelector("tbody");
    tBody === null || tBody === void 0 ? void 0 : tBody.appendChild(tableRow);
}
;
