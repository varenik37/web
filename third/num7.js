document.getElementById('findGroupBtn').addEventListener('click', findGroupWithMostConcerts);

function findGroupWithMostConcerts() {
    const input = document.getElementById('concertInput').value.trim();
    const concerts = input.split('\n'); // Разделяем строки по новой строке
    const groupCounts = {}; // Для хранения количества концертов по группам

    for (let concert of concerts) {
        // Прерываем цикл, если встретили стоп-слово
        if (concert === "END") break; 

        // Разделяем группу и дату
        const [group, date] = concert.split(', '); 
        // Рассматриваем только 2023 год
        if (date.split('.')[2] === "2023") { 
            // Увеличиваем количество концертов для группы
            groupCounts[group] = (groupCounts[group] || 0) + 1; 
        }
    }

    let maxGroup = '';
    let maxCount = 0;

    // Находим группу с максимальным количеством концертов
    for (let group in groupCounts) { 
        if (groupCounts[group] > maxCount) {
            maxCount = groupCounts[group];
            maxGroup = group;
        }
    }

    // Показать результат
    document.getElementById('resultSection').style.display = 'block';

    // Выводим результат
    const resultElement = document.getElementById('result');
    // Группа и количество концертов
    resultElement.textContent = `${maxGroup} ${maxCount}`; 
}
