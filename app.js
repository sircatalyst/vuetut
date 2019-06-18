new Vue({
    el: "#vue-app",
    data: {
        x: 0,
        y: 0,
        age: 25,
        name: 'Shaun',
        job: 'Ninja',
        website: 'http://123.com',
        websiteTag: '<a href="http://234.com">T Website</a>',
        Name: '',
        Age: '',
        a: 0,
        b: 0,
        available: false,
        nearby: false,
    },
    methods: {
        greet: function(time){
            return 'Good ' + time +  ' ' + this.name;
        },

        add: function (inc) {
            this.age += inc;
        },

        subtract: function (dec) {
            this.age -= dec;
        },
        updateXY: function (e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        click: function () {
            alert('You clicked me');
        },

        logName: function () {
            console.log('you entered your name')
        },
        logAge: function () {
            console.log('you entered your age')
        },
        // addToA: function () {
        //     return this.a + this.age
        // },
        // addToB: function () {
        //     return this.b + this.age
        // 
    },
    computed: {
        addToA: function () {
            return this.a + this.age
        },
        addToB: function () {
            return this.b + this.age
        },
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});
