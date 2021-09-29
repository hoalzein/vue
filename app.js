const app = Vue.createApp({
    data() {
        return {
            show: true,
            url: 'https://www.arsenal.com',
            teamName: 'Arsenal',
            teamManager: 'Arsene Wenger',
            stadiumName: 'Emirates Stadium',
            stadiumCapacity: 60000,
            titles: [
                'FA Cup', 'Premiership', 'Carling Cup'
            ]
        }
    },
    methods: {
        decreaseCapacity() {
            this.stadiumCapacity -= 1
        },
        toggleShowTeam() {
            this.show = !this.show
        }

    }
})

app.mount('#app')