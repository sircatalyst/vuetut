new Vue({
    el: "#vue-app",
    data: {
        name: 'Shaun',
        job: 'Ninja',
        website: 'http://123.com',
        websiteTag: '<a href="http://234.com">T Website</a>'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time +  ' ' + this.name;
        }
    }
});
