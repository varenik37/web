new Vue({
    el: '#app',
    data: {
        games: [],
        searchQuery: '',
        currentSort: ''
    },
    computed: {
        // Фильтрация игр на основе поискового запроса
        filteredGames() {
            return this.games.filter(game => {
                const query = this.searchQuery.toLowerCase();
                return game.title.toLowerCase().includes(query) ||
                       game.genre.toLowerCase().includes(query) ||
                       game.release_date.includes(query);
            });
        }
    },
    methods: {
        async loadGames() {
            const response = await fetch('data.json');
            this.games = await response.json();
        },
        sortGames(criteria) {
            this.currentSort = criteria;
            this.games.sort((a, b) => {
                if (criteria === 'title') return a.title.localeCompare(b.title);
                if (criteria === 'release_date') return new Date(a.release_date) - new Date(b.release_date);
                if (criteria === 'price') return a.price - b.price;
            });
        }
    },
    mounted() {
        this.loadGames();
    }
});
