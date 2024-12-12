document.getElementById('calculateButton').addEventListener('click', findMaxProfitProduct);

function findMaxProfitProduct() {
    const input = document.getElementById('salesInput').value.trim();
    const lines = input.split('\n'); // Разделяем ввод на строки
    const profits = {}; // Для хранения прибыли по товарам

    for (let line of lines) {
        // Выходим из цикла, если встречаем END
        if (line === 'END') break; 
        // Разделяем название товара и прибыль
        const [product, profitStr] = line.split(', '); 
        // Преобразуем строку прибыли в число
        const profit = parseInt(profitStr, 10); 

        // Если товар уже есть в объекте, добавляем прибыль, иначе так и оставляем
        if (profits[product]) {
            profits[product] += profit;
        } else {
            profits[product] = profit;
        }
    }

    // Находим товар с максимальной прибылью
    let maxProfitProduct = null;
    let maxProfit = 0;

    // Преобразуем profits в массив пар [товар, вся прибыль]
    for (const [product, totalProfit] of Object.entries(profits)) {
        if (totalProfit > maxProfit) {
            maxProfit = totalProfit;
            maxProfitProduct = product;
        }
    }

    // Выводим результат
    const resultElement = document.getElementById('result');
    resultElement.textContent = `${maxProfitProduct}, ${maxProfit}`;
}
