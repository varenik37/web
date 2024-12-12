// Функция для поиска продукта с минимальной калорийностью
function findLowestCalorieProduct() {
    // Получаем данные из полей ввода
    const productsInput = document.getElementById('products').value; // Названия продуктов
    const nutritionInput = document.getElementById('nutrition').value; // Информация о нутриентах

    // Разделяем строку продуктов на массив
    const products = productsInput.split(' ');
    // Разделяем строку нутриентов на массив
    const nutritionList = nutritionInput.split(' ');

    let lowestCalories = 10000; // Начальное значение для минимальной калорийности
    let lowestCalorieProduct = ''; // Название продукта с минимальной калорийностью

    // Перебираем каждый продукт
    for (let i = 0; i < products.length; i++) {
        // Извлекаем белки, жиры, углеводы
        const [proteins, fats, carbohydrates] = nutritionList[i].split('-').map(Number);

        // Вычисляем калорийность
        const calories = 0.4 * proteins + 0.3 * fats + 0.3 * carbohydrates;

        // Если нашли продукт с меньшей калорийностью, обновляем переменные
        if (calories < lowestCalories) {
            lowestCalories = calories;
            lowestCalorieProduct = products[i];
        }
    }

    // Выводим результат
    document.getElementById('result').textContent = `Самый низкокалорийный продукт: ${lowestCalorieProduct}`;
}
