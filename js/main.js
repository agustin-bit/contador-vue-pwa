const app = Vue.createApp({
    data() {
        return {
            title: 'Contador VUE',
            count: 0
        };
    },

    //declaración de métodos, separados por coma, se bidean con v-on:click por ejemplo
    methods: {
        modCount(inst) {
            if (inst === 'menos') {
                this.count--;
            }
            else {
                this.count++;
            }
        }
    }
});