let gamesData = []; // Переменная для хранения данных об играх.

async function loadGames() {
    // Загрузка данных из файла data.json
    const response = await fetch('data.json');
    gamesData = await response.json();
    displayGames(gamesData);
}

function displayGames(games) {
    // Функция для отображения игр.
    const gameCards = document.getElementById('game-cards');
    
    // Шаблон для одной карточки игры
    gameCards.innerHTML = games.map(game => `
        <div class="card"> 
            <img src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
            <p>Price: ₽${game.price.toFixed(2)}</p>
            <p>Release Date: ${game.release_date}</p>
            <p>Genre: ${game.genre}</p>
        </div>
    `).join('');
}

function sortAndDisplay(criteria) {
    const sortedGames = [...gamesData].sort((a, b) => {
        if (criteria === 'title') return a.title.localeCompare(b.title);
        if (criteria === 'release_date') return new Date(a.release_date) - new Date(b.release_date);
        if (criteria === 'price') return a.price - b.price;
    });
    displayGames(sortedGames);
}

window.onload = loadGames;