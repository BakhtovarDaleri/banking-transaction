const isCardInserted = true; // Проверяем есть ли карта в банкомате
const cardBalance = 500; // Доступный баланс на карте

function performOperation(amount) {
  // Проверяем наличие карты и доступность средств
  if (isCardInserted && amount <= cardBalance) {
    console.log("Операция выполняется");
  } else {
    console.log("Операция отклонена");
  }
}

let amount = parseFloat(prompt("Введите сумму")); // Запрос суммы

performOperation(amount);
