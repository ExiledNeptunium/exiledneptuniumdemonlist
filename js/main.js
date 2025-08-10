import routes from './routes.js';
import { fetchList } from './content.js';

export const store = Vue.reactive({
    dark: JSON.parse(localStorage.getItem('dark')) || false,
    toggleDark() {
        this.dark = !this.dark;
        localStorage.setItem('dark', JSON.stringify(this.dark));
    },
});
    app.use(router);
    app.mount('#app');
})();
