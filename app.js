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
        error: false,
        success: false,
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
            {name: 'Ryu', age: 25},
            {name: 'Yoshi', age: 65},
            {name: 'Ken', age: 35}
        ],
        health: 100,
        ended: false
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
        punch: function(){
            this.health -= 10;
            if(this.health <= 0){
                this.ended = true;
            }
        },
        restart: function () {
            this.health = 100;
            this.ended = false;
        }
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

var one = new Vue({
    el: "#vue-app-one",
    data: {
        title: 'Vue App One'
    },
    methods: {

    },
    computed: {
        greet: function () {
            return 'Hello from app one'
        }
    }
});

var two = new Vue({
    el: "#vue-app-two",
    data: {
        title: 'Vue App Two'
    },
    methods: {
        changeTitle: function() {
            one.title = "Title changed"
        }
    },
    computed: {
        greet: function () {
            return 'Hello from app two'
        }
    }
});

two.title = "Changed from outside";

Vue.component('greeting', {
    template: '<p>Hey there, I am {{name}} <button v-on:click="changeName">Change name</button></p>',
    data: function() {
        return {
            name: 'Yoshi'
        }
    },
    methods: {
        changeName: function() {
            this.name = 'Mario';
        }
    }
});

new Vue ({
    el: "#vue-app-three",
   
});

new Vue ({
    el: "#vue-app-four",
    data: {

    },
    methods:{

    },
    computed:{

    }
});

new Vue ({
    el: "#vue-app-five",
    data: {
        output: "your fav food",
    },
    methods:{
        readRefs: function() {
           console.log(this.$refs.input.value);
           this.output = this.$refs.input.value;
           this.output = this.$refs.test.innerText;
        }
    },
    computed:{

    }
});