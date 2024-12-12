const cities = ["Москва", "Санкт-Петербург", "Саратов", "Магадан", "Ярославль", "Самара", "Якутск"];

document.getElementById('checkButton').addEventListener('click', () => {
    const input = document.getElementById('cityInput').value.trim();
    // Первая буква заглавная
    const firstLetter = input[0].toUpperCase(); 

    // Ищем города, начинающиеся с этой буквы
    const resultCities = cities.filter(city => city[0] === firstLetter);

    // Вывод результата
    const resultElement = document.getElementById('result');
    if (resultCities.length > 0) {
        resultElement.textContent = `Города, начинающиеся с буквы "${firstLetter}": ${resultCities.join(', ')}`;
    } else {
        resultElement.textContent = 'Такого города нет в списке';
        resultElement.style.color = "red";
    }
});
