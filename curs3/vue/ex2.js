
var vm = new Vue({
    el: '#app',
    data: {
        fname: "Ion",
        lname: "Popescu",
        address: "Brasov",
        message: "Imi place JavaScript"
    },
    methods: {
        myName: function () {
            return "Eu ma numesc " + this.fname + " " + this.lname + " si sunt din " + this.address;
        }
    }
});
var app = new Vue({
    el: '#app2',
    data: {
        seen: true,
        limbaje: [
            { text: 'JavaScript' },
            { text: 'Java' },
            { text: 'PHP' }
        ],
        htmlcontent : "<div><h3>Vue Js este interesant!</h3></div>"
    },

})