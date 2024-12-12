// Обработчик события на кнопке
document.getElementById('calculateButton').addEventListener('click', findCheapestProducts);

function findCheapestProducts() {
    // Получаем вводимые данные
    const input = document.getElementById('productInput').value; 
    // Разбиваем строку на отдельные продукты
    const products = input.split('; '); 
    // Для хранения средних цен
    const productAverages = {}; 

    products.forEach(product => {
        // Разделяем название и цены
        const [name, prices] = product.split(': '); 
        // Цены превращаем в массив чисел
        const priceArray = prices.split(',').map(Number); 
        // Вычисляем среднюю цену
        const averagePrice = priceArray.reduce((sum, price) => sum + price, 0) / priceArray.length; 
        // Сохраняем среднюю цену
        productAverages[name] = averagePrice; 
    });

    // Сортируем продукты по средней цене
    const sortedProducts = Object.entries(productAverages).sort((a, b) => {
        if (a[1] === b[1]) {
            // Сравниваем по имени, если цены равны
            return a[0].localeCompare(b[0]); 
        }
        return a[1] - b[1]; // Сравниваем по средней цене
    });

    const resultElement = document.getElementById('result');
    // Выводим отсортированные названия продуктов
    resultElement.textContent = sortedProducts.map(product => product[0]).join('\n'); 
}