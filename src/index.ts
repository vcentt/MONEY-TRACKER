const incomeOrExpense = document.getElementById("#moneyselect") as HTMLSelectElement;
const category = document.getElementById("#category") as HTMLInputElement;
const amount = document.getElementById("#amount") as HTMLInputElement;
const details = document.getElementById("#details") as HTMLInputElement;
const date = document.getElementById("#date") as HTMLInputElement;
let currentMoney = document.getElementById("#total");

const submit = document.getElementById("#form") as HTMLFormElement;

type TransactionModel = {
  incomeOrExpense: string,
  category: string,
  amount: number,
  date: string,
  details: string,
};

let total = 1;
submit.addEventListener("submit", e => {
  e.preventDefault();
  
  const transaction:TransactionModel = {
    incomeOrExpense: incomeOrExpense.value,
    category: category.value,
    amount: amount.valueAsNumber,
    date: date.value,
    details: details.value,
  }

  renderTransaction(transaction);

});

function renderTransaction(t: TransactionModel) {
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
  if(currentMoney)
  currentMoney.textContent = "Total: RD$" + total.toString()

  const tBody = document.querySelector("tbody");
  tBody?.appendChild(tableRow);
};
